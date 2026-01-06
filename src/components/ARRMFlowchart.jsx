import React, { useState } from 'react'
import { Eye, Brain, Repeat, Zap } from 'lucide-react'

export default function ARRMFlowchart({ isPresentation }) {
  const [step, setStep] = useState(0)

  const steps = [
    { id: 'att', title: 'Attention', icon: Eye, desc: 'Observer must notice the aggressive behavior. High-status/attractive models capture attention.', keyTerm: 'Model Salience' },
    { id: 'ret', title: 'Retention', icon: Brain, desc: 'Behavior must be remembered and stored in LTM. Aggression is often vivid and memorable.', keyTerm: 'Symbolic Coding' },
    { id: 'rep', title: 'Reproduction', icon: Repeat, desc: 'Observer judges physical capability to perform the act. Self-efficacy determines possibility.', keyTerm: 'Self-Efficacy' },
    { id: 'mot', title: 'Motivation', icon: Zap, desc: 'Will to perform. Vicarious reinforcement (did the model get a reward?) drives imitation.', keyTerm: 'Vicarious Reinforcement' }
  ]

  return (
    <div className="flex flex-col h-full gap-8">
      <div className="flex items-center justify-between relative bg-slate-900 border border-slate-800 p-6 rounded-xl">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -z-10"/>
        <div className="absolute top-1/2 left-0 h-1 bg-teal-500 transition-all duration-500 -z-10 shadow-[0_0_10px_#14b8a6]" style={{ width: `${(step / 3) * 100}%` }}/>
        {steps.map((s, i) => (
          <button key={s.id} onClick={() => setStep(i)} className={`flex flex-col items-center gap-2 transition-all ${i === step ? 'scale-110' : 'opacity-60'}`}>
            <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center ${i <= step ? 'border-teal-500 text-teal-400 bg-slate-950' : 'border-slate-700 text-slate-600 bg-slate-900'}`}>
              <s.icon size={32} />
            </div>
            <span className={`font-mono uppercase ${isPresentation ? 'text-xl' : 'text-sm'} ${i <= step ? 'text-teal-300' : 'text-slate-500'}`}>{s.title}</span>
          </button>
        ))}
      </div>

      <div className={`flex-grow bg-slate-900 border border-slate-800 rounded-xl relative overflow-hidden flex flex-col items-center justify-center ${isPresentation ? 'p-10' : 'p-6'}`}>
        <h3 className={`font-mono text-teal-400 mb-4 uppercase ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>{steps[step].title}</h3>
        <p className={`text-slate-200 text-center max-w-3xl leading-relaxed ${isPresentation ? 'text-2xl' : 'text-base'}`}>{steps[step].desc}</p>
        <div className={`mt-6 border-2 border-teal-500 bg-teal-950/30 px-4 py-2 rounded-lg ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
          <span className="text-teal-300 font-mono font-bold">KEY TERM: <span className="text-teal-400">{steps[step].keyTerm}</span></span>
        </div>
      </div>
    </div>
  )
}
