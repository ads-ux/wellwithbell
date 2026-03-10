import os
import time
from duckduckgo_search import DDGS
import requests

queries = {
    "guide-protein": "protein powder scoop vanilla aesthetic bright light",
    "guide-collagen": "beautiful older woman holding glass of water close up skin hydration",
    "guide-bellyfat": "woman over 40 measuring waist smiling fitness aesthetic",
    "guide-hormone-supps": "aesthetic supplement capsules on palm of hand bright natural light"
}

out_dir = "/Users/markhurson/Downloads/wellwithbell/public"
os.makedirs(out_dir, exist_ok=True)
ddgs = DDGS()

for name, query in queries.items():
    print(f"Searching for {name}...")
    try:
        results = ddgs.images(
            query,
            region="wt-wt",
            safesearch="off",
            type_image="photo",
            max_results=5
        )
        for res in results:
            img_url = res['image']
            print(f"Downloading {img_url}")
            try:
                r = requests.get(img_url, timeout=5, headers={"User-Agent": "Mozilla/5.0"})
                if r.status_code == 200:
                    ext = img_url.split('?')[0].split('.')[-1].lower()
                    if ext not in ['jpg', 'png', 'jpeg', 'webp']:
                        ext = 'jpg'
                    filepath = os.path.join(out_dir, f"{name}.{ext}")
                    with open(filepath, 'wb') as f:
                        f.write(r.content)
                    print(f"Saved {name}.{ext}")
                    break
            except Exception as e:
                print(f"Failed to download {img_url}: {e}")
    except Exception as e:
        print(f"Search failed for {name}: {e}")
    time.sleep(1)
