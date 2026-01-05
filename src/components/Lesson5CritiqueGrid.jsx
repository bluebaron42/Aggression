import React from 'react'
import { AlertTriangle, TrendingUp } from 'lucide-react'

export default function Lesson5CritiqueGrid({ isPresentation }) {
  return (
    <div className="bg-slate-900 border border-slate-700 p-8 h-full rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
        <AlertTriangle size={24} className="text-red-500" />
        <h3 className={`font-mech text-white tracking-widest uppercase ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
          Critique Grid
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4 h-full overflow-y-auto custom-scrollbar">
        {/* Bushman Contradiction */}
        <div className="bg-slate-800 border border-red-600/50 p-4 rounded hover:border-red-500 transition-all flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle size={18} className="text-red-400" />
            <h4 className={`font-bold font-mech text-red-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
              Bushman (2002)
            </h4>
          </div>
          <div className={`text-slate-300 space-y-2 flex-grow ${isPresentation ? 'text-base' : 'text-xs'}`}>
            <p className="font-bold text-red-100">Catharsis Myth</p>
            <p className="text-slate-400">
              <strong>Finding:</strong> Participants who punched a punching bag after frustration were{' '}
              <span className="text-red-300 font-bold">MORE aggressive</span> toward others than control group.
            </p>
            <p className="text-slate-400">
              <strong>Problem:</strong> Original hypothesis predicted venting would <strong>reduce</strong> aggression
              (cathartic relief). This contradicts Dollard et al.
            </p>
            <p className="text-red-300/70 text-xs italic">
              Venting may increase arousal, not decrease it.
            </p>
          </div>
        </div>

        {/* Berkowitz Reformulation */}
        <div className="bg-slate-800 border border-orange-500/50 p-4 rounded hover:border-orange-500 transition-all flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={18} className="text-orange-400" />
            <h4 className={`font-bold font-mech text-orange-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
              Berkowitz (1989)
            </h4>
          </div>
          <div className={`text-slate-300 space-y-2 flex-grow ${isPresentation ? 'text-base' : 'text-xs'}`}>
            <p className="font-bold text-orange-100">Negative Affect Theory</p>
            <p className="text-slate-400">
              <strong>Revision:</strong> Not just frustration → aggression. Frustration creates{' '}
              <strong>negative affect</strong> (anger + other emotions).
            </p>
            <p className="text-slate-400">
              <strong>Mechanism:</strong> Negative affect + environmental cues (weapons, aggression-related priming)
              = behavioral aggression.
            </p>
            <p className="text-orange-300/70 text-xs italic">
              Explains why catharsis fails; explains weapon effect.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
