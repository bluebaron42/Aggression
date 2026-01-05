import React from 'react'
import { Clock } from 'lucide-react'

export default function PhaseHeader({ phase, title, icon: Icon, time, isPresentation }) {
  return (
    <div className={`flex items-center justify-between border-b border-slate-800 transition-all ${isPresentation ? 'mb-6 pb-4' : 'mb-6 pb-4'}`}>
      <div className="flex items-center gap-4">
        <div className={`rounded-lg border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.15)] ${isPresentation ? 'w-20 h-20 bg-cyan-900/30' : 'w-12 h-12 bg-cyan-900/20'}`}>
          <Icon size={isPresentation ? 40 : 24} className="text-cyan-400" />
        </div>
        <div>
          <h4 className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 uppercase tracking-widest ${isPresentation ? 'text-lg mb-1' : 'text-[10px] mb-0.5'}`}>
            {phase}
          </h4>
          <h2 className={`font-bold text-white tracking-tight ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>
            {title}
          </h2>
        </div>
      </div>
      {time && (
        <div className={`flex items-center gap-2 text-slate-400 font-mono bg-slate-900/80 rounded-full border border-slate-700 backdrop-blur-md ${isPresentation ? 'text-xl px-6 py-3' : 'text-xs px-3 py-1.5'}`}>
          <Clock size={isPresentation ? 24 : 14} className="text-cyan-500" /> {time}
        </div>
      )}
    </div>
  )
}
