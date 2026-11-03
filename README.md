# Yeochan — GitHub Pages photography portfolio

A minimal, responsive portfolio with:
- A homepage that selects a random image on every refresh.
- A WORK page with a simple image grid.
- Clicking a work image opens the original image file in a new tab.
- An INFO page for a short bio and contact details.
- No frameworks, build tools, or paid hosting required.

## 1. Add your photographs

Upload optimized JPG, PNG, or WebP files to:

- `assets/images/home/` — images that can appear randomly on the homepage.
- `assets/images/work/` — images shown in the WORK grid.

For example:

```text
assets/
  images/
    home/
      portrait-01.jpg
      portrait-02.jpg
    work/
      work-01.jpg
      work-02.jpg
      work-03.jpg
```

## 2. Register the image paths

Open `site-config.js` and add the paths. Keep the quotation marks and commas:

```js
window.SITE_CONFIG = {
  homeImages: [
    "assets/images/home/portrait-01.jpg",
    "assets/images/home/portrait-02.jpg"
  ],

  workImages: [
    "assets/images/work/work-01.jpg",
    "assets/images/work/work-02.jpg",
    "assets/images/work/work-03.jpg"
  ]
};
```

The homepage chooses one entry randomly every time it is refreshed. The WORK page displays all `workImages` in the order listed.

## 3. Personalize the INFO page

Edit `info.html`:
- Replace the sample email address.
- Replace the Instagram URL.
- Edit the short bio and location if needed.

You can also change `YEOCHAN` in the HTML files if you want a different wordmark.

## 4. Publish with GitHub Pages

1. Create a **public** GitHub repository (for example, `yeochan-portfolio`).
2. Upload all the files and folders in this project to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Your site will be published at `https://YOUR-USERNAME.github.io/yeochan-portfolio/`.

## Notes

- GitHub Pages may take a few minutes to publish after a commit.
- Use relative image paths exactly as shown above.
- For faster loading, export web-sized images rather than uploading camera originals. A longest edge around 1800–2400px is a good starting point.
- This is a static website; adding or removing images means uploading/removing the file and updating `site-config.js`.
