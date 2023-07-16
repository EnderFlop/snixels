from PIL import Image

all_dithers = []
for i in range(20):
  img = Image.open(f"./dithers/{i}.png", "r").convert("RGB") 
  all_dithers.append([x[0] for x in list(img.getdata())])

print(all_dithers)