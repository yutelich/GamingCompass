/**
 * Gaming Compass — tracker.js
 * Handles: checklist interactivity, progress bars, per-game progress
 * Depends on: core.js (GC)
 */

const Tracker = (function () {

  let _gameSlug = null;
  let _localProgress = {}; // cache lokal untuk performa
  let _saveTimeout = null;
  const AUTOSAVE_DELAY = 800; // ms debounce sebelum push ke JSONBin

  // ─── INIT ─────────────────────────────────────────────────────────────────
  function init(gameSlug) {
    _gameSlug = gameSlug;
    _localProgress = GC.getProgress(gameSlug);
    _renderCheckboxes();
    updateAllBars();
  }

  // ─── RENDER ───────────────────────────────────────────────────────────────
  function _renderCheckboxes() {
    const isLocked = GC.isGuest() || !GC.isLoggedIn();

    document.querySelectorAll('.check-item').forEach(item => {
      const cb = item.querySelector('input[type=checkbox]');
      if (!cb) return;
      const id = cb.dataset.id;

      if (isLocked) {
        item.classList.add('locked');
        item.title = 'Masukkan kode untuk aktifkan checklist';
        return;
      }

      // Render state dari progress
      if (_localProgress[id]) item.classList.add('done');

      item.addEventListener('click', _onItemClick);
    });

    // Tampilkan banner jika locked
    if (isLocked) _showLockedBanner();
  }

  function _onItemClick(e) {
    e.preventDefault();
    const item = e.currentTarget;
    if (item.classList.contains('locked')) {
      _showLockedBanner(true);
      return;
    }
    const cb = item.querySelector('input[type=checkbox]');
    if (!cb) return;
    const id = cb.dataset.id;
    const isDone = item.classList.toggle('done');
    _localProgress[id] = isDone;
    _scheduleSave();
    updateAllBars();
  }

  function _showLockedBanner(pulse = false) {
    let banner = document.getElementById('gc-locked-banner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'gc-locked-banner';
      banner.className = 'gc-locked-banner';
      banner.innerHTML = `
        🔒 <strong>Mode Tamu</strong> — Checklist tidak aktif.
        <button onclick="GCModal.showAuth()">Masukkan Kode →</button>
      `;
      document.body.appendChild(banner);
    }
    if (pulse) {
      banner.classList.add('pulse');
      setTimeout(() => banner.classList.remove('pulse'), 600);
    }
  }

  // ─── PROGRESS BARS ────────────────────────────────────────────────────────
  function updateAllBars() {
    // Update semua progress bar yang ada di halaman
    document.querySelectorAll('[data-progress-group]').forEach(bar => {
      const group = bar.dataset.progressGroup;
      const { done, total } = _countGroup(group);
      _setBar(bar, done, total);
    });

    // Update mini counter per chapter
    document.querySelectorAll('[data-progress-range]').forEach(el => {
      const [from, to] = el.dataset.progressRange.split(',');
      const { done, total } = _countRange(from, to);
      el.textContent = `${done}/${total}`;
    });

    // Update overall
    const allItems = document.querySelectorAll('.check-item');
    const allDone = document.querySelectorAll('.check-item.done').length;
    _setBarById('bar-all', 'pct-all', allDone, allItems.length);
  }

  function _countGroup(group) {
    const items = document.querySelectorAll(`.check-item[data-group="${group}"]`);
    let done = 0;
    items.forEach(i => { if (i.classList.contains('done')) done++; });
    return { done, total: items.length };
  }

  function _countRange(fromId, toId) {
    const all = [...document.querySelectorAll('.check-item input[type=checkbox]')];
    const ids = all.map(c => c.dataset.id);
    const start = ids.indexOf(fromId);
    const end = ids.indexOf(toId);
    if (start < 0 || end < 0) return { done: 0, total: 0 };
    let done = 0, total = 0;
    for (let i = start; i <= end; i++) {
      total++;
      if (all[i].closest('.check-item').classList.contains('done')) done++;
    }
    return { done, total };
  }

  function _setBar(barEl, done, total) {
    const p = total ? Math.round(done / total * 100) : 0;
    const fill = barEl.querySelector('.prog-bar');
    const pctEl = barEl.querySelector('.prog-pct');
    const miniEl = barEl.querySelector('.prog-mini');
    if (fill) fill.style.width = p + '%';
    if (pctEl) pctEl.textContent = p + '%';
    if (miniEl) miniEl.textContent = `${done}/${total}`;
  }

  function _setBarById(barId, pctId, done, total) {
    const p = total ? Math.round(done / total * 100) : 0;
    const bar = document.getElementById(barId);
    const pct = document.getElementById(pctId);
    if (bar) bar.style.width = p + '%';
    if (pct) pct.textContent = `${p}% (${done}/${total})`;
  }

  // ─── SAVE (debounced) ─────────────────────────────────────────────────────
  function _scheduleSave() {
    clearTimeout(_saveTimeout);
    _showSaveIndicator('saving');
    _saveTimeout = setTimeout(async () => {
      try {
        await GC.setProgressBulk(_gameSlug, _localProgress);
        _showSaveIndicator('saved');
      } catch {
        _showSaveIndicator('error');
      }
    }, AUTOSAVE_DELAY);
  }

  function _showSaveIndicator(state) {
    let el = document.getElementById('gc-save-indicator');
    if (!el) {
      el = document.createElement('div');
      el.id = 'gc-save-indicator';
      el.className = 'gc-save-indicator';
      document.body.appendChild(el);
    }
    const map = {
      saving: '⏳ Menyimpan...',
      saved: '✓ Tersimpan',
      error: '⚠ Gagal simpan — cek koneksi'
    };
    el.textContent = map[state] || '';
    el.className = `gc-save-indicator ${state}`;
    if (state === 'saved') setTimeout(() => { el.className = 'gc-save-indicator hidden'; }, 2000);
  }

  // ─── PUBLIC ───────────────────────────────────────────────────────────────
  return { init, updateAllBars };

})();
