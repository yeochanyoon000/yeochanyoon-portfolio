from pathlib import Path
import json

ROOT = Path(__file__).resolve().parent
FOLDERS = {
    "home": ROOT / "assets" / "images" / "home",
    "work": ROOT / "assets" / "images" / "work",
}
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"}

image_list = {}

for section, folder in FOLDERS.items():
    folder.mkdir(parents=True, exist_ok=True)
    images = sorted(
        (
            path.relative_to(ROOT).as_posix()
            for path in folder.iterdir()
            if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS
        ),
        key=str.lower,
    )
    image_list[section] = images

output = ROOT / "images.json"
output.write_text(json.dumps(image_list, indent=2, ensure_ascii=False), encoding="utf-8")
print(f"Updated {output.name}")
print(f"Homepage images: {len(image_list['home'])}")
print(f"Work images: {len(image_list['work'])}")
