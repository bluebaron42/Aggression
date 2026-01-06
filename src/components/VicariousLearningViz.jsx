import React, { useState } from 'react'
import { Users, Play, Activity, Ban } from 'lucide-react'

export default function VicariousLearningViz({ isPresentation }) {
  const [outcome, setOutcome] = useState('reward')
  const [identity, setIdentity] = useState('high')

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-slate-900 border border-slate-800 p-6 relative rounded-xl">
        <span className="absolute top-2 left-2 text-teal-600 font-mono text-xs uppercase">Input: Model</span>
        <div className="mb-8 text-center">
          <Users size={80} className="text-teal-500 mx-auto mb-4" />
          <p className="text-slate-200">Model performs aggression.</p>
        </div>
        <div className="space-y-6">
          <div>
            <span className="text-slate-500 font-mono uppercase text-xs block mb-2">Consequences (Vicarious)</span>
            <div className="flex gap-4 w-full">
              <button onClick={() => setOutcome('reward')} className={`flex-1 py-3 border-2 font-mono uppercase transition-all ${outcome === 'reward' ? 'bg-green-900/40 border-green-500 text-green-400' : 'border-slate-700 text-slate-500'}`}>Reward</button>
              <button onClick={() => setOutcome('punish')} className={`flex-1 py-3 border-2 font-mono uppercase transition-all ${outcome === 'punish' ? 'bg-red-900/40 border-red-500 text-red-400' : 'border-slate-700 text-slate-500'}`}>Punishment</button>
            </div>
          </div>
          <div>
            <span className="text-slate-500 font-mono uppercase text-xs block mb-2">Identification (Similarity/Status)</span>
            <div className="flex gap-4 w-full">
              <button onClick={() => setIdentity('high')} className={`flex-1 py-3 border-2 font-mono uppercase transition-all ${identity === 'high' ? 'bg-blue-900/40 border-blue-500 text-blue-400' : 'border-slate-700 text-slate-500'}`}>High ID</button>
              <button onClick={() => setIdentity('low')} className={`flex-1 py-3 border-2 font-mono uppercase transition-all ${identity === 'low' ? 'bg-purple-900/40 border-purple-500 text-purple-400' : 'border-slate-700 text-slate-500'}`}>Low ID</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-6 relative rounded-xl text-center flex items-center justify-center">
        <span className="absolute top-2 left-2 text-teal-600 font-mono text-xs uppercase">Output: Observer</span>
        <div className={`transition-all duration-500 transform ${outcome === 'reward' && identity === 'high' ? 'scale-110' : 'scale-100'}`}>
          {outcome === 'reward' && identity === 'high' ? (
            <div className="text-green-500">
              <Play size={80} className="mx-auto mb-4 animate-pulse" />
              <h3 className="font-mono text-3xl mb-2">Maximum Imitation</h3>
              <p className="text-slate-300 font-mono text-sm">"I identify with the model AND they got a reward."</p>
            </div>
          ) : outcome === 'reward' && identity === 'low' ? (
            <div className="text-yellow-500">
              <Activity size={80} className="mx-auto mb-4" />
              <h3 className="font-mono text-3xl mb-2">Moderate Imitation</h3>
              <p className="text-slate-300 font-mono text-sm">"They got a reward, but I dont relate to them."</p>
            </div>
          ) : (
            <div className="text-red-500">
              <Ban size={80} className="mx-auto mb-4" />
              <h3 className="font-mono text-3xl mb-2">Imitation Unlikely</h3>
              <p className="text-slate-300 font-mono text-sm">Vicarious punishment inhibits imitation regardless of identification.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
