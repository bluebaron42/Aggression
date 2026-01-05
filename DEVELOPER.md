# Aggression React App - Developer Quick Reference

## 🚀 Getting Started (30 seconds)

```bash
cd /workspaces/Aggression
npm install
npm run dev
# Opens at http://localhost:5173
```

## 📁 Component Tree

```
App (9 slides)
├── Slide 0: Title
├── Slide 1: DoNowQuiz
│   └── DoNowQuiz.jsx
├── Slide 2: NeuralMap
│   └── NeuralMap.jsx
├── Slide 3: ChemicalBalance
│   └── ChemicalBalance.jsx
├── Slide 4: GospicBriefing
│   └── GospicBriefing.jsx
├── Slide 5: UltimatumGameSim
│   └── UltimatumGameSim.jsx
├── Slide 6: Evidence (inline)
├── Slide 7: Critical Analysis (inline)
└── Slide 8: Essay Plan
    └── EssayPlanReveal.jsx
```

## 🎨 Key Styles

### Color Palette
- **Primary**: `cyan-400` (#22d3ee)
- **Accent**: `cyan-500` (#06b6d4)
- **Dark**: `slate-950` (#030712)
- **Error**: `red-500` (#ef4444)
- **Success**: `green-500` (#22c55e)

### Custom Classes
- `.custom-scrollbar` - Styled scrollbar
- `.bg-grid-subtle` - Subtle background grid
- `.animate-fadeIn` - Fade in animation
- `.animate-heartbeat` - Heartbeat animation
- `.animate-pulse-cyan` - Cyan pulse glow

## 🔧 Common Edits

### Change Quiz Questions
**File:** `src/App.jsx` (lines 25-35)
```javascript
const lesson1DoNow = [
  { id: 1, question: "Your question here", options: ["A", "B", "C"], correct: 0 },
  // ...
]
```

### Add New Lesson
**File:** `src/App.jsx`
1. Add to `lessons` array (line 14)
2. Create new component in `src/components/YourComponent.jsx`
3. Add case to `renderLesson1()` switch statement

### Modify Simulation Logic
**File:** `src/components/UltimatumGameSim.jsx` (lines 28-46)
- Adjust amygdala activity calculations
- Modify decision logic thresholds
- Change response messages

### Update Essay Plan Content
**File:** `src/components/EssayPlanReveal.jsx`
Edit the sections marked with:
- `AO1: Concepts`
- `AO3: Research Support`
- `AO3: Critical Analysis`

## 📊 State Management

### App-Level State
```javascript
const [currentSlide, setCurrentSlide] = useState(0)      // 0-8
const [currentLesson, setCurrentLesson] = useState(1)     // Lesson ID
const [isSidebarOpen, setSidebarOpen] = useState(true)
const [isPresentation, setIsPresentation] = useState(false)
```

### Component-Level State Examples
- `DoNowQuiz`: `answers`, `showResults`
- `NeuralMap`: `activeRegion`
- `ChemicalBalance`: `serotonin`, `testosterone`
- `UltimatumGameSim`: `drug`, `offerType`, `amygdalaLevel`, `decision`, `history`

## 🎯 Event Handlers

### Navigation
- `nextSlide()` - Go to next slide (disabled at end)
- `prevSlide()` - Go to previous slide (disabled at start)
- `togglePresentation()` - Enter/exit fullscreen mode

### Quiz
- `handleSelect(qId, optionIdx)` - Select quiz answer
- `setShowResults(true)` - Reveal answers and score

### Simulation
- `setDrug()` - Select intervention (placebo/benzo)
- `setOfferType()` - Select offer type (fair/unfair)
- `runTrial()` - Run simulation and update amygdala activity

## 🔍 Debugging Tips

### Check Current Slide
```javascript
console.log('Current Slide:', currentSlide)
console.log('Current Lesson:', currentLesson)
```

### View Component State
Use React Developer Tools Chrome extension for debugging

### Hot Reload
Changes auto-reload in dev mode. If not working:
```bash
# Stop server (Ctrl+C)
# Clear cache
rm -rf node_modules/.vite
# Restart
npm run dev
```

## 🏗️ Build & Deploy

### Development
```bash
npm run dev           # Start with hot reload
```

### Production
```bash
npm run build         # Build to dist/
npm run preview       # Preview production build
```

### Deploy
Push `dist/` folder to hosting:
- Vercel: `vercel deploy`
- Netlify: Drag `dist/` folder
- GitHub Pages: Push to gh-pages branch
- Traditional Server: Copy `dist/` contents to web root

## 📝 Code Style Guide

### Components
- Use functional components with hooks
- Props at top of function
- State declarations with `useState` together
- Event handlers with `useCallback`
- Return JSX indented properly

### Naming
- Components: PascalCase (`DoNowQuiz.jsx`)
- Files: PascalCase (React components)
- Variables/Functions: camelCase
- Constants: UPPER_CASE
- CSS Classes: kebab-case (Tailwind)

### Structure
```javascript
// Imports
import React, { useState } from 'react'
import { Icon } from 'lucide-react'

// Component
export default function ComponentName({ prop1, prop2 }) {
  // State
  const [state, setState] = useState('')
  
  // Handlers
  const handleClick = () => { /* ... */ }
  
  // Render
  return (
    <div className="...">
      {/* JSX */}
    </div>
  )
}
```

## 🎓 Learn More

### React
- Hooks: https://react.dev/reference/react
- useState: https://react.dev/reference/react/useState
- useCallback: https://react.dev/reference/react/useCallback

### Tailwind CSS
- Docs: https://tailwindcss.com/docs
- Colors: https://tailwindcss.com/docs/customizing-colors
- Layout: https://tailwindcss.com/docs/display

### Vite
- Docs: https://vitejs.dev
- Plugin React: https://github.com/vitejs/vite-plugin-react

## ⚡ Performance Tips

### Keep in Mind
- Component re-renders on any state change
- Use `useCallback` for event handlers passed to children
- Memoize heavy computations
- Import only needed icons from lucide-react

### Current Optimizations
- SVG icons from lucide-react (lightweight)
- CSS transitions with `transition-all`
- No unnecessary re-renders
- Lazy scrolling with overflow-auto

## 🐛 Common Issues

### Port 5173 Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

### Styles Not Updating
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server

### Icons Not Showing
- Check import: `import { IconName } from 'lucide-react'`
- Ensure lucide-react is installed: `npm list lucide-react`

### Presentation Mode Scaling
- Adjust `zoom: "1.25"` in App.jsx (line 234)
- Test on your presentation display

## 📞 Quick Commands

```bash
# Dev server
npm run dev

# Build
npm run build

# Preview production
npm run preview

# Check dependencies
npm list

# Update dependencies
npm update

# Install specific package
npm install package-name

# Remove dependency
npm uninstall package-name
```

---

**Last Updated:** January 5, 2026
**React Version:** 18.2.0
**Vite Version:** 5.0.8
