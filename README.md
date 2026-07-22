# React Resume Portfolio

A modern, responsive personal portfolio and resume website built with React, Vite, and Tailwind CSS. This project showcases your professional experience, education, projects, and skills in an interactive and visually appealing way.

## 🌐 Live Demo

Visit the live portfolio: [https://theboss17121999.github.io/React_resume/](https://theboss17121999.github.io/React_resume/)

## 📋 Features

- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion
- **Dark/Light Components**: Modern UI with Material Tailwind
- **Icon Support**: Font Awesome and Radix UI icons
- **Sections Included**:
  - Hero Introduction
  - About Me
  - Education Timeline
  - Project Showcase
  - Work Experience
  - Contact Information
  - Social Media Links
- **Performance**: Vite-based build for fast development and production builds
- **GitHub Pages Deployment**: One-command deployment

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/theboss17121999/React_resume.git
cd React_resume

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173/`

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 🗂️ Project Structure

For detailed information about the project structure, see [STRUCTURE.md](./STRUCTURE.md)

```
src/
├── components/        # Reusable React components
├── context/          # React context for state management
├── contextProvider/  # Context providers
├── Hooks/           # Custom React hooks
├── assets/          # Images and static files
├── store/           # State management store
├── App.jsx          # Main App component
├── details.js       # Personal information configuration
└── main.jsx         # Entry point
```

## 🛠️ Tech Stack

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Router**: Client-side routing
- **Recoil**: State management
- **Material Tailwind**: UI component library
- **React Icons**: Icon library
- **Font Awesome**: Brand and social icons

## 📝 Customization

### Update Personal Information

Edit `src/details.js` to customize:
- Name
- Skills
- Social media links
- Education details
- Other personal information

### Add Projects

Modify the project details in the context providers to add or update projects.

### Styling

This project uses Tailwind CSS. Update classes in components or modify `tailwind.config.js` for custom configuration.

## 🚢 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Shashwat Bose**
- GitHub: [@theboss17121999](https://github.com/theboss17121999)
- LinkedIn: [shabose](https://www.linkedin.com/in/shabose/)

## 🔗 Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
