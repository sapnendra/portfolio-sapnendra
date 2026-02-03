# 🚀 Quick Reference Card - SEO Portfolio

## ⚡ Quick Commands

```bash
# Development
npm run dev

# Production Build
npm run build

# Preview Build
npm run preview

# Deploy (Vercel)
vercel --prod

# Deploy (Netlify)
netlify deploy --prod --dir=dist
```

## 📝 Post-Deployment TODO

1. **Create OG Image** → Save to `public/og-image.jpg` (1200x630px)
2. **Update Domain** → Replace `https://sapnendra.tech/` in:
   - `index.html`
   - `public/sitemap.xml`
   - `src/components/SEO.jsx`
3. **Google Search Console** → Add site + Submit sitemap
4. **Social Profiles** → Add portfolio link to all profiles
5. **Test Performance** → https://pagespeed.web.dev/

## 🎯 SEO Files Location

- Meta Tags: `index.html`
- Sitemap: `public/sitemap.xml`
- Robots: `public/robots.txt`
- Manifest: `public/manifest.json`
- SEO Component: `src/components/SEO.jsx`

## 🔍 Key URLs to Test

- Home: `/`
- Projects: `/projects`
- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`
- Manifest: `/manifest.json`

## ✅ Verification Checklist

- [ ] Build completes without errors
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Fast load time
- [ ] SEO meta tags present
- [ ] Structured data valid

## 📊 Success Metrics

**Week 1-2**: Indexed by Google
**Week 2-4**: Ranking for "Sapnendra Jaiswal"
**Week 4-8**: #1 position for your name

## 🆘 Quick Troubleshooting

**Build fails?**
```bash
rm -rf node_modules dist
npm install --legacy-peer-deps
npm run build
```

**Not indexed?**
- Submit sitemap in Google Search Console
- Request indexing manually
- Check robots.txt allows crawling

**Slow performance?**
- Optimize images (WebP format)
- Check PageSpeed Insights
- Verify gzip enabled

---

**Status**: ✅ SEO Optimized & Production Ready!
