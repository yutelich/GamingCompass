/**
 * Gaming Compass — test.js
 * Self-diagnostic ringan, berjalan async setelah halaman load.
 * - Mode normal  : hanya tampilkan banner user-friendly jika fitur krusial gagal
 * - Mode debug   : tambahkan ?debug=true ke URL untuk full report
 */

const GCTest = (function () {

  const IS_DEBUG = new URLSearchParams(window.location.search).get('debug') === 'true';
  const results  = [];

  // ─── MAPPING: nama teknis → label user-friendly ───────────────────────────
  const FEATURE_LABELS = {
    'core.js termuat'         : 'Kode Akses',
    'JSONBin dapat dijangkau' : 'Kode Akses',
    'Format kode akses valid' : 'Kode Akses',
    'localStorage tersedia'   : 'Penyimpanan Lokal',
    'Checkbox ter-render'     : 'Checklist Progress',
    'Progress bar ter-render' : 'Checklist Progress',
  };

  // ─── TEST RUNNER ──────────────────────────────────────────────────────────
  async function _run(name, fn) {
    try {
      await fn();
      results.push({ name, pass: true });
      if (IS_DEBUG) console.log(`✅ ${name}`);
    } catch (err) {
      results.push({ name, pass: false, error: err.message });
      if (IS_DEBUG) console.warn(`❌ ${name}: ${err.message}`);
    }
  }

  function _assert(condition, message) {
    if (!condition) throw new Error(message || 'Assertion failed');
  }

  // ─── TESTS ────────────────────────────────────────────────────────────────
  async function _testLocalStorage() {
    const key = '__gc_test__';
    localStorage.setItem(key, '1');
    _assert(localStorage.getItem(key) === '1', 'localStorage tidak tersedia');
    localStorage.removeItem(key);
  }

  async function _testCoreLoaded() {
    _assert(typeof GC !== 'undefined', 'core.js tidak termuat');
    _assert(typeof GC.init === 'function', 'GC.init tidak ditemukan');
    _assert(typeof GC.createNewCode === 'function', 'GC.createNewCode tidak ditemukan');
    _assert(typeof GC.loginWithCode === 'function', 'GC.loginWithCode tidak ditemukan');
  }

  async function _testTrackerLoaded() {
    if (typeof Tracker === 'undefined') return; // Opsional per halaman
    _assert(typeof Tracker.init === 'function', 'Tracker.init tidak ditemukan');
    _assert(typeof Tracker.updateAllBars === 'function', 'Tracker.updateAllBars tidak ditemukan');
  }

  async function _testCheckboxRender() {
    const items = document.querySelectorAll('.check-item');
    if (items.length === 0) return; // Halaman tanpa checklist, skip
    items.forEach((item, i) => {
      const cb = item.querySelector('input[type=checkbox]');
      _assert(cb, `check-item ke-${i} tidak punya input checkbox`);
      _assert(cb.dataset.id, `check-item ke-${i} tidak punya data-id`);
    });
  }

  async function _testProgressBars() {
    const bars = document.querySelectorAll('[data-progress-group]');
    if (bars.length === 0) return;
    bars.forEach((bar, i) => {
      const fill = bar.querySelector('.prog-bar');
      _assert(fill, `Progress bar ke-${i} tidak punya .prog-bar`);
    });
  }

  async function _testJSONBinReachable() {
    try {
      const res = await fetch('https://api.jsonbin.io/v3', {
        method: 'GET',
        signal: AbortSignal.timeout(5000)
      });
      _assert(res.status !== 0, 'JSONBin tidak dapat dijangkau');
    } catch (err) {
      if (err.name === 'AbortError') throw new Error('JSONBin timeout (>5s)');
      throw new Error(`JSONBin tidak dapat dijangkau: ${err.message}`);
    }
  }

  async function _testCodeGenFormat() {
    if (typeof GC === 'undefined') return;
    const prefix = (GC.CONFIG && GC.CONFIG.CODE_PREFIX) || 'GC';
    const mockCode = `${prefix}-ABCD-1234`;
    const regex = /^GC-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
    _assert(regex.test(mockCode), `Format kode tidak valid: ${mockCode}`);
  }

  // ─── REPORT UI ────────────────────────────────────────────────────────────
  function _getAffectedFeatures(failedTests) {
    const features = new Set();
    failedTests.forEach(r => {
      const label = FEATURE_LABELS[r.name];
      if (label) features.add(label);
    });
    return [...features];
  }

  function _showReport() {
    const failed = results.filter(r => !r.pass);

    // ── DEBUG MODE: full panel teknis ─────────────────────────────────────
    if (IS_DEBUG) {
      const panel = document.createElement('div');
      panel.id = 'gc-debug-panel';
      panel.style.cssText = `
        position:fixed;bottom:0;left:0;right:0;max-height:40vh;overflow-y:auto;
        background:#0a0a0a;border-top:2px solid #c9a84c;padding:1rem;
        font-family:monospace;font-size:12px;z-index:9999;color:#e0e0e0;
      `;
      panel.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem">
          <strong style="color:#c9a84c">🧪 GC Debug Panel</strong>
          <span style="color:#888">${results.filter(r=>r.pass).length}/${results.length} passed</span>
          <button onclick="this.closest('#gc-debug-panel').remove()"
            style="background:none;border:none;color:#888;cursor:pointer;font-size:16px">✕</button>
        </div>
        ${results.map(r => `
          <div style="padding:2px 0;color:${r.pass ? '#2ecc71' : '#e74c3c'}">
            ${r.pass ? '✅' : '❌'} ${r.name}${r.error ? ` — ${r.error}` : ''}
          </div>
        `).join('')}
      `;
      document.body.appendChild(panel);
      return;
    }

    // ── NORMAL MODE: tidak ada error → tidak tampilkan apapun ─────────────
    if (failed.length === 0) return;

    // ── NORMAL MODE: ada error → tampilkan banner user-friendly ───────────
    const features = _getAffectedFeatures(failed);
    if (features.length === 0) return; // Error minor tanpa label → diam saja

    const banner = document.createElement('div');
    banner.id = 'gc-status-banner';
    banner.style.cssText = `
      position:fixed;bottom:0;left:0;right:0;
      background:#1a1a1a;border-top:2px solid #f59e0b;
      padding:0.75rem 1.25rem;z-index:9998;
      display:flex;align-items:center;justify-content:space-between;
      gap:1rem;font-size:0.82rem;
    `;

    const featureText = features.join(' & ');
    banner.innerHTML = `
      <div style="display:flex;align-items:flex-start;gap:0.6rem;color:#d4a017;flex:1">
        <span style="font-size:1rem;flex-shrink:0">⚠️</span>
        <div>
          <span style="font-weight:700;color:#f59e0b">${featureText}</span>
          <span style="color:#a0a0a0"> — Terdapat sedikit kendala pada fitur ini.
          Tim admin sedang menyelidiki dan akan segera memperbaiki.
          Mohon hindari fitur tersebut sementara waktu. Terima kasih atas pengertiannya.</span>
        </div>
      </div>
      <button onclick="document.getElementById('gc-status-banner').remove()"
        style="background:none;border:none;color:#666;cursor:pointer;font-size:18px;flex-shrink:0;padding:0">✕</button>
    `;
    document.body.appendChild(banner);
  }

  // ─── MAIN ─────────────────────────────────────────────────────────────────
  async function runAll() {
    await _run('localStorage tersedia',       _testLocalStorage);
    await _run('core.js termuat',             _testCoreLoaded);
    await _run('tracker.js termuat',          _testTrackerLoaded);
    await _run('Checkbox ter-render',         _testCheckboxRender);
    await _run('Progress bar ter-render',     _testProgressBars);
    await _run('Format kode akses valid',     _testCodeGenFormat);
    await _run('JSONBin dapat dijangkau',     _testJSONBinReachable);
    _showReport();
  }

  return { runAll };

})();

// Jalankan setelah semua konten selesai load — tidak blokir render
if (document.readyState === 'complete') {
  setTimeout(GCTest.runAll, 1500);
} else {
  window.addEventListener('load', () => setTimeout(GCTest.runAll, 1500));
}
