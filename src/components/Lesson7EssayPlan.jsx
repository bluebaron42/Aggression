import React, { useState } from 'react'
import { FileText, Unlock } from 'lucide-react'

export default function Lesson7EssayPlan({ isPresentation }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className={`bg-black border border-zinc-800 p-8 flex flex-col h-full relative overflow-hidden`}>
      <div className="absolute top-0 right-0 p-4 opacity-10"><FileText size={120} className="text-red-900" /></div>
      
      <div className="flex items-center justify-between mb-8 z-10 relative border-b border-zinc-800 pb-4">
        <h3 className={`font-glitch text-white tracking-widest uppercase ${isPresentation ? 'text-3xl' : 'text-xl'}`}>DATA LOG: ESSAY PLAN</h3>
        <span className="bg-red-700 text-black px-3 py-1 text-xs font-bold font-code">16 MARKS</span>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button onClick={() => setRevealed(true)} className={`group flex items-center gap-3 bg-red-700 hover:bg-red-600 text-black font-bold font-code uppercase transition-all shadow-[4px_4px_0px_#7f1d1d] active:translate-y-1 active:shadow-none ${isPresentation ? 'px-10 py-6 text-2xl' : 'px-8 py-4'}`}><Unlock size={20} /> DECRYPT FILE</button>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative h-full">
          <div className="bg-zinc-900 p-4 border-l-4 border-red-600 mb-4">
            <p className="text-zinc-400 text-sm font-mono italic">Question: "Discuss de-individuation as an explanation for aggression." (16 Marks)</p>
          </div>

          <div className={`border-l-4 border-blue-500 pl-4 py-2`}>
            <strong className={`text-blue-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO1: Concepts (6 Marks)</strong>
            <ul className={`text-zinc-400 list-disc pl-4 space-y-1 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <li><strong>De-individuation (Festinger/Zimbardo):</strong> Loss of personal identity in a group.</li>
              <li><strong>Mechanism:</strong> Anonymity → Reduced fear of evaluation → Disinhibition.</li>
              <li><strong>Key Theory:</strong> Prentice-Dunn & Rogers (1982). Reduced <strong>Private Self-Awareness</strong> (focus on outward events) causes the loss of self-regulation.</li>
            </ul>
          </div>

          <div className={`border-l-4 border-green-500 pl-4 py-2`}>
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Research Support</strong>
            <p className={`text-zinc-400 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Dodd (1985):</strong> 36% of antisocial responses to "if you couldn't be caught". <br/>
              <strong>Zimbardo (1969):</strong> Hooded participants gave longer electric shocks than individuated ones.
            </p>
          </div>

          <div className={`border-l-4 border-red-500 pl-4 py-2`}>
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Contradictory Evidence</strong>
            <p className={`text-zinc-400 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Gergen et al. (1973):</strong> "Deviance in the Dark". In a dark room, strangers became intimate, not aggressive. Anonymity disinhibits, but doesn't guarantee aggression.
            </p>
          </div>

          <div className={`border-l-4 border-yellow-500 pl-4 py-2`}>
            <strong className={`text-yellow-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Role of Social Cues</strong>
            <p className={`text-zinc-400 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Johnson & Downing (1979):</strong> KKK hoods increased shocks; Nurse uniforms decreased them. Anonymity makes people conform to the <strong>group norm</strong>/social cue, rather than just becoming mindless aggressors.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
