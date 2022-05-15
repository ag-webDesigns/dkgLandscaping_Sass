(() => {

  const lightbox = document.createElement('div');
  lightbox.className = 'gallery__lightbox';
  document.body.appendChild(lightbox);

  const images = document.querySelectorAll('.gallery__photo');
  images.forEach(image => {
    image.addEventListener('click', () => {
      lightbox.classList.add('active');
      const lightImg = document.createElement('img');
      lightImg.src = image.src;

      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(lightImg);
    });
  });
  lightbox.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget)
      return;
    lightbox.classList.remove('active');
  });

  const navCheckbox = document.querySelector('#nav-toggle');
  const navLinks = document.querySelectorAll('.navigation__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navCheckbox.checked = false;
    });
  });
})();
