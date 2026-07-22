# Contributing Guide

Thank you for your interest in contributing to the React Resume Portfolio! This guide will help you get started.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow

## How to Contribute

### 1. Fork the Repository

```bash
# Click "Fork" on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/React_resume.git
cd React_resume
git remote add upstream https://github.com/theboss17121999/React_resume.git
```

### 2. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# Or for bug fixes:
git checkout -b fix/your-bug-name
```

**Branch naming convention:**
- `feature/feature-name` - New features
- `fix/bug-name` - Bug fixes
- `docs/documentation-update` - Documentation
- `refactor/refactoring-name` - Code refactoring

### 3. Make Your Changes

Follow these guidelines:

#### Code Style

- Use consistent indentation (2 spaces)
- Follow ESLint rules (run `npm run lint`)
- Use meaningful variable names
- Add comments for complex logic

#### Component Development

```jsx
// Good component structure
import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../context';

export const MyComponent = () => {
  const { data } = useContext(MyContext);
  
  return (
    <div className="flex flex-col">
      {/* Component content */}
    </div>
  );
};
```

#### CSS/Styling

- Prefer Tailwind CSS utility classes
- Use Material Tailwind components when appropriate
- Maintain responsive design (mobile-first approach)

```jsx
// Good: Using Tailwind classes
<div className="w-full md:w-1/2 lg:w-1/3 p-4">
  {/* Content */}
</div>

// Avoid: Inline styles
<div style={{width: '100%', padding: '16px'}}>
  {/* Content */}
</div>
```

### 4. Test Your Changes

```bash
# Run linter
npm run lint

# Fix linting issues automatically
npm run lint -- --fix

# Build and test locally
npm run build
npm run preview

# Start dev server
npm run dev
```

### 5. Commit Your Changes

```bash
# Stage your changes
git add .

# Commit with clear message
git commit -m "feat: add new portfolio section"
```

**Commit message format:**

```
<type>: <subject>

<body (optional)>

<footer (optional)>
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (no logic change)
- `refactor:` - Code refactoring
- `perf:` - Performance improvement
- `test:` - Test updates
- `chore:` - Build/dependencies

**Examples:**
```bash
git commit -m "feat: add dark mode toggle"
git commit -m "fix: correct responsive design on mobile"
git commit -m "docs: update setup instructions"
git commit -m "refactor: optimize component rendering"
```

### 6. Keep Your Branch Updated

```bash
# Fetch latest changes from upstream
git fetch upstream

# Rebase your branch
git rebase upstream/main
```

### 7. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 8. Create a Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill in the PR template:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Refactoring

## Testing
How was this tested?

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests pass locally
```

4. Submit the PR for review

## Types of Contributions

### Bug Reports

Create an issue with:

```markdown
## Description
Clear description of the bug

## Steps to Reproduce
1. ...
2. ...
3. ...

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: [Windows/Mac/Linux]
- Node version: [e.g., 18.0.0]
- Browser: [e.g., Chrome]

## Screenshots
If applicable, add screenshots
```

### Feature Requests

```markdown
## Feature Description
What would you like to add?

## Problem It Solves
Why is this needed?

## Proposed Solution
How should it work?

## Alternatives Considered
Any other approaches?

## Additional Context
Any other information
```

### Documentation Improvements

- Fix typos or clarify existing documentation
- Add examples or tutorials
- Improve README or guides
- Add JSDoc comments

## Development Workflow

### Setting Up Development Environment

```bash
# Clone repo
git clone https://github.com/YOUR_USERNAME/React_resume.git
cd React_resume

# Install dependencies
npm install

# Verify setup
npm run lint
npm run build

# Start developing
npm run dev
```

### Testing Components

```bash
# Test locally while developing
npm run dev

# Build to check production build
npm run build

# Preview production build
npm run preview

# Run linter before committing
npm run lint -- --fix
```

### Debugging

**Using Browser DevTools:**
1. Open Developer Tools (F12)
2. Use React DevTools browser extension
3. Check Console for errors

**Using VS Code Debugger:**

Create `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}",
      "sourceMapPathOverride": {}
    }
  ]
}
```

## Project Standards

### Code Quality

- ✅ Must pass ESLint checks (`npm run lint`)
- ✅ Must build successfully (`npm run build`)
- ✅ Should maintain responsive design
- ✅ Should follow React best practices
- ✅ Should include meaningful variable/function names

### Performance

- Optimize component renders
- Lazy load heavy components
- Use React.memo for expensive components
- Minimize bundle size

### Accessibility

- Use semantic HTML
- Include alt text for images
- Ensure color contrast
- Support keyboard navigation

### Documentation

- Update README if adding features
- Add comments for complex logic
- Update STRUCTURE.md if changing structure
- Document new configuration options

## Pull Request Review Process

### What Reviewers Look For

1. **Code Quality**: Does it follow project standards?
2. **Functionality**: Does it work as intended?
3. **Testing**: Has it been tested?
4. **Documentation**: Is it documented?
5. **Performance**: Any performance impacts?

### Response to Feedback

- Be open to suggestions
- Ask for clarification if needed
- Make requested changes
- Push updates to the same branch
- Respond to all comments

## Useful Resources

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## Getting Help

- 💬 Open an issue for questions
- 🐛 Report bugs with detailed steps
- 💡 Suggest features with use cases
- 📚 Improve documentation

## Recognition

Contributors will be recognized in:
- GitHub contributors page
- Project README (for significant contributions)
- Commit history

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to open an issue or contact the project maintainer for questions about contributing!

---

Happy contributing! 🚀
