import React, { useState } from 'react'
import { FileText, Search } from 'lucide-react'

export default function EssayPlanReveal({ isPresentation }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className={`bg-slate-900/80 border border-slate-700 p-8 flex flex-col h-full relative overflow-hidden rounded-2xl`}>
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <FileText size={120} className="text-cyan-500" />
      </div>

      <div className="flex items-center justify-between mb-8 z-10 relative border-b border-cyan-900 pb-4">
        <h3 className={`font-bold text-white tracking-widest uppercase ${isPresentation ? 'text-3xl' : 'text-xl'}`}>
          EXAM PREP: ESSAY PLAN
        </h3>
        <span className="bg-cyan-600 text-black px-3 py-1 text-xs font-bold font-mono">16 MARKS</span>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button
            onClick={() => setRevealed(true)}
            className={`group flex items-center gap-3 bg-cyan-700 hover:bg-cyan-600 text-white font-bold uppercase transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] ${
              isPresentation ? 'px-10 py-6 text-2xl' : 'px-8 py-4'
            }`}
          >
            <Search size={20} /> ACCESS DATA
          </button>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative h-full">
          <div className="bg-cyan-900/20 p-4 border-l-4 border-cyan-500 mb-4">
            <p className="text-cyan-400 text-sm font-mono italic">
              Question: "Discuss neural and hormonal mechanisms in aggression." (16 Marks)
            </p>
          </div>

          <div className={`border-l-4 border-blue-500 pl-4 py-2`}>
            <strong className={`text-blue-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO1: Concepts (6 Marks)
            </strong>
            <ul className={`text-slate-300 list-disc pl-4 space-y-1 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <li>
                <strong>Limbic System:</strong> Amygdala assesses threat/triggers response.
              </li>
              <li>
                <strong>Serotonin:</strong> Inhibitory. Low levels in OFC = reduced self-control (Impulsivity).
              </li>
              <li>
                <strong>Testosterone:</strong> Androgen. Regulates social behavior. High levels = Amygdala reactivity.
              </li>
            </ul>
          </div>

          <div className={`border-l-4 border-green-500 pl-4 py-2`}>
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Research Support (Neural)
            </strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Gospic et al. (2011):</strong> Ultimatum Game + fMRI. Unfair offers (aggression) linked to Amygdala
              activity. Benzodiazepines reduced activity and aggression.
            </p>
          </div>

          <div className={`border-l-4 border-green-500 pl-4 py-2`}>
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Research Support (Hormonal)
            </strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Dolan et al. (2001):</strong> Max security prison. Found positive correlation between testosterone
              and aggression in offenders with impulsive histories.
            </p>
          </div>

          <div className={`border-l-4 border-red-500 pl-4 py-2`}>
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Dual-Hormone Hypothesis
            </strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Carre & Mehta (2011):</strong> Testosterone only predicts aggression when <strong>Cortisol</strong>{' '}
              is low. High stress (cortisol) blocks testosterone's effect. Simple testosterone theory is reductionist.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
