import React, { useState } from 'react'
import { MapPin, AlertTriangle, Radio, Target } from 'lucide-react'

export default function MateRetentionSystem({ isPresentation }) {
  const [strategy, setStrategy] = useState(null)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* HUD Dashboard */}
      <div className="bg-stone-950 border border-red-900 p-8 relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(248,113,113,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(248,113,113,0.08)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute w-full h-1 bg-red-500/50 animate-scan"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
          <div
            className={`w-full p-6 border-2 flex items-center justify-between cursor-pointer transition-all rounded-lg ${strategy === 'direct' ? 'bg-red-900/30 border-red-400 shadow-[0_0_20px_rgba(248,113,113,0.3)]' : 'bg-stone-900 border-stone-700 opacity-70'}`}
            onClick={() => setStrategy('direct')}
          >
            <div className="flex items-center gap-4">
              <div className="bg-red-500/20 p-3 rounded">
                <MapPin size={32} className="text-red-400" />
              </div>
              <div>
                <h4 className="font-mono text-red-400 text-lg uppercase tracking-wider">Direct Guarding</h4>
                <span className="text-stone-400 text-xs font-mono">STATUS: ACTIVE</span>
              </div>
            </div>
            {strategy === 'direct' && <Radio className="text-red-400 animate-pulse" />}
          </div>

          <div
            className={`w-full p-6 border-2 flex items-center justify-between cursor-pointer transition-all rounded-lg ${strategy === 'negative' ? 'bg-amber-900/30 border-amber-500 shadow-[0_0_20px_rgba(217,119,6,0.3)]' : 'bg-stone-900 border-stone-700 opacity-70'}`}
            onClick={() => setStrategy('negative')}
          >
            <div className="flex items-center gap-4">
              <div className="bg-amber-500/20 p-3 rounded">
                <AlertTriangle size={32} className="text-amber-400" />
              </div>
              <div>
                <h4 className="font-mono text-amber-400 text-lg uppercase tracking-wider">Negative Inducements</h4>
                <span className="text-stone-400 text-xs font-mono">STATUS: STANDBY</span>
              </div>
            </div>
            {strategy === 'negative' && <Target className="text-amber-400 animate-pulse" />}
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <div className="flex flex-col justify-center bg-stone-900/50 border-l-4 border-red-500 p-8 rounded-xl">
        <h3 className={`font-serif text-white mb-4 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Wilson & Daly (1996)</h3>

        {strategy === 'direct' ? (
          <div className="animate-fadeIn">
            <strong className="text-red-400 font-mono text-xl block mb-2">STRATEGY: VIGILANCE</strong>
            <p className={`text-stone-300 mb-4 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              Attempting to restrict the partner's access to other males.
            </p>
            <ul className="list-disc pl-4 text-stone-400 space-y-2 font-mono text-sm">
              <li>Checking who they've been with.</li>
              <li>Tracking location (apps/devices).</li>
              <li>Coming home early unexpectedly.</li>
              <li>Reading messages.</li>
            </ul>
          </div>
        ) : strategy === 'negative' ? (
          <div className="animate-fadeIn">
            <strong className="text-amber-400 font-mono text-xl block mb-2">STRATEGY: THREATS</strong>
            <p className={`text-stone-300 mb-4 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              Threats of consequences for infidelity or leaving.
            </p>
            <ul className="list-disc pl-4 text-stone-400 space-y-2 font-mono text-sm">
              <li>"I'll hurt myself if you leave."</li>
              <li>Threats of violence toward partner.</li>
              <li>Threats toward potential rivals.</li>
            </ul>
          </div>
        ) : (
          <p className="text-stone-500 italic font-mono">Select a strategy on the dashboard to analyze data.</p>
        )}
      </div>
    </div>
  )
}
