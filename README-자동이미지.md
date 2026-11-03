# Automatic portfolio image lists

## 1. Add images
Copy image files into:
- `assets/images/home/` — homepage random image
- `assets/images/work/` — Work page grid

Supported extensions: JPG, JPEG, PNG, WebP, GIF, AVIF.

## 2. Generate the list
Open Terminal in your portfolio folder and run:

```bash
python3 generate-images.py
```

This updates `images.json`. The Work page order is alphabetical by filename.

## 3. Preview
Use VS Code Live Server to preview the site. Because the pages fetch `images.json`, preview using a local web server rather than opening the HTML file directly.

## 4. Publish
After generating the list:

```bash
git add .
git commit -m "Add portfolio images"
git push
```

Make sure `index.html` and `work.html` load `home.js` and `work.js` respectively, and do not load the old `site-config.js` as a dependency. `images.json` must be in the same root folder as those HTML files.
