# Customization Guide

This guide explains how to customize different aspects of your React Resume Portfolio.

## Table of Contents

1. [Personal Information](#personal-information)
2. [Skills](#skills)
3. [Education](#education)
4. [Projects](#projects)
5. [Work Experience](#work-experience)
6. [Colors and Styling](#colors-and-styling)
7. [Fonts](#fonts)
8. [Social Media Links](#social-media-links)
9. [Adding New Sections](#adding-new-sections)

## Personal Information

### Update Name and Profile

Edit `src/details.js`:

```javascript
export const name = "Your Full Name";
```

This updates:
- Hero section title
- Browser tab title
- Meta tags

## Skills

### Add or Remove Skills

Edit `src/details.js`:

```javascript
export const skillArray = [
  "JavaScript",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "PostgreSQL",
  // Add your skills here
];
```

### Customize Skill Display

Modify `src/components/Skill.jsx` to change:
- Layout (grid, list, badges)
- Styling and colors
- Grouping by categories

Example: Group skills by category:

```javascript
export const skillCategories = {
  frontend: ["React", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Express", "MongoDB"],
  tools: ["Git", "Docker", "VSCode"]
};
```

## Education

### Add Education Entry

Edit `src/details.js`:

```javascript
export const allEducationDetails = [
  {
    school: "University Name",
    year: "2020-2024",
    marks: "3.8 GPA",
    bg_pic: UNIVERSITY_LOGO,        // Import your logo first
    bg_col: "bg-blue-500",           // Tailwind color
    col_text: "text-white",          // Text color
    detail: "Degree: Computer Science. Relevant coursework: Data Structures, Algorithms, Web Development..."
  },
  // Add more education entries
];
```

### Import Education Logos

```javascript
// At the top of details.js
import UNIVERSITY_LOGO from './assets/educationLogo/university.png';
import SCHOOL_LOGO from './assets/educationLogo/school.png';
```

### Customize Education Component

Edit `src/components/Education.jsx`:
- Change card layout
- Modify timeline style
- Adjust animation effects

## Projects

### Add Projects

Edit `src/contextProvider/ProjectContextProvider.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Brief description of your project",
    technologies: ["React", "Node.js", "MongoDB"],
    image: PROJECT_IMAGE,
    links: {
      github: "https://github.com/username/project",
      live: "https://project-demo.com"
    },
    details: "Detailed description of what you built and learned"
  },
  // Add more projects
];
```

### Project Images

1. Place images in `src/assets/projects/`
2. Import in context provider:
   ```javascript
   import PROJECT_IMG from '../assets/projects/project.png';
   ```
3. Reference in project object

### Customize Project Cards

Edit `src/components/Project.jsx`:
- Change card layout
- Modify image display
- Update button styles
- Adjust animations

## Work Experience

### Add Work Experience

Edit `src/contextProvider/` or create a new context file:

```javascript
const workExperience = [
  {
    id: 1,
    company: "Company Name",
    position: "Your Position",
    duration: "Jan 2023 - Present",
    description: "What you did and achieved",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
      "Responsibility 3"
    ],
    technologies: ["React", "TypeScript", "AWS"]
  }
];
```

### Display Work Experience

Edit `src/components/WorkExp.jsx` to render work experience data.

## Colors and Styling

### Customize Theme Colors

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        secondary: '#00CC99',
        accent: '#FF6600',
        dark: '#1a1a1a',
        light: '#f5f5f5'
      }
    }
  }
}
```

### Update Component Colors

Use custom colors in components:

```jsx
<div className="bg-primary text-white">
  {/* Content */}
</div>
```

### Section Backgrounds

Edit colors in `src/App.jsx`:

```jsx
<div className="bg-gradient-to-r from-primary to-secondary">
  {/* Hero section */}
</div>
```

### Dark Mode Implementation

Create `src/hooks/useDarkMode.js`:

```javascript
import { useRecoilState } from 'recoil';
import { darkModeAtom } from '../store/atoms';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useRecoilState(darkModeAtom);
  
  return { isDark, setIsDark };
};
```

## Fonts

### Change Global Font

Edit `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}
```

### Use Different Fonts for Sections

Add to `tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      body: ['Inter', 'sans-serif']
    }
  }
}
```

Use in components:

```jsx
<h1 className="font-display text-4xl">
  Welcome
</h1>
```

## Social Media Links

### Add Social Links

Edit `src/details.js`:

```javascript
export const linkedinLink = "https://www.linkedin.com/in/yourprofile/";
export const githubLink = "https://github.com/yourprofile";
export const twitterLink = "https://twitter.com/yourprofile";
export const instagramLink = "https://www.instagram.com/yourprofile/";
export const facebookLink = "https://www.facebook.com/yourprofile";
export const leetcodeLink = "https://leetcode.com/u/yourprofile/";
export const emailAddress = "your.email@example.com";
```

### Add New Social Platform

1. Add link in `details.js`
2. Update `src/components/LowerBar.jsx` or Contact component:

```jsx
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  { icon: FaLinkedin, link: linkedinLink },
  { icon: FaGithub, link: githubLink },
  { icon: FaTwitter, link: twitterLink },
];

{socialLinks.map((social, idx) => (
  <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer">
    <social.icon />
  </a>
))}
```

## Adding New Sections

### Step 1: Create Component

Create `src/components/NewSection.jsx`:

```jsx
export const NewSection = () => {
  return (
    <div className="w-full py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Section Title</h2>
      {/* Your content */}
    </div>
  );
};
```

### Step 2: Import in App

Edit `src/App.jsx`:

```jsx
import { NewSection } from './components/NewSection';

function App() {
  // ... existing code
  
  return (
    <>
      <div className='w-full overflow:hidden'>
        {/* ... other sections */}
        <div id="NewSection">
          <NewSection />
        </div>
      </div>
    </>
  );
}
```

### Step 3: Add Navigation Link

Update `src/components/TopBar.jsx` to include the new section:

```jsx
const menuItems = [
  { label: 'Home', link: '#Home' },
  { label: 'About', link: '#AboutMe' },
  { label: 'Education', link: '#Education' },
  { label: 'Projects', link: '#Project' },
  { label: 'Work', link: '#Work' },
  { label: 'New Section', link: '#NewSection' },
  { label: 'Contact', link: '#Contact' }
];
```

### Step 4: Add Data Context (if needed)

Create `src/contextProvider/NewSectionProvider.jsx`:

```jsx
import { createContext } from 'react';

export const NewSectionContext = createContext();

export const NewSectionProvider = ({ children }) => {
  const data = [
    // Your data
  ];

  return (
    <NewSectionContext.Provider value={data}>
      {children}
    </NewSectionContext.Provider>
  );
};
```

## Animation Customization

### Modify Framer Motion Animations

Edit components using Framer Motion:

```jsx
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
>
  {/* Content */}
</motion.div>
```

### Disable Animations

Edit component:

```jsx
// Add conditional animation based on user preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<motion.div
  animate={prefersReducedMotion ? {} : { ... }}
>
```

## Responsive Design

### Customize Breakpoints

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }
  }
}
```

### Test Responsive Design

```bash
npm run dev
# Open DevTools and test different screen sizes
```

## Performance Optimization

### Lazy Load Components

```jsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>
```

### Image Optimization

- Use JPEG for photos
- Use PNG for logos with transparency
- Optimize with tools like TinyPNG
- Place in `public/` for better performance

## Quick Customization Checklist

- [ ] Update name in `details.js`
- [ ] Add profile photo
- [ ] Update social media links
- [ ] Add education entries
- [ ] Add projects
- [ ] Add work experience
- [ ] Customize colors in `tailwind.config.js`
- [ ] Change fonts
- [ ] Test responsive design
- [ ] Test local build
- [ ] Deploy to GitHub Pages

## Need Help?

- Check [STRUCTURE.md](./STRUCTURE.md) for file organization
- See [SETUP.md](./SETUP.md) for setup instructions
- Review [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment
- Open an issue on GitHub for help
