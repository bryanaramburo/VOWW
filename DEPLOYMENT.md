# Deployment Checklist

## 1. Choose a Hosting Provider
We recommend **Vercel** or **Netlify** for this React application.
- Connect your GitHub repository.
- Build Command: `npm run build`
- Output Directory: `dist`

## 2. SEO Post-Launch
- Submit your URL to [Google Search Console](https://search.google.com/search-console).
- Verify the `sitemap.xml` is detected.
- Update the `og:image` in `index.html` with your actual website URL for social media sharing.

## 3. Maintenance
- To update products, simply replace the images in the `public/images` folder on GitHub. The site will automatically rebuild with the new content.
