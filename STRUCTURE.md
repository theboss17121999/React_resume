# Project Structure

This document describes the organization and purpose of files and directories in the React Resume project.

## Directory Tree

```
React_resume/
├── src/
│   ├── components/           # Reusable UI components
│   ├── context/              # React context definitions
│   ├── contextProvider/      # Context providers components
│   ├── Hooks/                # Custom React hooks
│   ├── assets/               # Images and static files
│   ├── store/                # State management (Recoil atoms)
│   ├── App.jsx               # Main application component
│   ├── App.css               # Application styles
│   ├── details.js            # Configuration and personal data
│   ├── index.css             # Global styles
│   └── main.jsx              # React entry point
├── public/                   # Public static files
├── index.html                # HTML entry file
├── package.json              # Project dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── .eslintrc.cjs             # ESLint configuration
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation
```

## Detailed Directory Descriptions

### `/src/components/`

Contains all reusable React components that make up the portfolio sections:

- **Intro.jsx** - Hero/introduction section with animated name
- **AboutMe.jsx** - About section with personal description
- **Education.jsx** - Education timeline display
- **Education2.jsx** - Alternative education component
- **Project.jsx** - Individual project card component
- **Skill.jsx** - Skills display component
- **WorkExp.jsx** - Work experience section
- **Contact.jsx** - Contact and footer section
- **LowerBar.jsx** - Footer bar component
- **TopBar.jsx** - Navigation bar component

### `/src/context/`

React context files that define the shape and handlers for shared state:

- Context files for managing global state across the application
- Defines data structures for projects, education, work experience

### `/src/contextProvider/`

Wrapper components that provide context to child components:

- **ProjectContextProvider.jsx** - Provides project data
- **EducationContextProvider.jsx** - Provides education data
- Other context providers for managing application state

### `/src/Hooks/`

Custom React hooks for reusable logic:

- Hooks for animations
- Hooks for responsive design
- Hooks for state management

### `/src/assets/`

Static files and images:

- `educationLogo/` - Education institution logos (KV, DPS, CU, IIT)
- Profile pictures
- Project images
- Other media files

### `/src/store/`

Recoil state management:

- Atom definitions for global state
- Selectors for computed values
- State management utilities

### `/src/details.js`

**Important Configuration File** - Contains all customizable personal information:

```javascript
// Profile
export const name = "Shashwat Bose";

// Skills array
export const skillArray = [...];

// Social media links
export const linkedinLink = "...";
export const githubLink = "...";
export const leetcodeLink = "...";

// Education details
export const allEducationDetails = [{...}];

// Other personal information
```

**⚠️ This is the primary file to update when personalizing the resume.**

## Key Files

### Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.js` | Vite build configuration |
| `tailwind.config.js` | Tailwind CSS customization |
| `postcss.config.js` | CSS processing configuration |
| `.eslintrc.cjs` | Code linting rules |
| `package.json` | Dependencies and scripts |

### Main Application Files

| File | Purpose |
|------|---------|
| `src/main.jsx` | React app entry point |
| `src/App.jsx` | Root component (sections layout) |
| `src/details.js` | Personal data configuration |
| `src/App.css` | Application styles |
| `src/index.css` | Global styles |

## Component Hierarchy

```
App (src/App.jsx)
├── Intro
├── AboutMe
├── EducationDetails (Context Provider)
│   └── Education components
├── ProjectDetails (Context Provider)
│   └── Project components
├── WorkExp
├── Contact
└── LowerBar
```

## Data Flow

1. **Static Data**: `src/details.js` contains all personal information
2. **Context Providers**: Wrap components to provide data from `details.js`
3. **Components**: Consume context and render data
4. **State Management**: Recoil atoms for complex state needs

## Styling Architecture

- **Tailwind CSS**: Utility classes for responsive design
- **Material Tailwind**: Pre-built components
- **CSS Modules**: Component-specific styles (App.css)
- **Responsive Design**: Mobile-first approach using Tailwind breakpoints

## Build Output

- Production build output: `/dist/` directory
- Deployed to GitHub Pages via `npm run deploy`
- Static files optimized and minified

## Adding New Features

### To add a new section:

1. Create a new component in `src/components/`
2. Add styles to `src/App.css` or inline with Tailwind
3. Import and render in `src/App.jsx`
4. If needed, create a context provider in `src/contextProvider/`

### To customize data:

1. Edit `src/details.js`
2. Create or update context provider
3. Update component to consume and display data

### To modify styling:

1. Update Tailwind classes in components
2. Modify `tailwind.config.js` for custom colors/fonts
3. Add custom CSS to `src/App.css` if needed
