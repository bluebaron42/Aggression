import React, { useState } from 'react'
import { Scroll, BookOpen } from 'lucide-react'

export default function Lesson4EssayPlan({ isPresentation }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className={`bg-stone-900 border border-stone-800 p-8 flex flex-col h-full relative overflow-hidden rounded-xl`}>
      <div className="absolute top-0 right-0 p-4 opacity-10"><Scroll size={120} className="text-amber-600" /></div>

      <div className="flex items-center justify-between mb-8 z-10 relative border-b border-stone-700 pb-4">
        <h3 className={`font-serif text-stone-200 tracking-wide ${isPresentation ? 'text-3xl' : 'text-xl'}`}>ARCHIVE: ESSAY PLAN</h3>
        <span className="bg-amber-700 text-white px-3 py-1 text-xs font-bold font-mono rounded">16 MARKS</span>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button
            onClick={() => setRevealed(true)}
            className={`group flex items-center gap-3 bg-amber-700 hover:bg-amber-600 text-white font-bold font-mono uppercase transition-all shadow-lg rounded-none ${isPresentation ? 'px-10 py-6 text-2xl' : 'px-8 py-4'}`}
          >
            <BookOpen size={20} /> DECRYPT FILE
          </button>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative h-full">
          <div className="bg-stone-800 p-4 border-l-4 border-amber-600 mb-4">
            <p className="text-amber-100/80 text-sm font-serif italic">Question: "Discuss evolutionary explanations of human aggression." (16 Marks)</p>
          </div>

          <div className={`border-l-4 border-blue-500 pl-4 py-2`}>
            <strong className={`text-blue-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO1: Concepts (6 Marks)</strong>
            <ul className={`text-stone-300 list-disc pl-4 space-y-1 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <li><strong>Sexual Jealousy:</strong> Adaptive response to Paternity Uncertainty and Cuckoldry risk.</li>
              <li><strong>Mate Retention (Wilson & Daly):</strong> Direct Guarding & Negative Inducements.</li>
              <li><strong>Bullying (Volk):</strong> Adaptive for status/dominance (males) and securing resources (females).</li>
            </ul>
          </div>

          <div className={`border-l-4 border-green-500 pl-4 py-2`}>
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Research Support</strong>
            <p className={`text-stone-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Shackleford et al. (2005):</strong> Studied 107 couples. Positive correlation between men's Mate Retention strategies and physical violence (reported by wives). Supports evolutionary link to IPV.
            </p>
          </div>

          <div className={`border-l-4 border-red-500 pl-4 py-2`}>
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Gender Differences</strong>
            <p className={`text-stone-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Campbell (1999):</strong> Females engage in less physical aggression as the evolutionary cost (survival of offspring depends on mother) is higher. They use verbal/relational aggression. Theory explains this dimorphism.
            </p>
          </div>

          <div className={`border-l-4 border-red-500 pl-4 py-2`}>
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Cultural Differences</strong>
            <p className={`text-stone-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>!Kung San vs Yanomamo:</strong> !Kung San devalue aggression; Yanomamo reward it with status. If aggression was purely evolutionary (universal), these cultural differences shouldn't exist.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
