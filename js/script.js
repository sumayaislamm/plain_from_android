document.addEventListener('DOMContentLoaded', () => {

  loadNavbar();
  startClock();

  /**
   * Fetches navbar.html and injects it into #navbar-container.
   * NOTE: fetch() of a local file only works when the page is served
   * over http:// (e.g. VS Code "Live Server", or `python -m http.server`).
   * Opening index.html directly as a file:// URL will block this fetch
   * in most browsers due to CORS restrictions on local files.
   */
  function loadNavbar() {
    const container = document.getElementById('navbar-container');
    if (!container) return;

    fetch('navbar.html')
      .then((res) => {
        if (!res.ok) throw new Error('navbar.html not found');
        return res.text();
      })
      .then((html) => {
        container.innerHTML = html;
        if (typeof initNavbar === 'function') {
          initNavbar();
        }
      })
      .catch((err) => {
        console.error('Could not load navbar:', err);
        container.innerHTML = '<p style="padding:1rem;color:#d9635b;">Navbar failed to load. Serve this project through a local server.</p>';
      });
  }

  function startClock() {
    const clockEl = document.getElementById('liveClock');
    if (!clockEl) return;

    function tick() {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString('en-GB');
    }

    tick();
    setInterval(tick, 1000);
  }

});