import React, { useState } from 'react'
import { Tv, Ban } from 'lucide-react'

export default function BoboLabSim({ isPresentation }) {
  const [phase, setPhase] = useState('setup')
  const [config, setConfig] = useState({ modelSex: 'male', modelType: 'aggressive', childSex: 'boy' })
  const [results, setResults] = useState(null)

  const calculateResults = () => {
    let physicalScore = 0
    let verbalScore = 0
    const observations = []
    let conclusion = ''
    let theoreticalLink = ''

    if (config.modelType === 'aggressive') {
      physicalScore += 20
      verbalScore += 15
      observations.push('Imitative acts (striking with mallet).')
      observations.push('Novel aggression displayed.')
    } else {
      physicalScore += 2
      verbalScore += 1
      observations.push('Played quietly with tinker toys.')
      observations.push('Aggression lower than control.')
    }

    if (config.childSex === 'boy') {
      physicalScore += 10
      if (config.modelType === 'aggressive') observations.push('Higher physical aggression than girls.')
    } else {
      verbalScore += 5
    }

    const sameSex = config.modelSex === (config.childSex === 'boy' ? 'male' : 'female')

    if (sameSex && config.modelType === 'aggressive') {
      physicalScore += 15
      verbalScore += 10
      theoreticalLink = 'Identification: Same-sex model increases motivation.'
      conclusion = 'Maximum imitation observed.'
    } else if (!sameSex && config.modelType === 'aggressive') {
      theoreticalLink = 'Lower identification reduces motivation to imitate.'
      conclusion = 'Moderate imitation.'
    } else {
      theoreticalLink = 'Observational learning: No aggressive cues = no aggressive behavior.'
      conclusion = 'Non-aggressive models inhibit aggression.'
    }

    physicalScore += Math.floor(Math.random() * 5)
    verbalScore += Math.floor(Math.random() * 5)

    setResults({ physical: physicalScore, verbal: verbalScore, observations, conclusion, theoreticalLink })
    setPhase('observation')
  }

  const reset = () => { setPhase('setup'); setResults(null) }

  return (
    <div className="h-full flex flex-col bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b border-slate-800 bg-slate-950">
        <div className="flex items-center gap-2">
          <Tv size={16} className="text-teal-500" />
          <span className="text-teal-500 font-bold tracking-widest text-sm font-mono">STANFORD_LAB_1961</span>
        </div>
        <div className="text-slate-500 font-mono text-xs">REC: 00:00:00</div>
      </div>

      <div className="flex-grow relative z-10 flex flex-col p-6">
        {phase === 'setup' && (
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <h3 className="text-2xl text-white font-bold uppercase">Experiment Configuration</h3>
            <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
              <div className="bg-slate-800 p-4 border border-slate-700 rounded">
                <span className="text-teal-500 font-mono block mb-3 uppercase">Model Behavior</span>
                <div className="flex flex-col gap-2">
                  <button onClick={() => setConfig({ ...config, modelType: 'aggressive' })} className={`p-2 border-2 font-bold ${config.modelType === 'aggressive' ? 'bg-red-900/50 border-red-500 text-white' : 'border-slate-700 text-slate-400'}`}>AGGRESSIVE</button>
                  <button onClick={() => setConfig({ ...config, modelType: 'passive' })} className={`p-2 border-2 font-bold ${config.modelType === 'passive' ? 'bg-blue-900/50 border-blue-500 text-white' : 'border-slate-700 text-slate-400'}`}>PASSIVE</button>
                </div>
              </div>
              <div className="bg-slate-800 p-4 border border-slate-700 rounded">
                <span className="text-teal-500 font-mono block mb-3 uppercase">Model Gender</span>
                <div className="flex flex-col gap-2">
                  <button onClick={() => setConfig({ ...config, modelSex: 'male' })} className={`p-2 border-2 font-bold ${config.modelSex === 'male' ? 'bg-teal-900/50 border-teal-500 text-white' : 'border-slate-700 text-slate-400'}`}>MALE</button>
                  <button onClick={() => setConfig({ ...config, modelSex: 'female' })} className={`p-2 border-2 font-bold ${config.modelSex === 'female' ? 'bg-teal-900/50 border-teal-500 text-white' : 'border-slate-700 text-slate-400'}`}>FEMALE</button>
                </div>
              </div>
              <div className="bg-slate-800 p-4 border border-slate-700 rounded">
                <span className="text-teal-500 font-mono block mb-3 uppercase">Child Gender</span>
                <div className="flex flex-col gap-2">
                  <button onClick={() => setConfig({ ...config, childSex: 'boy' })} className={`p-2 border-2 font-bold ${config.childSex === 'boy' ? 'bg-teal-900/50 border-teal-500 text-white' : 'border-slate-700 text-slate-400'}`}>BOY</button>
                  <button onClick={() => setConfig({ ...config, childSex: 'girl' })} className={`p-2 border-2 font-bold ${config.childSex === 'girl' ? 'bg-teal-900/50 border-teal-500 text-white' : 'border-slate-700 text-slate-400'}`}>GIRL</button>
                </div>
              </div>
            </div>
            <button onClick={calculateResults} className="mt-4 px-8 py-3 bg-teal-600 text-black font-bold uppercase hover:bg-teal-500 transition-all">Run Experiment</button>
          </div>
        )}

        {phase === 'observation' && (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-full max-w-3xl aspect-video bg-slate-800 border-4 border-black rounded relative overflow-hidden mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                {config.modelType === 'aggressive' ? (
                  <div className="text-center">
                    <div className="text-7xl mb-2">🧸 🔨</div>
                    <span className="font-mono text-red-500 text-2xl block">"POW!"</span>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-7xl mb-2 opacity-50">🧸</div>
                    <span className="font-mono text-blue-500 text-2xl block">...Playing quietly...</span>
                  </div>
                )}
              </div>
            </div>
            <button onClick={() => setPhase('results')} className="px-6 py-2 border-2 border-teal-500 text-teal-400 font-bold uppercase hover:bg-teal-900/30 transition-all">End Observation</button>
          </div>
        )}

        {phase === 'results' && results && (
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="bg-white text-black p-6 max-w-3xl w-full shadow-xl border border-slate-400 rounded">
              <div className="flex justify-between border-b border-black pb-3 mb-4">
                <h3 className="text-xl font-bold font-mono">Final Lab Report</h3>
                <div className="text-right font-mono text-xs"><div>DATE: 1961</div><div>INVESTIGATOR: A. BANDURA</div></div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4 font-mono text-xs bg-slate-100 p-2 border border-slate-300">
                <div><strong>MODEL:</strong> {config.modelSex.toUpperCase()} ({config.modelType.toUpperCase()})</div>
                <div><strong>SUBJECT:</strong> {config.childSex.toUpperCase()}</div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-900 text-green-400 p-3 font-mono text-center border-l-4 border-green-600">
                  <span className="block text-xs text-slate-500">PHYSICAL AGGRESSION</span><span className="text-2xl">{results.physical}</span>
                </div>
                <div className="bg-slate-900 text-blue-400 p-3 font-mono text-center border-l-4 border-blue-600">
                  <span className="block text-xs text-slate-500">VERBAL AGGRESSION</span><span className="text-2xl">{results.verbal}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold uppercase border-b border-black mb-2 text-sm">Behaviors Observed</h4>
                  <ul className="list-disc pl-4 text-xs space-y-1 font-mono">
                    {results.observations.map((obs, i) => <li key={i}>{obs}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold uppercase border-b border-black mb-2 text-sm">Theoretical Analysis</h4>
                  <p className="text-xs font-serif italic leading-relaxed">"{results.theoreticalLink}"</p>
                </div>
              </div>
              <div className="mt-4 p-3 border border-black bg-white rounded">
                <strong className="block uppercase text-xs mb-1">Conclusion:</strong>
                <p className="font-bold text-red-700 uppercase tracking-wide text-sm">{results.conclusion}</p>
              </div>
            </div>
            <button onClick={reset} className="mt-4 text-teal-500 underline uppercase font-bold font-mono">Reset Experiment</button>
          </div>
        )}
      </div>
    </div>
  )
}
