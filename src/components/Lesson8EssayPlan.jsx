import React, { useState } from 'react'
import { FileText, Lock, Unlock } from 'lucide-react'

export default function Lesson8EssayPlan({ isPresentation }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="bg-zinc-950 border-2 border-zinc-700 p-8 flex flex-col h-full relative overflow-hidden font-mono">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <FileText size={120} className="text-orange-600" />
      </div>
      
      <div className="flex items-center justify-between mb-8 z-10 relative border-b-2 border-orange-600 pb-4">
        <h3 className={`text-orange-500 font-bold tracking-widest uppercase ${isPresentation ? 'text-3xl' : 'text-xl'}`}>
          Case File: Essay Plan
        </h3>
        <span className="bg-orange-600 text-black px-3 py-1 text-xs font-bold">16 MARKS</span>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <Lock size={64} className="text-zinc-700" />
          <button 
            onClick={() => setRevealed(true)} 
            className={`group flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-black font-bold uppercase transition-all shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-none ${isPresentation ? 'px-10 py-6 text-2xl' : 'px-8 py-4'}`}
          >
            <Unlock size={20} /> Decrypt File
          </button>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative h-full">
          <div className="bg-black p-4 border-l-4 border-orange-600 mb-4">
            <p className="text-zinc-400 text-sm italic">
              Question: "Discuss explanations of institutional aggression in the context of prisons." (16 Marks)
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <strong className={`text-blue-400 block mb-2 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO1: Dispositional Explanation (Importation Model)
            </strong>
            <ul className={`text-zinc-400 list-disc pl-4 space-y-1 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <li><strong>Irwin & Cressey:</strong> Prisoners <em>import</em> criminal subculture (beliefs, norms, attitudes) from outside.</li>
              <li>Aggression depends on <strong>individual characteristics</strong>: temperament (e.g., impulsivity), social environment (e.g., gang membership).</li>
              <li>Violence is <em>not</em> inevitable — it's determined by who is imprisoned.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <strong className={`text-blue-400 block mb-2 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO1: Situational Explanation (Deprivation Model)
            </strong>
            <ul className={`text-zinc-400 list-disc pl-4 space-y-1 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <li><strong>Sykes (1958):</strong> Harsh prison conditions <em>cause</em> aggression. Violence is an adaptive solution to stress.</li>
              <li><strong>Five Deprivations:</strong> Liberty, Autonomy, Goods/Services, Heterosexual Relationships, Security.</li>
              <li>Prison regime factors (unpredictable rules, oppressive staff) trigger frustration and violence.</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <strong className={`text-green-400 block mb-2 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Research Support (Importation)
            </strong>
            <p className={`text-zinc-400 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Camp & Gaes (2005):</strong> Studied 561 inmates. Gang membership and street experience 
              significantly predicted prison violence. Supports importation model.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <strong className={`text-green-400 block mb-2 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Research Support (Deprivation)
            </strong>
            <p className={`text-zinc-400 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Steiner (2009):</strong> Meta-analysis found overcrowding and lack of meaningful 
              activity strongly correlated with violence. Supports deprivation model.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <strong className={`text-red-400 block mb-2 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Ignores Key Factors
            </strong>
            <p className={`text-zinc-400 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              Importation model doesn't explain all variance. Prison design, staff behavior, and educational 
              opportunities remain important. Incomplete explanation.
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4 py-2">
            <strong className={`text-yellow-400 block mb-2 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Interactive Model
            </strong>
            <p className={`text-zinc-400 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Dobbs & Waid (2004):</strong> Found <em>both</em> importation (gang status) and 
              deprivation (overcrowding) independently predicted violence. Combined model is most valid.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-2">
            <strong className={`text-orange-400 block mb-2 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              AO3: Deterministic (Limitation)
            </strong>
            <p className={`text-zinc-400 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              Importation model removes individual responsibility — aggression is the outcome of pre-existing 
              dispositions. Ethical/legal implications for sentencing and parole.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
