console.log("Jardín Github");

const galleryItems = document.querySelectorAll('.gallery-menu span');
const featuredImage = document.getElementById('featured-image');

if (galleryItems && featuredImage) {
  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const imagePath = item.getAttribute('data-img');
      featuredImage.style.opacity = 0;
      setTimeout(() => {
        featuredImage.src = imagePath;
        featuredImage.style.opacity = 1;
      }, 200);

      galleryItems.forEach(element => element.classList.remove('selected'));
      item.classList.add('selected');
    });
  });
} else {
  console.error("No se encontró la imagen principal o los elementos del menú en el DOM.");
}