# Aggression: Psychology Interactive Lesson

An interactive React application for teaching A-Level Psychology lesson on neural and hormonal mechanisms in aggression.

## Features

- **Interactive UI**: Built with React 18 and Tailwind CSS
- **Multiple Learning Phases**:
  1. **Phase 1: Activation** - Diagnostic quiz for baseline knowledge
  2. **Phase 2: Concept** - Neural and chemical mechanisms explanation with interactive diagrams
  3. **Phase 3: Simulation** - fMRI ultimatum game simulation
  4. **Phase 4: Evidence** - Research findings from Gospic et al. and Virkkunen et al.
  5. **Phase 5: Evaluation** - Critical analysis and dual-hormone hypothesis
  6. **Phase 6: Assessment** - Essay planning guide with exam marking criteria

## Key Components

### Educational Content
- **Neural Map**: Interactive visualization of amygdala and orbitofrontal cortex
- **Chemical Balance**: Interactive sliders for serotonin and testosterone levels
- **Ultimatum Game Simulation**: Replicate Gospic et al. (2011) fMRI study with benzodiazepines intervention
- **Do Now Quiz**: 5-question retrieval practice with instant feedback

### Study Materials
- Research briefings (Gospic et al., 2011)
- Clinical data cards
- Essay planning framework (AO1/AO3 structure)
- Presentation mode (fullscreen)

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **React 18.2.0** - UI framework
- **Vite 5** - Build tool and dev server
- **Tailwind CSS 3.4** - Styling
- **lucide-react 0.263** - Icon library
- **PostCSS & Autoprefixer** - CSS processing

## Project Structure

```
src/
├── App.jsx                 # Main application component
├── main.jsx               # React entry point
├── index.css              # Tailwind and custom styles
└── components/
    ├── PhaseHeader.jsx    # Header with phase info and timer
    ├── Slide.jsx          # Slide container with animations
    ├── DoNowQuiz.jsx      # Interactive quiz component
    ├── NeuralMap.jsx      # Brain region visualization
    ├── ChemicalBalance.jsx # Neurotransmitter simulator
    ├── GospicBriefing.jsx  # Study briefing component
    ├── UltimatumGameSim.jsx # fMRI simulation game
    └── EssayPlanReveal.jsx  # Essay structure guide
```

## Usage

### Running the App
```bash
npm run dev
```
Opens at `http://localhost:3000` by default.

### Navigation
- Use **PREV/NEXT** buttons at the bottom to navigate between slides
- Use the **Sidebar** to jump between lessons
- Click **Presentation Mode** button (top right) for fullscreen presentation

### Interactive Features
- **Quiz**: Select answers and click "Analyze Results"
- **Neural Map**: Click brain regions to reveal information
- **Chemical Balance**: Drag sliders to adjust neurotransmitter levels
- **Simulation**: Select drug/provocation conditions and run scans
- **Essay Plan**: Click "ACCESS DATA" to reveal exam preparation details

## Keyboard Features
- Press Escape in presentation mode to exit fullscreen

## Lesson Content: Aggression L01

### Topics Covered
1. **Limbic System & Amygdala** - Threat assessment and aggression response
2. **Orbitofrontal Cortex (OFC)** - Impulse control and inhibition
3. **Serotonin** - Inhibitory neurotransmitter, role in aggression regulation
4. **Testosterone** - Excitatory hormone, social dominance aggression
5. **Dual-Hormone Hypothesis** - Interaction between testosterone and cortisol

### Research Studies
- **Gospic et al. (2011)**: fMRI ultimatum game study showing amygdala activation
- **Virkkunen et al. (1994)**: CSF serotonin analysis in prison offenders
- **Dolan et al. (2001)**: Testosterone-aggression correlation study
- **Carre & Mehta (2011)**: Dual-hormone hypothesis framework

## Customization

### Styling
- Tailwind colors can be customized in `tailwind.config.js`
- Custom animations defined in `src/index.css`
- Custom scrollbar styling available with `.custom-scrollbar` class

### Adding New Lessons
1. Add lesson data in `App.jsx`
2. Create new slide components as needed
3. Update the `renderLesson()` function to handle new lesson cases

## Browser Support

- Modern browsers with ES2020+ support
- Chrome, Firefox, Safari, Edge (latest versions)

## Performance

- Code splitting enabled in Vite
- Lazy component rendering
- Optimized bundle size (~150KB gzipped)
- Fast refresh during development

## License

Educational material for A-Level Psychology teaching.

## Future Enhancements

- [ ] Additional lessons (genetic factors, ethological explanations, etc.)
- [ ] Progress tracking and student accounts
- [ ] Answer submission and grading
- [ ] PDF export of essay plans
- [ ] Video explanations
- [ ] Accessibility improvements (WCAG 2.1)

---

Built with ❤️ for psychology educators and students.
