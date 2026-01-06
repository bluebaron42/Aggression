import React from 'react'
import { Search, Globe } from 'lucide-react'

export default function Lesson6EvidenceGrid({ isPresentation }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-slate-900 border border-slate-800 p-8 relative rounded-xl">
        <div className="absolute top-4 right-4 opacity-20"><Search size={48} className="text-teal-500"/></div>
        <h3 className={`text-teal-500 font-bold font-mono mb-4 border-b border-slate-800 pb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Bandura et al. (1961)</h3>
        <div className={`space-y-4 text-slate-300 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
          <p><strong className={`text-white font-mono ${isPresentation ? 'text-xl' : 'text-xs'}`}>Method:</strong> Children observed adult model attacking Bobo doll.</p>
          <p><strong className={`text-white font-mono ${isPresentation ? 'text-xl' : 'text-xs'}`}>Findings:</strong> Aggressive condition reproduced more physical & verbal aggression.</p>
          <p><strong className={`text-white font-mono ${isPresentation ? 'text-xl' : 'text-xs'}`}>1963:</strong> Vicarious punishment reduced imitation.</p>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-8 relative rounded-xl">
        <div className="absolute top-4 right-4 opacity-20"><Globe size={48} className="text-green-500"/></div>
        <h3 className={`text-green-500 font-bold font-mono mb-4 border-b border-slate-800 pb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>!Kung San</h3>
        <div className={`space-y-4 text-slate-300 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
          <p><strong className={`text-white font-mono ${isPresentation ? 'text-xl' : 'text-xs'}`}>Context:</strong> Parents do not model aggression; fighting children are separated.</p>
          <p><strong className={`text-white font-mono ${isPresentation ? 'text-xl' : 'text-xs'}`}>Outcome:</strong> Very low cultural aggression.</p>
          <p className={`text-teal-500/80 italic ${isPresentation ? 'text-xl' : 'text-sm'}`}>Supports SLT: No aggressive models = No aggressive behavior.</p>
        </div>
      </div>
    </div>
  )
}
