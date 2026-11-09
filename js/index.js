document.querySelectorAll('.social-icon, .social-link, .visit-btn, .btn').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const url = link.dataset.url;
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  });
});