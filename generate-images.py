from pathlib import Path
import json

ROOT = Path(__file__).parent

folders = {
    "home": ROOT / "assets/images/home",
    "work": ROOT / "assets/images/work",
}

extensions = {".jpg", ".jpeg", ".png", ".webp", ".gif"}

image_list = {}

for section, folder in folders.items():
    images = []

    for file in sorted(folder.iterdir()):
        if file.is_file() and file.suffix.lower() in extensions:
            images.append(
                "/" + file.relative_to(ROOT).as_posix()
            )

    image_list[section] = images

output = ROOT / "images.json"

output.write_text(
    json.dumps(image_list, indent=2),
    encoding="utf-8"
)

print("Image list generated:")
print(json.dumps(image_list, indent=2))