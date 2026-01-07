# Quick Reference: Lesson Creation for Agents

Use this document to quickly navigate the three comprehensive resources for creating lessons.

---

## 📚 THE THREE DOCUMENTS

### 1. **COMPREHENSIVE_MODULE_CREATION_PROMPT.md** ← START HERE FOR AGENTS
**Purpose:** The MASTER PROMPT for AI agents to follow when building a lesson module.

**Contains:**
- Complete architectural overview of lesson structure
- All critical requirements with explanations
- Color theme palette for all 8 lessons
- Full code examples and templates
- Step-by-step implementation workflow
- Validation checklist
- FAQ section

**Use When:** You're building a lesson from scratch and need authoritative guidance on requirements and patterns.

**Key Sections:**
- Learning phases (Activation → Assessment)
- Critical requirements (Answer randomization, Understanding Check)
- File checklist (What to create)
- Understanding Check template with full code
- Do Now quiz pattern
- Evidence Grid format
- Essay Plan component structure

---

### 2. **LESSON_CREATION_STANDARD.md** ← REFERENCE FOR STANDARDS
**Purpose:** The official standard checklist for lesson creation.

**Contains:**
- Required lesson structure (9-10 slides)
- Detailed Understanding Check requirements with emphasis on answer randomization
- Do Now quiz guidelines (spaced retrieval, 5 questions from prior lessons)
- App.jsx integration checklist
- Verification checklist before considering lesson complete
- Current status of all 8 lessons

**Use When:** You need to verify you're meeting the official standards, or want to check current lesson status.

**Key Sections:**
- Lesson architecture (slides 0-9 structure)
- Why randomization matters
- Question design guidelines
- App.jsx integration requirements
- Reference to comprehensive prompt for agents

---

### 3. **LESSON_1_TEMPLATE_SHELL.md** ← ADAPTABLE EXAMPLE
**Purpose:** The EXACT STRUCTURE of Lesson 1, showing everything agents need to replicate for new lessons.

**Contains:**
- Complete lesson overview and data
- Slide-by-slide breakdown with exact code
- All 5 Understanding Check questions with feedback
- All 4 research studies in evidence grid
- Critical analysis structure
- Essay plan with mark breakdown
- Full App.jsx integration code
- Color consistency pattern
- Validation checklist

**Use When:** You're creating Lesson 2-8 and need a concrete example to follow. Simply replace content while keeping structure.

**Key Sections:**
- Complete file structure (what gets created)
- Each slide with code examples
- Understanding Check template with 5 real questions from L1
- Evidence Grid with Raine, Coccaro, Gospic, Montoya studies
- How to use this template for other lessons

---

## 🎯 TYPICAL AGENT WORKFLOW

When an AI agent is asked to create Lesson [X]:

1. **Read** COMPREHENSIVE_MODULE_CREATION_PROMPT.md (get all requirements)
2. **Reference** LESSON_1_TEMPLATE_SHELL.md (see exact structure)
3. **Verify Against** LESSON_CREATION_STANDARD.md (ensure compliance)
4. **Implement** Following the template structure
5. **Validate** Using the checklists in all three documents

---

## 🔴 CRITICAL REQUIREMENTS (Highlighted Across All Docs)

### ⭐ Answer Randomization (MOST CRITICAL)
- **Location:** Emphasized in all 3 documents
- **Why:** Prevents gaming, ensures comprehension
- **How:** Use `useMemo` + `shuffleArray()` pattern
- **What:** Randomize options in ALL questions (scenario AND matching)
- **When:** On every component mount

### ⭐ Understanding Check (SLIDE 4)
- **Location:** Emphasized in all 3 documents  
- **Requirements:** 5 questions, 3 scenario + 2 matching
- **Content:** Test ONLY slides 2-3 concepts
- **Feedback:** 2-3 sentences linking to research
- **Location in App.jsx:** Case 4 of renderLesson[X]()

### ⭐ Do Now Quiz (SLIDE 1)
- **Location:** Emphasized in COMPREHENSIVE and STANDARD
- **Requirements:** 5 questions from PREVIOUS lessons only
- **Purpose:** Spaced retrieval activation
- **No New Content:** Students shouldn't encounter lesson [X] concepts on slide 1

---

## 📊 COLOR THEMES FOR REFERENCE

```
Lesson 1: CYAN       → cyan-400, cyan-500, cyan-600 (Neural/Hormonal)
Lesson 2: AMBER      → amber-400, amber-500, amber-600 (Genetic)
Lesson 3: ORANGE     → orange-400, orange-500, orange-600 (Ethological)
Lesson 4: RED        → red-400, red-500, red-600 (Evolutionary)
Lesson 5: YELLOW     → yellow-400, yellow-500, yellow-600 (Frustration)
Lesson 6: TEAL       → teal-400, teal-500, teal-600 (Social Learning)
Lesson 7: PURPLE     → purple-400, purple-500, purple-600 (De-individuation)
Lesson 8: SLATE-400  → slate-400, slate-500, slate-600 (Institutional)
```

---

## 📋 STANDARD SLIDE STRUCTURE (All Lessons)

```
Slide 0: Title (icons + concept intro + start button)
Slide 1: Do Now (spaced retrieval from L[X-1] & L[X-2])
Slide 2: Concept 1 (visualization/explanation of first major concept)
Slide 3: Concept 2 (visualization/explanation of second major concept)
Slide 4: Understanding Check ⭐ (5 questions on slides 2-3, randomized answers)
Slide 5-6: Simulation/Task (interactive application of concepts)
Slide 7: Evidence Grid (3-4 research studies with citations)
Slide 8: Critical Analysis (strengths/limitations/alternatives)
Slide 9: Essay Plan (AO1/AO3 breakdown, exam guidance)
```

---

## 🚀 QUICK START: Creating Lesson [X]

1. **Open COMPREHENSIVE_MODULE_CREATION_PROMPT.md**
2. **Find your lesson number and color theme**
3. **Open LESSON_1_TEMPLATE_SHELL.md**
4. **Copy the structure, replace content for Lesson [X]**
5. **Create 5 Understanding Check questions** (test slides 2-3 ONLY)
6. **Randomize all answers** (use shuffleArray in useMemo)
7. **Follow App.jsx integration pattern** (imports, data, render, integration)
8. **Reference LESSON_CREATION_STANDARD.md** (verify checklist)
9. **Test all slides, navigation, and randomization**

---

## ❓ WHERE TO FIND SPECIFIC INFO

| Need | Document | Section |
|------|----------|---------|
| What are the phases of learning? | COMPREHENSIVE | "Learning Objectives Met by Structure" |
| How to structure Understanding Check? | LESSON_1_TEMPLATE | "Slide 4: Understanding Check" |
| Why randomize answers? | LESSON_CREATION_STANDARD | "Why Answer Randomization is Critical" |
| How to integrate into App.jsx? | LESSON_1_TEMPLATE | "App.jsx Integration" |
| Do Now quiz requirements | LESSON_CREATION_STANDARD | "Do Now Quiz Data" |
| Color themes | COMPREHENSIVE | "Color Theme Palette" |
| Essay plan structure | LESSON_1_TEMPLATE | "Slide 9: Essay Plan" |
| Evidence grid format | COMPREHENSIVE | "Evidence Grid Format" |
| Verification checklist | LESSON_CREATION_STANDARD | "Verification Checklist" |
| Question design guidelines | LESSON_CREATION_STANDARD | "Question Design Guidelines" |
| Full implementation workflow | COMPREHENSIVE | "Implementation Workflow" |
| Complete code example | LESSON_1_TEMPLATE | "All slides with code" |

---

## 🎓 PEDAGOGICAL FOUNDATION

All three documents are built on this learning progression:

1. **Activation** (Do Now) → Retrieve prior knowledge
2. **Concept** (Slides 2-3) → Present new information
3. **Check** (Understanding Check) → Assess comprehension immediately
4. **Application** (Simulation) → Apply knowledge actively
5. **Evidence** (Evidence Grid) → Support with research
6. **Evaluation** (Critique) → Develop critical thinking
7. **Assessment** (Essay Plan) → Synthesize for exams

This structure appears in ALL lessons and is enforced across all three documents.

---

## 📞 IF YOU'RE STUCK

**Understanding Check unclear?** → LESSON_1_TEMPLATE (shows 5 real questions)  
**Answer randomization confused?** → COMPREHENSIVE (full template with code)  
**App.jsx integration?** → LESSON_1_TEMPLATE (complete integration code)  
**Color theme?** → COMPREHENSIVE (palette table)  
**Is this meeting standards?** → LESSON_CREATION_STANDARD (verification checklist)

---

## ✅ WHEN YOU'RE DONE

Before submitting Lesson [X], use the **LESSON_CREATION_STANDARD.md** verification checklist:

- [ ] Understanding Check has 5 randomized questions
- [ ] Do Now has 5 questions from prior lessons
- [ ] All 9-10 slides render correctly
- [ ] App.jsx has all imports, data, render function, integration
- [ ] Color theme consistent throughout
- [ ] No console errors
- [ ] Presentation mode works (text enlarged)
- [ ] All components accept isPresentation prop

Once all boxes are checked, the lesson is production-ready! 🚀

