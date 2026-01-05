import React, { useState, useEffect } from 'react'
import { Target, Activity } from 'lucide-react'

export default function WeaponEffect({ isPresentation }) {
  const [cue, setCue] = useState('neutral')
  const [readiness, setReadiness] = useState(50)

  useEffect(() => {
    const targetLevel = cue === 'aggressive' ? 90 : 50
    setReadiness(targetLevel)
  }, [cue])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Visualizer */}
      <div className="bg-slate-900 border border-slate-700 p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl rounded-xl">
        {/* Aggression Potential */}
        <div className="mb-8 w-full">
          <div className="flex justify-between text-xs text-slate-500 font-data mb-1">
            <span>AGGRESSION POTENTIAL</span>
            <span>{readiness}%</span>
          </div>
          <div className="w-full h-4 bg-slate-800 rounded overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ease-out ${cue === 'aggressive' ? 'bg-red-600' : 'bg-orange-500'}`}
              style={{ width: `${readiness}%` }}
            ></div>
          </div>
        </div>

        {/* The Cue */}
        <div className={`p-8 border-4 border-dashed rounded-xl mb-8 transition-all duration-500 ${cue === 'aggressive' ? 'border-red-500 bg-red-900/10' : 'border-slate-600 bg-slate-800/30'}`}>
          {cue === 'aggressive' ? (
            <Target size={isPresentation ? 120 : 80} className="text-red-500 mx-auto" />
          ) : (
            <Activity size={isPresentation ? 120 : 80} className="text-slate-500 mx-auto" />
          )}
          <span className="block text-center mt-4 font-bold uppercase text-slate-400">
            {cue === 'aggressive' ? 'Gun (Aggressive Cue)' : 'Badminton Racket (Neutral Cue)'}
          </span>
        </div>

        {/* The Result */}
        <div className={`text-center font-mech text-2xl font-bold transition-all ${cue === 'aggressive' ? 'text-red-500 scale-125' : 'text-slate-500 scale-100'}`}>
          {cue === 'aggressive' ? 'AGGRESSION RELEASED!' : 'NO AGGRESSION'}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center bg-slate-900/50 border-l-4 border-yellow-500 p-8 overflow-y-auto custom-scrollbar rounded-xl">
        <h3 className={`font-mech text-yellow-500 mb-4 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
          Berkowitz & LePage (1967)
        </h3>

        <div className="space-y-4 mb-6">
          <div className="animate-fadeIn">
            <strong className="text-orange-400 font-data text-xs uppercase block mb-1">The Theory</strong>
            <p className={`text-slate-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              Frustration creates <em>readiness</em> for aggression, but environmental aggressive cues determine if it happens.
            </p>
          </div>

          <div className="animate-fadeIn">
            <strong className="text-orange-400 font-data text-xs uppercase block mb-1">The Procedure</strong>
            <p className={`text-slate-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              Participants given 100 shocks (frustration). Then allowed to shock confederate back in room with gun or badminton racket present.
            </p>
          </div>

          <div className="bg-slate-800 p-4 border border-slate-600 rounded animate-fadeIn">
            <strong className="text-white font-data text-xs uppercase block mb-2">Findings (Mean Shocks Given)</strong>
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-400 text-sm">Gun Present:</span>
              <span className="text-red-500 font-bold font-mono text-xl">6.07</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400 text-sm">No Gun:</span>
              <span className="text-slate-500 font-bold font-mono text-xl">4.67</span>
            </div>
          </div>

          <p className={`text-white italic text-center mt-4 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
            "The finger pulls the trigger, but the trigger may also be pulling the finger."
          </p>
        </div>

        <div className="flex gap-4 mt-auto">
          <button
            onClick={() => setCue('neutral')}
            className={`flex-1 py-4 border font-bold uppercase transition-all rounded ${cue === 'neutral' ? 'bg-slate-700 border-slate-500 text-white' : 'border-slate-800 text-slate-500'}`}
          >
            Neutral Cue
          </button>
          <button
            onClick={() => setCue('aggressive')}
            className={`flex-1 py-4 border font-bold uppercase transition-all rounded ${cue === 'aggressive' ? 'bg-red-900/50 border-red-500 text-red-400' : 'border-slate-800 text-slate-500'}`}
          >
            Aggressive Cue
          </button>
        </div>
      </div>
    </div>
  )
}
