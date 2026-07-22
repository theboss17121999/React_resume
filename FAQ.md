# Frequently Asked Questions (FAQ)

Common questions and answers about the React Resume Portfolio project.

## Installation & Setup

### Q: What are the minimum requirements?
**A:** You need:
- Node.js v16 or higher
- npm v7 or higher
- A code editor (VS Code recommended)
- Git

Check versions with:
```bash
node --version
npm --version
git --version
```

### Q: How do I install the project?
**A:** Run these commands:
```bash
git clone https://github.com/theboss17121999/React_resume.git
cd React_resume
npm install
npm run dev
```

See [SETUP.md](./SETUP.md) for detailed instructions.

### Q: Why is npm install failing?
**A:** Common causes:
1. **Node version too old**: Update Node.js to v16+
2. **Corrupted cache**: Run `npm cache clean --force`
3. **Conflicting packages**: Delete `node_modules` and `package-lock.json`, then reinstall

```bash
rm -rf node_modules package-lock.json
npm install
```

### Q: I'm getting PORT already in use error
**A:** The default port (5173) is busy. Use a different port:
```bash
npm run dev -- --port 3000
```

## Development

### Q: How do I add my personal information?
**A:** Edit `src/details.js` and update:
- `name`
- `skillArray`
- Social media links
- `allEducationDetails`

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for examples.

### Q: How do I add projects?
**A:** Edit `src/contextProvider/ProjectContextProvider.jsx` and add projects to the array. Each project should have:
- `id`
- `title`
- `description`
- `technologies`
- `image`
- `links`

### Q: How do I change colors?
**A:** Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#yourcolor',
      secondary: '#yourcolor'
    }
  }
}
```

Then use in components: `<div className="bg-primary">`

### Q: How do I change fonts?
**A:** 
1. Import font in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont');
```

2. Add to `tailwind.config.js`:
```javascript
fontFamily: {
  display: ['YourFont', 'serif']
}
```

3. Use in components: `<h1 className="font-display">`

### Q: How do I add a new section?
**A:** 
1. Create component in `src/components/`
2. Import and render in `src/App.jsx`
3. Add navigation link in `TopBar.jsx`

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed steps.

### Q: Why is my linter showing errors?
**A:** Run the linter and fix issues:
```bash
npm run lint -- --fix
```

This fixes most issues automatically.

### Q: How do I debug components?
**A:** 
1. Install React DevTools browser extension
2. Open DevTools (F12)
3. Go to React tab
4. Inspect components and state

## Styling & Design

### Q: Where do I add CSS?
**A:** Three options:
1. **Tailwind classes**: Preferred method
2. **src/App.css**: Component styles
3. **Inline styles**: Only for dynamic styles

### Q: How do I make it responsive?
**A:** Tailwind makes it easy:
```jsx
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Mobile: full width, Tablet: 50%, Desktop: 33% */}
</div>
```

### Q: How do I add dark mode?
**A:** Create a dark mode context and use:
```jsx
{isDarkMode ? 'dark-class' : 'light-class'}
```

Or use Tailwind's dark mode:
```jsx
<div className="bg-white dark:bg-black">
```

### Q: Can I use Bootstrap instead of Tailwind?
**A:** This project is built for Tailwind. Using Bootstrap requires major refactoring. Stick with Tailwind for consistency.

## Deployment

### Q: How do I deploy?
**A:** One command:
```bash
npm run deploy
```

First, update `homepage` in `package.json`:
```json
"homepage": "https://yourusername.github.io/React_resume/"
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for details.

### Q: My site shows 404 after deployment
**A:** Common issue with GitHub Pages. Make sure:
1. `base` in `vite.config.js` is correct
2. You're using hash routing or single-page setup
3. Repository is public
4. `gh-pages` branch exists

### Q: Why aren't my changes showing after deployment?
**A:** 
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+F5)
3. Wait 2-5 minutes for GitHub Pages to update
4. Check if deployment succeeded in Actions tab

### Q: How do I use a custom domain?
**A:** 
1. Add domain to GitHub Pages settings
2. Update `package.json` homepage
3. Create `CNAME` file in `public/`
4. Configure DNS records

See [DEPLOYMENT.md](./DEPLOYMENT.md) for details.

### Q: Can I deploy to other platforms?
**A:** Yes! You can deploy to:
- **Netlify**: `npm run build` → Upload `dist/` folder
- **Vercel**: Connect your GitHub repo
- **AWS S3**: Upload `dist/` folder
- **Traditional hosting**: Upload `dist/` via FTP

## Performance

### Q: How do I optimize performance?
**A:** 
1. Use `npm run build` to see bundle size
2. Lazy load heavy components
3. Optimize images (compress before uploading)
4. Use React.memo for expensive components
5. Remove unused dependencies

### Q: My images are loading slowly
**A:** 
1. Compress images (use TinyPNG or similar)
2. Use appropriate formats (JPEG for photos, PNG for logos)
3. Place in `public/` folder
4. Use relative paths: `/images/photo.jpg`

### Q: How do I reduce bundle size?
**A:** 
```bash
npm run build
# Check what's in dist/
npm install -g webpack-bundle-analyzer
# Run analysis
```

## Troubleshooting

### Q: ESLint keeps complaining about rules
**A:** Two options:
1. Fix the issue: `npm run lint -- --fix`
2. Disable rule (not recommended):
```jsx
// eslint-disable-next-line rule-name
```

### Q: React is not defined error
**A:** Add import:
```jsx
import React from 'react';
```

(Usually not needed in modern React, but some configurations require it)

### Q: Tailwind classes not applying
**A:** Ensure file is in content path in `tailwind.config.js`:
```javascript
content: [
  "./index.html",
  "./src/**/*.{js,jsx}",
],
```

### Q: I broke something, how do I revert?
**A:** 
```bash
# See what changed
git status

# Revert one file
git checkout src/App.jsx

# Revert all changes
git reset --hard HEAD
```

### Q: Dependencies outdated, should I update?
**A:** 
```bash
npm outdated  # See what's outdated
npm update    # Update to compatible versions
```

For major version updates, update manually in `package.json`.

## Best Practices

### Q: Should I commit node_modules?
**A:** No! Add to `.gitignore`:
```
node_modules/
.env
dist/
```

### Q: How often should I update dependencies?
**A:** 
- Security updates: Immediately
- Minor/patch updates: Monthly
- Major updates: When ready to test thoroughly

### Q: Should I use TypeScript?
**A:** Optional. To add TypeScript:
1. Install: `npm install --save-dev typescript`
2. Rename `.jsx` to `.tsx`
3. Create `tsconfig.json`

See TypeScript docs for full setup.

### Q: How do I backup my portfolio?
**A:** Use Git:
```bash
git add .
git commit -m "Backup: portfolio update"
git push
```

## Contributing

### Q: Can I contribute to this project?
**A:** Yes! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Q: How do I report a bug?
**A:** Open an issue on GitHub with:
- Bug description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### Q: How do I suggest a feature?
**A:** Open an issue with:
- Feature description
- Why you need it
- Example implementation (optional)

## General Questions

### Q: Is this production-ready?
**A:** Yes! The template is fully functional and can be customized for professional use.

### Q: Can I use this for commercial purposes?
**A:** Yes, it's under MIT License. You can use it for personal or commercial projects.

### Q: Where do I find more help?
**A:** 
- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
- [Tailwind Docs](https://tailwindcss.com/)
- [GitHub Issues](https://github.com/theboss17121999/React_resume/issues)

### Q: Can I use this template for other projects?
**A:** Absolutely! You can:
- Clone for multiple portfolios
- Customize for different projects
- Use as a boilerplate for React projects

### Q: What if I have other questions?
**A:** 
1. Check documentation files:
   - [README.md](./README.md) - Overview
   - [SETUP.md](./SETUP.md) - Installation
   - [STRUCTURE.md](./STRUCTURE.md) - Project structure
   - [CUSTOMIZATION.md](./CUSTOMIZATION.md) - How to customize
   - [DEPLOYMENT.md](./DEPLOYMENT.md) - How to deploy
   - [CONTRIBUTING.md](./CONTRIBUTING.md) - Contributing

2. Search [GitHub Issues](https://github.com/theboss17121999/React_resume/issues)

3. Open a new issue with your question

## Still Need Help?

- 📖 Read the documentation carefully
- 🔍 Search GitHub issues for similar problems
- 💬 Open an issue and describe your problem
- 🤝 Consider contributing a solution

---

**Last Updated**: 2024

For the latest information, visit the [GitHub repository](https://github.com/theboss17121999/React_resume).
