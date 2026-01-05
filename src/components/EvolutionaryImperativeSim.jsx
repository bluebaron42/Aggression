import React, { useState } from 'react'
import { Dna, CheckCircle, Skull } from 'lucide-react'

const events = [
  {
    id: 1,
    title: 'Day 1: The Rival',
    desc: 'A high-status male from a neighboring tribe is seen talking to your partner near the river.',
    choices: [
      { text: 'Chase him off with a spear', strategy: 'Negative Inducement', impact: { en: -10, pat: +15, bond: -10 }, outcome: 'You intimidated the rival, but your partner was frightened by your sudden aggression.' },
      { text: 'Sit between them silently', strategy: 'Direct Guarding', impact: { en: -5, pat: +10, bond: -5 }, outcome: 'You physically blocked access. Effective, but awkward.' },
      { text: 'Let them talk', strategy: 'Trust', impact: { en: +5, pat: -20, bond: +10 }, outcome: 'You saved energy and showed trust, but he made her laugh...' }
    ]
  },
  {
    id: 2,
    title: 'Day 2: Late Return',
    desc: "She went foraging and returned after sunset. Her basket is full, but she's smiling.",
    choices: [
      { text: 'Interrogate her immediately', strategy: 'Direct Guarding', impact: { en: -10, pat: +5, bond: -15 }, outcome: 'She feels suffocated by your suspicion.' },
      { text: "Threaten to leave if she's late again", strategy: 'Negative Inducement', impact: { en: -5, pat: +5, bond: -20 }, outcome: 'A heavy threat. She seems resentful but compliant.' },
      { text: 'Welcome her back warmly', strategy: 'Trust', impact: { en: +10, pat: -10, bond: +15 }, outcome: "Bond strengthened, but you'll never know where she was." }
    ]
  },
  {
    id: 3,
    title: 'Day 3: The Gathering',
    desc: 'A tribal feast. Many males are present. She is wearing ochre paint (makeup).',
    choices: [
      { text: 'Stay by her side all night', strategy: 'Direct Guarding', impact: { en: -20, pat: +20, bond: -5 }, outcome: 'You exhausted yourself hovering, but no one could approach her.' },
      { text: 'Glance at her warningly', strategy: 'Negative Inducement', impact: { en: -5, pat: +5, bond: -10 }, outcome: 'She noticed your glare and stayed close out of fear.' },
      { text: 'Socialize with others', strategy: 'Trust', impact: { en: +10, pat: -15, bond: +5 }, outcome: 'You gained social status, but left her unattended.' }
    ]
  },
  {
    id: 4,
    title: 'Day 4: Resource Scarcity',
    desc: 'Food is low. You need to hunt, but that means leaving her alone for days.',
    choices: [
      { text: 'Stay home to guard', strategy: 'Direct Guarding', impact: { en: -30, pat: +10, bond: -10 }, outcome: "You stayed. You're both hungry now, and energy is critically low." },
      { text: 'Go hunt', strategy: 'Trust', impact: { en: -20, pat: -20, bond: +20 }, outcome: 'You brought back meat! Bond is high, but she was alone for 3 days.' },
      { text: "Tell her 'Wait for me or else'", strategy: 'Negative Inducement', impact: { en: -10, pat: +5, bond: -15 }, outcome: 'You hunted, but she spent the time angry at your threat.' }
    ]
  },
  {
    id: 5,
    title: 'Day 5: The Gift',
    desc: "She offers you a special meal. It's unclear if it's an apology or affection.",
    choices: [
      { text: 'Accept it happily', strategy: 'Trust', impact: { en: +20, pat: 0, bond: +20 }, outcome: 'A great meal. The bond is strong.' },
      { text: 'Question where she got the meat', strategy: 'Direct Guarding', impact: { en: -5, pat: +5, bond: -10 }, outcome: 'You ruined the mood with suspicion.' },
      { text: 'Demand loyalty before eating', strategy: 'Negative Inducement', impact: { en: -5, pat: +5, bond: -20 }, outcome: 'She withdrew the offer. The night ended in silence.' }
    ]
  }
]

export default function EvolutionaryImperativeSim({ isPresentation }) {
  const [day, setDay] = useState(1)
  const [stats, setStats] = useState({ energy: 100, paternity: 80, bond: 60 })
  const [phase, setPhase] = useState('briefing')
  const [lastAction, setLastAction] = useState(null)
  const [endReason, setEndReason] = useState(null)

  const handleChoice = (choice) => {
    setLastAction({
      text: choice.text,
      strategy: choice.strategy,
      outcome: choice.outcome,
      impact: choice.impact
    })

    setStats(prev => ({
      energy: Math.min(100, Math.max(0, prev.energy + choice.impact.en)),
      paternity: Math.min(100, Math.max(0, prev.paternity + choice.impact.pat)),
      bond: Math.min(100, Math.max(0, prev.bond + choice.impact.bond))
    }))

    setPhase('summary')
  }

  const calculateEnding = (currentStats) => {
    if (currentStats.paternity > 70 && currentStats.bond > 50) {
      endGame('The Patriarch', 'Optimal Outcome! You secured your lineage and maintained a stable pair-bond.', true, currentStats)
    } else if (currentStats.paternity > 80 && currentStats.bond < 40) {
      endGame('The Tyrant', 'Genetic success, but at what cost? You retained your mate through fear, but the relationship is miserable.', true, currentStats)
    } else if (currentStats.paternity < 40 && currentStats.bond > 70) {
      endGame('The Blissful Cuckold', "You are very happy together, but you are likely raising someone else's child. Evolutionary Fail.", false, currentStats)
    } else if (currentStats.energy < 20) {
      endGame('The Exhausted Victor', 'You succeeded, but you are too weak to defend your status next season.', true, currentStats)
    } else {
      endGame('Mediocre Survival', 'You survived, but your genetic legacy is uncertain and your bond is weak.', true, currentStats)
    }
  }

  const endGame = (title, desc, success, finalStats = stats) => {
    setEndReason({ title, desc, success, finalStats })
    setPhase('result')
  }

  const nextDay = () => {
    if (stats.energy <= 0) {
      endGame('Exhaustion', 'You died of stress and starvation. Your genes die with you.', false, stats)
      return
    }
    if (stats.paternity <= 0) {
      endGame('Cuckoldry', 'Not your kid. Evolutionary Failure.', false, stats)
      return
    }
    if (stats.bond <= 0) {
      endGame('Rejection', 'She left you for a less controlling male. You are alone.', false, stats)
      return
    }

    if (day >= 5) {
      calculateEnding(stats)
    } else {
      setDay(d => d + 1)
      setPhase('choice')
    }
  }

  const reset = () => {
    setStats({ energy: 100, paternity: 80, bond: 60 })
    setDay(1)
    setPhase('briefing')
    setEndReason(null)
    setLastAction(null)
  }

  return (
    <div className="h-full flex flex-col font-mono text-xs md:text-sm bg-stone-950 border-4 border-amber-800 rounded-xl relative overflow-hidden shadow-2xl">
      <div className="flex justify-between items-center p-4 border-b-2 border-amber-900 bg-stone-900 z-10">
        <div className="flex items-center gap-4">
          <div className="flex flex-col w-24">
            <div className="flex justify-between text-[10px] text-amber-500 uppercase"><span>Energy</span><span>{stats.energy}%</span></div>
            <div className="w-full h-1 bg-stone-800 rounded-full overflow-hidden">
              <div className={`h-full transition-all duration-500 ${stats.energy < 30 ? 'bg-red-500' : 'bg-amber-500'}`} style={{ width: `${stats.energy}%` }}></div>
            </div>
          </div>
          <div className="flex flex-col w-24">
            <div className="flex justify-between text-[10px] text-red-500 uppercase"><span>Paternity</span><span>{stats.paternity}%</span></div>
            <div className="w-full h-1 bg-stone-800 rounded-full overflow-hidden">
              <div className={`h-full transition-all duration-500 ${stats.paternity < 30 ? 'bg-red-500' : 'bg-red-400'}`} style={{ width: `${stats.paternity}%` }}></div>
            </div>
          </div>
          <div className="flex flex-col w-24">
            <div className="flex justify-between text-[10px] text-pink-500 uppercase"><span>Bond</span><span>{stats.bond}%</span></div>
            <div className="w-full h-1 bg-stone-800 rounded-full overflow-hidden">
              <div className={`h-full transition-all duration-500 ${stats.bond < 30 ? 'bg-red-500' : 'bg-pink-400'}`} style={{ width: `${stats.bond}%` }}></div>
            </div>
          </div>
        </div>
        <div className="text-stone-400 font-bold">DAY {Math.min(day, 5)}</div>
      </div>

      <div className="flex-grow relative z-10 flex flex-col items-center justify-center bg-stone-950/80 p-8">
        <div className="absolute inset-0 bg-cave opacity-20 pointer-events-none"></div>

        {phase === 'briefing' && (
          <div className="text-center max-w-2xl animate-fadeIn">
            <Dna size={80} className="text-amber-600 mx-auto mb-6" />
            <h3 className="text-3xl text-white font-bold mb-4 font-serif">SURVIVE & REPRODUCE</h3>
            <p className={`text-stone-400 mb-8 ${isPresentation ? 'text-xl' : 'text-base'} leading-relaxed`}>
              Manage your evolutionary resources over 5 days.
              <br /><br />
              <span className="text-red-400">Paternity:</span> Certainty of genes.<br />
              <span className="text-pink-400">Bond:</span> Partner retention.<br />
              <span className="text-amber-400">Energy:</span> Fuel for guarding.
            </p>
            <button onClick={() => setPhase('choice')} className="bg-amber-700 text-white px-8 py-3 font-bold hover:bg-amber-600 transition-all text-xl uppercase border border-amber-500 shadow-lg rounded-lg">Begin Simulation</button>
          </div>
        )}

        {phase === 'choice' && (
          <div className="w-full max-w-4xl animate-fadeIn">
            <div className="text-center mb-8">
              <h4 className="text-amber-500 font-serif text-2xl uppercase mb-2">{events[day - 1].title}</h4>
              <p className={`text-white ${isPresentation ? 'text-2xl' : 'text-xl'}`}>
                "{events[day - 1].desc}"
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {events[day - 1].choices.map((choice, i) => (
                <button
                  key={i}
                  onClick={() => handleChoice(choice)}
                  className="p-6 bg-stone-900 border border-stone-700 hover:border-amber-500 hover:bg-stone-800 transition-all text-left rounded-xl group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-stone-800 group-hover:bg-amber-500 transition-colors"></div>
                  <span className="block text-stone-300 font-bold mb-2 group-hover:text-white">{choice.text}</span>
                  <span className="text-[10px] text-stone-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Select Action</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {phase === 'summary' && lastAction && (
          <div className="w-full max-w-2xl bg-stone-900 border border-stone-700 p-8 rounded-xl animate-fadeIn shadow-2xl">
            <h4 className="text-white font-serif text-2xl uppercase mb-4 border-b border-stone-800 pb-2">Day {day} Summary</h4>

            <div className="mb-6">
              <span className="text-xs text-stone-500 uppercase block mb-1">Action Taken</span>
              <span className="text-lg text-amber-400 font-bold">"{lastAction.text}"</span>
              <span className="text-xs text-stone-600 ml-2">({lastAction.strategy})</span>
            </div>

            <div className="mb-6 bg-black/30 p-4 rounded border border-stone-800">
              <span className="text-xs text-stone-500 uppercase block mb-1">Outcome</span>
              <p className="text-stone-300 italic">"{lastAction.outcome}"</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8 text-center">
              <div>
                <span className="text-[10px] uppercase text-amber-600 block">Energy</span>
                <span className={`${lastAction.impact.en > 0 ? 'text-green-500' : lastAction.impact.en < 0 ? 'text-red-500' : 'text-stone-500'} font-bold`}>
                  {lastAction.impact.en > 0 ? '+' : ''}{lastAction.impact.en}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-red-500 block">Paternity</span>
                <span className={`${lastAction.impact.pat > 0 ? 'text-green-500' : lastAction.impact.pat < 0 ? 'text-red-500' : 'text-stone-500'} font-bold`}>
                  {lastAction.impact.pat > 0 ? '+' : ''}{lastAction.impact.pat}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-pink-500 block">Bond</span>
                <span className={`${lastAction.impact.bond > 0 ? 'text-green-500' : lastAction.impact.bond < 0 ? 'text-red-500' : 'text-stone-500'} font-bold`}>
                  {lastAction.impact.bond > 0 ? '+' : ''}{lastAction.impact.bond}
                </span>
              </div>
            </div>

            <button onClick={nextDay} className="w-full py-3 bg-stone-800 hover:bg-stone-700 text-white font-bold rounded uppercase transition-colors">
              {day >= 5 ? 'View Final Results' : 'Proceed to Next Day'}
            </button>
          </div>
        )}

        {phase === 'result' && endReason && (
          <div className="text-center max-w-xl animate-fadeIn border-2 border-stone-700 bg-stone-900 p-10 rounded-xl shadow-2xl">
            <div className="mb-6">
              {endReason.success ? <CheckCircle size={80} className="text-green-500 mx-auto" /> : <Skull size={80} className="text-red-500 mx-auto" />}
            </div>
            <h3 className={`text-4xl font-bold mb-2 font-serif ${endReason.success ? 'text-green-400' : 'text-red-500'}`}>
              {endReason.title}
            </h3>
            <div className="h-1 w-24 bg-stone-700 mx-auto my-4"></div>
            <p className={`text-stone-300 mb-8 leading-relaxed ${isPresentation ? 'text-xl' : 'text-lg'}`}>{endReason.desc}</p>

            <div className="grid grid-cols-3 gap-4 mb-8 text-xs font-mono opacity-80">
              <div>Final Energy: {endReason.finalStats.energy}</div>
              <div>Final Paternity: {endReason.finalStats.paternity}</div>
              <div>Final Bond: {endReason.finalStats.bond}</div>
            </div>

            <button onClick={reset} className="text-amber-500 underline hover:text-white uppercase font-bold tracking-widest">Replay Simulation</button>
          </div>
        )}
      </div>
    </div>
  )
}
