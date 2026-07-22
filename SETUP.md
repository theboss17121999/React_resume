# Setup Guide

Complete setup instructions for the React Resume Portfolio project.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v16 or higher ([Download](https://nodejs.org/))
- **npm**: v7 or higher (comes with Node.js)
- **Git**: Latest version ([Download](https://git-scm.com/))
- **GitHub Account**: For deploying to GitHub Pages

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/theboss17121999/React_resume.git
cd React_resume
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

### 3. Verify Installation

```bash
npm run lint
```

If no errors appear, your setup is complete!

## Development Setup

### Start Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173/`

### Features During Development

- **Hot Module Replacement (HMR)**: Changes are reflected immediately
- **Fast Refresh**: React components update without losing state
- **ESLint Integration**: Code quality checks

### Useful Development Commands

```bash
# Run linter
npm run lint

# Fix linting errors
npm run lint -- --fix

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization Setup

### Step 1: Update Personal Information

Edit `src/details.js` and update:

```javascript
export const name = "Your Name";

export const skillArray = [
  "Skill 1",
  "Skill 2",
  // ... add your skills
];

export const linkedinLink = "https://www.linkedin.com/in/yourprofile/";
export const githubLink = "https://github.com/yourprofile";
export const leetcodeLink = "https://leetcode.com/u/yourprofile/";
export const facebookLink = "https://www.facebook.com/yourprofile";
export const instagramLink = "https://www.instagram.com/yourprofile/";

export const allEducationDetails = [
  {
    school: "Your School/University",
    year: "2020-2024",
    marks: "Your CGPA",
    bg_pic: YOUR_IMAGE,
    bg_col: "bg-color-500", // Tailwind color
    col_text: "text-color-800", // Text color
    detail: "Your education details"
  }
  // ... add more education entries
];
```

### Step 2: Add Education Logos

Place education logos in `src/assets/educationLogo/` and import them in `details.js`:

```javascript
import YOUR_LOGO from './assets/educationLogo/your-logo.png';
```

### Step 3: Update Project Information

Edit the context provider files to add your projects:

- `src/contextProvider/ProjectContextProvider.jsx`

### Step 4: Customize Styling

Update colors and fonts in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add custom colors
      },
      fontFamily: {
        // Add custom fonts
      }
    }
  }
}
```

## GitHub Pages Setup

### Initial Setup

1. **Fork or create a new repository** on GitHub

2. **Update `package.json`** with your repository:

```json
{
  "homepage": "https://yourusername.github.io/React_resume/",
  ...
}
```

3. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch

### Deployment

```bash
npm run deploy
```

This command:
1. Builds the project (`npm run build`)
2. Commits build files to `gh-pages` branch
3. Pushes to GitHub
4. Your site will be live at `https://yourusername.github.io/React_resume/`

## Environment Configuration

### Vite Configuration

Edit `vite.config.js` if needed:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/React_resume/',
  // ... other config
})
```

### Tailwind Configuration

Customize in `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Customizations here
    }
  },
  plugins: [],
}
```

## Troubleshooting

### Port Already in Use

If `localhost:5173` is in use:

```bash
npm run dev -- --port 3000
```

### Dependencies Not Installing

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Linting Errors

```bash
# Fix automatically
npm run lint -- --fix

# Or manually check each file
npm run lint
```

### Build Issues

```bash
# Clean and rebuild
rm -rf dist
npm run build
```

### GitHub Pages Not Updating

1. Check `homepage` in `package.json`
2. Verify `gh-pages` branch exists
3. Run `npm run deploy` again
4. Check repository Settings → Pages

## Node Version Management

### Using nvm (Node Version Manager)

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node.js 18 (LTS)
nvm install 18
nvm use 18

# Verify installation
node --version
npm --version
```

## IDE Setup Recommendations

### Visual Studio Code Extensions

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **ESLint**
- **Prettier - Code formatter**
- **Thunder Client** (for API testing)

### Prettier Configuration

Create `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

## Next Steps

1. ✅ Complete setup
2. 📝 Customize personal information in `src/details.js`
3. 🎨 Update styling and colors
4. 📸 Add your images and logos
5. 🚀 Deploy to GitHub Pages with `npm run deploy`

For detailed project structure, see [STRUCTURE.md](./STRUCTURE.md)

For deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)
