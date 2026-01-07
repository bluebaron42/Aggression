import React, { useState, useCallback } from 'react'
import {
  Activity, Brain, Zap, Clock, CheckCircle, X, Menu,
  Search, ChevronRight, ChevronLeft, Projector, Maximize2, Minimize2,
  Shield, Target, AlertTriangle, Microscope, Dna, FileText, FlaskConical,
  TrendingUp, Power, Syringe, Ban, Check, RefreshCw, GitMerge, FileCode,
  Eye, Fish, Swords, BookOpen, Leaf, Flag, Skull, Scroll, MapPin, Baby,
  Users, HelpCircle, Radio, Scan, Globe, Gauge, Tv, Building, Lock, Gamepad2
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
import Lesson3UnderstandingCheck from './components/Lesson3UnderstandingCheck'
import Lesson4DoNowQuiz from './components/Lesson4DoNowQuiz'
import PaternityRisk from './components/PaternityRisk'
import MateRetentionSystem from './components/MateRetentionSystem'
import EvolutionaryImperativeSim from './components/EvolutionaryImperativeSim'
import Lesson4EssayPlan from './components/Lesson4EssayPlan'
import Lesson4UnderstandingCheck from './components/Lesson4UnderstandingCheck'
import Lesson5DoNowQuiz from './components/Lesson5DoNowQuiz'
import PressureTank from './components/PressureTank'
import WeaponEffect from './components/WeaponEffect'
import ImpossibleTaskSim from './components/ImpossibleTaskSim'
import Lesson5EvidenceGrid from './components/Lesson5EvidenceGrid'
import Lesson5CritiqueGrid from './components/Lesson5CritiqueGrid'
import Lesson5EssayPlan from './components/Lesson5EssayPlan'
import Lesson5UnderstandingCheck from './components/Lesson5UnderstandingCheck'
import ARRMFlowchart from './components/ARRMFlowchart'
import VicariousLearningViz from './components/VicariousLearningViz'
import BoboLabSim from './components/BoboLabSim'
import Lesson6EvidenceGrid from './components/Lesson6EvidenceGrid'
import Lesson6CritiqueGrid from './components/Lesson6CritiqueGrid'
import Lesson6EssayPlan from './components/Lesson6EssayPlan'
import Lesson6UnderstandingCheck from './components/Lesson6UnderstandingCheck'
import CrowdVisualizer from './components/CrowdVisualizer'
import SelfAwarenessMonitor from './components/SelfAwarenessMonitor'
import MaskExperimentSim from './components/MaskExperimentSim'
import Lesson7EvidenceGrid from './components/Lesson7EvidenceGrid'
import Lesson7CritiqueGrid from './components/Lesson7CritiqueGrid'
import Lesson7EssayPlan from './components/Lesson7EssayPlan'
import ImportationProfiler from './components/ImportationProfiler'
import DeprivationBreakdown from './components/DeprivationBreakdown'
import ThreePrisonsSim from './components/ThreePrisonsSim'
import Lesson8EvidenceGrid from './components/Lesson8EvidenceGrid'
import Lesson8CritiqueGrid from './components/Lesson8CritiqueGrid'
import Lesson8EssayPlan from './components/Lesson8EssayPlan'
import Lesson8UnderstandingCheck from './components/Lesson8UnderstandingCheck'
import Lesson9UnderstandingCheck from './components/Lesson9UnderstandingCheck'
import Lesson9EvidenceGrid from './components/Lesson9EvidenceGrid'
import Lesson9CritiqueGrid from './components/Lesson9CritiqueGrid'
import Lesson9EssayPlan from './components/Lesson9EssayPlan'
import MediaEffectVisualizer from './components/MediaEffectVisualizer'
import MediaLabSim from './components/MediaLabSim'

// Data
const lessons = [
  { id: 1, title: "01: Neural & Hormonal Mechanisms", active: true, complete: false },
  { id: 2, title: "02: Genetic Factors", active: true, complete: false },
  { id: 3, title: "03: Ethological Explanations", active: true, complete: false },
  { id: 4, title: "04: Evolutionary Explanations", active: true, complete: false },
  { id: 5, title: "05: Social Psych I (Frustration)", active: true, complete: false },
  { id: 6, title: "06: Social Psych II (SLT)", active: true, complete: false },
  { id: 7, title: "07: Social Psych III (De-individuation)", active: true, complete: false },
  { id: 8, title: "08: Institutional Aggression", active: true, complete: false },
  { id: 9, title: "09: Media Influences", active: true, complete: false },
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

const lesson4DoNow = [
  { id: 1, question: "Ethology: What triggers a Fixed Action Pattern (FAP)?", options: ["A Sign Stimulus", "A conscious thought", "A hormone"], correct: 0 },
  { id: 2, question: "Ethology: Tinbergen studied aggression in which animal?", options: ["Sticklebacks", "Wolves", "Chimpanzees"], correct: 0 },
  { id: 3, question: "Ethology: Lorenz argued aggression is...", options: ["Learned", "Adaptive & Ritualistic", "Pathological"], correct: 1 },
  { id: 4, question: "Genetics: The MAOA gene regulates...", options: ["Serotonin", "Testosterone", "Adrenaline"], correct: 0 },
  { id: 5, question: "Neural: The Amygdala is responsible for...", options: ["Memory", "Threat Detection", "Visual Processing"], correct: 1 }
]

const lesson5DoNow = [
  { id: 1, question: "Social Psych: Dollard et al. (1939) said frustration always leads to...", options: ["Anxiety", "Aggression", "Depression"], correct: 1 },
  { id: 2, question: "Social Psych: The 'Weapon Effect' was studied by...", options: ["Berkowitz & LePage", "Bushman", "Geen"], correct: 0 },
  { id: 3, question: "Social Psych: Berkowitz argued the weapon effect suggests aggression is...", options: ["Learned", "Instinctual", "Primed by environmental cues"], correct: 2 },
  { id: 4, question: "Social Psych: Which finding contradicts the catharsis hypothesis?", options: ["Venting increases aggression (Bushman 2002)", "Shocks were stronger with guns (Berkowitz)", "Jigsaw puzzle study (Geen)"], correct: 0 },
  { id: 5, question: "Neural: Which hormone interacts with frustration in the Dual-Hormone Hypothesis?", options: ["Serotonin", "Cortisol", "Adrenaline"], correct: 1 }
]

const lesson6DoNow = [
  { id: 1, question: "SLT: Learning by observing others is called...", options: ["Classical conditioning", "Operant conditioning", "Observational learning"], correct: 2 },
  { id: 2, question: "SLT: Which process involves storing behavior in memory?", options: ["Attention", "Retention", "Reproduction"], correct: 1 },
  { id: 3, question: "SLT: Seeing a model rewarded increases imitation via...", options: ["Vicarious reinforcement", "Habituation", "Deindividuation"], correct: 0 },
  { id: 4, question: "SLT: Identification increases when the model is...", options: ["Low-status and dissimilar", "High-status or similar", "Punished publicly"], correct: 1 },
  { id: 5, question: "Previous: Who conducted the Bobo Doll study?", options: ["Zimbardo", "Bandura", "Milgram"], correct: 1 }
]

const lesson7DoNow = [
  { id: 1, question: "SLT: What process determines if a behavior is imitated based on consequences?", options: ["Vicarious Reinforcement", "Direct Reinforcement", "Classical Conditioning"], correct: 0 },
  { id: 2, question: "SLT: The belief in one's ability to perform an action is...", options: ["Self-Esteem", "Self-Efficacy", "Self-Actualization"], correct: 1 },
  { id: 3, question: "SLT: Which is NOT a mediational process?", options: ["Attention", "Retention", "Displacement"], correct: 2 },
  { id: 4, question: "Frustration-Aggression: What triggers the aggressive drive?", options: ["Goal Blocking", "Observation", "Hormones"], correct: 0 },
  { id: 5, question: "Previous: Who conducted the Bobo Doll study?", options: ["Zimbardo", "Bandura", "Milgram"], correct: 1 }
]

const lesson8DoNow = [
  { id: 1, question: "De-individuation: Loss of private self-awareness causes...", options: ["Increased conformity", "Disinhibition", "Heightened morality"], correct: 1 },
  { id: 2, question: "De-individuation: Which study found intimacy in the dark?", options: ["Zimbardo (1969)", "Gergen et al. (1973)", "Johnson & Downing"], correct: 1 },
  { id: 3, question: "De-individuation: KKK hoods vs Nurse uniforms demonstrated...", options: ["Anonymity always causes aggression", "Social cues matter", "Darkness increases violence"], correct: 1 },
  { id: 4, question: "SLT: Bandura's study used which doll?", options: ["Barbie", "Bobo", "Ken"], correct: 1 },
  { id: 5, question: "Previous: Frustration-Aggression was proposed by...", options: ["Dollard et al.", "Berkowitz", "Freud"], correct: 0 }
]

const lesson9DoNow = [
  { id: 1, question: "Institutional: The Importation Model suggests aggression comes from...", options: ["Prison environment", "Individual inmates' characteristics", "Officer training"], correct: 1 },
  { id: 2, question: "Institutional: Sykes' deprivations include loss of what?", options: ["Money only", "Multiple needs (autonomy, security, goods, liberty, contact)", "Just freedom"], correct: 1 },
  { id: 3, question: "De-individuation: Anonymity in groups leads to...", options: ["Better decision-making", "Disinhibition & increased aggression", "Cooperation"], correct: 1 },
  { id: 4, question: "SLT: Observation of models causes learning via...", options: ["Classical conditioning", "Operant conditioning", "Vicarious reinforcement"], correct: 2 },
  { id: 5, question: "Frustration-Aggression: Berkowitz reformulated theory to include...", options: ["Genetic factors", "Environmental aggressive CUES", "Hormonal changes"], correct: 1 }
]

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentLesson, setCurrentLesson] = useState(1)
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [isPresentation, setIsPresentation] = useState(false)
  const slideCount = currentLesson === 1 ? 10 : currentLesson === 2 ? 9 : currentLesson === 3 ? 9 : currentLesson === 4 ? 9 : currentLesson === 5 ? 9 : currentLesson === 6 ? 9 : currentLesson === 7 ? 8 : currentLesson === 8 ? 8 : currentLesson === 9 ? 9 : 0

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

  const renderLesson6 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-teal-500 blur-[100px] opacity-20 rounded-full animate-pulse"></div>
                <div className="relative z-10 flex gap-4">
                  <Users size={isPresentation ? 100 : 80} className="text-teal-400" />
                  <Brain size={isPresentation ? 100 : 80} className="text-white" />
                </div>
              </div>
              <h1 className={`font-bold text-white mb-4 tracking-widest uppercase ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
                SOCIAL LEARNING <span className="text-teal-500">THEORY</span>
              </h1>
              <div className="h-1 w-64 bg-teal-900 my-6"></div>
              <h2 className={`text-teal-600 text-xs tracking-[0.5em] uppercase mb-12 font-bold`}>Aggression Lesson 06</h2>
              <button onClick={nextSlide} className={`bg-slate-900 border border-teal-500 text-teal-400 font-bold px-12 py-4 rounded-xl hover:bg-slate-800 transition-all ${isPresentation ? 'text-2xl' : 'text-lg'} uppercase shadow-lg`}>
                Initialize Briefing
              </button>
            </div>
          </Slide>
        )

      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="System Check" icon={Activity} time="05 MINS" isPresentation={isPresentation} />
            <DoNowQuiz questions={lesson6DoNow} isPresentation={isPresentation} />
          </Slide>
        )

      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Mediational Processes (ARRM)" icon={Brain} time="15 MINS" isPresentation={isPresentation} />
            <ARRMFlowchart isPresentation={isPresentation} />
          </Slide>
        )

      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Vicarious Learning & Identification" icon={Users} time="10 MINS" isPresentation={isPresentation} />
            <VicariousLearningViz isPresentation={isPresentation} />
          </Slide>
        )

      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Check" title="Understanding Check" icon={Brain} time="10 MINS" isPresentation={isPresentation} />
            <Lesson6UnderstandingCheck isPresentation={isPresentation} />
          </Slide>
        )

      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="Bobo Doll Lab" icon={Tv} time="15 MINS" isPresentation={isPresentation} />
            <BoboLabSim isPresentation={isPresentation} />
          </Slide>
        )

      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Evidence" title="Research Support" icon={Search} time="10 MINS" isPresentation={isPresentation} />
            <Lesson6EvidenceGrid isPresentation={isPresentation} />
          </Slide>
        )

      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evaluation" title="Critique & Debates" icon={AlertTriangle} time="10 MINS" isPresentation={isPresentation} />
            <Lesson6CritiqueGrid isPresentation={isPresentation} />
          </Slide>
        )

      case 8:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 6: Assessment" title="Essay Planning" icon={FileText} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-slate-900 border border-slate-800 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center rounded-xl">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                  <span className="bg-teal-700 text-white px-3 py-1 text-sm font-bold font-mono">16 MARKS</span>
                  <h3 className="font-bold text-white text-xl font-mono">ASSESSMENT</h3>
                </div>
                <p className={`text-teal-400 font-mono italic leading-snug border-l-4 border-teal-600 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  "Discuss Social Learning Theory as an explanation for aggression."
                </p>
              </div>
              <Lesson6EssayPlan isPresentation={isPresentation} />
            </div>
          </Slide>
        )

      default:
        return null
    }
  }

  const renderLesson7 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-red-600 blur-[100px] opacity-20 rounded-full animate-pulse"></div>
                <div className="relative z-10 flex gap-4">
                  <Users size={isPresentation ? 100 : 80} className="text-red-500 animate-noise" />
                  <Scan size={isPresentation ? 100 : 80} className="text-zinc-600" />
                </div>
              </div>
              <h1 className={`font-glitch text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-zinc-500 mb-4 tracking-tight animate-chromatic ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>DE-INDIVIDUATION</h1>
              <div className="h-1 w-64 bg-zinc-700 my-6"></div>
              <h2 className={`text-red-600 text-xs tracking-[0.5em] font-code uppercase mb-12`}>Aggression Lesson 07</h2>
              <button onClick={nextSlide} className={`bg-black border-2 border-red-600 text-red-600 font-code font-bold px-12 py-4 hover:bg-red-900 hover:text-white transition-all uppercase ${isPresentation ? 'text-2xl' : 'text-lg'} shadow-[4px_4px_0px_#991b1b]`}>Enter The Crowd</button>
            </div>
          </Slide>
        )

      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="Identity Check" icon={Activity} time="05 MINS" isPresentation={isPresentation} />
            <DoNowQuiz questions={lesson7DoNow} isPresentation={isPresentation} />
          </Slide>
        )

      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="The Crowd Mind" icon={Users} time="15 MINS" isPresentation={isPresentation} />
            <CrowdVisualizer isPresentation={isPresentation} />
          </Slide>
        )

      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Self-Awareness" icon={Eye} time="10 MINS" isPresentation={isPresentation} />
            <SelfAwarenessMonitor isPresentation={isPresentation} />
          </Slide>
        )

      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="The Mask Experiment" icon={Radio} time="15 MINS" isPresentation={isPresentation} />
            <MaskExperimentSim isPresentation={isPresentation} />
          </Slide>
        )

      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Evidence" title="Research Data" icon={Search} time="10 MINS" isPresentation={isPresentation} />
            <Lesson7EvidenceGrid isPresentation={isPresentation} />
          </Slide>
        )

      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evaluation" title="Critique & Debates" icon={AlertTriangle} time="10 MINS" isPresentation={isPresentation} />
            <Lesson7CritiqueGrid isPresentation={isPresentation} />
          </Slide>
        )

      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 6: Assessment" title="Data Log" icon={CheckCircle} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-black border border-red-800 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center">
                <div className="flex items-center gap-3 mb-6 border-b border-red-800 pb-4">
                  <span className="bg-red-700 text-black px-3 py-1 text-sm font-bold font-code">16 MARKS</span>
                  <h3 className="font-bold text-white text-xl font-mono">QUERY</h3>
                </div>
                <p className={`text-red-500 font-mono italic leading-snug border-l-4 border-red-700 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  "Discuss de-individuation as an explanation for aggression."
                </p>
              </div>
              <Lesson7EssayPlan isPresentation={isPresentation} />
            </div>
          </Slide>
        )

      default:
        return null
    }
  }

  const renderLesson8 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-orange-600 blur-[100px] opacity-20 rounded-full animate-pulse"></div>
                <div className="relative z-10 flex gap-4">
                  <Building size={isPresentation ? 100 : 80} className="text-orange-500" />
                  <Shield size={isPresentation ? 100 : 80} className="text-zinc-600" />
                </div>
              </div>
              <h1 className={`font-mono font-bold text-white mb-4 tracking-widest uppercase ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
                INSTITUTIONAL <span className="text-orange-500">AGGRESSION</span>
              </h1>
              <div className="h-1 w-64 bg-zinc-700 my-6"></div>
              <h2 className={`text-orange-600 text-xs tracking-[0.5em] uppercase mb-12 font-mono`}>Aggression Lesson 08</h2>
              <button onClick={nextSlide} className={`bg-zinc-950 border-2 border-orange-600 text-orange-500 font-mono font-bold px-12 py-4 hover:bg-orange-900 hover:text-white transition-all uppercase ${isPresentation ? 'text-2xl' : 'text-lg'} shadow-[4px_4px_0px_#000]`}>Access Case Files</button>
            </div>
          </Slide>
        )

      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="Security Clearance" icon={Activity} time="05 MINS" isPresentation={isPresentation} />
            <DoNowQuiz questions={lesson8DoNow} isPresentation={isPresentation} />
          </Slide>
        )

      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Importation Model" icon={Users} time="15 MINS" isPresentation={isPresentation} />
            <ImportationProfiler isPresentation={isPresentation} />
          </Slide>
        )

      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Deprivation Model" icon={Lock} time="10 MINS" isPresentation={isPresentation} />
            <DeprivationBreakdown isPresentation={isPresentation} />
          </Slide>
        )

      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Check" title="Understanding Check" icon={CheckCircle} time="10 MINS" isPresentation={isPresentation} />
            <Lesson8UnderstandingCheck isPresentation={isPresentation} />
          </Slide>
        )

      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="Three Prisons" icon={Building} time="15 MINS" isPresentation={isPresentation} />
            <ThreePrisonsSim isPresentation={isPresentation} />
          </Slide>
        )

      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Evidence" title="Research Data" icon={Search} time="10 MINS" isPresentation={isPresentation} />
            <Lesson8EvidenceGrid isPresentation={isPresentation} />
          </Slide>
        )

      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evaluation" title="Critical Analysis" icon={AlertTriangle} time="10 MINS" isPresentation={isPresentation} />
            <Lesson8CritiqueGrid isPresentation={isPresentation} />
          </Slide>
        )

      case 8:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 6: Assessment" title="Case File Analysis" icon={CheckCircle} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-zinc-950 border-2 border-orange-700 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center">
                <div className="flex items-center gap-3 mb-6 border-b-2 border-orange-700 pb-4">
                  <span className="bg-orange-600 text-black px-3 py-1 text-sm font-bold font-mono">16 MARKS</span>
                  <h3 className="font-bold text-white text-xl font-mono">ASSESSMENT</h3>
                </div>
                <p className={`text-orange-500 font-mono italic leading-snug border-l-4 border-orange-700 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  "Discuss explanations of institutional aggression in the context of prisons."
                </p>
              </div>
              <Lesson8EssayPlan isPresentation={isPresentation} />
            </div>
          </Slide>
        )

      default:
        return null
    }
  }

  const renderLesson9 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20 rounded-full animate-pulse"></div>
                <div className="relative z-10 flex gap-4">
                  <Tv size={isPresentation ? 100 : 80} className="text-blue-400" />
                  <Gamepad2 size={isPresentation ? 100 : 80} className="text-blue-400" />
                </div>
              </div>
              <h1 className={`font-bold text-white mb-4 tracking-widest uppercase ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
                MEDIA <span className="text-blue-500">INFLUENCES</span>
              </h1>
              <h2 className={`font-bold text-white mb-4 tracking-widest uppercase ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
                ON AGGRESSION
              </h2>
              <div className="h-1 w-64 bg-blue-900 my-6"></div>
              <h2 className={`text-blue-600 text-xs tracking-[0.5em] uppercase mb-12 font-bold`}>Aggression Lesson 09</h2>
              <button onClick={nextSlide} className={`bg-slate-900 border border-blue-500 text-blue-400 font-bold px-12 py-4 rounded-xl hover:bg-slate-800 transition-all ${isPresentation ? 'text-2xl' : 'text-lg'} uppercase shadow-lg`}>
                Begin Analysis
              </button>
            </div>
          </Slide>
        )

      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="Security Briefing" icon={Activity} time="05 MINS" isPresentation={isPresentation} />
            <DoNowQuiz questions={lesson9DoNow} isPresentation={isPresentation} />
          </Slide>
        )

      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Media Effects on Aggression" icon={Tv} time="10 MINS" isPresentation={isPresentation} />
            <MediaEffectVisualizer isPresentation={isPresentation} />
          </Slide>
        )

      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Research Methodologies" icon={Microscope} time="10 MINS" isPresentation={isPresentation} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full p-6">
              <div className="bg-blue-950/50 border-2 border-yellow-600 rounded-xl p-6 hover:border-yellow-500 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                    <TrendingUp size={24} className="text-black" />
                  </div>
                  <h3 className="text-yellow-400 font-bold text-xl uppercase">Correlational</h3>
                </div>
                <p className={`text-yellow-100 mb-4 ${isPresentation ? 'text-base' : 'text-sm'} leading-relaxed`}>
                  Survey large samples on media consumption and aggression. Calculate correlation coefficient.
                </p>
                <div className="bg-yellow-900/20 p-3 rounded border border-yellow-700 mb-3">
                  <p className="text-yellow-200 text-xs">
                    <strong className="block mb-1">✓ Strength:</strong>
                    Real-world data, ecological validity
                  </p>
                </div>
                <div className="bg-red-900/20 p-3 rounded border border-red-700">
                  <p className="text-red-200 text-xs">
                    <strong className="block mb-1">✗ Limitation:</strong>
                    Cannot prove causation. Reverse causality issue.
                  </p>
                </div>
              </div>

              <div className="bg-blue-950/50 border-2 border-blue-600 rounded-xl p-6 hover:border-blue-500 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <FlaskConical size={24} className="text-white" />
                  </div>
                  <h3 className="text-blue-400 font-bold text-xl uppercase">Experimental</h3>
                </div>
                <p className={`text-blue-100 mb-4 ${isPresentation ? 'text-base' : 'text-sm'} leading-relaxed`}>
                  Randomly assign participants to violent vs. non-violent media. Measure aggression via tasks.
                </p>
                <div className="bg-green-900/20 p-3 rounded border border-green-700 mb-3">
                  <p className="text-green-200 text-xs">
                    <strong className="block mb-1">✓ Strength:</strong>
                    Can establish causation through control
                  </p>
                </div>
                <div className="bg-red-900/20 p-3 rounded border border-red-700">
                  <p className="text-red-200 text-xs">
                    <strong className="block mb-1">✗ Limitation:</strong>
                    Low ecological validity. Lab aggression ≠ real violence.
                  </p>
                </div>
              </div>

              <div className="bg-blue-950/50 border-2 border-purple-600 rounded-xl p-6 hover:border-purple-500 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Clock size={24} className="text-white" />
                  </div>
                  <h3 className="text-purple-400 font-bold text-xl uppercase">Longitudinal</h3>
                </div>
                <p className={`text-purple-100 mb-4 ${isPresentation ? 'text-base' : 'text-sm'} leading-relaxed`}>
                  Track same participants over years. Observe media habits and behavior changes over time.
                </p>
                <div className="bg-green-900/20 p-3 rounded border border-green-700 mb-3">
                  <p className="text-green-200 text-xs">
                    <strong className="block mb-1">✓ Strength:</strong>
                    Long-term patterns, developmental insights
                  </p>
                </div>
                <div className="bg-red-900/20 p-3 rounded border border-red-700">
                  <p className="text-red-200 text-xs">
                    <strong className="block mb-1">✗ Limitation:</strong>
                    Cannot control confounding variables. Sample attrition.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        )

      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Check" title="Understanding Check" icon={CheckCircle} time="10 MINS" isPresentation={isPresentation} />
            <Lesson9UnderstandingCheck isPresentation={isPresentation} />
          </Slide>
        )

      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="Research Design Lab" icon={Microscope} time="15 MINS" isPresentation={isPresentation} />
            <MediaLabSim isPresentation={isPresentation} />
          </Slide>
        )

      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Evidence" title="Research Data" icon={Search} time="10 MINS" isPresentation={isPresentation} />
            <Lesson9EvidenceGrid isPresentation={isPresentation} />
          </Slide>
        )

      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evaluation" title="Critical Analysis" icon={AlertTriangle} time="10 MINS" isPresentation={isPresentation} />
            <Lesson9CritiqueGrid isPresentation={isPresentation} />
          </Slide>
        )

      case 8:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 6: Assessment" title="Essay Analysis" icon={CheckCircle} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-slate-900 border-2 border-blue-700 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center">
                <div className="flex items-center gap-3 mb-6 border-b-2 border-blue-700 pb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 text-sm font-bold">16 MARKS</span>
                  <h3 className="font-bold text-white text-xl">ASSESSMENT</h3>
                </div>
                <p className={`text-blue-400 italic leading-snug border-l-4 border-blue-700 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  "Discuss the effects of media on aggressive behaviour."
                </p>
              </div>
              <Lesson9EssayPlan isPresentation={isPresentation} />
            </div>
          </Slide>
        )

      default:
        return null
    }
  }

  const renderLesson1 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-red-500 blur-[100px] opacity-20 rounded-full animate-pulse"></div>
                <div className="relative z-10 flex gap-4">
                  <Brain size={isPresentation ? 100 : 80} className="text-red-400 animate-heartbeat" />
                  <Zap size={isPresentation ? 100 : 80} className="text-white" />
                </div>
              </div>
              <h1 className={`font-bold text-white mb-4 tracking-widest uppercase ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
                NEURAL & HORMONAL <span className="text-red-500">MECHANISMS</span>
              </h1>
              <div className="h-1 w-64 bg-red-900 my-6"></div>
              <h2 className={`text-red-600 text-xs tracking-[0.5em] uppercase mb-12 font-bold`}>
                Aggression Lesson 01
              </h2>
              <button onClick={nextSlide} className={`bg-slate-900 border border-red-500 text-red-400 font-bold px-12 py-4 rounded-xl hover:bg-slate-800 transition-all ${isPresentation ? 'text-2xl' : 'text-lg'} uppercase shadow-lg`}>
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
              <div className="bg-slate-900 border border-slate-800 p-8 relative rounded-xl hover:border-red-500 transition-all group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Brain size={80} /></div>
                <h3 className="text-red-400 font-mono font-bold uppercase text-2xl mb-4 border-b border-slate-800 pb-2">
                  Gospic et al. (2011)
                </h3>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-red-950/30 p-4 border-l-2 border-red-500 rounded">
                    <strong className="text-red-200 block text-xs uppercase tracking-wider mb-1">Study</strong>
                    Ultimatum Game with fMRI. Participants faced unfair money offers.
                  </div>
                  <div className="bg-red-950/30 p-4 border-l-2 border-red-500 rounded">
                    <strong className="text-red-200 block text-xs uppercase tracking-wider mb-1">Findings</strong>
                    Rejection (Aggression) = Fast/High Amygdala response. Benzodiazepines (calming drug) reduced both Amygdala activity and aggression.
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-8 relative rounded-xl hover:border-orange-500 transition-all group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Dna size={80} /></div>
                <h3 className="text-orange-400 font-bold uppercase text-2xl mb-4 border-b border-slate-800 pb-2">
                  Virkkunen et al. (1994)
                </h3>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-orange-950/30 p-4 border-l-2 border-orange-500 rounded">
                    <strong className="text-orange-200 block text-xs uppercase tracking-wider mb-1">Study</strong>
                    Compared serotonin breakdown product (5-HIAA) in CSF of impulsive vs non-impulsive offenders.
                  </div>
                  <div className="bg-orange-950/30 p-4 border-l-2 border-orange-500 rounded">
                    <strong className="text-orange-200 block text-xs uppercase tracking-wider mb-1">Findings</strong>
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
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 h-full ${isPresentation ? 'gap-12' : ''}`}>
              <div className={`bg-orange-900/10 border border-orange-500/30 relative rounded-xl ${isPresentation ? 'p-12' : 'p-6'}`}>
                <div className={`flex items-center gap-3 mb-4 ${isPresentation ? 'mb-6' : ''}`}>
                  <div className="bg-orange-900/30 p-2 rounded-lg"><FlaskConical className="text-orange-400" size={isPresentation ? 40 : 32} /></div>
                  <h3 className={`text-orange-400 font-bold uppercase ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Dual-Hormone Hypothesis</h3>
                </div>
                <p className={`text-slate-300 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                  <strong>Carre & Mehta (2011):</strong> Testosterone provides a partial explanation.
                  <br /><br />
                  They argue testosterone only leads to aggression when <strong>Cortisol</strong> (stress) is low. High cortisol blocks testosterone's influence on the amygdala. This interaction explains mixed results in previous studies.
                </p>
              </div>

              <div className={`bg-yellow-900/10 border border-yellow-500/30 relative rounded-xl ${isPresentation ? 'p-12' : 'p-6'}`}>
                <div className={`flex items-center gap-3 mb-4 ${isPresentation ? 'mb-6' : ''}`}>
                  <div className="bg-yellow-900/30 p-2 rounded-lg"><TrendingUp className="text-yellow-400" size={isPresentation ? 40 : 32} /></div>
                  <h3 className={`text-yellow-400 font-bold uppercase ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Correlational Issues</h3>
                </div>
                <p className={`text-slate-300 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
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
              <div className="bg-slate-950 border border-red-800 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center">
                <div className="flex items-center gap-3 mb-6 border-b border-red-900 pb-4">
                  <span className="bg-red-700 text-white px-3 py-1 text-sm font-bold font-mono">16 MARKS</span>
                  <h3 className="font-bold text-white text-xl font-mono">ASSESSMENT</h3>
                </div>
                <p className={`text-red-400 font-mono italic leading-snug border-l-4 border-red-600 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
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
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 h-full ${isPresentation ? 'gap-12' : ''}`}>
              {/* Measurement */}
              <div className={`bg-indigo-900/30 border border-indigo-800 relative rounded-xl ${isPresentation ? 'p-12' : 'p-6'}`}>
                <div className={`flex items-center gap-3 mb-4 ${isPresentation ? 'mb-6' : ''}`}>
                  <div className="bg-indigo-900/50 p-2 rounded-lg"><FlaskConical className="text-indigo-400" size={isPresentation ? 40 : 32} /></div>
                  <h3 className={`text-indigo-400 font-bold uppercase ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Measurement Issues</h3>
                </div>
                <p className={`text-indigo-200 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                  Genetic influence varies depending on <em>how</em> aggression is measured. 
                  <br/><br/>
                  <strong>Rhee & Waldman (2002)</strong> found greater genetic influence for direct physical aggression compared to psychological/verbal aggression. Self-reports often differ from observational data.
                </p>
              </div>

              {/* Polygenic */}
              <div className={`bg-fuchsia-900/10 border border-fuchsia-900/50 relative rounded-xl ${isPresentation ? 'p-12' : 'p-6'}`}>
                <div className={`flex items-center gap-3 mb-4 ${isPresentation ? 'mb-6' : ''}`}>
                  <div className="bg-fuchsia-900/30 p-2 rounded-lg"><GitMerge className="text-fuchsia-400" size={isPresentation ? 40 : 32} /></div>
                  <h3 className={`text-fuchsia-400 font-bold uppercase ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Polygenic Explanation</h3>
                </div>
                <p className={`text-indigo-200 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
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

      // Slide 5: AFL Check
      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Check" title="Understanding Check" icon={Brain} time="10 MINS" isPresentation={isPresentation} />
            <Lesson3UnderstandingCheck isPresentation={isPresentation} />
          </Slide>
        )

      // Slide 6: Stickleback Lab
      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="The Stickleback Lab" icon={Fish} time="15 MINS" isPresentation={isPresentation} />
            <SticklebackLabSim isPresentation={isPresentation} />
          </Slide>
        )

      // Slide 7: Evidence
      case 6:
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
      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evaluation" title="Critique & Debates" icon={AlertTriangle} time="10 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 h-full ${isPresentation ? 'gap-12' : ''}`}>
              <div className={`bg-stone-900/50 border border-stone-800 rounded-xl relative ${isPresentation ? 'p-12' : 'p-6'}`}>
                <div className={`flex items-center gap-3 mb-4 ${isPresentation ? 'mb-6' : ''}`}>
                  <div className="bg-amber-900/30 p-2 rounded-lg"><Flag className="text-amber-500" size={isPresentation ? 40 : 32} /></div>
                  <h3 className={`text-amber-500 font-serif font-bold ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Culture of Honour</h3>
                </div>
                <p className={`text-stone-300 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                  <strong>Nisbett (1993):</strong> Found significant differences in reactive aggression between Northern and Southern US white males. 
                  <br/><br/>
                  This demonstrates that <strong>culture overrides instinct</strong>. If aggression were purely ethological (innate), such regional variations would not exist.
                </p>
              </div>

              <div className={`bg-stone-900/50 border border-stone-800 rounded-xl relative ${isPresentation ? 'p-12' : 'p-6'}`}>
                <div className={`flex items-center gap-3 mb-4 ${isPresentation ? 'mb-6' : ''}`}>
                  <div className="bg-emerald-900/30 p-2 rounded-lg"><Leaf className="text-emerald-500" size={isPresentation ? 40 : 32} /></div>
                  <h3 className={`text-emerald-500 font-serif font-bold ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Human FAPs?</h3>
                </div>
                <p className={`text-stone-300 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                  <strong>Hunt (1973):</strong> FAPs are not as "fixed" as implied. They are influenced by learning and environment. 
                  <br/><br/>
                  The term <strong>"Modal Action Pattern" (MAP)</strong> is now preferred, acknowledging that while there is an instinctual basis, humans (and many animals) possess flexibility.
                </p>
              </div>
            </div>
          </Slide>
        )

      // Slide 9: Essay Plan
      case 8:
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

  const renderLesson4 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-amber-600 blur-[100px] opacity-20 rounded-full animate-pulse"></div>
                <div className="relative z-10 flex gap-4">
                  <Dna size={isPresentation ? 100 : 80} className="text-amber-500 animate-spin-slow" />
                  <Swords size={isPresentation ? 100 : 80} className="text-stone-400" />
                </div>
              </div>
              <h1 className={`font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-stone-100 to-amber-600 mb-4 tracking-widest ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
                EVOLUTIONARY EXPLANATIONS
              </h1>
              <div className="h-1 w-64 bg-stone-700 my-6"></div>
              <h2 className="text-stone-400 text-xs tracking-[0.5em] font-mono uppercase mb-12">Aggression Lesson 04</h2>
              <button
                onClick={nextSlide}
                className={`bg-stone-900 border border-amber-600 text-amber-500 font-mono font-bold px-12 py-4 hover:bg-amber-900 hover:text-white transition-all ${isPresentation ? 'text-2xl' : 'text-lg'} shadow-[0_0_20px_rgba(217,119,6,0.2)]`}
              >
                INITIALIZE
              </button>
            </div>
          </Slide>
        )

      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="Field Notes: Retrieval" icon={BookOpen} time="05 MINS" isPresentation={isPresentation} />
            <Lesson4DoNowQuiz questions={lesson4DoNow} isPresentation={isPresentation} />
          </Slide>
        )

      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="The Cuckoldry Risk" icon={Baby} time="15 MINS" isPresentation={isPresentation} />
            <PaternityRisk isPresentation={isPresentation} />
          </Slide>
        )

      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Mate Retention" icon={Scan} time="10 MINS" isPresentation={isPresentation} />
            <MateRetentionSystem isPresentation={isPresentation} />
          </Slide>
        )

      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Check" title="Understanding Check" icon={Brain} time="10 MINS" isPresentation={isPresentation} />
            <Lesson4UnderstandingCheck isPresentation={isPresentation} />
          </Slide>
        )

      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="Evolutionary Imperative" icon={Target} time="15 MINS" isPresentation={isPresentation} />
            <EvolutionaryImperativeSim isPresentation={isPresentation} />
          </Slide>
        )

      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Evidence" title="Research Support" icon={Search} time="10 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 h-full ${isPresentation ? 'px-12' : 'px-0'}`}>
              <div className="bg-stone-900 border border-stone-800 p-8 relative hover:border-red-600 transition-all group rounded-xl">
                <div className="absolute top-4 right-4 opacity-20"><Shield size={48} className="text-red-500" /></div>
                <h3 className="text-red-500 font-serif font-bold text-2xl mb-4 border-b border-stone-800 pb-2">Shackleford et al. (2005)</h3>
                <div className="space-y-4 text-stone-300">
                  <p><strong className="text-white">Sample:</strong> 107 married couples.</p>
                  <p><strong className="text-white">Method:</strong> Men completed Mate Retention Inventory; women reported violence.</p>
                  <p><strong className="text-white">Findings:</strong> Positive correlation between retention strategies and IPV.</p>
                </div>
              </div>
              <div className="bg-stone-900 border border-stone-800 p-8 relative hover:border-amber-600 transition-all group rounded-xl">
                <div className="absolute top-4 right-4 opacity-20"><Swords size={48} className="text-amber-500" /></div>
                <h3 className="text-amber-500 font-serif font-bold text-2xl mb-4 border-b border-stone-800 pb-2">Volk et al. (2012)</h3>
                <div className="space-y-4 text-stone-300">
                  <p><strong className="text-white">Concept:</strong> Bullying can be adaptive.</p>
                  <p><strong className="text-white">Benefit:</strong> Dominance and resources (males) = status; fidelity protection (females).</p>
                  <p><strong className="text-white">Application:</strong> Interventions need status alternatives, not only punishment.</p>
                </div>
              </div>
            </div>
          </Slide>
        )

      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evaluation" title="Critique & Debates" icon={AlertTriangle} time="10 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 h-full ${isPresentation ? 'gap-12' : ''}`}>
              <div className={`bg-stone-900/50 border border-stone-800 p-6 relative rounded-xl ${isPresentation ? 'p-12' : 'p-6'}`}>
                <div className={`flex items-center gap-3 mb-4 ${isPresentation ? 'mb-6' : ''}`}>
                  <div className="bg-pink-900/30 p-2 rounded-lg"><Users className="text-pink-500" size={isPresentation ? 40 : 32} /></div>
                  <h3 className={`text-pink-500 font-serif font-bold ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Gender Differences</h3>
                </div>
                <p className={`text-stone-300 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                  <strong>Campbell (1999):</strong> Females are less physically aggressive because the evolutionary cost (offspring survival) is higher. They use verbal/relational aggression to retain partners.
                </p>
              </div>
              <div className={`bg-stone-900/50 border border-stone-800 p-6 relative rounded-xl ${isPresentation ? 'p-12' : 'p-6'}`}>
                <div className={`flex items-center gap-3 mb-4 ${isPresentation ? 'mb-6' : ''}`}>
                  <div className="bg-emerald-900/30 p-2 rounded-lg"><Globe className="text-emerald-500" size={isPresentation ? 40 : 32} /></div>
                  <h3 className={`text-emerald-500 font-serif font-bold ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Cultural Differences</h3>
                </div>
                <p className={`text-stone-300 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                  <strong>!Kung San vs Yanomamo:</strong> The !Kung San devalue aggression; the Yanomamo reward it with status. If aggression were purely evolutionary (universal), such differences should not exist.
                </p>
              </div>
            </div>
          </Slide>
        )

      case 8:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 6: Assessment" title="Essay Planning" icon={CheckCircle} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-stone-900 border border-stone-800 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center rounded-xl">
                <div className="flex items-center gap-3 mb-6 border-b border-stone-800 pb-4">
                  <span className="bg-amber-700 text-white px-3 py-1 text-sm font-bold font-mono">16 MARKS</span>
                  <h3 className="font-serif text-stone-200 text-xl">Exam Question</h3>
                </div>
                <p className={`text-white font-serif italic leading-snug border-l-4 border-amber-600 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  "Discuss evolutionary explanations of human aggression."
                </p>
              </div>
              <Lesson4EssayPlan isPresentation={isPresentation} />
            </div>
          </Slide>
        )

      default:
        return null
    }
  }

  const renderLesson5 = () => {
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-orange-600 blur-[100px] opacity-20 rounded-full animate-pulse"></div>
                <div className="relative z-10 flex gap-4">
                  <Brain size={isPresentation ? 100 : 80} className="text-orange-400 animate-heartbeat" />
                  <AlertTriangle size={isPresentation ? 100 : 80} className="text-yellow-500" />
                </div>
              </div>
              <h1 className={`font-bold text-white mb-4 tracking-widest uppercase ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
                FRUSTRATION-AGGRESSION <span className="text-orange-500">HYPOTHESIS</span>
              </h1>
              <div className="h-1 w-64 bg-orange-900 my-6"></div>
              <h2 className={`text-orange-600 text-xs tracking-[0.5em] uppercase mb-12 font-bold`}>
                Aggression Lesson 05
              </h2>
              <button onClick={nextSlide} className={`bg-slate-900 border border-orange-500 text-orange-400 font-bold px-12 py-4 rounded-xl hover:bg-slate-800 transition-all ${isPresentation ? 'text-2xl' : 'text-lg'} uppercase shadow-lg`}>
                Initialize Briefing
              </button>
            </div>
          </Slide>
        )

      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 1: Activation" title="System Check" icon={Activity} time="05 MINS" isPresentation={isPresentation} />
            <Lesson5DoNowQuiz questions={lesson5DoNow} isPresentation={isPresentation} />
          </Slide>
        )

      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Hydraulic Model (Dollard et al. 1939)" icon={Gauge} time="15 MINS" isPresentation={isPresentation} />
            <PressureTank isPresentation={isPresentation} />
          </Slide>
        )

      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Concept" title="Weapon Effect (Berkowitz & LePage 1967)" icon={Zap} time="10 MINS" isPresentation={isPresentation} />
            <WeaponEffect isPresentation={isPresentation} />
          </Slide>
        )

      case 4:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 2: Check" title="Understanding Check" icon={Brain} time="10 MINS" isPresentation={isPresentation} />
            <Lesson5UnderstandingCheck isPresentation={isPresentation} />
          </Slide>
        )

      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 3: Simulation" title="Impossible Task Study" icon={Target} time="15 MINS" isPresentation={isPresentation} />
            <ImpossibleTaskSim isPresentation={isPresentation} />
          </Slide>
        )

      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 4: Evidence" title="Research Grid" icon={Search} time="10 MINS" isPresentation={isPresentation} />
            <Lesson5EvidenceGrid isPresentation={isPresentation} />
          </Slide>
        )

      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 5: Evaluation" title="Critique & Reformulation" icon={AlertTriangle} time="10 MINS" isPresentation={isPresentation} />
            <Lesson5CritiqueGrid isPresentation={isPresentation} />
          </Slide>
        )

      case 8:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader phase="Phase 6: Assessment" title="Essay Blueprint" icon={FileText} time="15 MINS" isPresentation={isPresentation} />
            <div className={`grid grid-cols-1 md:grid-cols-2 h-full ${isPresentation ? 'gap-16' : 'gap-8'}`}>
              <div className="bg-slate-900 border border-slate-800 shadow-2xl flex flex-col relative overflow-hidden p-8 justify-center rounded-xl">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                  <span className="bg-orange-700 text-white px-3 py-1 text-sm font-bold font-mono">16 MARKS</span>
                  <h3 className="font-bold text-white text-xl font-mono">ASSESSMENT</h3>
                </div>
                <p className={`text-orange-400 font-mono italic leading-snug border-l-4 border-orange-600 pl-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                  "Discuss the frustration-aggression hypothesis."
                </p>
              </div>
              <Lesson5EssayPlan isPresentation={isPresentation} />
            </div>
          </Slide>
        )

      default:
        return null
    }
  }

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden selection:bg-red-500 selection:text-white">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-80' : 'w-0'} bg-slate-900 border-r border-slate-800 transition-all duration-300 flex flex-col z-20 shadow-2xl relative overflow-hidden`}>
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <span className="font-bold text-xl text-red-500 tracking-widest font-mono">AGGRESSION</span>
          <button onClick={() => setSidebarOpen(false)} className="text-red-700 hover:text-red-400"><X size={20} /></button>
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
                ${currentLesson === lesson.id ? 'border-red-500 bg-red-900/20 text-white shadow-[inset_10px_0_20px_-10px_rgba(239,68,68,0.2)]' : 'border-transparent text-red-800 hover:bg-red-900/20 hover:text-red-400'}
                ${!lesson.active ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              <div className="flex items-center justify-between">
                <span className="tracking-tight">{lesson.title}</span>
                {currentLesson === lesson.id && <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,1)]"></div>}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-grow flex flex-col h-full relative bg-slate-950">

        {/* TOP BAR */}
        <div className="absolute top-4 left-4 z-50 flex gap-2">
          {!isSidebarOpen && <button onClick={() => setSidebarOpen(true)} className="bg-slate-950 p-2 border border-red-700 text-red-500 hover:bg-red-900/30 hover:text-white shadow-lg"><Menu size={20} /></button>}
        </div>
        <div className="absolute top-4 right-4 z-50 flex gap-2">
          <button onClick={togglePresentation} className={`p-2 border text-red-500 hover:text-white hover:bg-red-900/30 transition-all ${isPresentation ? 'bg-red-600 text-black border-red-500' : 'bg-slate-950 border-red-700'}`} title="Presentation Mode"><Projector size={20} /></button>
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="bg-slate-950 p-2 border border-red-700 text-red-500 hover:text-white hover:bg-red-900/30 transition-all" title={isSidebarOpen ? "Maximize Content" : "Show Sidebar"}>{isSidebarOpen ? <Maximize2 size={20} /> : <Minimize2 size={20} />}</button>
        </div>

        {/* PROGRESS BAR */}
        <div className="h-1 bg-slate-950 w-full border-b border-slate-800">
          <div className="h-full bg-red-500 transition-all duration-500" style={{ width: `${((currentSlide + 1) / slideCount) * 100}%` }} />
        </div>

        {/* MAIN CONTENT */}
        <main
          className="flex-grow relative overflow-hidden bg-slate-950"
          style={{ zoom: isPresentation ? "1.25" : "1" }}
        >
          {currentLesson === 1 && renderLesson1()}
          {currentLesson === 2 && renderLesson2()}
          {currentLesson === 3 && renderLesson3()}
          {currentLesson === 4 && renderLesson4()}
          {currentLesson === 5 && renderLesson5()}
          {currentLesson === 6 && renderLesson6()}
          {currentLesson === 7 && renderLesson7()}
          {currentLesson === 8 && renderLesson8()}
          {currentLesson === 9 && renderLesson9()}
        </main>

        {/* BOTTOM NAV */}
        <div className="h-20 border-t border-red-900 bg-slate-950 flex items-center justify-between px-8 z-10">
          <button onClick={() => currentSlide > 0 && setCurrentSlide(prev => prev - 1)} disabled={currentSlide === 0} className={`flex items-center gap-2 px-6 py-3 font-bold text-sm border transition-all ${currentSlide === 0 ? 'border-transparent text-red-900 cursor-not-allowed' : 'border-red-700 text-red-500 hover:bg-red-900/30 hover:text-white'}`}><ChevronLeft size={16} /> PREV</button>
          <span className="text-red-700 font-mono text-xs tracking-widest">{currentSlide + 1} / {slideCount}</span>
          <button onClick={() => currentSlide < (slideCount - 1) && setCurrentSlide(prev => prev + 1)} disabled={currentSlide === (slideCount - 1)} className={`flex items-center gap-2 px-6 py-3 font-bold text-sm border transition-all ${currentSlide === (slideCount - 1) ? 'border-transparent text-red-900 cursor-not-allowed' : 'bg-red-600 text-black border-red-600 hover:bg-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]'}`}>NEXT <ChevronRight size={16} /></button>
        </div>
      </div>
    </div>
  )
}
