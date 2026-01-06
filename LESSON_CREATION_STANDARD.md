# Standard Lesson Creation Checklist

This document outlines the required steps when creating a new lesson for the Aggression teaching application.

## Required Components for Each Lesson

### 1. **Lesson Structure (Slides)**
Each lesson must follow this standardized structure:

- **Slide 0:** Title Slide
- **Slide 1:** Do Now Quiz (Phase 1: Activation)
- **Slides 2-3:** Concept Slides (Phase 2: Concept)
- **Slide 4:** **Understanding Check (Phase 2: Check)** ⭐ **MANDATORY**
- **Remaining Slides:** Simulation, Evidence, Evaluation, and Assessment phases

### 2. **Understanding Check Component** ⭐ CRITICAL

**Every lesson MUST have a lesson-specific understanding check component.**

#### File Location
`/src/components/Lesson[X]UnderstandingCheck.jsx`

#### Requirements
- **5 questions** covering the main concepts from that specific lesson
- Mix of **scenario-based** and **matching** question types
- **Detailed feedback** for each answer that reinforces learning
- Color-coded to match the lesson theme
- Include educational explanations in the feedback

#### Question Design Guidelines
✅ **DO:**
- Test understanding of key concepts taught in slides 2-3
- Include research studies covered in the lesson
- Test critical evaluation points
- Use real scenarios that require application of knowledge
- Provide detailed explanations in feedback

❌ **DON'T:**
- Reuse generic questions from other lessons
- Test content not yet covered in the lesson
- Use simple factual recall without understanding
- Copy questions from other lessons

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

### 3. **Do Now Quiz Data**
Add lesson-specific Do Now questions to `App.jsx`:

```javascript
const lesson[X]DoNow = [
  { id: 1, question: "...", options: ["...", "...", "..."], correct: 0 },
  // ... 4-5 questions reviewing previous lessons
]
```

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

## Current Status

### Lessons 1-5: ✅ Complete (All with randomized answers)
- **Lesson 1:** AFLQuiz (neural/hormonal) ✅ Randomized
- **Lesson 2:** DataVerificationTask (custom genetic verification)
- **Lesson 3:** Lesson3UnderstandingCheck ✅ Randomized
- **Lesson 4:** Lesson4UnderstandingCheck ✅ Randomized
- **Lesson 5:** Lesson5UnderstandingCheck ✅ Randomized

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
