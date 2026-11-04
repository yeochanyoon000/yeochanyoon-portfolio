document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  if (!lightbox || !lightboxImage) {
    console.error("Lightbox elements not found");
    return;
  }

  // Open lightbox when clicking an image
  document.addEventListener("click", (event) => {
    const image = event.target.closest(".work-grid img");

    if (!image) return;

    event.preventDefault();

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    lightbox.classList.add("active");
  });

  // Close when clicking outside the image
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  // Close with Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      lightbox.classList.remove("active");
    }
  });
});