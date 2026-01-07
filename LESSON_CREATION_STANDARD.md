# Standard Lesson Creation Checklist

This document outlines the required steps when creating a new lesson for the Aggression teaching application.

## ⭐ CRITICAL: Agent Prompt Location

For creating new modules using an AI agent, see: **[COMPREHENSIVE_MODULE_CREATION_PROMPT.md](COMPREHENSIVE_MODULE_CREATION_PROMPT.md)**

This prompt contains everything agents need to create complete, production-ready lessons following all standards below.

---

## Required Components for Each Lesson

### 1. **Lesson Structure (Slides)** - Non-Negotiable Architecture

Each lesson must follow this standardized structure (9-10 slides):

- **Slide 0:** Title Slide (Visual motivation + concept introduction)
- **Slide 1:** Do Now Quiz (Phase 1: Activation - spaced retrieval from prior lessons)
- **Slides 2-3:** Concept Slides (Phase 2: Concept - teach 2 major concepts with visuals)
- **Slide 4:** **Understanding Check (Phase 2: Check)** ⭐ **MANDATORY - NEVER SKIP**
- **Slide 5-6:** Simulation/Interactive Task (Phase 3: Application - active learning)
- **Slide 7:** Evidence Grid (Phase 4: Evidence - research support with citations)
- **Slide 8:** Critique/Evaluation (Phase 5: Evaluation - critical thinking)
- **Slide 9:** Essay Plan (Phase 6: Assessment - synthesis & exam guidance)

### 2. **Do Now Quiz Data** ⭐ CRITICAL FOR SPACED RETRIEVAL

Add lesson-specific Do Now questions to `App.jsx`:

**Purpose:** Activate prior knowledge through spaced retrieval. Students answer questions from 1-2 PREVIOUS lessons, not current lesson.

**Rules:**
- ✅ 5 questions total
- ✅ Questions from Lesson [X-1] and Lesson [X-2] ONLY
- ✅ NO new content (not testing current lesson concepts)
- ✅ Mix question types and topics (don't ask same type 5 times)

```javascript
const lesson[X]DoNow = [
  { id: 1, question: "Lesson [X-1] concept: ...", options: ["...", "...", "..."], correct: 0 },
  { id: 2, question: "Lesson [X-1] research: ...", options: ["...", "...", "..."], correct: 1 },
  { id: 3, question: "Lesson [X-2] definition: ...", options: ["...", "...", "..."], correct: 2 },
  { id: 4, question: "Lesson [X-1] mechanism: ...", options: ["...", "...", "..."], correct: 0 },
  { id: 5, question: "Lesson [X-2] integrated: ...", options: ["...", "...", "..."], correct: 1 },
]
```

### 3. **Understanding Check Component** ⭐ MOST CRITICAL

**Every lesson MUST have a lesson-specific understanding check component.**

#### File Location
`/src/components/Lesson[X]UnderstandingCheck.jsx`

#### Requirements
- **5 questions** covering ONLY the main concepts from slides 2-3 in THIS lesson
- **Mix:** 3x Scenario-based + 2x Matching question types
- **Detailed feedback** for each answer (2-3 sentences, educational value)
- **Answer randomization:** ALL options randomized using `useMemo` + `shuffleArray()` ⭐ CRITICAL
- **Color-coded** to match the lesson theme
- **Presentation mode support:** Accept `isPresentation` prop for larger fonts

#### Why Answer Randomization is Critical
- Prevents students from gaming the system by memorizing answer positions
- Students must UNDERSTAND content, not just recognize correct position
- Without randomization, assessment validity is compromised
- Implement using `useMemo` to shuffle on every component mount

#### Question Design Guidelines
✅ **DO:**
- Test UNDERSTANDING of concepts taught in slides 2-3 ONLY
- Include research studies covered in THIS lesson
- Use realistic scenarios requiring application of knowledge
- Provide detailed explanations in feedback linking back to research/concepts
- Randomize answers using the shuffleArray pattern

❌ **DON'T:**
- Copy/reuse questions from other lessons
- Test content not yet covered in this lesson
- Use simple factual recall without requiring understanding
- Include hardcoded answer positions—ALWAYS randomize
- Test evaluation/critique (that's for later slides)

#### Example Template Structure
```jsx
import React, { useState, useMemo } from 'react'
import { CheckCircle, AlertCircle, Brain } from 'lucide-react'

export default function Lesson[X]UnderstandingCheck({ isPresentation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState(false)

  // Shuffle function to randomize answer order
  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // ⭐ CRITICAL: Randomize answer order on component mount
  const questions = useMemo(() => {
    const baseQuestions = [
      {
        id: 1,
        type: 'scenario',
        question: 'Specific to lesson content...',
        options: [
          { text: '...', correct: false },
          { text: '...', correct: true },
          // ...
        ],
        feedback: 'Detailed explanation linking back to lesson concepts...'
      },
      {
        id: 2,
        type: 'matching',
        question: 'Match the concept to its definition:',
        items: [
          { label: 'Term from lesson', options: ['Wrong', 'Correct', 'Wrong'], correct: 1 },
          // ...
        ],
        feedback: 'Explanation of the relationship...'
      },
      // ... 3 more questions
    ]

    // Shuffle options for scenario questions and matching items
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

  // ... rest of component
}
```

**⭐ CRITICAL REQUIREMENT: Answer Randomization**
- ALL questions must have randomized answer order
- Use `useMemo` to shuffle options on component mount
- This prevents students from gaming the system by memorizing answer positions
- Shuffle both scenario question options AND matching question item options

### 4. **App.jsx Integration**

#### Import Components
```javascript
import Lesson[X]DoNowQuiz from './components/Lesson[X]DoNowQuiz'
import Lesson[X]UnderstandingCheck from './components/Lesson[X]UnderstandingCheck'
import Lesson[X]EssayPlan from './components/Lesson[X]EssayPlan'
// ... other lesson-specific components
```

#### Update Slide Count
```javascript
const slideCount = currentLesson === 1 ? 10 : 
                   currentLesson === 2 ? 9 : 
                   currentLesson === 3 ? 9 : 
                   currentLesson === 4 ? 9 : 
                   currentLesson === 5 ? 9 :
                   currentLesson === [X] ? [COUNT] : 0
```

#### Render Function
```javascript
const renderLesson[X] = () => {
  switch (currentSlide) {
    case 0: // Title
    case 1: // Do Now
    case 2-3: // Concepts
    case 4: // Understanding Check ⭐
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader phase="Phase 2: Check" title="Understanding Check" icon={Brain} time="10 MINS" isPresentation={isPresentation} />
          <Lesson[X]UnderstandingCheck isPresentation={isPresentation} />
        </Slide>
      )
    // ... remaining slides
  }
}
```

### 5. **Lessons Data Array**
Update the lessons array to mark the lesson as active:

```javascript
const lessons = [
  // ...
  { id: X, title: "0X: Lesson Title", active: true, complete: false },
]
```

## Verification Checklist

Before considering a lesson complete, verify:

- ✅ Understanding Check component created with 5 lesson-specific questions
- ✅ **Answer order randomized using useMemo and shuffleArray** ⭐
- ✅ Understanding Check imported in App.jsx
- ✅ Understanding Check inserted at slide position 4 (after concepts)
- ✅ Slide count updated to include the understanding check
- ✅ Color theme matches lesson (red/orange/amber/etc.)
- ✅ All question feedback provides educational value
- ✅ Questions test understanding, not just recall
- ✅ No syntax errors in App.jsx
- ✅ Lesson marked as active in lessons array

## For AI Agents Creating New Modules

When using an AI agent to create a new module, provide them with the **[COMPREHENSIVE_MODULE_CREATION_PROMPT.md](COMPREHENSIVE_MODULE_CREATION_PROMPT.md)**.

This document contains:
- Complete architectural overview
- All critical requirements with justification
- Full code examples and templates
- Step-by-step implementation workflow
- Validation checklist
- Color theme palette
- Understanding Check template with randomization pattern

The agent should use it as their authoritative reference throughout the entire implementation process.

### Lessons 6-9: ⏳ Not Yet Created
When creating these lessons, **remember to include the Understanding Check component from the start.**

## Common Mistakes to Avoid

1. ❌ Forgetting to create a lesson-specific understanding check
2. ❌ Reusing the generic AFLQuiz for all lessons
3. ❌ **Not randomizing answer order (students will memorize positions!)** ⭐
4. ❌ Forgetting to update the slide count
5. ❌ Not importing the new component
6. ❌ Placing the understanding check at the wrong slide position
7. ❌ Writing questions that don't relate to the lesson content
8. ❌ Skipping the feedback explanations
9. ❌ Forgetting to add useMemo for answer randomization

---

**Last Updated:** January 6, 2026  
**Standard Enforced:** All new lessons MUST include a lesson-specific Understanding Check component.
