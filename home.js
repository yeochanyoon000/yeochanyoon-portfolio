document.addEventListener("DOMContentLoaded", () => {
  const config = window.SITE_CONFIG || {};
  const images = config.homeImages || [];
  const image = document.getElementById("random-image");
  const error = document.getElementById("image-error");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  if (!images.length) {
    error.hidden = false;
    return;
  }

  const selected = images[Math.floor(Math.random() * images.length)];
  image.src = selected;
  image.alt = "Selected photograph by Yeochan";
  image.addEventListener("error", () => {
    image.hidden = true;
    error.hidden = false;
  });
});
