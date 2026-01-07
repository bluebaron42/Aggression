# Comprehensive Module Creation Prompt for AI Agents

## MASTER INSTRUCTION: Create a Complete Lesson Module for the Aggression Application

You are an expert React/JavaScript developer tasked with creating a complete, production-ready lesson module for the Aggression teaching application. This prompt contains everything you need to understand the architecture, standards, and implementation details.

---

## 🎯 YOUR MISSION

Create a **COMPLETE LESSON [X]** module including:
1. All required React components
2. Fully integrated App.jsx modifications
3. Understanding check quiz with randomized answers
4. Supporting simulations/visualizations
5. Essay planning guide
6. Evidence grid with research citations

**Timeline:** Build to production standards—no incomplete implementations.

---

## 📋 LESSON ARCHITECTURE OVERVIEW

### Standard Lesson Structure (9-10 slides)

Every lesson follows this invariant progression:

```
Slide 0: Title Slide (Motivation)
│
Slide 1: Do Now Quiz (Phase 1: Activation - retrieval from prior lessons)
│
Slides 2-3: Concept Slides (Phase 2: Concept - introduce 2 major concepts)
│
Slide 4: Understanding Check (Phase 2: Check ⭐ MANDATORY - quiz on slides 2-3)
│
Slides 5-6: Simulation/Interactive Task (Phase 3: Simulation - apply knowledge)
│
Slide 7: Evidence Grid (Phase 4: Evidence - research support with citations)
│
Slide 8: Critique/Evaluation (Phase 5: Evaluation - critical analysis)
│
Slide 9: Essay Plan (Phase 6: Assessment - synthesis & essay guide)
```

### Learning Objectives Met by This Structure

✅ **Phase 1 (Activation):** Retrieves prior knowledge → Do Now Quiz
✅ **Phase 2 (Concept):** Introduces new concepts → Concept Slides + Understanding Check
✅ **Phase 3 (Application):** Tests understanding → Simulation/Task
✅ **Phase 4 (Evidence):** Research support → Evidence Grid
✅ **Phase 5 (Evaluation):** Critical thinking → Critique Slides
✅ **Phase 6 (Assessment):** Synthesis → Essay Plan

---

## 🔴 CRITICAL REQUIREMENTS

### ⭐ #1: Understanding Check Component (NON-NEGOTIABLE)

**Location:** `/src/components/Lesson[X]UnderstandingCheck.jsx`

**Requirements:**
- **5 questions** testing the concepts from slides 2-3 ONLY
- **Mix of question types:**
  - 3x Scenario-based questions (realistic situations requiring application)
  - 2x Matching questions (concept-definition pairs)
- **Answer randomization:** ALL options must be randomized using `useMemo` + `shuffleArray()`
- **Detailed feedback:** Each question has 2-3 sentence explanations linking back to research
- **Color coding:** Match lesson theme (red/orange/amber/yellow/green/cyan/etc.)

**Why randomization is critical:**
- Prevents students from gaming the system by memorizing positions
- Students must understand content, not recognize answer positions
- Maintains assessment validity

**Acceptance Criteria:**
- ❌ NO hardcoded answer positions
- ✅ Feedback reinforces learning (not just "correct/wrong")
- ✅ Questions test comprehension, not trivia
- ✅ Randomization happens on every component mount

### #2: Lesson-Specific Content (Not Generic)

**DO:**
- ✅ Write questions about THIS lesson's research
- ✅ Reference studies covered in concept slides
- ✅ Use scenarios realistic to the lesson topic
- ✅ Include lesson-specific terminology

**DON'T:**
- ❌ Copy questions from other lessons
- ❌ Test content not yet taught (check slide order first)
- ❌ Use generic psychology questions

### #3: Component Structure Standards

All interactive components must follow this pattern:

```jsx
// Standard component structure
export default function ComponentName({ isPresentation }) {
  const [state, setState] = useState(initialValue)
  
  // Handle presentation mode sizing
  const textClass = isPresentation ? 'text-xl' : 'text-base'
  
  return (
    <div className={`flex flex-col gap-4 ${isPresentation ? 'px-12' : ''}`}>
      {/* Component content with isPresentation checks */}
    </div>
  )
}
```

**Why `isPresentation` matters:**
- Larger fonts for projection in classrooms
- Adjusted spacing for readability
- Maintained visual hierarchy at scale

### #4: Do Now Quiz Pattern

**Purpose:** Retrieve knowledge from 1-2 prior lessons (spaced retrieval)

```javascript
const lesson[X]DoNow = [
  { id: 1, question: "Topic from Lesson [X-1]: ...", options: ["A", "B", "C"], correct: 0 },
  { id: 2, question: "Topic from Lesson [X-1]: ...", options: ["A", "B", "C"], correct: 1 },
  { id: 3, question: "Topic from Lesson [X-2]: ...", options: ["A", "B", "C"], correct: 2 },
  { id: 4, question: "Topic from Lesson [X-2]: ...", options: ["A", "B", "C"], correct: 0 },
  { id: 5, question: "Mixed retrieval: ...", options: ["A", "B", "C"], correct: 1 },
]
```

**Rules:**
- ✅ 5 questions retrieving prior lessons
- ✅ No new content (not testing new lesson concepts)
- ✅ Mix of difficulty levels
- ✅ Contextual variety (don't ask same type 5 times)

### #5: Simulation/Interactive Component Rules

Every lesson has an interactive element (slide 5-6):

**Pattern Examples:**
- **Visualization:** Twin studies, enzyme mechanisms, neural processes
- **Game/Task:** Prediction games, verification tasks, decision simulations
- **Lab Simulation:** Experimental protocols, data analysis

**Requirements:**
- Provides immediate feedback (correct/incorrect with explanation)
- Tests understanding of ONE key concept from this lesson
- Engaging visuals (animations, colors, status feedback)
- Presentation mode support

### #6: Evidence Grid Format

**Location:** Component for slide 7 (Lesson[X]EvidenceGrid.jsx)

**Content:**
- **3-4 research studies** supporting lesson concepts
- Each study includes:
  - Study name & researchers (Year)
  - Sample details (N, design)
  - Key findings
  - Relevance to lesson concepts
  - Color-coded support indicator

**Example Structure:**
```jsx
const researchStudies = [
  {
    title: "Study Title (Researcher, Year)",
    details: "Sample: N=..., Design: ...",
    findings: "Result: ...",
    relevance: "Shows that...",
    color: "bg-[lesson-color]"
  },
  // ... 2-3 more studies
]
```

### #7: Essay Plan Component

**Location:** `/src/components/Lesson[X]EssayPlan.jsx`

**16-Mark (or appropriate level) Essay Guide:**

```jsx
const essayPlan = {
  AO1: {
    marks: 6,
    content: [
      "Define key concept 1",
      "Explain mechanism/process",
      "Define key concept 2",
      "Link to aggression outcomes"
    ]
  },
  AO3: {
    marks: 8,
    research: [
      { study: "Study 1 (Researcher, Year)", explains: "Concept A" },
      { study: "Study 2 (Researcher, Year)", explains: "Concept B" },
    ],
    evaluation: [
      "Strength: ...",
      "Weakness: ...",
      "Alternative: ..."
    ]
  },
  tips: [
    "Link every evaluation back to evidence",
    "Use terminology precisely",
    "Provide nuance—avoid oversimplification"
  ]
}
```

---

## 📁 FILE CHECKLIST: What You Must Create

For Lesson [X], create these files in `/src/components/`:

### Essential Files (All Required)

- [ ] `Lesson[X]DoNowQuiz.jsx` - 5-question retrieval quiz (usually auto-generated)
- [ ] `Lesson[X]UnderstandingCheck.jsx` - ⭐ **CRITICAL** - 5-question concept quiz
- [ ] `Lesson[X]Concept1Component.jsx` - Concept slide 1 visualization/explanation
- [ ] `Lesson[X]Concept2Component.jsx` - Concept slide 2 visualization/explanation
- [ ] `Lesson[X]SimulationComponent.jsx` - Interactive task/simulation (slide 5-6)
- [ ] `Lesson[X]EvidenceGrid.jsx` - Research studies display
- [ ] `Lesson[X]CritiqueGrid.jsx` - Evaluation/critical analysis
- [ ] `Lesson[X]EssayPlan.jsx` - Essay planning guide

### App.jsx Modifications (Must Complete)

- [ ] Import all 8 components at top of file
- [ ] Add `lesson[X]DoNow` data array with 5 questions
- [ ] Create `renderLesson[X]()` switch statement (9+ slides)
- [ ] Update `slideCount` conditional to include lesson [X]
- [ ] Add conditional rendering: `{currentLesson === [X] && renderLesson[X]()}`
- [ ] Add lesson [X] to `lessons` array with active: true
- [ ] Test all slide transitions and component renders

---

## 🎨 COLOR THEME PALETTE

Each lesson has a PRIMARY COLOR THEME. Use consistently:

```
Lesson 1: CYAN (Neural/Hormonal)    → cyan-400, cyan-500, cyan-600
Lesson 2: AMBER (Genetic)            → amber-400, amber-500, amber-600
Lesson 3: ORANGE (Ethological)       → orange-400, orange-500, orange-600
Lesson 4: RED (Evolutionary)         → red-400, red-500, red-600
Lesson 5: YELLOW (Frustration)       → yellow-400, yellow-500, yellow-600
Lesson 6: TEAL (Social Learning)     → teal-400, teal-500, teal-600
Lesson 7: PURPLE (Deindividuation)   → purple-400, purple-500, purple-600
Lesson 8: SLATE-400 (Institutional)  → slate-400, slate-500, slate-600
```

**Application:**
- Primary color in titles, headers, highlights
- 900-opacity variant for backgrounds (`bg-[color]-900/20`)
- Mix with slate-900 for contrast
- Use in all lesson components consistently

---

## 🔧 IMPLEMENTATION WORKFLOW

### Step 1: Plan the Lesson (Before Coding)
- [ ] Identify 2 major concepts (for slides 2-3)
- [ ] List 3-4 supporting research studies
- [ ] Decide on interactive simulation/task
- [ ] Plan 5 Understanding Check questions
- [ ] Outline essay plan (16-mark or equivalent)

### Step 2: Create Components in Order

**Priority 1 (Foundational):**
1. Concept components (slides 2-3)
2. Understanding Check (slide 4)

**Priority 2 (Interactive):**
3. Simulation component (slide 5-6)

**Priority 3 (Supporting):**
4. Evidence Grid (slide 7)
5. Critique Grid (slide 8)
6. Essay Plan (slide 9)

### Step 3: Create App.jsx Integration

```javascript
// 1. Add imports at top
import Lesson[X]UnderstandingCheck from './components/Lesson[X]UnderstandingCheck'
// ... other imports

// 2. Add Do Now data
const lesson[X]DoNow = [ ... ]

// 3. Create render function
const renderLesson[X] = () => {
  switch (currentSlide) {
    case 0: return <Slide>...TITLE...</Slide>
    case 1: return <Slide><Lesson[X]DoNowQuiz /></Slide>
    case 2: return <Slide><Concept1Component /></Slide>
    case 3: return <Slide><Concept2Component /></Slide>
    case 4: return <Slide><Lesson[X]UnderstandingCheck /></Slide>
    case 5: return <Slide><Simulation /></Slide>
    case 6: return <Slide><EvidenceGrid /></Slide>
    case 7: return <Slide><CritiqueGrid /></Slide>
    case 8: return <Slide><EssayPlan /></Slide>
    default: return null
  }
}

// 4. Update slideCount
const slideCount = currentLesson === [X] ? 9 : ...

// 5. Add rendering condition
{currentLesson === [X] && renderLesson[X]()}

// 6. Update lessons array
{ id: [X], title: "[X]: Lesson Title", active: true, complete: false }
```

### Step 4: Test Thoroughly

- [ ] Navigate to Lesson [X] via sidebar
- [ ] Test all 9 slides transition smoothly
- [ ] Answer all Understanding Check questions
- [ ] Verify randomization on component remount
- [ ] Test presentation mode (fullscreen)
- [ ] Verify all imports and no console errors

---

## 💡 UNDERSTANDING CHECK TEMPLATE: FULL EXAMPLE

```jsx
import React, { useState, useMemo } from 'react'
import { CheckCircle, AlertCircle, Brain } from 'lucide-react'

export default function Lesson[X]UnderstandingCheck({ isPresentation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState(false)

  // Shuffle function - CRITICAL for randomization
  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // CRITICAL: Randomize answers on mount using useMemo
  const questions = useMemo(() => {
    const baseQuestions = [
      {
        id: 1,
        type: 'scenario',
        question: 'Scenario testing concept from slide 2...',
        options: [
          { text: 'Wrong answer 1', correct: false },
          { text: 'Correct answer', correct: true },
          { text: 'Wrong answer 2', correct: false },
          { text: 'Wrong answer 3', correct: false }
        ],
        feedback: 'Explanation linking back to research/concept from slides 2-3...'
      },
      {
        id: 2,
        type: 'matching',
        question: 'Match concept to definition:',
        items: [
          { 
            label: 'Concept Term A', 
            options: ['Wrong def', 'Correct def', 'Wrong def'], 
            correct: 1 
          },
          { 
            label: 'Concept Term B', 
            options: ['Wrong def', 'Wrong def', 'Correct def'], 
            correct: 2 
          }
        ],
        feedback: 'Explanation of relationship and relevance to lesson...'
      },
      // ... 3 more questions (id: 3, 4, 5)
    ]

    // Apply randomization
    return baseQuestions.map(q => {
      if (q.type === 'scenario') {
        return { ...q, options: shuffleArray(q.options) }
      } else if (q.type === 'matching') {
        return {
          ...q,
          items: q.items.map(item => ({
            ...item,
            options: shuffleArray(item.options)
          }))
        }
      }
      return q
    })
  }, [])

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const currentQ = questions[currentQuestion]
  const userAnswer = answers[currentQ.id]
  const isAnswered = userAnswer !== undefined

  const getIsCorrect = () => {
    if (currentQ.type === 'matching') {
      return currentQ.items.every((item, idx) => userAnswer?.[idx] === item.correct)
    } else {
      return userAnswer?.correct === true
    }
  }

  const isCorrect = isAnswered ? getIsCorrect() : null

  return (
    <div className={`flex flex-col h-full gap-6 ${isPresentation ? 'px-12' : ''}`}>
      {/* Progress Bar */}
      <div className="flex items-center justify-between">
        <h3 className={`font-bold text-[LESSON-COLOR]-400 uppercase tracking-widest ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
          Check Your Understanding
        </h3>
        <span className={`font-mono text-slate-400 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
          Question {currentQuestion + 1} of {questions.length}
        </span>
      </div>

      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-[LESSON-COLOR]-500 transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Display */}
      <div className={`flex-grow bg-slate-900/50 border border-slate-800 rounded-xl p-8 flex flex-col justify-center ${isPresentation ? 'text-xl' : 'text-base'}`}>
        <h4 className={`font-bold text-white mb-8 ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>
          {currentQ.question}
        </h4>

        {/* Matching Type */}
        {currentQ.type === 'matching' && (
          <div className="space-y-6">
            {currentQ.items.map((item, itemIdx) => (
              <div key={itemIdx} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <p className={`font-bold text-[LESSON-COLOR]-300 mb-3 ${isPresentation ? 'text-2xl' : 'text-base'}`}>
                  {item.label}
                </p>
                <div className="space-y-2">
                  {item.options.map((option, optIdx) => (
                    <button
                      key={optIdx}
                      onClick={() => {
                        const newAnswers = [...(userAnswer || [])]
                        newAnswers[itemIdx] = optIdx
                        handleAnswer(currentQ.id, newAnswers)
                      }}
                      className={`w-full text-left p-3 rounded-lg transition-all text-sm border ${
                        userAnswer?.[itemIdx] === optIdx
                          ? 'bg-[LESSON-COLOR]-700 border-[LESSON-COLOR]-600 text-white'
                          : 'bg-slate-700 border-transparent hover:bg-slate-600 text-slate-300'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Scenario Type */}
        {currentQ.type === 'scenario' && (
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => {
                  handleAnswer(currentQ.id, option)
                }}
                className={`w-full text-left p-4 rounded-lg transition-all border font-medium ${
                  userAnswer === option
                    ? isAnswered 
                      ? (option.correct ? 'bg-green-900/30 border-green-500 text-green-300' : 'bg-red-900/30 border-red-500 text-red-300')
                      : 'bg-[LESSON-COLOR]-700 border-[LESSON-COLOR]-600 text-white'
                    : 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300'
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Feedback */}
      {isAnswered && (
        <div className={`bg-slate-900/80 border rounded-xl p-6 animate-fadeIn ${
          isCorrect ? 'border-green-500 bg-green-900/10' : 'border-red-500 bg-red-900/10'
        }`}>
          <div className="flex items-start gap-3">
            {isCorrect ? (
              <CheckCircle className="text-green-500 shrink-0 mt-1" />
            ) : (
              <AlertCircle className="text-red-500 shrink-0 mt-1" />
            )}
            <div>
              <p className={`font-bold text-lg mb-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {isCorrect ? 'Excellent!' : 'Not quite...'}
              </p>
              <p className={`${isPresentation ? 'text-xl' : 'text-base'} text-slate-200`}>
                {currentQ.feedback}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-4 justify-between">
        <button
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
          className={`px-6 py-3 font-bold rounded-lg transition-all border ${
            currentQuestion === 0
              ? 'border-transparent text-slate-600 cursor-not-allowed'
              : 'border-[LESSON-COLOR]-700 text-[LESSON-COLOR]-500 hover:bg-[LESSON-COLOR]-900/30'
          }`}
        >
          ← BACK
        </button>

        {currentQuestion === questions.length - 1 ? (
          <button
            disabled={!isAnswered}
            className={`px-8 py-3 font-bold rounded-lg transition-all ${
              isAnswered
                ? 'bg-green-600 hover:bg-green-500 text-white'
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            COMPLETE ✓
          </button>
        ) : (
          <button
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            disabled={!isAnswered}
            className={`px-8 py-3 font-bold rounded-lg transition-all ${
              isAnswered
                ? 'bg-[LESSON-COLOR]-600 hover:bg-[LESSON-COLOR]-500 text-white'
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            NEXT →
          </button>
        )}
      </div>
    </div>
  )
}
```

---

## 📊 EXAMPLE: Lesson Data Structure (Do Now)

```javascript
const lesson[X]DoNow = [
  { 
    id: 1, 
    question: "Lesson [X-1] Review: Concept from previous lesson?", 
    options: ["Wrong answer from L[X-1]", "Correct answer", "Wrong answer"],
    correct: 1 
  },
  { 
    id: 2, 
    question: "Lesson [X-1]: Another question about key concept?", 
    options: ["Wrong", "Wrong", "Correct"],
    correct: 2 
  },
  { 
    id: 3, 
    question: "Lesson [X-2]: Question retrieving from 2 lessons back?", 
    options: ["Correct", "Wrong", "Wrong"],
    correct: 0 
  },
  { 
    id: 4, 
    question: "Lesson [X-1]: Different aspect of prior learning?", 
    options: ["Wrong", "Correct", "Wrong"],
    correct: 1 
  },
  { 
    id: 5, 
    question: "Integrated: Question mixing multiple previous lessons?", 
    options: ["Wrong", "Wrong", "Correct"],
    correct: 2 
  },
]
```

---

## 🚀 FINAL VALIDATION CHECKLIST

Before submitting the lesson, verify:

### Understanding Check Component
- ✅ File: `/src/components/Lesson[X]UnderstandingCheck.jsx` exists
- ✅ Has 5 questions (3 scenario, 2 matching)
- ✅ Questions test ONLY slides 2-3 concepts
- ✅ ALL answer options randomized using `useMemo`
- ✅ Feedback is detailed (2-3 sentences, references research)
- ✅ Color theme matches lesson primary color
- ✅ Presentation mode support (isPresentation prop)

### App.jsx Integration
- ✅ All components imported at top
- ✅ `lesson[X]DoNow` data array (5 questions)
- ✅ `renderLesson[X]()` function covers all 9 slides
- ✅ Slide 4 includes `<Lesson[X]UnderstandingCheck />`
- ✅ `slideCount` includes lesson [X] with correct count
- ✅ Conditional rendering for `currentLesson === [X]`
- ✅ Lesson added to `lessons` array with `active: true`

### Component Quality
- ✅ No console errors or warnings
- ✅ All components accept `isPresentation` prop
- ✅ Color consistency throughout
- ✅ Smooth transitions between slides
- ✅ Interactive elements have clear feedback
- ✅ Mobile responsive (though optimized for desktop)

### Testing
- ✅ Navigate to lesson via sidebar
- ✅ All 9 slides load and transition
- ✅ Understanding Check: answer questions, see feedback
- ✅ Reload page → verify randomization works
- ✅ Presentation mode: fullscreen, text enlarged
- ✅ All simulations/interactive elements functional

---

## 🎓 KEY TEACHING PRINCIPLES TO EMBED

1. **Spaced Retrieval (Do Now):** Activate prior knowledge from previous lessons
2. **Concept Clarity (Slides 2-3):** Two major concepts, well-explained with visuals
3. **Immediate Assessment (Understanding Check):** Test comprehension while engaged
4. **Active Application (Simulation):** Let students DO something with the knowledge
5. **Evidence-Based (Grid):** Show real research supporting the theory
6. **Critical Analysis (Critique):** Develop evaluation skills (weaknesses, alternatives)
7. **Synthesis (Essay Plan):** Integrate into larger argument/assessment

---

## ❓ FREQUENTLY ASKED QUESTIONS

**Q: Can I copy questions from another lesson?**
A: NO. Each lesson's Understanding Check must be SPECIFIC to that lesson's content.

**Q: Why randomize answers?**
A: To ensure students understand content, not just memorize answer positions. Otherwise, bright students could game the system.

**Q: What if the lesson only has 8 slides?**
A: Adjust `slideCount` accordingly. The structure is flexible but MUST include slides 0, 1, 4 (title, do-now, understanding check).

**Q: Can I use different color themes per component?**
A: NO. All components in a lesson should use the lesson's PRIMARY color for consistency.

**Q: How detailed should simulations be?**
A: "Sufficiently complex to teach the concept but simple enough students finish in 3-5 minutes." Usually 1-3 interactive elements per simulation.

**Q: What if a concept needs more than 2 slides?**
A: Expand the structure. The key is: Understanding Check comes AFTER all new concept slides.

---

## 🎬 YOU ARE READY

You have everything needed to create a production-quality lesson module. Use this prompt as your reference guide throughout implementation. Build with confidence, test thoroughly, and ensure every requirement is met.

**Remember:** Quality over speed. A fully-realized lesson is worth more than a half-finished one.

**Now create an amazing lesson.** 🚀

