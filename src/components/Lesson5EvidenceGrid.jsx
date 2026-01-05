import React from 'react'
import { BarChart3, Zap } from 'lucide-react'

export default function Lesson5EvidenceGrid({ isPresentation }) {
  return (
    <div className="bg-slate-900 border border-slate-700 p-8 h-full rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
        <BarChart3 size={24} className="text-orange-500" />
        <h3 className={`font-mech text-white tracking-widest uppercase ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
          Evidence Grid
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4 h-full overflow-y-auto custom-scrollbar">
        {/* Geen Study */}
        <div className="bg-slate-800 border border-orange-500/50 p-4 rounded hover:border-orange-500 transition-all flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 size={18} className="text-orange-400" />
            <h4 className={`font-bold font-mech text-orange-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
              Geen (1968)
            </h4>
          </div>
          <div className={`text-slate-300 space-y-2 flex-grow ${isPresentation ? 'text-base' : 'text-xs'}`}>
            <p className="font-bold text-orange-100">Jigsaw Puzzle</p>
            <p className="text-slate-400">
              <strong>Method:</strong> Participants solved puzzle, confederate insulted some (frustration manipulation).
              Then participants gave shocks.
            </p>
            <p className="text-slate-400">
              <strong>Result:</strong> Frustrated + insulted group gave <span className="text-orange-300 font-bold">stronger shocks</span> than
              frustrated only. <strong>Frustration + aggression target = increased aggression.</strong>
            </p>
            <p className="text-orange-300/70 text-xs italic">
              Supports H-A link when target is perceivable cause.
            </p>
          </div>
        </div>

        {/* Berkowitz & LePage */}
        <div className="bg-slate-800 border border-orange-500/50 p-4 rounded hover:border-orange-500 transition-all flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Zap size={18} className="text-orange-400" />
            <h4 className={`font-bold font-mech text-orange-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
              Berkowitz & LePage (1967)
            </h4>
          </div>
          <div className={`text-slate-300 space-y-2 flex-grow ${isPresentation ? 'text-base' : 'text-xs'}`}>
            <p className="font-bold text-orange-100">Weapon Effect</p>
            <p className="text-slate-400">
              <strong>Method:</strong> Frustrated participants saw gun or badminton racket on desk. Gave shocks to
              confederate.
            </p>
            <p className="text-slate-400">
              <strong>Result:</strong> Gun condition: <span className="text-orange-300 font-bold">6.07 shocks</span>.
              Racket condition: 4.67 shocks. <strong>P &lt; .05</strong>
            </p>
            <p className="text-orange-300/70 text-xs italic">
              Environmental cues trigger behavior when already frustrated.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
