/*
  Image lists are now generated automatically by generate-images.py.
  Put image files into:
    assets/images/home/  -> randomly selected on homepage refresh
    assets/images/work/   -> displayed in Work page, alphabetical filename order

  Do not manually add image paths here. Run:
    python3 generate-images.py
  Then commit and push images.json along with your new images.
*/
window.SITE_CONFIG = {
  homeImages: [],
  workImages: []
};
