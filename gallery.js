// Add lightbox functionality to gallery images
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    const imageUrl = item.src;
    const imageDescription = item.nextElementSibling.textContent;
    // Create a lightbox element and display the image
    const lightbox = document.createElement('div');
    lightbox.innerHTML = `
      <img src="${imageUrl}" alt="${imageDescription}">
      <p>${imageDescription}</p>
    `;
    document.body.appendChild(lightbox);
    // Add event listener to close the lightbox
    lightbox.addEventListener('click', () => {
      lightbox.remove();
    });
  });
});
