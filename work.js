document.addEventListener("DOMContentLoaded", () => {
  const config = window.SITE_CONFIG || {};
  const images = config.workImages || [];
  const grid = document.getElementById("work-grid");
  const error = document.getElementById("work-error");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  if (!images.length) {
    error.hidden = false;
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
      if (!grid.children.length) error.hidden = false;
    });
  });
});
