import React, { useState, useCallback } from 'react'
import {
  Activity, Brain, Zap, Clock, CheckCircle, X, Menu,
  Search, ChevronRight, ChevronLeft, Projector, Maximize2, Minimize2,
  Shield, Target, AlertTriangle, Microscope, Dna, FileText, FlaskConical,
  TrendingUp, Power, Syringe, Ban, Check, RefreshCw, GitMerge, FileCode,
  Eye, Fish, Swords, BookOpen, Leaf, Flag, Skull, Scroll
} from 'lucide-react'

// Import components
import PhaseHeader from './components/PhaseHeader'
import Slide from './components/Slide'
import DoNowQuiz from './components/DoNowQuiz'
import NeuralMap from './components/NeuralMap'
import ChemicalBalance from './components/ChemicalBalance'
import AFLQuiz from './components/AFLQuiz'
import GospicBriefing from './components/GospicBriefing'
import UltimatumGameSim from './components/UltimatumGameSim'
import EssayPlanReveal from './components/EssayPlanReveal'
import TwinStudyViz from './components/TwinStudyViz'
import MAOAMechanism from './components/MAOAMechanism'
import DataVerificationTask from './components/DataVerificationTask'
import GeneticProfilerSim from './components/GeneticProfilerSim'
import EvidenceGrid from './components/EvidenceGrid'
import Lesson2EssayPlan from './components/Lesson2EssayPlan'
import RitualDisplay from './components/RitualDisplay'
import InstinctAnatomy from './components/InstinctAnatomy'
import SticklebackLabSim from './components/SticklebackLabSim'
import Lesson3EssayPlan from './components/Lesson3EssayPlan'

// Data
const lessons = [
  { id: 1, title: "01: Neural & Hormonal Mechanisms", active: true, complete: false },
  { id: 2, title: "02: Genetic Factors", active: true, complete: false },
  { id: 3, title: "03: Ethological Explanations", active: true, complete: false },
  { id: 4, title: "04: Evolutionary Explanations", active: false, complete: false },
  { id: 5, title: "05: Social Psych I (Frustration)", active: false, complete: false },
  { id: 6, title: "06: Social Psych II (SLT)", active: false, complete: false },
  { id: 7, title: "07: Social Psych III (De-individuation)", active: false, complete: false },
  { id: 8, title: "08: Institutional Aggression", active: false, complete: false },
  { id: 9, title: "09: Media Influences", active: false, complete: false },
]

const lesson1DoNow = [
  { id: 1, question: "Biopsych: Which structure is NOT part of the Limbic System?", options: ["Amygdala", "Hippocampus", "Cerebellum"], correct: 2 },
  { id: 2, question: "Biopsych: Serotonin is an...", options: ["Excitatory Neurotransmitter", "Inhibitory Neurotransmitter", "Hormone"], correct: 1 },
  { id: 3, question: "Biopsych: The Amygdala is primarily responsible for...", options: ["Memory consolidation", "Emotional response & threat", "Motor control"], correct: 1 },
  { id: 4, question: "Biopsych: Which area of the brain handles impulse control?", options: ["Orbitofrontal Cortex (OFC)", "Occipital Lobe", "Brain Stem"], correct: 0 },
  { id: 5, question: "Hormones: Testosterone is an...", options: ["Oestrogen", "Androgen", "Enzyme"], correct: 1 }
]

const lesson2DoNow = [
  { id: 1, question: "Neural: Which brain structure assesses threat?", options: ["Hippocampus", "Amygdala", "Thalamus"], correct: 1 },
  { id: 2, question: "Neural: Low levels of Serotonin lead to...", options: ["Impulsivity", "Calmness", "Sleepiness"], correct: 0 },
  { id: 3, question: "Hormonal: Which hormone is an androgen linked to aggression?", options: ["Estrogen", "Cortisol", "Testosterone"], correct: 2 },
  { id: 4, question: "Neural: The OFC is involved in...", options: ["Vision", "Self-control / Inhibition", "Motor movement"], correct: 1 },
  { id: 5, question: "Evaluation: Gospic et al. used which game to study aggression?", options: ["The Prisoner's Dilemma", "The Ultimatum Game", "Monopoly"], correct: 1 }
]

const lesson3DoNow = [
  { id: 1, question: "Genetics: Concordance rate for aggression in MZ twins (Coccaro)?", options: ["19%", "50%", "100%"], correct: 1 },
  { id: 2, question: "Genetics: What is the MAOA gene nickname?", options: ["The Violence Gene", "The Warrior Gene", "The Fight Gene"], correct: 1 },
  { id: 3, question: "Genetics: MAOA-L leads to...", options: ["High Serotonin (Dysregulation)", "Low Serotonin", "High Dopamine"], correct: 0 },
  { id: 4, question: "Neural: Which system inhibits aggressive impulses?", options: ["Amygdala", "OFC (Orbitofrontal Cortex)", "Thalamus"], correct: 1 },
  { id: 5, question: "Hormonal: Testosterone is an...", options: ["Androgen", "Enzyme", "Neurotransmitter"], correct: 0 }
]

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentLesson, setCurrentLesson] = useState(1)
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [isPresentation, setIsPresentation] = useState(false)
  const slideCount = currentLesson === 1 ? 10 : currentLesson === 2 ? 9 : 8

  const nextSlide = useCallback(() => {
    if (currentSlide < slideCount - 1) setCurrentSlide(prev => prev + 1)
  }, [currentSlide, slideCount])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1)
  }, [currentSlide])

  const togglePresentation = () => {
    if (!isPresentation) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch((e) => console.log(e))
      }
      setSidebarOpen(false)
      setIsPresentation(true)
    } else {
      if (document.exitFullscreen && document.fullscreenElement) {
        document.exitFullscreen().catch((e) => console.log(e))
      }
      setIsPresentation(false)
    }
  }

  const renderLesson1 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-cyan-500 blur-[100px] opacity-20 rounded-full animate-pulse"></div>
                <div className="relative z-10 flex gap-4">
                  <Brain size={isPresentation ? 100 : 80} className="text-cyan-400 animate-heartbeat" />
                  <Zap size={isPresentation ? 100 : 80} className="text-white" />
                </div>
              </div>
              <h1 className={`font-bold text-white mb-4 tracking-widest uppercase ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
                NEURAL & HORMONAL <span className="text-cyan-500">MECHANISMS</span>
              </h1>
              <div className="h-1 w-64 bg-cyan-900 my-6"></div>
              <h2 className={`text-cyan-600 text-xs tracking-[0.5em] uppercase mb-12 font-bold`}>
                Aggression Lesson 01
              </h2>
              <button onClick={nextSlide} className={`bg-slate-900 border border-cyan-500 text-cyan-400 font-bold px-12 py-4 rounded-xl hover:bg-slate-800 transition-all ${isPresentation ? 'text-2xl' : 'text-lg'} uppercase shadow-lg`}>
                Initialize Scan
              </button>
            </div>
          </Slide>
        )

      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="Baseline Check" icon={Activity} time="05 MINS" isPresentation={isPresentation} />
            <DoNowQuiz questions={lesson1DoNow} isPresentation={isPresentation} />
          </Slide>
        )

      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Neural Map" icon={Brain} time="15 MINS" isPresentation={isPresentation} />
            <NeuralMap isPresentation={isPresentation} />
          </Slide>
        )

      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Chemical Balance" icon={FlaskConical} time="10 MINS" isPresentation={isPresentation} />
            <ChemicalBalance isPresentation={isPresentation} />
          </Slide>
        )

      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Check" title="Understanding Check" icon={Brain} time="10 MINS" isPresentation={isPresentation} />
            <AFLQuiz isPresentation={isPresentation} />
          </Slide>
        )

      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="Study Briefing" icon={FileText} time="05 MINS" isPresentation={isPresentation} />
            <GospicBriefing isPresentation={isPresentation} />
          </Slide>
        )

      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="fMRI Lab: Ultimatum" icon={Power} time="15 MINS" isPresentation={isPresentation} />
            <UltimatumGameSim isPresentation={isPresentation} />
          </Slide>
        )

      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Evidence" title="Clinical Data" icon={Search} time="10 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 h-full ${isPresentation ? 'px-12' : 'px-0'}`}>
              <div className="bg-slate-900 border border-slate-800 p-8 relative rounded-xl hover:border-cyan-500 transition-all group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Brain size={80} /></div>
                <h3 className="text-cyan-400 font-mono font-bold uppercase text-2xl mb-4 border-b border-slate-800 pb-2">
                  Gospic et al. (2011)
                </h3>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-cyan-950/30 p-4 border-l-2 border-cyan-500 rounded">
                    <strong className="text-cyan-200 block text-xs uppercase tracking-wider mb-1">Study</strong>
                    Ultimatum Game with fMRI. Participants faced unfair money offers.
                  </div>
                  <div className="bg-cyan-950/30 p-4 border-l-2 border-cyan-500 rounded">
                    <strong className="text-cyan-200 block text-xs uppercase tracking-wider mb-1">Findings</strong>
                    Rejection (Aggression) = Fast/High Amygdala response. Benzodiazepines (calming drug) reduced both Amygdala activity and aggression.
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-8 relative rounded-xl hover:border-blue-500 transition-all group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Dna size={80} /></div>
                <h3 className="text-blue-400 font-bold uppercase text-2xl mb-4 border-b border-slate-800 pb-2">
                  Virkkunen et al. (1994)
                </h3>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-blue-950/30 p-4 border-l-2 border-blue-500 rounded">
                    <strong className="text-blue-200 block text-xs uppercase tracking-wider mb-1">Study</strong>
                    Compared serotonin breakdown product (5-HIAA) in CSF of impulsive vs non-impulsive offenders.
                  </div>
                  <div className="bg-blue-950/30 p-4 border-l-2 border-blue-500 rounded">
                    <strong className="text-blue-200 block text-xs uppercase tracking-wider mb-1">Findings</strong>
                    Significantly lower levels of serotonin in impulsive offenders. Supports the deficiency hypothesis.
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        )

      case 8:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evaluation" title="Critical Analysis" icon={Target} time="10 MINS" isPresentation={isPresentation} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              <div className="bg-orange-900/10 border border-orange-500/30 p-6 relative rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-900/30 p-2 rounded-lg"><FlaskConical className="text-orange-400" size={32} /></div>
                  <h3 className="text-orange-400 font-bold uppercase text-2xl">Dual-Hormone Hypothesis</h3>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  <strong>Carre & Mehta (2011):</strong> Testosterone provides a partial explanation.
                  <br /><br />
                  They argue testosterone only leads to aggression when <strong>Cortisol</strong> (stress) is low. High cortisol blocks testosterone's influence on the amygdala. This interaction explains mixed results in previous studies.
                </p>
              </div>

              <div className="bg-yellow-900/10 border border-yellow-500/30 p-6 relative rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-900/30 p-2 rounded-lg"><TrendingUp className="text-yellow-400" size={32} /></div>
                  <h3 className="text-yellow-400 font-bold uppercase text-2xl">Correlational Issues</h3>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Much research is correlational. Does low serotonin cause aggression, or does aggressive behavior deplete serotonin?
                  <br /><br />
                  Furthermore, defining "aggression" differs between studies (e.g. violent crime vs hitting a button in a lab), making comparison difficult.
                </p>
              </div>
            </div>
          </Slide>
        )

      case 9:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 6: Assessment" title="Synthesis" icon={FileText} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-slate-950 border border-cyan-800 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center">
                <div className="flex items-center gap-3 mb-6 border-b border-cyan-900 pb-4">
                  <span className="bg-cyan-700 text-white px-3 py-1 text-sm font-bold font-mono">16 MARKS</span>
                  <h3 className="font-bold text-white text-xl font-mono">ASSESSMENT</h3>
                </div>
                <p className={`text-cyan-400 font-mono italic leading-snug border-l-4 border-cyan-600 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  "Discuss neural and hormonal mechanisms in aggression."
                </p>
              </div>
              <EssayPlanReveal isPresentation={isPresentation} />
            </div>
          </Slide>
        )

      default:
        return null
    }
  }

  const renderLesson2 = () => {
    switch (currentSlide) {
      // Slide 1: Title
      case 0: 
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-fuchsia-500 blur-[100px] opacity-20 rounded-full animate-pulse"></div>
                <div className="relative z-10 flex gap-4">
                  <Dna size={isPresentation ? 100 : 80} className="text-fuchsia-400 animate-spin-slow" />
                </div>
              </div>
              <h1 className={`font-bold text-white mb-4 tracking-widest uppercase ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>GENETIC <span className="text-fuchsia-500">FACTORS</span></h1>
              <div className="h-1 w-64 bg-indigo-800 my-6"></div>
              <h2 className={`text-indigo-400 text-xs tracking-[0.5em] uppercase mb-12 font-bold`}>Aggression Lesson 02</h2>
              <button onClick={nextSlide} className={`bg-indigo-950 border border-fuchsia-500 text-fuchsia-400 font-bold px-12 py-4 rounded-xl hover:bg-fuchsia-900/50 hover:text-white transition-all ${isPresentation ? 'text-2xl' : 'text-lg'} uppercase shadow-lg`}>Sequence Genotype</button>
            </div>
          </Slide>
        )

      // Slide 2: Do Now
      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="Retrieval: L01" icon={Brain} time="05 MINS" isPresentation={isPresentation} />
            <DoNowQuiz questions={lesson2DoNow} isPresentation={isPresentation} />
          </Slide>
        )

      // Slide 3: Twin Studies
      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Heritability" icon={TrendingUp} time="15 MINS" isPresentation={isPresentation} />
            <TwinStudyViz isPresentation={isPresentation} />
          </Slide>
        )

      // Slide 4: MAOA Mechanism
      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="The MAOA Gene" icon={Dna} time="10 MINS" isPresentation={isPresentation} />
            <MAOAMechanism isPresentation={isPresentation} />
          </Slide>
        )

      // Slide 5: Data Verification Task
      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Check" title="Data Verification" icon={FileCode} time="05 MINS" isPresentation={isPresentation} />
            <DataVerificationTask isPresentation={isPresentation} />
          </Slide>
        )

      // Slide 6: Genetic Profiler Simulation
      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="Genetic Profiler" icon={Microscope} time="15 MINS" isPresentation={isPresentation} />
            <GeneticProfilerSim isPresentation={isPresentation} />
          </Slide>
        )

      // Slide 7: Evidence Grid
      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Evidence" title="Research Data" icon={Search} time="10 MINS" isPresentation={isPresentation} />
            <EvidenceGrid isPresentation={isPresentation} />
          </Slide>
        )

      // Slide 8: Critique
      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evaluation" title="Critique & Issues" icon={Target} time="10 MINS" isPresentation={isPresentation} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {/* Measurement */}
              <div className="bg-indigo-900/30 border border-indigo-800 p-6 relative rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-900/50 p-2 rounded-lg"><FlaskConical className="text-indigo-400" size={32} /></div>
                  <h3 className="text-indigo-400 font-bold uppercase text-2xl">Measurement Issues</h3>
                </div>
                <p className="text-indigo-200 text-lg leading-relaxed">
                  Genetic influence varies depending on <em>how</em> aggression is measured. 
                  <br/><br/>
                  <strong>Rhee & Waldman (2002)</strong> found greater genetic influence for direct physical aggression compared to psychological/verbal aggression. Self-reports often differ from observational data.
                </p>
              </div>

              {/* Polygenic */}
              <div className="bg-fuchsia-900/10 border border-fuchsia-900/50 p-6 relative rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-fuchsia-900/30 p-2 rounded-lg"><GitMerge className="text-fuchsia-400" size={32} /></div>
                  <h3 className="text-fuchsia-400 font-bold uppercase text-2xl">Polygenic Explanation</h3>
                </div>
                <p className="text-indigo-200 text-lg leading-relaxed">
                  Focusing solely on the MAOA gene is reductionist. Aggression is likely <strong>polygenic</strong> (caused by thousands of genes interacting).
                  <br/><br/>
                  The <strong>SRY gene</strong> (on the Y chromosome) is also implicated, potentially explaining why men are generally more aggressive than women.
                </p>
              </div>
            </div>
          </Slide>
        )

      // Slide 9: Essay Plan
      case 8:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 6: Assessment" title="Synthesis" icon={FileText} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-indigo-950 border border-indigo-800 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center rounded-xl">
                <div className="flex items-center gap-3 mb-6 border-b border-indigo-900 pb-4">
                  <span className="bg-fuchsia-700 text-white px-3 py-1 text-sm font-bold font-mono">16 MARKS</span>
                  <h3 className="font-bold text-white text-xl font-mono">ASSESSMENT</h3>
                </div>
                <p className={`text-fuchsia-400 font-mono italic leading-snug border-l-4 border-fuchsia-600 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  "Discuss genetic factors in aggression."
                </p>
              </div>
              <Lesson2EssayPlan isPresentation={isPresentation} />
            </div>
          </Slide>
        )

      default:
        return null
    }
  }

  const renderLesson3 = () => {
    switch (currentSlide) {
      // Slide 1: Title
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-amber-600 blur-[100px] opacity-20 rounded-full animate-pulse"></div>
                <div className="relative z-10 flex gap-4">
                  <Eye size={isPresentation ? 100 : 80} className="text-amber-500" />
                  <Leaf size={isPresentation ? 100 : 80} className="text-stone-400" />
                </div>
              </div>
              <h1 className={`font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-stone-100 to-amber-600 mb-4 tracking-tight ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>Ethological Explanations</h1>
              <div className="h-1 w-64 bg-stone-700 my-6"></div>
              <h2 className={`text-stone-400 text-xs tracking-[0.5em] font-mono uppercase mb-12`}>Aggression Lesson 03</h2>
              <button onClick={nextSlide} className={`bg-stone-900 border border-amber-600 text-amber-500 font-bold px-12 py-4 rounded-xl hover:bg-amber-900 hover:text-white transition-all ${isPresentation ? 'text-2xl' : 'text-lg'} shadow-[0_0_20px_rgba(217,119,6,0.2)]`}>Begin Observations</button>
            </div>
          </Slide>
        )

      // Slide 2: Do Now
      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="Field Notes: Retrieval" icon={BookOpen} time="05 MINS" isPresentation={isPresentation} />
            <DoNowQuiz questions={lesson3DoNow} isPresentation={isPresentation} />
          </Slide>
        )

      // Slide 3: Ritual Display
      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Ritualistic Aggression" icon={Swords} time="15 MINS" isPresentation={isPresentation} />
            <RitualDisplay isPresentation={isPresentation} />
          </Slide>
        )

      // Slide 4: Instinct Anatomy
      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Anatomy of an Instinct" icon={Microscope} time="10 MINS" isPresentation={isPresentation} />
            <InstinctAnatomy isPresentation={isPresentation} />
          </Slide>
        )

      // Slide 5: Stickleback Lab
      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="The Stickleback Lab" icon={Fish} time="15 MINS" isPresentation={isPresentation} />
            <SticklebackLabSim isPresentation={isPresentation} />
          </Slide>
        )

      // Slide 6: Evidence
      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Evidence" title="Field Observations" icon={Search} time="10 MINS" isPresentation={isPresentation} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              <div className="bg-stone-900 border border-stone-800 p-8 rounded-xl relative hover:border-emerald-600 transition-all group">
                <div className="absolute top-4 right-4 opacity-20"><Fish size={48} className="text-emerald-500"/></div>
                <h3 className="text-emerald-500 font-serif font-bold text-2xl mb-4 border-b border-stone-800 pb-2">Tinbergen (1951)</h3>
                <div className="space-y-4 text-stone-300">
                  <p><strong className="text-white">Subject:</strong> Male Sticklebacks (highly territorial).</p>
                  <p><strong className="text-white">Method:</strong> Presented wooden models of varying shapes.</p>
                  <p><strong className="text-white">Findings:</strong> Regardless of shape, if model had a <span className="text-red-400">Red Spot</span> (Sign Stimulus), they attacked. Sequence was ballistic. Supports FAP.</p>
                </div>
              </div>

              <div className="bg-stone-900 border border-stone-800 p-8 rounded-xl relative hover:border-red-600 transition-all group">
                <div className="absolute top-4 right-4 opacity-20"><Skull size={48} className="text-red-500"/></div>
                <h3 className="text-red-500 font-serif font-bold text-2xl mb-4 border-b border-stone-800 pb-2">Goodall (2010)</h3>
                <div className="space-y-4 text-stone-300">
                  <p><strong className="text-white">Subject:</strong> Chimpanzees at Gombe Stream NP.</p>
                  <p><strong className="text-white">Observation:</strong> The "Four Year War". One group systematically killed a rival group.</p>
                  <p><strong className="text-white">Implication:</strong> Victims showed appeasement signals, but attackers continued. Contradicts Lorenz's "harmless ritual" theory.</p>
                </div>
              </div>
            </div>
          </Slide>
        )

      // Slide 7: Critique
      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evaluation" title="Critique & Debates" icon={AlertTriangle} time="10 MINS" isPresentation={isPresentation} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              <div className="bg-stone-900/50 border border-stone-800 p-6 rounded-xl relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-900/30 p-2 rounded-lg"><Flag className="text-amber-500" size={32} /></div>
                  <h3 className="text-amber-500 font-serif font-bold text-2xl">Culture of Honour</h3>
                </div>
                <p className="text-stone-300 text-lg leading-relaxed">
                  <strong>Nisbett (1993):</strong> Found significant differences in reactive aggression between Northern and Southern US white males. 
                  <br/><br/>
                  This demonstrates that <strong>culture overrides instinct</strong>. If aggression were purely ethological (innate), such regional variations would not exist.
                </p>
              </div>

              <div className="bg-stone-900/50 border border-stone-800 p-6 rounded-xl relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-900/30 p-2 rounded-lg"><Leaf className="text-emerald-500" size={32} /></div>
                  <h3 className="text-emerald-500 font-serif font-bold text-2xl">Human FAPs?</h3>
                </div>
                <p className="text-stone-300 text-lg leading-relaxed">
                  <strong>Hunt (1973):</strong> FAPs are not as "fixed" as implied. They are influenced by learning and environment. 
                  <br/><br/>
                  The term <strong>"Modal Action Pattern" (MAP)</strong> is now preferred, acknowledging that while there is an instinctual basis, humans (and many animals) possess flexibility.
                </p>
              </div>
            </div>
          </Slide>
        )

      // Slide 8: Essay Plan
      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 6: Assessment" title="Essay Planning" icon={CheckCircle} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-stone-900 border border-stone-800 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center rounded-xl">
                <div className="flex items-center gap-3 mb-6 border-b border-stone-800 pb-4">
                  <span className="bg-amber-700 text-white px-3 py-1 text-sm font-bold rounded">16 MARKS</span>
                  <h3 className="font-serif text-stone-200 text-xl">Exam Question</h3>
                </div>
                <p className={`text-white font-serif italic leading-snug border-l-4 border-amber-600 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  "Discuss ethological explanations of aggression."
                </p>
              </div>
              <Lesson3EssayPlan isPresentation={isPresentation} />
            </div>
          </Slide>
        )

      default:
        return null
    }
  }

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden selection:bg-cyan-500 selection:text-white">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-80' : 'w-0'} bg-slate-900 border-r border-slate-800 transition-all duration-300 flex flex-col z-20 shadow-2xl relative overflow-hidden`}>
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <span className="font-bold text-xl text-cyan-500 tracking-widest font-mono">AGGRESSION_MOD</span>
          <button onClick={() => setSidebarOpen(false)} className="text-cyan-700 hover:text-cyan-400"><X size={20} /></button>
        </div>
        <div className="flex-grow overflow-y-auto py-4">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => {
                if (lesson.active) {
                  setCurrentLesson(lesson.id)
                  setCurrentSlide(0)
                }
              }}
              className={`w-full text-left px-6 py-4 border-l-4 transition-all text-sm font-bold font-mono
                ${currentLesson === lesson.id ? 'border-cyan-500 bg-cyan-900/20 text-white shadow-[inset_10px_0_20px_-10px_rgba(6,182,212,0.2)]' : 'border-transparent text-cyan-800 hover:bg-cyan-900/20 hover:text-cyan-400'}
                ${!lesson.active ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              <div className="flex items-center justify-between">
                <span className="tracking-tight">{lesson.title}</span>
                {currentLesson === lesson.id && <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_5px_rgba(6,182,212,1)]"></div>}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-grow flex flex-col h-full relative bg-slate-950">

        {/* TOP BAR */}
        <div className="absolute top-4 left-4 z-50 flex gap-2">
          {!isSidebarOpen && <button onClick={() => setSidebarOpen(true)} className="bg-slate-950 p-2 border border-cyan-700 text-cyan-500 hover:bg-cyan-900/30 hover:text-white shadow-lg"><Menu size={20} /></button>}
        </div>
        <div className="absolute top-4 right-4 z-50 flex gap-2">
          <button onClick={togglePresentation} className={`p-2 border text-cyan-500 hover:text-white hover:bg-cyan-900/30 transition-all ${isPresentation ? 'bg-cyan-600 text-black border-cyan-500' : 'bg-slate-950 border-cyan-700'}`} title="Presentation Mode"><Projector size={20} /></button>
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="bg-slate-950 p-2 border border-cyan-700 text-cyan-500 hover:text-white hover:bg-cyan-900/30 transition-all" title={isSidebarOpen ? "Maximize Content" : "Show Sidebar"}>{isSidebarOpen ? <Maximize2 size={20} /> : <Minimize2 size={20} />}</button>
        </div>

        {/* PROGRESS BAR */}
        <div className="h-1 bg-slate-950 w-full border-b border-slate-800">
          <div className="h-full bg-cyan-500 transition-all duration-500" style={{ width: `${((currentSlide + 1) / slideCount) * 100}%` }} />
        </div>

        {/* MAIN CONTENT */}
        <main
          className="flex-grow relative overflow-hidden bg-slate-950"
          style={{ zoom: isPresentation ? "1.25" : "1" }}
        >
          {currentLesson === 1 && renderLesson1()}
          {currentLesson === 2 && renderLesson2()}
          {currentLesson === 3 && renderLesson3()}
        </main>

        {/* BOTTOM NAV */}
        <div className="h-20 border-t border-cyan-900 bg-slate-950 flex items-center justify-between px-8 z-10">
          <button onClick={() => currentSlide > 0 && setCurrentSlide(prev => prev - 1)} disabled={currentSlide === 0} className={`flex items-center gap-2 px-6 py-3 font-bold text-sm border transition-all ${currentSlide === 0 ? 'border-transparent text-cyan-900 cursor-not-allowed' : 'border-cyan-700 text-cyan-500 hover:bg-cyan-900/30 hover:text-white'}`}><ChevronLeft size={16} /> PREV</button>
          <span className="text-cyan-700 font-mono text-xs tracking-widest">{currentSlide + 1} / {slideCount}</span>
          <button onClick={() => currentSlide < (slideCount - 1) && setCurrentSlide(prev => prev + 1)} disabled={currentSlide === (slideCount - 1)} className={`flex items-center gap-2 px-6 py-3 font-bold text-sm border transition-all ${currentSlide === (slideCount - 1) ? 'border-transparent text-cyan-900 cursor-not-allowed' : 'bg-cyan-600 text-black border-cyan-600 hover:bg-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]'}`}>NEXT <ChevronRight size={16} /></button>
        </div>
      </div>
    </div>
  )
}
