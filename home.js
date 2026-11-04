document.addEventListener("DOMContentLoaded", async () => {
  const image = document.getElementById("random-image");
  const error = document.getElementById("image-error");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  try {
    const response = await fetch("images.json");
    if (!response.ok) throw new Error("Could not load images.json");
    const imageList = await response.json();
    const images = imageList.home || [];

    if (!images.length) {
      if (error) error.hidden = false;
      return;
    }

    const selected = images[Math.floor(Math.random() * images.length)];
    image.src = selected.startsWith("/")
      ? "." + selected
      : selected;
    image.alt = "Selected photograph by Yeochan";

    image.addEventListener("error", () => {
      image.hidden = true;
      if (error) error.hidden = false;
    });
  } catch (err) {
    console.error(err);
    if (error) error.hidden = false;
  }
});
