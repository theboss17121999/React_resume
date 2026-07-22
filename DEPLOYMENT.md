# Deployment Guide

Step-by-step guide for deploying the React Resume Portfolio to GitHub Pages.

## Prerequisites

Before deploying, ensure:

1. ✅ Project is fully customized with your information
2. ✅ All dependencies are installed (`npm install`)
3. ✅ Code passes linting (`npm run lint`)
4. ✅ Local build works (`npm run build`)
5. ✅ You have a GitHub account with push access to the repository

## Deployment Methods

## Method 1: Using GitHub Pages (Recommended)

### Step 1: Configure Repository

Update `package.json` with your repository URL:

```json
{
  "homepage": "https://yourusername.github.io/React_resume/",
  "name": "resume",
  ...
}
```

**Note**: Replace `yourusername` with your actual GitHub username.

### Step 2: GitHub Repository Setup

1. Create a new repository named `React_resume` on GitHub
2. Go to repository **Settings** → **Pages**
3. Configure as follows:
   - **Build and deployment** → Source: "GitHub Actions"
   - Or: **Branch**: `gh-pages`

### Step 3: Deploy

```bash
# One-command deployment
npm run deploy
```

This command:
- Runs production build (`npm run build`)
- Creates/updates `gh-pages` branch
- Pushes build files to GitHub
- GitHub Pages automatically serves the content

### Step 4: Verify Deployment

After 1-2 minutes:
1. Visit `https://yourusername.github.io/React_resume/`
2. You should see your portfolio live

## Method 2: Manual Deployment

If automated deployment fails, use this manual approach:

### Step 1: Build the Project

```bash
npm run build
```

Output is created in the `dist/` directory.

### Step 2: Initialize Git in dist (if needed)

```bash
cd dist
git init
git add .
git commit -m "Deploy: Initial portfolio release"
```

### Step 3: Push to GitHub Pages

```bash
git push -f https://github.com/yourusername/React_resume.git master:gh-pages
cd ..
```

## Method 3: GitHub Actions (CI/CD)

### Create Workflow File

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main, master]
  pull_request:
    branches: [main, master]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Run linter
        run: npm run lint

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: yourdomain.com  # Optional: for custom domain
```

### Enable Workflow

1. Commit and push the workflow file
2. GitHub automatically runs the workflow on push
3. Check Actions tab for deployment status

## Post-Deployment

### Verify Deployment

```bash
# Check if site is live
curl -I https://yourusername.github.io/React_resume/
```

### Update DNS Records (Optional - for custom domain)

If using a custom domain like `portfolio.example.com`:

1. Update `package.json`:
   ```json
   "homepage": "https://portfolio.example.com/"
   ```

2. Create `CNAME` file in `public/`:
   ```
   portfolio.example.com
   ```

3. Configure DNS records with your registrar:
   - CNAME record pointing to `yourusername.github.io`

## Troubleshooting Deployment

### Issue: 404 Errors on Sub-routes

**Problem**: Navigating directly to sub-routes shows 404 (e.g., `/React_resume/about`)

**Solution**: GitHub Pages doesn't support client-side routing by default.

**Fix 1**: Use hash-based routing (edit `src/main.jsx`):
```javascript
import { BrowserRouter } from 'react-router-dom';
// Change to:
import { HashRouter } from 'react-router-dom';
```

**Fix 2**: Create `dist/404.html` redirecting to index.html (advanced)

### Issue: Styling Not Applied

**Problem**: CSS/Tailwind styles don't appear after deployment

**Solution**: 
1. Verify `base` in `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/React_resume/',
     ...
   })
   ```

2. Rebuild and redeploy:
   ```bash
   rm -rf dist
   npm run build
   npm run deploy
   ```

### Issue: Images Not Loading

**Problem**: Images show broken links on deployed site

**Solution**:
1. Place images in `public/` directory
2. Reference from root: `/images/photo.jpg`
3. Don't use relative paths in assets

### Issue: Deployment Script Not Found

**Problem**: `npm run deploy` fails with "command not found"

**Solution**:
```bash
# Install gh-pages globally
npm install -g gh-pages

# Or install locally
npm install --save-dev gh-pages

# Then retry
npm run deploy
```

### Issue: gh-pages Branch Not Created

**Problem**: GitHub Pages shows no branch to deploy

**Solution**:
1. Delete existing `gh-pages` branch (if present)
2. Run deployment again:
   ```bash
   npm run deploy
   ```
3. Check Settings → Pages to verify branch is selected

### Issue: Token/Authorization Error

**Problem**: Deployment fails with permission error

**Solution**:
1. Verify GitHub credentials:
   ```bash
   git config --global user.email "your-email@example.com"
   git config --global user.name "Your Name"
   ```

2. Use Personal Access Token:
   ```bash
   git remote set-url origin https://YOUR_TOKEN@github.com/yourusername/React_resume.git
   npm run deploy
   ```

## Performance Optimization

### After Deployment

1. **Enable GZIP Compression**: GitHub Pages does this automatically
2. **Cache Invalidation**: GitHub Pages handles cache busting automatically
3. **Monitor Performance**: Use Lighthouse (DevTools)

```bash
# Build analysis
npm run build
npm run preview
```

## Rollback Deployment

If deployment has issues:

```bash
# View deployment history
git log --oneline gh-pages | head -10

# Revert to previous version
git push -f origin <commit-hash>:gh-pages

# Or force rebuild
npm run deploy
```

## Update Existing Deployment

To update your deployed portfolio:

1. Make changes locally
2. Test with `npm run dev`
3. Build: `npm run build`
4. Deploy: `npm run deploy`

Changes go live within 1-2 minutes.

## Advanced Configuration

### Custom Domain Setup

1. Add domain in GitHub Settings → Pages
2. Update `package.json`:
   ```json
   "homepage": "https://yourdomain.com/"
   ```
3. Add `CNAME` file in `public/` directory
4. Deploy: `npm run deploy`

### HTTPS

- GitHub Pages provides free HTTPS automatically
- Enable in Settings → Pages → Enforce HTTPS

### Analytics Integration

Add tracking code to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

## Common Deployment Commands

```bash
# Full deployment cycle
npm install
npm run lint
npm run build
npm run deploy

# Clean deployment (clear cache)
rm -rf dist node_modules
npm install
npm run build
npm run deploy

# Preview before deploying
npm run preview

# Check current branch
git branch -a
```

## Support & Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [gh-pages Package](https://www.npmjs.com/package/gh-pages)

## Next Steps

1. ✅ Complete deployment
2. 📊 Monitor site performance
3. 🔄 Set up automatic updates
4. 🎯 Track visitor analytics
5. 🚀 Share your portfolio!

For setup help, see [SETUP.md](./SETUP.md)

For project structure, see [STRUCTURE.md](./STRUCTURE.md)
