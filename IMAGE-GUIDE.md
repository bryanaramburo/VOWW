
# Complete Image Guide for Viejo Oeste Western Wear

> **Last Updated:** February 2025
> This guide contains every image filename needed for the website.

---

## Folder Structure
```
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
    brands/
      stetson.png
      justin-boots.png
      tony-lama.png
      ariat.png
      larry-mahan.png
      resistol.png
      cuadra.png
      los-altos.png
      wrangler.png
      kimes-ranch.png
      reyme.png
      tombstone.png
    gallery/
      gallery-0.png
      gallery-1.png
      ... (through gallery-39.png)
    products/
      men-boots/
        product-0.png, product-1.png, etc.
      women-boots/
        product-0.png, product-1.png, etc.
      hats/
        product-0.png, product-1.png, etc.
      tejanas/
        product-0.png, product-1.png, etc.
      belts/
        product-0.png, product-1.png, etc.
      buckles/
        product-0.png, product-1.png, etc.
      caps/
        product-0.png, product-1.png, etc.
      outfits/
        product-0.png, product-1.png, etc.
```

---

## Image Specifications

| Image Type | Dimensions | Format |
|------------|------------|--------|
| Hero Background | 1920 x 1080 px | JPG |
| Logo | 400 x 160 px | PNG (transparent) |
| Social Share (OG) | 1200 x 630 px | JPG |
| About Store | 1200 x 800 px | PNG/JPG |
| Location Photos | 1200 x 800 px | PNG/JPG |
| Category Cards | 800 x 1000 px | PNG/JPG |
| Product Photos | 1000 x 1200 px | PNG/JPG |
| Brand Logos | 600 x 300 px | PNG (transparent) |
| Gallery Photos | 800 x 800 px | PNG/JPG |

---

## Complete Filename Checklist

### Root Images (public/images/)

- [ ] hero-background.jpg (1920 x 1080 px) - Homepage hero
- [ ] logo.png (400 x 160 px) - Header and footer logo
- [ ] og-image.jpg (1200 x 630 px) - Social media preview
- [ ] about-store.png (1200 x 800 px) - About page hero
- [ ] location-new-castle.png (1200 x 800 px) - Delaware store photo
- [ ] location-philadelphia.png (1200 x 800 px) - Philadelphia store photo

### Category Images (public/images/)

- [ ] category-men-boots.png (800 x 1000 px)
- [ ] category-women-boots.png (800 x 1000 px)
- [ ] category-hats.png (800 x 1000 px)
- [ ] category-tejanas.png (800 x 1000 px)
- [ ] category-belts.png (800 x 1000 px)
- [ ] category-buckles.png (800 x 1000 px)
- [ ] category-caps.png (800 x 1000 px)
- [ ] category-outfits.png (800 x 1000 px)

### Brand Logos (public/images/brands/)

- [ ] stetson.png (600 x 300 px)
- [ ] justin-boots.png (600 x 300 px)
- [ ] tony-lama.png (600 x 300 px)
- [ ] ariat.png (600 x 300 px)
- [ ] larry-mahan.png (600 x 300 px)
- [ ] resistol.png (600 x 300 px)
- [ ] cuadra.png (600 x 300 px)
- [ ] los-altos.png (600 x 300 px)
- [ ] wrangler.png (600 x 300 px)
- [ ] kimes-ranch.png (600 x 300 px)
- [ ] reyme.png (600 x 300 px)
- [ ] tombstone.png (600 x 300 px)

### Gallery Images (public/images/gallery/)

40 square images named gallery-0.png through gallery-39.png (800 x 800 px each)

### Product Images (public/images/products/[category]/)

Each category folder can have unlimited products named product-0.png, product-1.png, etc.

---

## How to Add New Products

### Step 1: Upload the image

Upload to: `public/images/products/[category]/product-[number].png`

Example: `public/images/products/men-boots/product-12.png`

### Step 2: Edit ProductsPage.tsx

Find the category in the PRODUCTS object and add a new line:
```
{ id: 12, image: 'images/products/men-boots/product-12.png', alt: "Men's western boot" },
```

### Step 3: Commit changes

The site will automatically rebuild.

---

## Image Optimization

Before uploading:

1. **Resize** to the dimensions listed above
2. **Compress** using TinyPNG.com or Squoosh.app
3. **Target size**: Under 300KB per image
4. **Naming**: All lowercase, use dashes not spaces

---

## Uploading to GitHub

1. Navigate to the correct folder in your repository
2. Click "Add file" then "Upload files"
3. Drag and drop your images
4. Click "Commit changes"
5. Site rebuilds automatically (1-2 minutes)

---

## Troubleshooting

**Image not showing?**
- Check filename spelling (case-sensitive)
- Verify correct folder location
- Clear browser cache (Ctrl+Shift+R)

**Image looks blurry?**
- Check dimensions match specs above
- Avoid upscaling small images

**Image loads slowly?**
- Compress with TinyPNG or Squoosh
- Target under 300KB per image
