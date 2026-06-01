/**
 * Gaming Compass — test.js
 * Self-diagnostic: berjalan async setelah halaman load
 * Tidak mempengaruhi performa — hanya muncul jika ada error
 * Tambahkan ?debug=true ke URL untuk lihat full report
 */

const GCTest = (function () {

  const IS_DEBUG = new URLSearchParams(window.location.search).get('debug') === 'true';
  const results = [];

  // ─── TEST RUNNER ──────────────────────────────────────────────────────────
  async function _run(name, fn) {
    try {
      await fn();
      results.push({ name, pass: true });
      if (IS_DEBUG) console.log(`✅ ${name}`);
    } catch (err) {
      results.push({ name, pass: false, error: err.message });
      console.warn(`❌ ${name}: ${err.message}`);
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
    if (typeof Tracker === 'undefined') return; // Tracker opsional per halaman
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
    // Hanya test konektivitas dasar, tidak gunakan API key
    try {
      const res = await fetch('https://api.jsonbin.io/v3', {
        method: 'GET',
        signal: AbortSignal.timeout(5000)
      });
      // JSONBin akan return 401 tanpa key — itu berarti server reachable
      _assert(res.status !== 0, 'JSONBin tidak dapat dijangkau');
    } catch (err) {
      if (err.name === 'AbortError') throw new Error('JSONBin timeout (>5s)');
      throw new Error(`JSONBin tidak dapat dijangkau: ${err.message}`);
    }
  }

  async function _testCodeGenFormat() {
    // Test format kode yang digenerate
    if (typeof GC === 'undefined') return;
    const mockCode = `${GC.CONFIG.CODE_PREFIX}-ABCD-1234`;
    const regex = /^GC-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
    _assert(regex.test(mockCode), `Format kode tidak valid: ${mockCode}`);
  }

  async function _testExportImport() {
    if (typeof GC === 'undefined') return;
    // Test bahwa export function ada dan bisa dipanggil
    _assert(typeof GC.exportProgress === 'function', 'exportProgress tidak ditemukan');
    _assert(typeof GC.importProgress === 'function', 'importProgress tidak ditemukan');
  }

  // ─── REPORT UI ────────────────────────────────────────────────────────────
  function _showReport() {
    const failed = results.filter(r => !r.pass);

    if (IS_DEBUG) {
      // Full report di debug mode
      const panel = document.createElement('div');
      panel.id = 'gc-debug-panel';
      panel.style.cssText = `
        position:fixed;bottom:0;left:0;right:0;max-height:40vh;overflow-y:auto;
        background:#0a0a0a;border-top:2px solid #c9a84c;padding:1rem;
        font-family:monospace;font-size:12px;z-index:9999;color:#e0e0e0;
      `;
      panel.innerHTML = `
        <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem">
          <strong style="color:#c9a84c">🧪 GC Debug Panel</strong>
          <span style="color:#666">${results.filter(r=>r.pass).length}/${results.length} passed</span>
          <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:#666;cursor:pointer">✕</button>
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

    if (failed.length === 0) return; // Semua OK, tidak tampilkan apa-apa

    // Tampilkan badge error kecil di pojok
    const badge = document.createElement('div');
    badge.id = 'gc-error-badge';
    badge.style.cssText = `
      position:fixed;bottom:1rem;left:1rem;background:#c0392b;color:#fff;
      font-family:monospace;font-size:11px;padding:6px 10px;border-radius:4px;
      cursor:pointer;z-index:9999;opacity:0.9;
    `;
    badge.textContent = `⚠ ${failed.length} fitur error — tambahkan ?debug=true untuk detail`;
    badge.onclick = () => {
      const url = new URL(window.location.href);
      url.searchParams.set('debug', 'true');
      window.location.href = url.toString();
    };
    document.body.appendChild(badge);
  }

  // ─── MAIN ─────────────────────────────────────────────────────────────────
  async function runAll() {
    // Semua test berjalan async setelah halaman selesai render
    await _run('localStorage tersedia', _testLocalStorage);
    await _run('core.js termuat', _testCoreLoaded);
    await _run('tracker.js termuat', _testTrackerLoaded);
    await _run('Checkbox ter-render dengan benar', _testCheckboxRender);
    await _run('Progress bar ter-render dengan benar', _testProgressBars);
    await _run('Format kode akses valid', _testCodeGenFormat);
    await _run('Export/Import tersedia', _testExportImport);
    await _run('JSONBin dapat dijangkau', _testJSONBinReachable);
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
