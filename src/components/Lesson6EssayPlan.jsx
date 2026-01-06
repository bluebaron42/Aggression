import React, { useState } from 'react'
import { FileText, Monitor } from 'lucide-react'

export default function Lesson6EssayPlan({ isPresentation }) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className={`bg-slate-900 border border-slate-800 p-8 flex flex-col h-full relative overflow-hidden rounded-xl`}>
      <div className="absolute top-0 right-0 p-4 opacity-10"><FileText size={120} className="text-teal-600" /></div>
      <div className="flex items-center justify-between mb-8 z-10 relative border-b border-slate-800 pb-4">
        <h3 className={`font-mono text-teal-200 tracking-widest uppercase ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Script: Essay Plan</h3>
        <span className="bg-teal-700 text-black px-3 py-1 text-xs font-bold font-mono">16 MARKS</span>
      </div>
      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button onClick={() => setRevealed(true)} className={`group flex items-center gap-3 bg-teal-700 hover:bg-teal-600 text-black font-bold font-mono uppercase transition-all shadow-md ${isPresentation ? 'px-10 py-6 text-2xl' : 'px-8 py-4'}`}><Monitor size={20} /> Load Program</button>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn overflow-y-auto pr-2 z-10 relative h-full">
          <div className="bg-slate-800 p-4 border-l-4 border-teal-500 mb-4 rounded">
            <p className="text-teal-400 text-sm font-mono italic">Question: "Discuss Social Learning Theory as an explanation for human aggression." (16 Marks)</p>
          </div>
          <div className={`border-l-4 border-blue-500 pl-4 py-2`}>
            <strong className={`text-blue-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO1: Concepts (6 Marks)</strong>
            <ul className={`text-slate-300 list-disc pl-4 space-y-1 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <li><strong>Bandura (1961):</strong> Aggression learned via Observation & Imitation.</li>
              <li><strong>Vicarious Reinforcement:</strong> Consequences determine imitation.</li>
              <li><strong>Mediational Processes (ARRM):</strong> Attention, Retention, Reproduction, Motivation.</li>
              <li><strong>Self-Efficacy:</strong> Belief in ability to perform the behavior.</li>
            </ul>
          </div>
          <div className={`border-l-4 border-green-500 pl-4 py-2`}>
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Experimental Support</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Bandura et al. (1961):</strong> Aggressive model increased imitation; supports SLT mechanisms.
            </p>
          </div>
          <div className={`border-l-4 border-green-500 pl-4 py-2`}>
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Cultural Support</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>!Kung San:</strong> Absence of aggressive models aligns with low aggression.
            </p>
          </div>
          <div className={`border-l-4 border-red-500 pl-4 py-2`}>
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Artificiality</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              Demand characteristics with Bobo doll; low ecological validity.
            </p>
          </div>
          <div className={`border-l-4 border-red-500 pl-4 py-2`}>
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Biological Factors</strong>
            <p className={`text-slate-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              Gender differences suggest biological drivers; SLT shapes method.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
