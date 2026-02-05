
# Complete Image Guide for Viejo Oeste Western Wear

## 📁 Folder Structure 

public/
  images/
    hero-background.jpg
    logo.png
    og-image.jpg
    about-store.png
    location-new-castle.png
    location-philadelphia.png
    category-men-boots.png
    category-women-boots.png
    category-hats.png
    category-tejanas.png
    category-belts.png
    category-buckles.png
    category-caps.png
    category-outfits.png
    products/
      men-boots/
        product-0.png
        product-1.png
        ...
      women-boots/
        ...
      hats/
        ...
    brands/
      stetson.png
      justin-boots.png
      ...
    gallery/
      gallery-0.png ... gallery-39.png  

## 📐 Image Specifications

| Image Type | Dimensions | Format |
|------------|------------|--------|
| Hero Background | 1920 x 1080 px | JPG |
| Logo | 400 x 160 px | PNG (transparent) |
| Social Share | 1200 x 630 px | JPG |
| About/Location | 1200 x 800 px | PNG/JPG |
| Category Cards | 800 x 1000 px | PNG/JPG |
| Product Photos | 1000 x 1200 px | PNG/JPG |
| Brand Logos | 600 x 300 px | PNG (transparent) |
| Gallery Photos | 800 x 800 px | PNG/JPG |

## 🔧 Adding New Products

1.  **Prepare Image**: Resize to 1000x1200px and compress.
2.  **Upload**: Place the image in `public/images/products/[category-id]/product-[X].png`.
3.  **Update Data**: Open `products.tsx` and add an entry for your new image in the appropriate category array.
4.  **Commit**: The site will update automatically.
