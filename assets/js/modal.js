/**
 * Gaming Compass — modal.js
 * Handles: auth modal UI, kode akses flow, donate display
 * Depends on: core.js (GC)
 */

const GCModal = (function () {

  let _onAuthSuccess = null; // callback setelah login berhasil

  // ─── RENDER MODAL ─────────────────────────────────────────────────────────
  function _injectModal() {
    if (document.getElementById('gc-modal-overlay')) return;
    const overlay = document.createElement('div');
    overlay.id = 'gc-modal-overlay';
    overlay.className = 'gc-modal-overlay';
    overlay.innerHTML = `
      <div class="gc-modal" role="dialog" aria-modal="true">
        <div id="gc-modal-content"></div>
      </div>
    `;
    overlay.addEventListener('click', e => {
      if (e.target === overlay) _closeIfAllowed();
    });
    document.body.appendChild(overlay);
  }

  function _open(html, allowClose = true) {
    _injectModal();
    document.getElementById('gc-modal-content').innerHTML = html;
    const overlay = document.getElementById('gc-modal-overlay');
    overlay.dataset.allowClose = allowClose;
    requestAnimationFrame(() => overlay.classList.add('open'));
    document.body.style.overflow = 'hidden';
  }

  function _close() {
    const overlay = document.getElementById('gc-modal-overlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function _closeIfAllowed() {
    const overlay = document.getElementById('gc-modal-overlay');
    if (overlay && overlay.dataset.allowClose !== 'false') _close();
  }

  function _setError(msg) {
    const el = document.getElementById('gc-modal-error');
    if (el) el.textContent = msg;
  }

  function _setLoading(btn, loading) {
    if (!btn) return;
    btn.disabled = loading;
    btn.textContent = loading ? 'Memproses...' : btn.dataset.label;
  }

  // ─── SCREENS ──────────────────────────────────────────────────────────────

  // Screen 1: Pilih mode
  function showAuth(onSuccess) {
    if (onSuccess) _onAuthSuccess = onSuccess;
    _open(`
      <div class="gc-modal-title">Gaming Compass</div>
      <div class="gc-modal-sub">Simpan progress kamu dan akses dari perangkat manapun.</div>
      <div class="gc-modal-actions">
        <button class="btn btn-primary btn-lg" onclick="GCModal.showEnterCode()" style="width:100%">
          🔑 Masukkan Kode Akses
        </button>
        <div class="gc-modal-divider">atau</div>
        <button class="btn btn-outline" onclick="GCModal.showNewCode()" style="width:100%">
          ✨ Minta Kode Baru (Gratis)
        </button>
        <button class="btn btn-ghost" onclick="GCModal.continueAsGuest()" style="width:100%">
          👁 Lanjutkan sebagai Tamu
          <span style="font-size:0.7rem;color:var(--c-text-3);font-weight:400;text-transform:none;letter-spacing:0;margin-left:auto">(tidak bisa centang)</span>
        </button>
      </div>
    `, false); // false = tidak bisa ditutup dengan klik luar
  }

  // Screen 2: Input kode
  function showEnterCode() {
    _open(`
      <button onclick="GCModal.showAuth()" style="background:none;border:none;color:var(--c-text-3);font-size:0.8rem;margin-bottom:1rem;padding:0;display:flex;align-items:center;gap:0.3rem">
        ← Kembali
      </button>
      <div class="gc-modal-title">Masukkan Kode</div>
      <div class="gc-modal-sub">Ketik kode akses kamu untuk memuat progress tersimpan.</div>
      <div class="gc-modal-actions">
        <div class="gc-input-group">
          <label>Kode Akses</label>
          <input
            class="gc-input"
            id="gc-code-input"
            type="text"
            placeholder="GC-XXXX-XXXX"
            maxlength="12"
            autocomplete="off"
            oninput="GCModal.formatCodeInput(this)"
            onkeydown="if(event.key==='Enter') GCModal.submitCode()"
          >
          <span class="gc-input-error" id="gc-modal-error"></span>
        </div>
        <button
          class="btn btn-primary"
          data-label="Masuk"
          id="gc-submit-btn"
          onclick="GCModal.submitCode()"
          style="width:100%"
        >Masuk</button>
      </div>
    `, true);
    setTimeout(() => document.getElementById('gc-code-input')?.focus(), 100);
  }

  // Screen 3: Generate kode baru
  async function showNewCode() {
    _open(`
      <div class="gc-modal-title">Membuat Kode Baru</div>
      <div class="gc-modal-sub">Sedang menyiapkan ruang penyimpanan kamu...</div>
      <div style="text-align:center;padding:1.5rem 0;color:var(--c-text-3)">⏳ Mohon tunggu...</div>
    `, false);

    try {
      const { code } = await GC.createNewCode();
      _showCodeResult(code);
    } catch (err) {
      _open(`
        <div class="gc-modal-title">Gagal Membuat Kode</div>
        <div class="gc-modal-sub" style="color:#e74c3c">${err.message}</div>
        <button class="btn btn-outline" onclick="GCModal.showAuth()" style="margin-top:1rem;width:100%">← Coba Lagi</button>
      `, false);
    }
  }

  // Screen 4: Tampilkan kode + donate
  function _showCodeResult(code) {
    _open(`
      <div class="gc-modal-title">Kode Kamu Siap! ✅</div>
      <div class="gc-modal-sub">Simpan kode ini — kamu butuhkan untuk login di perangkat lain.</div>

      <div class="gc-code-display">
        <div class="gc-code-value" id="gc-new-code">${code}</div>
        <div class="gc-code-note">Ketuk untuk menyalin</div>
      </div>
      <button class="btn btn-ghost" onclick="GCModal.copyCode('${code}')" style="width:100%;margin-bottom:0.5rem" id="gc-copy-btn" data-label="📋 Salin Kode">
        📋 Salin Kode
      </button>

      <div class="gc-donate-section">
        <div class="gc-donate-label">
          Gaming Compass gratis selamanya 🎮<br>
          Jika ingin dukung pengembangan guide baru:
        </div>
        <div id="gc-trakteer-slot"></div>
      </div>

      <button class="btn btn-primary" onclick="GCModal.finishAuth()" style="width:100%;margin-top:1.25rem">
        Mulai Gunakan →
      </button>
    `, false);

    // Tap to copy on code display
    document.getElementById('gc-new-code')?.addEventListener('click', () => GCModal.copyCode(code));

    // Trakteer ditampilkan via finishAuth setelah user klik "Mulai Gunakan"
  }

  // ─── ACTIONS ──────────────────────────────────────────────────────────────
  function formatCodeInput(input) {
    // Auto-format: GC-XXXX-XXXX
    let val = input.value.replace(/[^A-Z0-9]/gi, '').toUpperCase();
    if (val.length > 2) val = val.slice(0, 2) + '-' + val.slice(2);
    if (val.length > 7) val = val.slice(0, 7) + '-' + val.slice(7);
    val = val.slice(0, 12);
    input.value = val;
  }

  async function submitCode() {
    const input = document.getElementById('gc-code-input');
    const btn = document.getElementById('gc-submit-btn');
    if (!input) return;
    const code = input.value.trim().toUpperCase();
    if (code.length < 10) { _setError('Kode harus 10 karakter, contoh: GC-ABCD-1234'); return; }
    _setError('');
    _setLoading(btn, true);
    try {
      await GC.loginWithCode(code);
      finishAuth();
    } catch (err) {
      _setError(err.message);
      _setLoading(btn, false);
    }
  }

  function continueAsGuest() {
    GC.loginAsGuest();
    _close();
    _updateNavCode();
    if (typeof Tracker !== 'undefined') Tracker.init(window.GC_GAME_SLUG || 'unknown');
    if (_onAuthSuccess) _onAuthSuccess('guest');
  }

  function finishAuth() {
    _close();
    _updateNavCode();
    if (typeof Tracker !== 'undefined') Tracker.init(window.GC_GAME_SLUG || 'unknown');
    if (_onAuthSuccess) _onAuthSuccess('code');
    // Set flag — Trakteer akan ditampilkan setelah reload selesai
    sessionStorage.setItem('gc_show_trakteer', '1');
    // Reload untuk re-render checklist state
    window.location.reload();
  }

  function _showTrakteerFixed() {
    // Tampilkan floating Trakteer button (dipanggil setelah halaman load)
    const el = document.getElementById('gc-trakteer-fixed');
    if (el) {
      el.style.display = 'flex';
      // Auto-hide setelah 8 detik dengan fade out
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s';
        el.style.opacity = '0';
        setTimeout(() => {
          el.style.display = 'none';
          el.style.opacity = '1';
          el.style.transition = '';
        }, 600);
      }, 8000);
    }
  }

  // Cek flag setelah halaman load — tampilkan Trakteer jika baru login
  function _checkTrakteerFlag() {
    if (sessionStorage.getItem('gc_show_trakteer')) {
      sessionStorage.removeItem('gc_show_trakteer');
      setTimeout(_showTrakteerFixed, 800); // Delay sedikit agar page selesai render
    }
  }

  async function copyCode(code) {
    try {
      await navigator.clipboard.writeText(code);
      const btn = document.getElementById('gc-copy-btn');
      if (btn) {
        btn.textContent = '✓ Tersalin!';
        setTimeout(() => { btn.textContent = '📋 Salin Kode'; }, 2000);
      }
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
  }

  // ─── NAV CODE INDICATOR ───────────────────────────────────────────────────
  function _updateNavCode() {
    const el = document.getElementById('gc-nav-code');
    if (!el) return;
    if (GC.isLoggedIn()) {
      el.textContent = `🔑 ${GC.getCode()}`;
      el.classList.add('logged-in');
      el.title = 'Klik untuk logout';
      el.onclick = _showLogoutConfirm;
    } else if (GC.isGuest()) {
      el.textContent = '👁 Mode Tamu';
      el.classList.remove('logged-in');
      el.title = 'Klik untuk masukkan kode';
      el.onclick = () => showAuth();
    } else {
      el.textContent = 'Masuk / Kode';
      el.classList.remove('logged-in');
      el.onclick = () => showAuth();
    }
  }

  function _showLogoutConfirm() {
    _open(`
      <div class="gc-modal-title">Ganti Kode?</div>
      <div class="gc-modal-sub">Progress kamu aman di cloud. Kamu bisa masuk lagi kapan saja dengan kode yang sama.</div>
      <div class="gc-modal-actions" style="margin-top:1rem">
        <button class="btn btn-outline" onclick="GCModal.doLogout()" style="width:100%">Ya, keluar dari kode ini</button>
        <button class="btn btn-ghost" onclick="document.getElementById('gc-modal-overlay').classList.remove('open');document.body.style.overflow=''" style="width:100%">Batal</button>
      </div>
    `, true);
  }

  function doLogout() {
    GC.logout();
    _close();
    window.location.reload();
  }

  // ─── INIT ─────────────────────────────────────────────────────────────────
  async function init(gameSlug) {
    _injectModal();
    const result = await GC.init();
    _updateNavCode();

    if (result.mode === 'none') {
      // Belum ada sesi — tampilkan modal auth
      showAuth();
    }
    // mode 'code' atau 'guest' → langsung lanjut, tidak perlu modal
    return result;
  }

  // Auto-run: cek flag Trakteer setelah page load (hasil redirect dari login)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _checkTrakteerFlag);
  } else {
    _checkTrakteerFlag();
  }

  return {
    init,
    showAuth,
    showEnterCode,
    showNewCode,
    continueAsGuest,
    submitCode,
    formatCodeInput,
    copyCode,
    finishAuth,
    doLogout,
  };

})();
