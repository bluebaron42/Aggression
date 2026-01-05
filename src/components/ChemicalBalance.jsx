import React, { useState } from 'react'
import { FlaskConical, Dna } from 'lucide-react'

export default function ChemicalBalance({ isPresentation }) {
  const [serotonin, setSerotonin] = useState(50)
  const [testosterone, setTestosterone] = useState(50)

  return (
    <div className={`flex flex-col h-full gap-8 ${isPresentation ? 'gap-16' : ''}`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isPresentation ? 'gap-16' : ''}`}>
        {/* Serotonin Control */}
        <div className={`bg-slate-900 border border-slate-800 rounded-xl relative overflow-hidden shadow-lg ${isPresentation ? 'p-12' : 'p-6'}`}>
          <div className="absolute top-0 right-0 opacity-10"><FlaskConical size={isPresentation ? 80 : 64} className="text-orange-500" /></div>
          <label className={`text-orange-400 font-bold block mb-4 uppercase ${isPresentation ? 'text-lg' : ''}`}>Serotonin Level (Inhibitory)</label>
          <input
            type="range"
            min="0"
            max="100"
            value={serotonin}
            onChange={(e) => setSerotonin(e.target.value)}
            className={`w-full bg-slate-700 rounded-lg appearance-none cursor-pointer mb-4 accent-orange-500 ${isPresentation ? 'h-3' : 'h-2'}`}
          />
          <div className={`flex justify-between text-slate-500 font-mono mb-4 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
            <span>DEFICIENT</span>
            <span>NORMAL</span>
          </div>
          <div className={`rounded border-l-4 transition-all ${isPresentation ? 'p-6' : 'p-4'} ${serotonin < 30 ? 'bg-red-900/10 border-red-500' : 'bg-orange-900/10 border-orange-500'}`}>
            <span className={`block font-bold text-white mb-1 ${isPresentation ? 'text-base' : ''}`}>Effect on OFC:</span>
            <span className={`text-slate-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
              {serotonin < 30
                ? "Reduced firing. Loss of self-control. Impulsive Aggression likely."
                : "Normal firing. Regulated impulses. Calm behavior maintained."}
            </span>
          </div>
        </div>

        {/* Testosterone Control */}
        <div className={`bg-slate-900 border border-slate-800 rounded-xl relative overflow-hidden shadow-lg ${isPresentation ? 'p-12' : 'p-6'}`}>
          <div className="absolute top-0 right-0 opacity-10"><Dna size={isPresentation ? 80 : 64} className="text-orange-500" /></div>
          <label className={`text-orange-400 font-bold block mb-4 uppercase ${isPresentation ? 'text-lg' : ''}`}>Testosterone Level (Excitatory)</label>
          <input
            type="range"
            min="0"
            max="100"
            value={testosterone}
            onChange={(e) => setTestosterone(e.target.value)}
            className={`w-full bg-slate-700 rounded-lg appearance-none cursor-pointer mb-4 accent-orange-500 ${isPresentation ? 'h-3' : 'h-2'}`}
          />
          <div className={`flex justify-between text-slate-500 font-mono mb-4 ${isPresentation ? 'text-sm' : 'text-xs'}`}>
            <span>NORMAL</span>
            <span>HIGH</span>
          </div>
          <div className={`rounded border-l-4 transition-all ${isPresentation ? 'p-6' : 'p-4'} ${testosterone > 70 ? 'bg-red-900/10 border-red-500' : 'bg-orange-900/10 border-orange-500'}`}>
            <span className={`block font-bold text-white mb-1 ${isPresentation ? 'text-base' : ''}`}>Effect on Amygdala:</span>
            <span className={`text-slate-300 ${isPresentation ? 'text-base' : 'text-sm'}`}>
              {testosterone > 70
                ? "Heightened reactivity. Increased sensitivity to threat. Social dominance aggression."
                : "Normal regulation of social behavior."}
            </span>
          </div>
        </div>
      </div>

      {/* Synthesis Output */}
      <div className={`flex-grow bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center relative ${isPresentation ? 'p-12' : 'p-6'}`}>
        <div className="text-center">
          <h4 className={`text-slate-400 font-bold uppercase tracking-widest mb-4 ${isPresentation ? 'text-lg mb-6' : ''}`}>Predicted Behavior State</h4>
          <div
            className={`font-bold transition-all duration-500 ${isPresentation ? 'text-5xl' : 'text-4xl'} ${
              serotonin < 30 && testosterone > 70 ? 'text-red-500 animate-pulse' : 'text-green-500'
            }`}
          >
            {serotonin < 30 && testosterone > 70
              ? "CRITICAL: EXPLOSIVE AGGRESSION"
              : serotonin < 30
                ? "WARNING: IMPULSIVE"
                : testosterone > 70
                  ? "WARNING: DOMINANT/REACTIVE"
                  : "STABLE / REGULATED"}
          </div>
        </div>
      </div>
    </div>
  )
}
