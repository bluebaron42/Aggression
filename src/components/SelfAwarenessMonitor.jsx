import React, { useState } from 'react'
import { Eye, Ghost } from 'lucide-react'

export default function SelfAwarenessMonitor({ isPresentation }) {
  const [type, setType] = useState('public')

  return (
    <div className="flex flex-col h-full gap-8">
      <div className="flex gap-4 justify-center">
        <button 
          onClick={() => setType('public')} 
          className={`px-8 py-3 font-code uppercase font-bold border-b-4 transition-all ${type === 'public' ? 'border-red-600 text-white' : 'border-zinc-800 text-zinc-600'}`}
        >
          Public Self-Awareness
        </button>
        <button 
          onClick={() => setType('private')} 
          className={`px-8 py-3 font-code uppercase font-bold border-b-4 transition-all ${type === 'private' ? 'border-red-600 text-white' : 'border-zinc-800 text-zinc-600'}`}
        >
          Private Self-Awareness
        </button>
      </div>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900 border border-zinc-800 p-8 relative">
        <div className="absolute top-0 right-0 p-2 text-zinc-600 font-code text-xs">PRENTICE-DUNN & ROGERS (1982)</div>
        
        {/* Visual */}
        <div className="flex items-center justify-center">
          {type === 'public' ? (
            <div className="text-center animate-fadeIn">
              <Eye size={120} className="text-zinc-500 mx-auto mb-4" />
              <h3 className="font-glitch text-4xl text-white">THE JUDGE</h3>
            </div>
          ) : (
            <div className="text-center animate-fadeIn">
              <Ghost size={120} className="text-red-500 mx-auto mb-4 animate-pulse" />
              <h3 className="font-glitch text-4xl text-white">THE INTERNAL VOICE</h3>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          {type === 'public' ? (
            <div className="animate-fadeIn">
              <h4 className="text-white font-bold text-2xl mb-4">Focus: External Evaluation</h4>
              <p className={`text-zinc-300 leading-relaxed mb-4 ${isPresentation ? 'text-3xl' : 'text-sm'}`}>
                Concern about how we appear to others and fear of negative evaluation.
              </p>
              <div className="bg-black/50 p-4 border-l-2 border-zinc-500">
                <strong className="text-zinc-400 block text-xs uppercase mb-1">Impact of Crowd</strong>
                <p className={`text-zinc-300 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>Being anonymous reduces this. "If they can't identify me, they can't judge me." However, reduced public awareness implies *less* adherence to norms, but it doesn't fully explain the loss of self-regulation.</p>
              </div>
            </div>
          ) : (
            <div className="animate-fadeIn">
              <h4 className="text-red-500 font-bold text-2xl mb-4">Focus: Internal Standards</h4>
              <p className={`text-zinc-300 leading-relaxed mb-4 ${isPresentation ? 'text-3xl' : 'text-sm'}`}>
                Concern with our own thoughts, feelings, and moral standards.
              </p>
              <div className="bg-red-900/10 p-4 border-l-2 border-red-600">
                <strong className="text-red-400 block text-xs uppercase mb-1">The Critical Factor</strong>
                <p className={`text-zinc-300 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
                  In a crowd, attention is focused <strong>outward</strong> (on the events/environment). We lose touch with our internal values. 
                  <br/><br/>
                  <strong>This loss of Private Self-Awareness is what truly causes de-individuation.</strong> We stop self-regulating and become impulsive.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
