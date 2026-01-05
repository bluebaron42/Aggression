import React, { useState } from 'react'
import { AlertTriangle, Brain } from 'lucide-react'

export default function NeuralMap({ isPresentation }) {
  const [activeRegion, setActiveRegion] = useState('amygdala')

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 h-full ${isPresentation ? 'gap-16' : ''}`}>
      {/* Visual Brain (Abstract Representation) */}
      <div className={`bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center relative overflow-hidden ${isPresentation ? 'p-16' : 'p-8'}`}>
        <div className="absolute inset-0 bg-grid-subtle opacity-10"></div>

        {/* Simplified Brain Circuit */}
        <div className={`relative ${isPresentation ? 'w-96 h-96' : 'w-80 h-80'}`}>
          {/* Connection Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <path
              d="M100,200 C100,100 220,100 220,200"
              fill="none"
              stroke={activeRegion ? "#ef4444" : "#334155"}
              strokeWidth="4"
              strokeDasharray="10,5"
              className="animate-pulse"
            />
          </svg>

          {/* Amygdala Node */}
          <button
            onClick={() => setActiveRegion('amygdala')}
            className={`absolute bottom-10 left-10 rounded-full border-4 flex items-center justify-center z-10 transition-all duration-300 ${isPresentation ? 'w-40 h-40' : 'w-32 h-32'} ${
              activeRegion === 'amygdala'
                ? 'bg-red-900/50 border-red-500 scale-110 shadow-[0_0_30px_rgba(239,68,68,0.3)]'
                : 'bg-slate-800 border-slate-700 opacity-70'
            }`}
          >
            <div className="text-center">
              <AlertTriangle
                className={`mx-auto mb-1 ${activeRegion === 'amygdala' ? 'text-red-400' : 'text-slate-500'}`}
                size={isPresentation ? 40 : 32}
              />
              <span className={`font-bold ${isPresentation ? 'text-sm' : 'text-xs'} ${activeRegion === 'amygdala' ? 'text-red-300' : 'text-slate-500'}`}>
                AMYGDALA
              </span>
            </div>
          </button>

          {/* OFC Node */}
          <button
            onClick={() => setActiveRegion('ofc')}
            className={`absolute bottom-10 right-10 rounded-full border-4 flex items-center justify-center z-10 transition-all duration-300 ${isPresentation ? 'w-40 h-40' : 'w-32 h-32'} ${
              activeRegion === 'ofc'
                ? 'bg-orange-900/50 border-orange-500 scale-110 shadow-[0_0_30px_rgba(249,115,22,0.3)]'
                : 'bg-slate-800 border-slate-700 opacity-70'
            }`}
          >
            <div className="text-center">
              <Brain
                className={`mx-auto mb-1 ${activeRegion === 'ofc' ? 'text-orange-400' : 'text-slate-500'}`}
                size={isPresentation ? 40 : 32}
              />
              <span className={`font-bold ${isPresentation ? 'text-sm' : 'text-xs'} ${activeRegion === 'ofc' ? 'text-orange-300' : 'text-slate-500'}`}>
                OFC
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Info Panel */}
      <div className={`flex flex-col justify-center bg-slate-900/50 border-l-4 border-red-500 rounded-r-xl ${isPresentation ? 'p-16' : 'p-8'}`}>
        {activeRegion === 'amygdala' ? (
          <div className="animate-fadeIn">
            <h3 className={`font-bold text-red-400 mb-4 uppercase tracking-widest ${isPresentation ? 'text-4xl mb-6' : 'text-2xl'}`}>
              The Threat System
            </h3>
            <p className={`text-slate-300 mb-6 leading-relaxed ${isPresentation ? 'text-xl mb-8' : 'text-base'}`}>
              The <strong>Amygdala</strong> assesses environmental threats and triggers the "fight or flight" response.
              <br />
              <br />
              <span className="text-white font-bold">Gospic et al. (2011):</span> Found that over-activity in the amygdala creates heightened reactivity to provocation, leading to impulsive aggression.
            </p>
            <div className={`bg-red-900/10 border border-red-500/30 rounded-lg ${isPresentation ? 'p-6' : 'p-4'}`}>
              <span className={`text-red-400 font-bold uppercase block mb-1 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Mechanism</span>
              <span className={`text-white ${isPresentation ? 'text-lg' : ''}`}>Sensory Input → Amygdala → Hypothalamus → Aggression</span>
            </div>
          </div>
        ) : (
          <div className="animate-fadeIn">
            <h3 className={`font-bold text-orange-400 mb-4 uppercase tracking-widest ${isPresentation ? 'text-4xl mb-6' : 'text-2xl'}`}>
              The Inhibitory System
            </h3>
            <p className={`text-slate-300 mb-6 leading-relaxed ${isPresentation ? 'text-xl mb-8' : 'text-base'}`}>
              The <strong>Orbitofrontal Cortex (OFC)</strong> is involved in self-control, impulse regulation, and inhibition of aggressive behavior.
              <br />
              <br />
              <span className="text-white font-bold">Serotonin Deficiency:</span> Normal levels of serotonin calm neuronal firing in the OFC. Low levels lead to reduced self-control and increased impulsive aggression.
            </p>
            <div className={`bg-orange-900/10 border border-orange-500/30 rounded-lg ${isPresentation ? 'p-6' : 'p-4'}`}>
              <span className={`text-orange-400 font-bold uppercase block mb-1 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Mechanism</span>
              <span className={`text-white ${isPresentation ? 'text-lg' : ''}`}>Serotonin → OFC → Inhibition of Amygdala → Calm</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
