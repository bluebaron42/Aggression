import React, { useState } from 'react'
import { Siren } from 'lucide-react'

export default function MaskExperimentSim({ isPresentation }) {
  const [phase, setPhase] = useState('briefing')
  const [config, setConfig] = useState({ uniform: 'nametag', lighting: 'light' })
  const [shockData, setShockData] = useState(null)

  const calculateResults = () => {
    let baseShock = 1.0
    let visual = "moderate"
    let feedback = ""
    
    // 1. Uniform Effect (Group Norm)
    if (config.uniform === 'hood') {
      baseShock += 1.5
      feedback = "The Hood (Aggressive Cue) provided a strong anti-social group norm."
      visual = "high"
    } else if (config.uniform === 'nurse') {
      baseShock -= 0.6
      feedback = "The Nurse Uniform (Pro-social Cue) triggered compassion, lowering aggression below baseline."
      visual = "low"
    } else {
      feedback = "Standard attire provided individual identity (Control)."
    }

    // 2. Lighting Effect (Anonymity Multiplier)
    if (config.lighting === 'dark') {
      if (config.uniform === 'hood') {
        baseShock *= 1.5
        feedback += " Darkness increased anonymity, further disinhibiting the aggressive impulse."
      } else if (config.uniform === 'nurse') {
        baseShock *= 0.8
        feedback += " Darkness increased anonymity, strengthening adherence to the caring role."
      }
    }

    setShockData({ duration: baseShock.toFixed(1), visual, feedback })
    setPhase('results')
  }

  const reset = () => {
    setPhase('setup')
    setShockData(null)
  }

  return (
    <div className="h-full flex flex-col font-code text-xs md:text-sm bg-black border-4 border-zinc-800 rounded-xl relative overflow-hidden bg-static shadow-2xl">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b-2 border-red-900 bg-black z-10">
        <div className="flex items-center gap-2">
          <Siren size={16} className="text-red-500" />
          <span className="text-red-500 font-bold tracking-widest text-lg">EXPERIMENT_CONTROLLER_V1</span>
        </div>
        <div className="text-zinc-500 font-mono">LAB STATUS: ACTIVE</div>
      </div>

      <div className="flex-grow relative z-10 flex flex-col p-8">
        
        {/* BRIEFING PHASE */}
        {phase === 'briefing' && (
          <div className="flex flex-col items-center justify-center h-full gap-8 animate-fadeIn max-w-4xl mx-auto">
            <div className="border-4 border-red-800 p-8 bg-zinc-900/90 relative shadow-2xl rotate-1">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-black font-glitch px-6 py-2 text-xl uppercase">Classified</div>
              
              <h3 className="text-3xl font-bold font-code text-white mb-6 border-b border-zinc-700 pb-4 text-center">MISSION BRIEFING</h3>
              
              <div className="grid grid-cols-2 gap-8 text-zinc-300 mb-6">
                <div>
                  <strong className="text-red-500 block mb-2 uppercase">Zimbardo (1969)</strong>
                  <p className="text-sm leading-relaxed">
                    Found that female undergraduates in hoods (anonymous) gave shocks for <strong>twice as long</strong> as those with name tags. 
                    <br/><em>Key Finding:</em> Anonymity increases aggression.
                  </p>
                </div>
                <div>
                  <strong className="text-red-500 block mb-2 uppercase">Johnson & Downing (1979)</strong>
                  <p className="text-sm leading-relaxed">
                    Added a twist: Does the <strong>type</strong> of uniform matter?
                    <br/><em>Hypothesis:</em> People conform to the norm of the uniform (Nurse vs KKK), not just blind aggression.
                  </p>
                </div>
              </div>
              
              <div className="bg-black/50 p-4 border border-zinc-700 text-center">
                <strong className="text-white uppercase text-xs block mb-1">Your Objective</strong>
                <p className="text-zinc-400 font-mono">Manipulate Social Cues (Uniform) and Anonymity (Lighting) to observe the effect on Shock Duration.</p>
              </div>
            </div>

            <button onClick={() => setPhase('setup')} className="bg-red-700 text-black px-12 py-4 font-bold font-code uppercase text-xl hover:bg-red-600 transition-all shadow-[0_0_20px_#7f1d1d]">Initialize Lab</button>
          </div>
        )}

        {phase === 'setup' && (
          <div className="flex flex-col items-center justify-center h-full gap-8 animate-fadeIn">
            <h3 className="text-3xl text-white font-bold uppercase font-glitch">Configure Variables</h3>
            
            <div className="grid grid-cols-2 gap-12 w-full max-w-4xl">
              {/* Variable 1: Uniform */}
              <div className="bg-zinc-900 p-6 border border-zinc-700">
                <span className="text-red-500 font-code block mb-4 uppercase">1. Social Cue (Uniform)</span>
                <div className="flex flex-col gap-2">
                  <button onClick={() => setConfig({...config, uniform: 'nametag'})} className={`p-3 border-2 font-bold ${config.uniform === 'nametag' ? 'bg-zinc-700 border-zinc-500 text-white' : 'border-zinc-800 text-zinc-600'}`}>NAME TAG (CONTROL)</button>
                  <button onClick={() => setConfig({...config, uniform: 'hood'})} className={`p-3 border-2 font-bold ${config.uniform === 'hood' ? 'bg-red-900/50 border-red-500 text-white' : 'border-zinc-800 text-zinc-600'}`}>HOOD (AGGRESSIVE)</button>
                  <button onClick={() => setConfig({...config, uniform: 'nurse'})} className={`p-3 border-2 font-bold ${config.uniform === 'nurse' ? 'bg-blue-900/50 border-blue-500 text-white' : 'border-zinc-800 text-zinc-600'}`}>NURSE (PRO-SOCIAL)</button>
                </div>
              </div>

              {/* Variable 2: Environment */}
              <div className="bg-zinc-900 p-6 border border-zinc-700">
                <span className="text-red-500 font-code block mb-4 uppercase">2. Environment (Anonymity)</span>
                <div className="flex flex-col gap-2">
                  <button onClick={() => setConfig({...config, lighting: 'light'})} className={`p-3 border-2 font-bold ${config.lighting === 'light' ? 'bg-yellow-900/50 border-yellow-500 text-white' : 'border-zinc-800 text-zinc-600'}`}>LIGHTS ON (ID VISIBLE)</button>
                  <button onClick={() => setConfig({...config, lighting: 'dark'})} className={`p-3 border-2 font-bold ${config.lighting === 'dark' ? 'bg-zinc-800 border-zinc-400 text-white' : 'border-zinc-800 text-zinc-600'}`}>LIGHTS OFF (ANONYMOUS)</button>
                </div>
              </div>
            </div>

            <button onClick={calculateResults} className="mt-8 px-12 py-4 bg-red-700 text-black font-bold uppercase text-2xl hover:bg-red-600 transition-all shadow-[0_0_20px_#b91c1c]">Run Simulation</button>
          </div>
        )}

        {phase === 'results' && shockData && (
          <div className="flex flex-col items-center justify-center h-full animate-fadeIn w-full">
            <div className="bg-zinc-900 p-8 border border-zinc-700 max-w-3xl w-full text-center relative">
              {/* Monitor Visual */}
              <div className="w-full h-32 bg-black border-4 border-zinc-800 mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-static opacity-20"></div>
                <div className={`text-4xl font-glitch ${shockData.visual === 'high' ? 'text-red-500' : shockData.visual === 'low' ? 'text-blue-500' : 'text-yellow-500'}`}>
                  {shockData.visual === 'high' ? "MAX SHOCK" : shockData.visual === 'low' ? "MIN SHOCK" : "MED SHOCK"}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 text-left mb-6">
                <div>
                  <span className="text-zinc-500 text-xs uppercase block">Shock Duration</span>
                  <span className={`text-5xl font-bold ${shockData.visual === 'high' ? 'text-red-500' : 'text-white'}`}>{shockData.duration}s</span>
                </div>
                <div>
                  <span className="text-zinc-500 text-xs uppercase block">Condition</span>
                  <span className="text-white text-sm">{config.uniform.toUpperCase()} + {config.lighting.toUpperCase()}</span>
                </div>
              </div>

              <div className="bg-black/50 p-4 border-l-4 border-red-500 text-left">
                <strong className="text-red-500 block text-xs uppercase mb-1">Theoretical Conclusion</strong>
                <p className="text-zinc-300 text-sm leading-relaxed">{shockData.feedback}</p>
                <p className="text-zinc-500 text-xs mt-2 italic">Ref: Johnson & Downing (1979) - Social Cues dictate the direction of disinhibition.</p>
              </div>
            </div>
            
            <button onClick={reset} className="mt-8 text-red-500 underline uppercase font-bold hover:text-white">Reset Variables</button>
          </div>
        )}
      </div>
    </div>
  )
}
