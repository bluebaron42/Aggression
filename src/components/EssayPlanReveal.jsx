import React, { useState } from 'react'
import { FileText, Search } from 'lucide-react'

export default function EssayPlanReveal({ isPresentation }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className={`bg-slate-900/80 border border-slate-700 flex flex-col h-full relative overflow-hidden rounded-2xl ${isPresentation ? 'p-16' : 'p-8'}`}>
      <div className="absolute top-0 right-0 opacity-10">
        <FileText size={isPresentation ? 160 : 120} className="text-red-500" />
      </div>

      <div className={`flex items-center justify-between mb-8 z-10 relative border-b border-red-900 pb-4 ${isPresentation ? 'pb-6 mb-12' : ''}`}>
        <h3 className={`font-bold text-white tracking-widest uppercase ${isPresentation ? 'text-4xl' : 'text-xl'}`}>
          EXAM PREP: ESSAY PLAN
        </h3>
        <span className={`bg-red-600 text-black font-bold font-mono ${isPresentation ? 'px-4 py-2 text-sm' : 'px-3 py-1 text-xs'}`}>16 MARKS</span>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button
            onClick={() => setRevealed(true)}
            className={`group flex items-center gap-3 bg-red-700 hover:bg-red-600 text-white font-bold uppercase transition-all shadow-[0_0_15px_rgba(239,68,68,0.3)] ${
              isPresentation ? 'px-12 py-6 text-2xl gap-4' : 'px-8 py-4'
            }`}
          >
            <Search size={isPresentation ? 28 : 20} /> ACCESS DATA
          </button>
        </div>
      ) : (
        <div className={`space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative h-full ${isPresentation ? 'space-y-6' : ''}`}>
          <div className={`bg-red-900/20 border-l-4 border-red-500 mb-4 ${isPresentation ? 'p-6 mb-6' : 'p-4'}`}>
            <p className={`text-red-400 font-mono italic ${isPresentation ? 'text-base' : 'text-sm'}`}>
              Question: "Discuss neural and hormonal mechanisms in aggression." (16 Marks)
            </p>
          </div>

          <div className={`border-l-4 border-orange-500 pl-4 py-2 ${isPresentation ? 'pl-6' : ''}`}>
            <strong className={`text-orange-400 block mb-1 font-bold ${isPresentation ? 'text-2xl mb-3' : 'text-sm'}`}>
              AO1: Concepts (6 Marks)
            </strong>
            <ul className={`text-slate-300 list-disc space-y-1 ${isPresentation ? 'text-lg space-y-2 pl-6' : 'text-xs pl-4'}`}>
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

          <div className={`border-l-4 border-green-500 pl-4 py-2 ${isPresentation ? 'pl-6' : ''}`}>
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-2xl mb-3' : 'text-sm'}`}>
              AO3: Research Support (Neural)
            </strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Gospic et al. (2011):</strong> Ultimatum Game + fMRI. Unfair offers (aggression) linked to Amygdala
              activity. Benzodiazepines reduced activity and aggression.
            </p>
          </div>

          <div className={`border-l-4 border-green-500 pl-4 py-2 ${isPresentation ? 'pl-6' : ''}`}>
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-2xl mb-3' : 'text-sm'}`}>
              AO3: Research Support (Hormonal)
            </strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Dolan et al. (2001):</strong> Max security prison. Found positive correlation between testosterone
              and aggression in offenders with impulsive histories.
            </p>
          </div>

          <div className={`border-l-4 border-red-500 pl-4 py-2 ${isPresentation ? 'pl-6' : ''}`}>
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-2xl mb-3' : 'text-sm'}`}>
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
