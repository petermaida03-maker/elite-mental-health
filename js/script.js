// ==============================
// Active Page Highlight in Navigation
// ==============================
const navLinks = document.querySelectorAll('nav a');
const currentPage = window.location.pathname.split("/").pop(); // e.g., "about.html"

navLinks.forEach(link => {
  const linkHref = link.getAttribute('href');

  // Highlight active link using a CSS class
  if(linkHref === currentPage || (linkHref === 'index.html' && currentPage === '')) {
    link.classList.add('active');
  }

  // ==============================
  // Smooth Scrolling for In-Page Anchors
  // ==============================
  if(linkHref.startsWith('#') && document.querySelector(linkHref)) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(linkHref).scrollIntoView({ behavior: 'smooth' });
    });
  }
});
