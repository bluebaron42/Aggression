import React, { useState } from 'react'
import { Unlock, FileText } from 'lucide-react'

export default function Lesson5EssayPlan({ isPresentation }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="bg-slate-900 border border-slate-700 p-8 flex flex-col h-full relative overflow-hidden rounded-xl">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <FileText size={120} className="text-orange-500" />
      </div>

      <div className="flex items-center justify-between mb-8 z-10 relative border-b border-slate-700 pb-4">
        <h3 className={`font-mech text-white tracking-widest uppercase ${isPresentation ? 'text-3xl' : 'text-xl'}`}>
          BLUEPRINT: ESSAY PLAN
        </h3>
        <span className="bg-orange-600 text-white px-3 py-1 text-xs font-bold font-data rounded">16 MARKS</span>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button
            onClick={() => setRevealed(true)}
            className={`group flex items-center gap-3 bg-orange-700 hover:bg-orange-600 text-white font-bold font-mech uppercase transition-all shadow-lg rounded ${isPresentation ? 'px-10 py-6 text-2xl' : 'px-8 py-4'}`}
          >
            <Unlock size={20} /> DECLASSIFY
          </button>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative h-full">
          <div className="bg-slate-800 p-4 border-l-4 border-orange-500 mb-4">
            <p className="text-orange-100/80 text-sm italic">
              Question: "Discuss the frustration-aggression hypothesis." (16 Marks)
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <strong className={`text-blue-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO1: Concepts (6 Marks)
            </strong>
            <ul className={`text-slate-300 list-disc pl-4 space-y-1 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <li>
                <strong>Dollard et al. (1939):</strong> Frustration always leads to aggression. Based on Catharsis.
              </li>
              <li>
                <strong>Mechanism:</strong> Goal blocking → Drive → Aggression → Relief.
              </li>
              <li>
                <strong>Displacement:</strong> If cause is abstract, aggression displaced onto weaker target.
              </li>
              <li>
                <strong>Berkowitz (1989):</strong> Negative Affect Theory reformulation.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Experimental Support
            </strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Geen (1968):</strong> Jigsaw puzzle study. Insulted participants who failed gave stronger shocks
              to confederate than those who just failed. Supports frustration-aggression link.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: The Weapon Effect
            </strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Berkowitz & LePage:</strong> Guns increased shocks given compared to badminton rackets.
              Frustration creates readiness, but environmental cues trigger behavior.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Contradicting Catharsis
            </strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Bushman (2002):</strong> Venting anger (punching bag) <strong>increased</strong> later aggression,
              not decreased. Contradicts central psychodynamic assumption of hypothesis.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
