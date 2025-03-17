# CLAUDE.md - Repository Guidelines

## Build & Development Commands
- `npm install` or `yarn` - Install dependencies
- `npm run dev` or `yarn dev` - Run development server
- `npm run build` or `yarn build` - Build production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code linting
- `npm run format` - Run Prettier to format code
- `npm test` - Run all tests (with Vitest)
- `npm run test:watch` - Run tests in watch mode
- `npm run test:ui` - Run tests with UI interface
- `npm run test:coverage` - Run tests with coverage report
- `npm run deploy` or `yarn deploy` - Deploy to GitHub Pages

## Code Style Guidelines
- **Components**: Class-based React components with PascalCase naming
- **File Structure**: Numbered prefixes for order (e.g., `1About.js`)
- **Imports Order**: React → CSS → Components → Third-party → Assets
- **CSS**: Mix of CSS Modules (`.module.css`) and regular CSS
- **Exports**: Always use default exports matching component name
- **State Management**: Local component state
- **Router**: HashRouter with path-based routing
- **Formatting**: 2-space indentation, trailing commas
- **Error Handling**: Component-level error boundaries

## Repository Organization
- `/src/pages/` - Main application pages
- `/src/articles/` - Blog article components
- `/src/pages/components/` - Reusable UI components
- `/src/images/` - Static images and assets