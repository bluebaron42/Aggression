import React, { useState } from 'react'
import { FlaskConical, Dna } from 'lucide-react'

export default function ChemicalBalance({ isPresentation }) {
  const [serotonin, setSerotonin] = useState(50)
  const [testosterone, setTestosterone] = useState(50)

  return (
    <div className="flex flex-col h-full gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Serotonin Control */}
        <div className="bg-slate-900 p-6 border border-slate-800 rounded-xl relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <FlaskConical size={64} className="text-blue-500" />
          </div>
          <label className="text-blue-400 font-bold block mb-4 uppercase">Serotonin Level (Inhibitory)</label>
          <input
            type="range"
            min="0"
            max="100"
            value={serotonin}
            onChange={(e) => setSerotonin(e.target.value)}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer mb-4 accent-blue-500"
          />
          <div className="flex justify-between text-xs text-slate-500 font-mono mb-4">
            <span>DEFICIENT</span>
            <span>NORMAL</span>
          </div>
          <div className={`p-4 rounded border-l-4 transition-all ${serotonin < 30 ? 'bg-red-900/10 border-red-500' : 'bg-blue-900/10 border-blue-500'}`}>
            <span className="block font-bold text-white mb-1">Effect on OFC:</span>
            <span className="text-slate-300 text-sm">
              {serotonin < 30
                ? "Reduced firing. Loss of self-control. Impulsive Aggression likely."
                : "Normal firing. Regulated impulses. Calm behavior maintained."}
            </span>
          </div>
        </div>

        {/* Testosterone Control */}
        <div className="bg-slate-900 p-6 border border-slate-800 rounded-xl relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Dna size={64} className="text-orange-500" />
          </div>
          <label className="text-orange-400 font-bold block mb-4 uppercase">Testosterone Level (Excitatory)</label>
          <input
            type="range"
            min="0"
            max="100"
            value={testosterone}
            onChange={(e) => setTestosterone(e.target.value)}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer mb-4 accent-orange-500"
          />
          <div className="flex justify-between text-xs text-slate-500 font-mono mb-4">
            <span>NORMAL</span>
            <span>HIGH</span>
          </div>
          <div className={`p-4 rounded border-l-4 transition-all ${testosterone > 70 ? 'bg-red-900/10 border-red-500' : 'bg-orange-900/10 border-orange-500'}`}>
            <span className="block font-bold text-white mb-1">Effect on Amygdala:</span>
            <span className="text-slate-300 text-sm">
              {testosterone > 70
                ? "Heightened reactivity. Increased sensitivity to threat. Social dominance aggression."
                : "Normal regulation of social behavior."}
            </span>
          </div>
        </div>
      </div>

      {/* Synthesis Output */}
      <div className="flex-grow bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center justify-center relative">
        <div className="text-center">
          <h4 className="text-slate-400 font-bold uppercase tracking-widest mb-4">Predicted Behavior State</h4>
          <div
            className={`text-4xl font-bold transition-all duration-500 ${
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
