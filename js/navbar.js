/* ===== Navbar behaviour =====
   Called once navbar.html has been injected into the page
   (see script.js -> loadNavbar()) */

function initNavbar() {
  const sidenav = document.getElementById('sidenav');
  const overlay = document.getElementById('sidenavOverlay');
  const closeBtn = document.getElementById('sidenavClose');
  const menuBtn = document.getElementById('menuToggle');
  const groups = document.querySelectorAll('.nav-group');
  const links = document.querySelectorAll('.nav-links a');

  if (!sidenav) return;

  // Accordion: open/close each section
  groups.forEach((group) => {
    const toggle = group.querySelector('.nav-group-toggle');
    toggle.addEventListener('click', () => {
      const isOpen = group.classList.contains('open');

      // close the others for a clean, single-focus accordion
      groups.forEach((g) => g.classList.remove('open'));

      if (!isOpen) {
        group.classList.add('open');
      }
    });
  });

  // Highlight the link that was clicked
  links.forEach((link) => {
    link.addEventListener('click', () => {
      links.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
      closeMobileNav();
    });
  });

  // Mobile: open / close sidebar
  function openMobileNav() {
    sidenav.classList.add('open');
    overlay.classList.add('visible');
  }

  function closeMobileNav() {
    sidenav.classList.remove('open');
    overlay.classList.remove('visible');
  }

  if (menuBtn) menuBtn.addEventListener('click', openMobileNav);
  if (closeBtn) closeBtn.addEventListener('click', closeMobileNav);
  if (overlay) overlay.addEventListener('click', closeMobileNav);
}