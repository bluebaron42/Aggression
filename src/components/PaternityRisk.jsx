import React, { useState, useEffect } from 'react'
import { Users, Baby, HelpCircle } from 'lucide-react'

export default function PaternityRisk({ isPresentation }) {
  const [view, setView] = useState('female')
  const [rivalDetected, setRivalDetected] = useState(false)

  useEffect(() => {
    let interval
    if (view === 'male') {
      interval = setInterval(() => setRivalDetected(prev => !prev), 1800)
    } else {
      setRivalDetected(false)
    }
    return () => interval && clearInterval(interval)
  }, [view])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Visualizer */}
      <div className={`bg-stone-900 border ${rivalDetected ? 'border-red-500' : 'border-stone-800'} p-8 flex items-center justify-center relative overflow-hidden shadow-inner transition-colors duration-300 rounded-xl`}>
        <div className="absolute inset-0 bg-cave opacity-20"></div>
        <div className="absolute inset-0 border-[40px] border-stone-950/50 rounded-full"></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border ${rivalDetected ? 'border-red-500/40' : 'border-amber-500/20'} rounded-full transition-colors`}></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border ${rivalDetected ? 'border-red-500/50' : 'border-amber-500/30'} rounded-full transition-colors`}></div>

        <div className="relative z-10 flex flex-col items-center gap-8 h-full justify-center">
          {/* Parent */}
          <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center transition-all duration-500 z-20 bg-stone-900 ${view === 'female' ? 'border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.3)]' : 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]'}`}>
            {view === 'female' ? <Users size={40} className="text-pink-400" /> : <Users size={40} className="text-blue-400" />}
          </div>

          {/* Link */}
          <div className="h-40 w-2 relative bg-stone-800 overflow-hidden rounded-full">
            <div className={`absolute top-0 left-0 w-full h-4 rounded-full animate-flow ${view === 'female' ? 'bg-pink-500' : rivalDetected ? 'bg-red-500' : 'bg-blue-500'}`}></div>
            <div className={`absolute top-0 left-0 w-full h-4 rounded-full animate-flow ${view === 'female' ? 'bg-pink-500' : rivalDetected ? 'bg-red-500' : 'bg-blue-500'}`} style={{ animationDelay: '0.5s' }}></div>
            <div className={`absolute top-0 left-0 w-full h-4 rounded-full animate-flow ${view === 'female' ? 'bg-pink-500' : rivalDetected ? 'bg-red-500' : 'bg-blue-500'}`} style={{ animationDelay: '1s' }}></div>
            <div className={`absolute top-0 left-0 w-full h-4 rounded-full animate-flow ${view === 'female' ? 'bg-pink-500' : rivalDetected ? 'bg-red-500' : 'bg-blue-500'}`} style={{ animationDelay: '1.5s' }}></div>
          </div>

          {/* Offspring */}
          <div className="w-20 h-20 rounded-full border-2 border-stone-500 bg-stone-800 flex items-center justify-center z-20">
            <Baby size={40} className="text-stone-300" />
          </div>

          {view === 'male' && rivalDetected && (
            <div className="absolute top-1/2 left-20 transform -translate-y-1/2 transition-all duration-300">
              <div className="flex flex-col items-center">
                <HelpCircle size={48} className="text-red-500 animate-pulse" />
                <span className="bg-red-900 text-red-200 text-[10px] px-2 py-1 rounded font-bold mt-1">CUCKOLDRY RISK</span>
              </div>
            </div>
          )}
        </div>

        <div className="absolute top-4 right-4 text-right">
          <span className="block text-amber-500 font-mono text-xs uppercase">Certainty Level</span>
          <span className={`block font-mono text-3xl font-bold ${view === 'female' ? 'text-green-500' : 'text-red-500 animate-glitch'}`}>
            {view === 'female' ? '100%' : '< 100%'}
          </span>
        </div>

        {view === 'male' && rivalDetected && (
          <div className="absolute bottom-4 left-0 w-full text-center">
            <span className="text-red-500 font-mono font-bold bg-black/50 px-4 py-1 border border-red-500">WARNING: RESOURCE LOSS DETECTED</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-6">
        <div className="flex gap-2">
          <button
            onClick={() => setView('female')}
            className={`flex-1 py-4 border-2 font-bold font-mono uppercase transition-all ${view === 'female' ? 'bg-pink-900/20 border-pink-500 text-pink-400' : 'bg-stone-900 border-stone-700 text-stone-500'}`}
          >
            Maternal
          </button>
          <button
            onClick={() => setView('male')}
            className={`flex-1 py-4 border-2 font-bold font-mono uppercase transition-all ${view === 'male' ? 'bg-blue-900/20 border-blue-500 text-blue-400' : 'bg-stone-900 border-stone-700 text-stone-500'}`}
          >
            Paternal
          </button>
        </div>

        <div className={`bg-stone-900/50 p-6 border-l-4 transition-colors ${view === 'female' ? 'border-pink-500' : 'border-blue-500'}`}>
          {view === 'female' ? (
            <div className="animate-fadeIn">
              <h3 className={`font-serif text-white mb-2 ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Maternal Certainty</h3>
              <p className={`text-stone-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                A woman always knows the child is hers. She invests resources (pregnancy, nursing) with <strong>100% certainty</strong> that her genes are being passed on.
                <br /><br />
                <span className="text-pink-400">Result:</span> Resources flow directly to kin. No evolutionary waste.
              </p>
            </div>
          ) : (
            <div className="animate-fadeIn">
              <h3 className={`font-serif text-amber-500 mb-2 ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Paternity Uncertainty</h3>
              <p className={`text-stone-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                Men can never be 100% sure.
                <br /><br />
                <strong>Cuckoldry Risk:</strong> The evolutionary disaster of investing resources in raising another man's child.
                <br /><br />
                <span className="text-red-400">Result:</span> Resources are wasted on non-kin. This drives the evolution of <strong>Sexual Jealousy</strong> to prevent infidelity.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
