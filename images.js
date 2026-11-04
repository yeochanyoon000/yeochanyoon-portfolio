document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  const prevButton = document.getElementById("lightbox-prev");
  const nextButton = document.getElementById("lightbox-next");

  let images = [];
  let currentIndex = 0;

  if (!lightbox || !lightboxImage) {
    console.error("Lightbox elements not found");
    return;
  }

  // Open lightbox when clicking a gallery image
  document.addEventListener("click", (event) => {
    const image = event.target.closest(".work-grid img");

    if (!image) return;

    images = Array.from(
      document.querySelectorAll(".work-grid img")
    );

    currentIndex = images.indexOf(image);

    if (currentIndex === -1) return;

    event.preventDefault();

    showImage();

    lightbox.classList.add("active");
  });

  // Display current image
  function showImage() {
    if (!images.length) return;

    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;
  }

  // Previous image
  prevButton.addEventListener("click", (event) => {
    event.stopPropagation();

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }

    showImage();
  });

  // Next image
  nextButton.addEventListener("click", (event) => {
    event.stopPropagation();

    currentIndex++;

    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    showImage();
  });

  // Close when clicking background
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  // Keyboard controls
  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("active")) return;

    if (event.key === "Escape") {
      lightbox.classList.remove("active");
    }

    if (event.key === "ArrowRight") {
      currentIndex++;

      if (currentIndex >= images.length) {
        currentIndex = 0;
      }

      showImage();
    }

    if (event.key === "ArrowLeft") {
      currentIndex--;

      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      }

      showImage();
    }
  });
});