/**
 * Gaming Compass — core.js
 * Handles: auth, JSONBin API, kode akses, session management
 * Structure designed for easy migration to Supabase/PostgreSQL
 *
 * DATA SCHEMA (JSONBin):
 * {
 *   meta: { version, code, created_at, last_updated },
 *   progress: { [gameSlug]: { [itemId]: boolean } }
 * }
 */

const GC = (function () {

  // ─── CONFIG ───────────────────────────────────────────────────────────────
  const CONFIG = {
    JSONBIN_API_KEY: '$2a$10$VFA8BfmxCnPmR4nZk/qxd..3oQptVimsCT5/ZEF265dcwY8LIfJZK', // Ganti dengan Master Key JSONBin kamu
    JSONBIN_BASE: 'https://api.jsonbin.io/v3',
    // INDEX_BIN_ID: bin khusus yang menyimpan mapping { code -> binId }
    // Buat sekali manual di jsonbin.io dengan isi {} lalu taruh ID-nya di sini
    INDEX_BIN_ID: '6a1d070121f9ee59d2a368ad',
    DATA_VERSION: '1.0',
    CODE_PREFIX: 'GC',
    LOCAL_KEY: 'gc_session',   // key localStorage untuk simpan sesi
    GUEST_KEY: 'gc_guest',     // key localStorage untuk mode tamu
  };

  // ─── STATE ────────────────────────────────────────────────────────────────
  let _state = {
    isGuest: false,
    code: null,
    binId: null,
    data: null,   // full data dari JSONBin
  };

  // ─── UTILS ────────────────────────────────────────────────────────────────
  function _generateCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // hindari 0/O, 1/I
    const seg = () => Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    return `${CONFIG.CODE_PREFIX}-${seg()}-${seg()}`;
  }

  function _now() {
    return new Date().toISOString();
  }

  function _defaultData(code) {
    return {
      meta: {
        version: CONFIG.DATA_VERSION,
        code: code,
        created_at: _now(),
        last_updated: _now(),
      },
      progress: {}
    };
  }

  // ─── JSONBIN API ──────────────────────────────────────────────────────────
  async function _createBin(data) {
    const res = await fetch(`${CONFIG.JSONBIN_BASE}/b`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': CONFIG.JSONBIN_API_KEY,
        'X-Bin-Name': data.meta.code,
        'X-Bin-Private': 'true',
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`JSONBin create failed: ${res.status}`);
    const json = await res.json();
    const binId = json.metadata.id;
    // Simpan mapping code -> binId ke index bin
    try {
      const index = await _readIndex();
      index[data.meta.code] = binId;
      await _writeIndex(index);
    } catch (e) {
      console.warn('Index update failed:', e.message);
    }
    return binId;
  }

  async function _readBin(binId) {
    const res = await fetch(`${CONFIG.JSONBIN_BASE}/b/${binId}/latest`, {
      headers: { 'X-Master-Key': CONFIG.JSONBIN_API_KEY }
    });
    if (!res.ok) throw new Error(`JSONBin read failed: ${res.status}`);
    const json = await res.json();
    return json.record;
  }

  async function _updateBin(binId, data) {
    data.meta.last_updated = _now();
    const res = await fetch(`${CONFIG.JSONBIN_BASE}/b/${binId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': CONFIG.JSONBIN_API_KEY,
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`JSONBin update failed: ${res.status}`);
    return true;
  }

  // ─── INDEX BIN ───────────────────────────────────────────────────────────
  // Bin indeks menyimpan mapping { "GC-XXXX-XXXX": "binId" }
  // Ini solusi karena JSONBin tidak support search by name di free tier

  async function _readIndex() {
    if (!CONFIG.INDEX_BIN_ID || CONFIG.INDEX_BIN_ID === 'YOUR_INDEX_BIN_ID_HERE') {
      throw new Error('Index bin belum dikonfigurasi. Hubungi admin.');
    }
    const res = await fetch(`${CONFIG.JSONBIN_BASE}/b/${CONFIG.INDEX_BIN_ID}/latest`, {
      headers: { 'X-Master-Key': CONFIG.JSONBIN_API_KEY }
    });
    if (!res.ok) throw new Error(`Gagal baca index: ${res.status}`);
    const json = await res.json();
    return json.record || {};
  }

  async function _writeIndex(indexData) {
    const res = await fetch(`${CONFIG.JSONBIN_BASE}/b/${CONFIG.INDEX_BIN_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': CONFIG.JSONBIN_API_KEY,
      },
      body: JSON.stringify(indexData)
    });
    if (!res.ok) throw new Error(`Gagal update index: ${res.status}`);
    return true;
  }

  // Cari binId berdasarkan code — lookup di index bin
  async function _findBinByCode(code) {
    const index = await _readIndex();
    const binId = index[code];
    if (!binId) throw new Error('Kode tidak ditemukan. Periksa kembali kode kamu.');
    return binId;
  }

  // ─── SESSION ──────────────────────────────────────────────────────────────
  function _saveSession(code, binId) {
    localStorage.setItem(CONFIG.LOCAL_KEY, JSON.stringify({ code, binId }));
  }

  function _loadSession() {
    try {
      const raw = localStorage.getItem(CONFIG.LOCAL_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }

  function _clearSession() {
    localStorage.removeItem(CONFIG.LOCAL_KEY);
    localStorage.removeItem(CONFIG.GUEST_KEY);
    _state = { isGuest: false, code: null, binId: null, data: null };
  }

  // ─── DATA MIGRATION ───────────────────────────────────────────────────────
  // Jika versi data berubah di masa depan, tambahkan migrator di sini
  function _migrateData(data) {
    if (!data.meta) {
      // Legacy format (localStorage lama dari versi sebelum cloud sync)
      return {
        meta: {
          version: CONFIG.DATA_VERSION,
          code: 'MIGRATED',
          created_at: _now(),
          last_updated: _now(),
        },
        progress: { dwo: data } // asumsikan data lama adalah progress DWO
      };
    }
    // Tambahkan migrator versi lain di sini jika diperlukan
    return data;
  }

  // ─── PUBLIC API ───────────────────────────────────────────────────────────

  /**
   * Init: cek apakah ada sesi tersimpan
   * Return: { mode: 'code'|'guest'|'none', code }
   */
  async function init() {
    const session = _loadSession();
    if (session) {
      try {
        const data = await _readBin(session.binId);
        const migrated = _migrateData(data);
        _state = { isGuest: false, code: session.code, binId: session.binId, data: migrated };
        return { mode: 'code', code: session.code };
      } catch {
        // Sesi tidak valid, clear
        _clearSession();
      }
    }
    const isGuest = localStorage.getItem(CONFIG.GUEST_KEY) === 'true';
    if (isGuest) {
      _state.isGuest = true;
      return { mode: 'guest' };
    }
    return { mode: 'none' };
  }

  /**
   * Buat kode baru → buat bin baru di JSONBin
   * Return: { code, binId }
   */
  async function createNewCode() {
    const code = _generateCode();
    const data = _defaultData(code);
    const binId = await _createBin(data);
    _state = { isGuest: false, code, binId, data };
    _saveSession(code, binId);
    return { code, binId };
  }

  /**
   * Login dengan kode yang sudah ada
   * Return: { success, data } atau throw error
   */
  async function loginWithCode(code) {
    const cleanCode = code.trim().toUpperCase();
    const binId = await _findBinByCode(cleanCode);
    if (!binId) throw new Error('Kode tidak ditemukan. Periksa kembali kode kamu.');
    const data = await _readBin(binId);
    const migrated = _migrateData(data);
    _state = { isGuest: false, code: cleanCode, binId, data: migrated };
    _saveSession(cleanCode, binId);
    return { success: true, data: migrated };
  }

  /**
   * Mode tamu — tidak bisa centang, tidak ada sync
   */
  function loginAsGuest() {
    _state.isGuest = true;
    localStorage.setItem(CONFIG.GUEST_KEY, 'true');
  }

  /**
   * Logout / ganti kode
   */
  function logout() {
    _clearSession();
  }

  /**
   * Ambil progress untuk game tertentu
   * gameSlug: string, misal 'dwo'
   */
  function getProgress(gameSlug) {
    if (_state.isGuest || !_state.data) return {};
    return _state.data.progress[gameSlug] || {};
  }

  /**
   * Simpan satu item progress
   * gameSlug: string, itemId: string, value: boolean
   */
  async function setProgress(gameSlug, itemId, value) {
    if (_state.isGuest || !_state.data || !_state.binId) return false;
    if (!_state.data.progress[gameSlug]) _state.data.progress[gameSlug] = {};
    _state.data.progress[gameSlug][itemId] = value;
    await _updateBin(_state.binId, _state.data);
    return true;
  }

  /**
   * Simpan seluruh progress satu game sekaligus (bulk update)
   */
  async function setProgressBulk(gameSlug, progressObj) {
    if (_state.isGuest || !_state.data || !_state.binId) return false;
    _state.data.progress[gameSlug] = progressObj;
    await _updateBin(_state.binId, _state.data);
    return true;
  }

  /**
   * Export progress sebagai JSON (untuk backup manual)
   */
  function exportProgress() {
    const blob = new Blob([JSON.stringify(_state.data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `gaming-compass-backup-${_state.code || 'guest'}.json`;
    a.click();
  }

  /**
   * Import progress dari file JSON (restore backup)
   * Setelah import, otomatis push ke JSONBin
   */
  async function importProgress(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const data = JSON.parse(e.target.result);
          const migrated = _migrateData(data);
          _state.data = migrated;
          if (_state.binId) await _updateBin(_state.binId, migrated);
          resolve(migrated);
        } catch (err) { reject(err); }
      };
      reader.readAsText(file);
    });
  }

  // Getter state
  function getState() { return { ..._state }; }
  function isLoggedIn() { return !_state.isGuest && !!_state.code; }
  function isGuest() { return _state.isGuest; }
  function getCode() { return _state.code; }

  return {
    init,
    createNewCode,
    loginWithCode,
    loginAsGuest,
    logout,
    getProgress,
    setProgress,
    setProgressBulk,
    exportProgress,
    importProgress,
    getState,
    isLoggedIn,
    isGuest,
    getCode,
    CONFIG,
  };

})();
