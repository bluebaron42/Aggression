# Lesson 1: Neural & Hormonal Mechanisms - ADAPTABLE TEMPLATE

This document shows the **EXACT STRUCTURE** of Lesson 1 that agents can use as a template when creating new lessons. Simply replace the content, keep the structure.

---

## 📋 LESSON OVERVIEW

**Title:** Neural & Hormonal Mechanisms  
**Slides:** 10 total  
**Color Theme:** CYAN (cyan-400, cyan-500, cyan-600)  
**Duration:** 45-50 minutes  
**Key Concepts:**
1. The role of brain structures (amygdala, OFC) in aggression
2. Neurotransmitters (serotonin) and hormones (testosterone) in behavior control

---

## 🗂️ COMPLETE FILE STRUCTURE FOR LESSON 1

### Files Created:
1. ✅ `App.jsx` - MAIN APPLICATION FILE (contains all 6 lessons + navigation)
2. ✅ `DoNowQuiz.jsx` - Generic quiz component (used by all lessons)
3. ✅ `NeuralMap.jsx` - Slide 2: Brain structure visualization
4. ✅ `ChemicalBalance.jsx` - Slide 3: Serotonin/Testosterone interaction
5. ✅ `AFLQuiz.jsx` - Slide 4: Understanding Check (5 randomized questions) ⭐
6. ✅ `GospicBriefing.jsx` - Slide 5-6: The Ultimatum Game simulation
7. ✅ `EssayPlanReveal.jsx` - Slide 8: Essay planning guide

### Files NOT Created (Reused):
- `Slide.jsx` - Standard slide wrapper component
- `PhaseHeader.jsx` - Phase label component

---

## 📊 LESSON 1 FLOW & DATA

### Slide-by-Slide Breakdown

#### **Slide 0: Title Slide**
```jsx
case 0:
  return (
    <Slide isPresentation={isPresentation}>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-cyan-500 blur-[100px] opacity-20 rounded-full animate-pulse"></div>
          <div className="relative z-10 flex gap-4">
            <Brain size={isPresentation ? 100 : 80} className="text-cyan-400" />
            <Zap size={isPresentation ? 100 : 80} className="text-white" />
          </div>
        </div>
        <h1 className={`font-bold text-white mb-4 tracking-widest uppercase ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
          NEURAL & <span className="text-cyan-500">HORMONAL</span>
        </h1>
        <h2 className={`font-bold text-white mb-4 tracking-widest uppercase ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
          MECHANISMS
        </h2>
        <div className="h-1 w-64 bg-cyan-900 my-6"></div>
        <h2 className={`text-cyan-600 text-xs tracking-[0.5em] uppercase mb-12 font-bold`}>Aggression Lesson 01</h2>
        <button onClick={nextSlide} className={`bg-slate-900 border border-cyan-500 text-cyan-400 font-bold px-12 py-4 rounded-xl hover:bg-slate-800 transition-all ${isPresentation ? 'text-2xl' : 'text-lg'} uppercase shadow-lg`}>
          Initialize Briefing
        </button>
      </div>
    </Slide>
  )
```

**Key Pattern:**
- Use lesson color theme (CYAN for L1)
- Icons matching the concept (Brain + Zap for neural/electrical)
- Two-part title structure
- "Initialize Briefing" button style

---

#### **Slide 1: Do Now Quiz**
```jsx
case 1:
  return (
    <Slide isPresentation={isPresentation}>
      <PhaseHeader 
        phase="Phase 1: Activation" 
        title="Do Now Quiz" 
        icon={Activity} 
        time="5 MINS" 
        isPresentation={isPresentation} 
      />
      <DoNowQuiz 
        data={lesson1DoNow} 
        lessonColor="cyan" 
        isPresentation={isPresentation} 
      />
    </Slide>
  )
```

**Do Now Data:**
```javascript
const lesson1DoNow = [
  { id: 1, question: "Biopsych: Which structure is NOT part of the Limbic System?", options: ["Amygdala", "Hippocampus", "Cerebellum"], correct: 2 },
  { id: 2, question: "Biopsych: Serotonin is an...", options: ["Excitatory Neurotransmitter", "Inhibitory Neurotransmitter", "Hormone"], correct: 1 },
  { id: 3, question: "Biopsych: The Amygdala is primarily responsible for...", options: ["Memory consolidation", "Emotional response & threat", "Motor control"], correct: 1 },
  { id: 4, question: "Biopsych: Which area of the brain handles impulse control?", options: ["Orbitofrontal Cortex (OFC)", "Occipital Lobe", "Brain Stem"], correct: 0 },
  { id: 5, question: "Hormones: Testosterone is an...", options: ["Oestrogen", "Androgen", "Enzyme"], correct: 1 }
]
```

**Key Pattern:**
- PhaseHeader shows: Phase + Title + Icon + Time estimate
- Generic DoNowQuiz component used (reusable)
- Color parameter passed to component
- 5 questions retrieving prior knowledge (in this case, basic biopsych knowledge)

---

#### **Slide 2: Concept 1 - Neural Structures**
```jsx
case 2:
  return (
    <Slide isPresentation={isPresentation}>
      <PhaseHeader 
        phase="Phase 2: Concept" 
        title="The Neural Basis" 
        icon={Brain} 
        time="10 MINS" 
        isPresentation={isPresentation} 
      />
      <NeuralMap isPresentation={isPresentation} />
    </Slide>
  )
```

**NeuralMap.jsx Structure:**
- Interactive brain diagram
- Highlights amygdala (threat detection)
- Highlights OFC (impulse control/decision making)
- Toggleable explanations
- Color theme: cyan

---

#### **Slide 3: Concept 2 - Chemical Balance**
```jsx
case 3:
  return (
    <Slide isPresentation={isPresentation}>
      <PhaseHeader 
        phase="Phase 2: Concept" 
        title="Chemical Regulation" 
        icon={Zap} 
        time="10 MINS" 
        isPresentation={isPresentation} 
      />
      <ChemicalBalance isPresentation={isPresentation} />
    </Slide>
  )
```

**ChemicalBalance.jsx Structure:**
- Shows serotonin levels (inhibitory)
- Shows testosterone levels (activating)
- Interactive sliders showing effects
- Connection to aggression outcomes
- Color theme: cyan

---

#### **Slide 4: Understanding Check** ⭐ CRITICAL
```jsx
case 4:
  return (
    <Slide isPresentation={isPresentation}>
      <PhaseHeader 
        phase="Phase 2: Check" 
        title="Understanding Check" 
        icon={Brain} 
        time="10 MINS" 
        isPresentation={isPresentation} 
      />
      <AFLQuiz isPresentation={isPresentation} />
    </Slide>
  )
```

**AFLQuiz.jsx Structure (5-Question Template):**

```jsx
import React, { useState, useMemo } from 'react'
import { CheckCircle, AlertCircle, Brain } from 'lucide-react'

export default function AFLQuiz({ isPresentation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState(false)

  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const questions = useMemo(() => {
    const baseQuestions = [
      {
        id: 1,
        type: 'scenario',
        question: 'What is the primary role of the amygdala in aggression?',
        options: [
          { text: 'It plans long-term goals', correct: false },
          { text: 'It detects threats and triggers emotional response', correct: true },
          { text: 'It regulates hunger', correct: false },
          { text: 'It controls memory formation only', correct: false }
        ],
        feedback: 'Correct! The amygdala is the brain\'s threat detector. It rapidly assesses danger and triggers the fight-or-flight response, increasing aggression and fear responses. This is why people with amygdala damage show reduced fear and sometimes increased aggression.'
      },
      {
        id: 2,
        type: 'matching',
        question: 'Match the brain structure to its role in aggression:',
        items: [
          { 
            label: 'Orbitofrontal Cortex (OFC)', 
            options: ['Threat detection', 'Impulse control & decision-making', 'Memory storage'], 
            correct: 1 
          },
          { 
            label: 'Amygdala', 
            options: ['Planning', 'Threat detection & emotional response', 'Language'], 
            correct: 1 
          }
        ],
        feedback: 'The OFC handles decision-making and STOPS aggressive impulses. The amygdala TRIGGERS aggression in response to threat. Raine et al. found prefrontal cortex (which includes OFC) abnormalities in violent criminals, supporting the inhibition theory.'
      },
      {
        id: 3,
        type: 'scenario',
        question: 'Low serotonin levels are associated with...',
        options: [
          { text: 'Increased inhibition and calmness', correct: false },
          { text: 'Impulsivity and aggression', correct: true },
          { text: 'Better decision-making', correct: false },
          { text: 'Improved memory', correct: false }
        ],
        feedback: 'Correct! Serotonin is an INHIBITORY neurotransmitter. When levels are low, the brain has less ability to inhibit aggressive impulses. This is why SSRIs (which increase serotonin) are sometimes used to manage aggression.'
      },
      {
        id: 4,
        type: 'scenario',
        question: 'What does testosterone do in the context of aggression?',
        options: [
          { text: 'It directly causes aggression', correct: false },
          { text: 'It increases readiness to aggress but requires environmental triggers', correct: true },
          { text: 'It only affects sexual behavior', correct: false },
          { text: 'It reduces aggressive tendencies', correct: false }
        ],
        feedback: 'Good thinking! Testosterone doesn\'t CAUSE aggression directly—it amplifies aggressive responses to perceived threats or dominance challenges. This is an INTERACTION: hormone + environment. Without provocation, high testosterone alone doesn\'t guarantee aggression.'
      },
      {
        id: 5,
        type: 'scenario',
        question: 'Which combination would be MOST associated with increased aggressive behavior?',
        options: [
          { text: 'High testosterone + high serotonin + active OFC', correct: false },
          { text: 'High testosterone + low serotonin + weak OFC function', correct: true },
          { text: 'Low testosterone + high serotonin + weak OFC', correct: false },
          { text: 'Low testosterone + low serotonin + active OFC', correct: false }
        ],
        feedback: 'Excellent integration! You\'ve identified the neurochemical profile for aggression: high activating hormone (testosterone), low inhibitory neurotransmitter (serotonin), and weak impulse control (OFC). This is the biopsychological explanation for aggression.'
      }
    ]

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

  // ... rest of component (navigation, feedback display, etc.)
  // Copy from Lesson3UnderstandingCheck.jsx for the full implementation
}
```

**Key Points:**
- ⭐ Tests ONLY slides 2-3 concepts
- ⭐ Questions randomized on every mount
- 3 scenario + 2 matching mix
- Feedback reinforces learning with research references
- Color: cyan throughout

---

#### **Slide 5-6: Interactive Simulation**
```jsx
case 5:
  return (
    <Slide isPresentation={isPresentation}>
      <PhaseHeader 
        phase="Phase 3: Simulation" 
        title="The Ultimatum Game" 
        icon={Activity} 
        time="12 MINS" 
        isPresentation={isPresentation} 
      />
      <GospicBriefing isPresentation={isPresentation} />
    </Slide>
  )

case 6:
  return (
    <Slide isPresentation={isPresentation}>
      <PhaseHeader 
        phase="Phase 3: Simulation" 
        title="Decision Analysis" 
        icon={Brain} 
        time="5 MINS" 
        isPresentation={isPresentation} 
      />
      <div className="bg-slate-900/50 border border-cyan-800 rounded-xl p-8">
        <p className="text-cyan-300 text-lg mb-4">
          The Ultimatum Game reveals how amygdala activity (threat/fairness violation) overrides rational decision-making when offers are unfair. Gospic et al. showed testosterone increases amygdala response to unfair offers, explaining aggressive rejection.
        </p>
      </div>
    </Slide>
  )
```

**GospicBriefing.jsx Features:**
- Interactive game: Proposer/Responder roles
- Shows amygdala activity levels
- Testosterone/placebo condition
- Decision feedback
- Links to neural mechanisms

---

#### **Slide 7: Evidence Grid**
```jsx
case 7:
  return (
    <Slide isPresentation={isPresentation}>
      <PhaseHeader 
        phase="Phase 4: Evidence" 
        title="Research Support" 
        icon={FileText} 
        time="8 MINS" 
        isPresentation={isPresentation} 
      />
      <div className="grid grid-cols-2 gap-4 h-full">
        {/* Raine et al. (1997) */}
        <div className="bg-slate-900/50 border border-cyan-800 rounded-lg p-6">
          <h3 className="text-cyan-400 font-bold mb-2">Raine et al. (1997)</h3>
          <p className="text-sm text-slate-300 mb-2">Neuroimaging study of 41 murderers vs 41 controls</p>
          <p className="text-sm font-bold text-cyan-500">Finding:</p>
          <p className="text-sm text-slate-300">Murderers showed reduced prefrontal cortex (OFC) activity and increased amygdala activity</p>
        </div>

        {/* Coccaro et al. (1994) */}
        <div className="bg-slate-900/50 border border-cyan-800 rounded-lg p-6">
          <h3 className="text-cyan-400 font-bold mb-2">Coccaro et al. (1994)</h3>
          <p className="text-sm text-slate-300 mb-2">Pharmacological study with 35 personality-disordered men</p>
          <p className="text-sm font-bold text-cyan-500">Finding:</p>
          <p className="text-sm text-slate-300">Low serotonin (measured via prolactin response) correlated with aggression and impulsivity</p>
        </div>

        {/* Gospic et al. (2011) */}
        <div className="bg-slate-900/50 border border-cyan-800 rounded-lg p-6">
          <h3 className="text-cyan-400 font-bold mb-2">Gospic et al. (2011)</h3>
          <p className="text-sm text-slate-300 mb-2">fMRI study of 28 healthy volunteers in ultimatum game</p>
          <p className="text-sm font-bold text-cyan-500">Finding:</p>
          <p className="text-sm text-slate-300">Testosterone increased amygdala response to unfair offers, predicting rejection</p>
        </div>

        {/* Montoya et al. (2012) */}
        <div className="bg-slate-900/50 border border-cyan-800 rounded-lg p-6">
          <h3 className="text-cyan-400 font-bold mb-2">Montoya et al. (2012)</h3>
          <p className="text-sm text-slate-300 mb-2">Meta-analysis of 45 studies on testosterone & aggression</p>
          <p className="text-sm font-bold text-cyan-500">Finding:</p>
          <p className="text-sm text-slate-300">Small but significant positive correlation, moderated by dominance context</p>
        </div>
      </div>
    </Slide>
  )
```

---

#### **Slide 8: Critical Analysis**
```jsx
case 8:
  return (
    <Slide isPresentation={isPresentation}>
      <PhaseHeader 
        phase="Phase 5: Evaluation" 
        title="Critical Analysis" 
        icon={AlertTriangle} 
        time="8 MINS" 
        isPresentation={isPresentation} 
      />
      <div className="space-y-6">
        <div className="bg-green-900/20 border border-green-600 rounded-lg p-6">
          <p className="text-green-400 font-bold mb-2">Strength: Biological Evidence</p>
          <p className="text-slate-300">Neuroscience research (Raine, Gospic) provides objective brain imaging evidence for the neural basis of aggression. This moves beyond speculation.</p>
        </div>

        <div className="bg-red-900/20 border border-red-600 rounded-lg p-6">
          <p className="text-red-400 font-bold mb-2">Weakness: Correlation vs Causation</p>
          <p className="text-slate-300">Low serotonin correlates with aggression, but we can't prove serotonin causes it. It could be reverse causation or a third variable.</p>
        </div>

        <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-6">
          <p className="text-yellow-400 font-bold mb-2">Alternative: Diathesis-Stress Model</p>
          <p className="text-slate-300">Biology provides a PREDISPOSITION not destiny. Environmental factors (trauma, stress) interact with neural systems to produce aggression. Pure biology is reductionist.</p>
        </div>
      </div>
    </Slide>
  )
```

---

#### **Slide 9: Essay Plan**
```jsx
case 9:
  return (
    <Slide isPresentation={isPresentation}>
      <PhaseHeader 
        phase="Phase 6: Assessment" 
        title="Essay Planning Blueprint" 
        icon={Brain} 
        time="5 MINS" 
        isPresentation={isPresentation} 
      />
      <EssayPlanReveal isPresentation={isPresentation} />
    </Slide>
  )
```

**EssayPlanReveal.jsx Structure:**

```jsx
{
  AO1: {
    marks: 6,
    content: [
      "Define aggression (persistent goal-directed behavior intended to harm)",
      "Explain amygdala's role (threat detection → emotional response)",
      "Explain serotonin's role (inhibits impulses when high)",
      "Explain testosterone's role (amplifies aggressive readiness)",
      "Explain OFC's role (impulse control & decision-making)"
    ]
  },
  AO3: {
    marks: 10,
    research: [
      { study: "Raine et al. (1997)", explains: "Reduced OFC + increased amygdala in murderers" },
      { study: "Coccaro et al. (1994)", explains: "Low serotonin predicts aggression & impulsivity" },
      { study: "Gospic et al. (2011)", explains: "Testosterone increases amygdala response to unfairness" }
    ],
    evaluation: [
      "Strength: Objective neuroimaging evidence (not just behavior)",
      "Limitation: Correlation not causation (low serotonin ↔ aggression bidirectional)",
      "Reductionism: Ignores environmental & social factors entirely",
      "Counter: Diathesis-stress model—biology + environment interact"
    ]
  }
}
```

---

## 🔧 APP.JSX INTEGRATION FOR LESSON 1

### Imports Section
```javascript
import NeuralMap from './components/NeuralMap'
import ChemicalBalance from './components/ChemicalBalance'
import AFLQuiz from './components/AFLQuiz'
import GospicBriefing from './components/GospicBriefing'
import EssayPlanReveal from './components/EssayPlanReveal'
```

### Lesson Data
```javascript
const lesson1DoNow = [
  { id: 1, question: "Biopsych: Which structure is NOT part of the Limbic System?", options: ["Amygdala", "Hippocampus", "Cerebellum"], correct: 2 },
  { id: 2, question: "Biopsych: Serotonin is an...", options: ["Excitatory Neurotransmitter", "Inhibitory Neurotransmitter", "Hormone"], correct: 1 },
  { id: 3, question: "Biopsych: The Amygdala is primarily responsible for...", options: ["Memory consolidation", "Emotional response & threat", "Motor control"], correct: 1 },
  { id: 4, question: "Biopsych: Which area of the brain handles impulse control?", options: ["Orbitofrontal Cortex (OFC)", "Occipital Lobe", "Brain Stem"], correct: 0 },
  { id: 5, question: "Hormones: Testosterone is an...", options: ["Oestrogen", "Androgen", "Enzyme"], correct: 1 }
]
```

### Render Function
```javascript
const renderLesson1 = () => {
  switch (currentSlide) {
    case 0: // Title
      return (
        <Slide isPresentation={isPresentation}>
          {/* Title content as shown above */}
        </Slide>
      )
    case 1: // Do Now
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader phase="Phase 1: Activation" title="Do Now Quiz" icon={Activity} time="5 MINS" isPresentation={isPresentation} />
          <DoNowQuiz data={lesson1DoNow} lessonColor="cyan" isPresentation={isPresentation} />
        </Slide>
      )
    case 2: // NeuralMap
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader phase="Phase 2: Concept" title="The Neural Basis" icon={Brain} time="10 MINS" isPresentation={isPresentation} />
          <NeuralMap isPresentation={isPresentation} />
        </Slide>
      )
    case 3: // ChemicalBalance
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader phase="Phase 2: Concept" title="Chemical Regulation" icon={Zap} time="10 MINS" isPresentation={isPresentation} />
          <ChemicalBalance isPresentation={isPresentation} />
        </Slide>
      )
    case 4: // Understanding Check
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader phase="Phase 2: Check" title="Understanding Check" icon={Brain} time="10 MINS" isPresentation={isPresentation} />
          <AFLQuiz isPresentation={isPresentation} />
        </Slide>
      )
    case 5: // Ultimatum Game
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader phase="Phase 3: Simulation" title="The Ultimatum Game" icon={Activity} time="12 MINS" isPresentation={isPresentation} />
          <GospicBriefing isPresentation={isPresentation} />
        </Slide>
      )
    case 6: // Decision Analysis
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader phase="Phase 3: Simulation" title="Decision Analysis" icon={Brain} time="5 MINS" isPresentation={isPresentation} />
          {/* Analysis content */}
        </Slide>
      )
    case 7: // Evidence
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader phase="Phase 4: Evidence" title="Research Support" icon={FileText} time="8 MINS" isPresentation={isPresentation} />
          {/* Evidence grid */}
        </Slide>
      )
    case 8: // Critique
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader phase="Phase 5: Evaluation" title="Critical Analysis" icon={AlertTriangle} time="8 MINS" isPresentation={isPresentation} />
          {/* Critique content */}
        </Slide>
      )
    case 9: // Essay Plan
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader phase="Phase 6: Assessment" title="Essay Planning Blueprint" icon={Brain} time="5 MINS" isPresentation={isPresentation} />
          <EssayPlanReveal isPresentation={isPresentation} />
        </Slide>
      )
    default:
      return null
  }
}
```

### Lessons Array Entry
```javascript
{ id: 1, title: "01: Neural & Hormonal Mechanisms", active: true, complete: false }
```

### Slide Count
```javascript
const slideCount = currentLesson === 1 ? 10 : ...
```

### Rendering Condition
```javascript
{currentLesson === 1 && renderLesson1()}
```

---

## 🎨 COLOR CONSISTENCY FOR LESSON 1

All components use **CYAN** throughout:
- `text-cyan-400` for main text
- `text-cyan-500` for highlights
- `bg-cyan-900/20` for backgrounds
- `border-cyan-800` for borders
- `bg-cyan-600` for buttons
- Icons in cyan-400

---

## 🚀 USING THIS TEMPLATE FOR OTHER LESSONS

To create Lesson [X], simply:

1. **Copy the structure:** 0-9 slides following the same phases
2. **Replace concepts:** Swap NeuralMap + ChemicalBalance with your lesson's concepts
3. **Update colors:** Change CYAN to your lesson color (amber, orange, red, etc.)
4. **Update Understanding Check:** Create 5 NEW questions specific to your lesson's concepts
5. **Update simulations:** Create new interactive component for your lesson
6. **Update evidence:** Reference studies specific to your lesson
7. **Update essay plan:** Adjust marks and content to your lesson's focus

**The architecture remains constant. Only the content changes.**

---

## ✅ VALIDATION FOR THIS TEMPLATE

- ✅ Exactly 10 slides (0-9)
- ✅ Do Now uses prior lesson content (L1 uses general biopsych)
- ✅ Slide 4 has Understanding Check with 5 randomized questions
- ✅ All questions test slides 2-3 concepts only
- ✅ Evidence grid has 4 research studies
- ✅ Critical analysis covers strengths/limitations
- ✅ Essay plan provides structure (AO1: 6 marks, AO3: 10 marks)
- ✅ All components accept `isPresentation` prop
- ✅ Consistent color theme throughout (cyan)
- ✅ No hardcoded answer positions (all randomized)

