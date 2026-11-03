document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("work-grid");
  const error = document.getElementById("work-error");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  try {
    const response = await fetch("images.json");
    if (!response.ok) throw new Error("Could not load images.json");
    const imageList = await response.json();
    const images = imageList.work || [];

    if (!images.length) {
      if (error) error.hidden = false;
      return;
    }

    images.forEach((src, index) => {
      const link = document.createElement("a");
      link.className = "work-item";
      link.href = src;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.setAttribute("aria-label", `Open photograph ${index + 1} at full size`);

      const img = document.createElement("img");
      img.src = src;
      img.alt = `Photograph ${index + 1} by Yeochan`;
      img.loading = "lazy";
      img.decoding = "async";

      link.appendChild(img);
      grid.appendChild(link);

      img.addEventListener("error", () => {
        link.remove();
        if (!grid.children.length && error) error.hidden = false;
      });
    });
  } catch (err) {
    console.error(err);
    if (error) error.hidden = false;
  }
});
