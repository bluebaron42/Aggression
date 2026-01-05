import React, { useState } from 'react'
import { AlertTriangle, Brain } from 'lucide-react'

export default function NeuralMap({ isPresentation }) {
  const [activeRegion, setActiveRegion] = useState('amygdala')

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Visual Brain (Abstract Representation) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-10"></div>

        {/* Simplified Brain Circuit */}
        <div className="relative w-80 h-80">
          {/* Connection Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <path
              d="M100,200 C100,100 220,100 220,200"
              fill="none"
              stroke={activeRegion ? "#06b6d4" : "#334155"}
              strokeWidth="4"
              strokeDasharray="10,5"
              className="animate-pulse"
            />
          </svg>

          {/* Amygdala Node */}
          <button
            onClick={() => setActiveRegion('amygdala')}
            className={`absolute bottom-10 left-10 w-32 h-32 rounded-full border-4 flex items-center justify-center z-10 transition-all duration-300 ${
              activeRegion === 'amygdala'
                ? 'bg-red-900/50 border-red-500 scale-110 shadow-[0_0_30px_rgba(239,68,68,0.3)]'
                : 'bg-slate-800 border-slate-700 opacity-70'
            }`}
          >
            <div className="text-center">
              <AlertTriangle
                className={`mx-auto mb-1 ${activeRegion === 'amygdala' ? 'text-red-400' : 'text-slate-500'}`}
                size={32}
              />
              <span className={`font-bold text-xs ${activeRegion === 'amygdala' ? 'text-red-300' : 'text-slate-500'}`}>
                AMYGDALA
              </span>
            </div>
          </button>

          {/* OFC Node */}
          <button
            onClick={() => setActiveRegion('ofc')}
            className={`absolute bottom-10 right-10 w-32 h-32 rounded-full border-4 flex items-center justify-center z-10 transition-all duration-300 ${
              activeRegion === 'ofc'
                ? 'bg-blue-900/50 border-blue-500 scale-110 shadow-[0_0_30px_rgba(59,130,246,0.3)]'
                : 'bg-slate-800 border-slate-700 opacity-70'
            }`}
          >
            <div className="text-center">
              <Brain
                className={`mx-auto mb-1 ${activeRegion === 'ofc' ? 'text-blue-400' : 'text-slate-500'}`}
                size={32}
              />
              <span className={`font-bold text-xs ${activeRegion === 'ofc' ? 'text-blue-300' : 'text-slate-500'}`}>
                OFC
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Info Panel */}
      <div className="flex flex-col justify-center bg-slate-900/50 border-l-4 border-cyan-500 p-8 rounded-r-xl">
        {activeRegion === 'amygdala' ? (
          <div className="animate-fadeIn">
            <h3 className={`font-bold text-red-400 mb-4 uppercase tracking-widest ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
              The Threat System
            </h3>
            <p className={`text-slate-300 mb-6 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-base'}`}>
              The <strong>Amygdala</strong> assesses environmental threats and triggers the "fight or flight" response.
              <br />
              <br />
              <span className="text-white font-bold">Gospic et al. (2011):</span> Found that over-activity in the amygdala creates heightened reactivity to provocation, leading to impulsive aggression.
            </p>
            <div className="bg-red-900/10 p-4 border border-red-500/30 rounded-lg">
              <span className="text-red-400 font-bold text-xs uppercase block mb-1">Mechanism</span>
              <span className="text-white">Sensory Input → Amygdala → Hypothalamus → Aggression</span>
            </div>
          </div>
        ) : (
          <div className="animate-fadeIn">
            <h3 className={`font-bold text-blue-400 mb-4 uppercase tracking-widest ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
              The Inhibitory System
            </h3>
            <p className={`text-slate-300 mb-6 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-base'}`}>
              The <strong>Orbitofrontal Cortex (OFC)</strong> is involved in self-control, impulse regulation, and inhibition of aggressive behavior.
              <br />
              <br />
              <span className="text-white font-bold">Serotonin Deficiency:</span> Normal levels of serotonin calm neuronal firing in the OFC. Low levels lead to reduced self-control and increased impulsive aggression.
            </p>
            <div className="bg-blue-900/10 p-4 border border-blue-500/30 rounded-lg">
              <span className="text-blue-400 font-bold text-xs uppercase block mb-1">Mechanism</span>
              <span className="text-white">Serotonin → OFC → Inhibition of Amygdala → Calm</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
