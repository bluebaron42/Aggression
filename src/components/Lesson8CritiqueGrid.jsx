import React from 'react'
import { Scale, Target, Users, XCircle } from 'lucide-react'

export default function Lesson8CritiqueGrid({ isPresentation }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      
      {/* Ignores Key Factors */}
      <div className="bg-zinc-900 border-2 border-zinc-700 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-zinc-800 p-2"><XCircle className="text-red-500" size={28} /></div>
          <h3 className={`text-red-400 font-mono font-bold ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Ignores Key Factors</h3>
        </div>
        <p className={`text-zinc-400 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
          The importation model doesn't explain <em>all</em> variance in prison violence. 
          <br/><br/>
          <strong>Missing factors:</strong> Prison design (layout, surveillance), staff behavior 
          (trust, professionalism), and opportunities for education remain important even when 
          controlling for inmate characteristics.
          <br/><br/>
          <span className="text-yellow-500">Therefore, importation is an incomplete explanation.</span>
        </p>
      </div>

      {/* Deterministic */}
      <div className="bg-zinc-900 border-2 border-zinc-700 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-zinc-800 p-2"><Target className="text-yellow-500" size={28} /></div>
          <h3 className={`text-yellow-400 font-mono font-bold ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Deterministic</h3>
        </div>
        <p className={`text-zinc-400 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
          The importation model can be seen as <strong>deterministic</strong> — it suggests prisoners 
          are <em>not</em> responsible for their aggressive behavior because it's the outcome of 
          pre-existing dispositions.
          <br/><br/>
          This removes individual choice and responsibility for aggression, which has <strong>ethical 
          and legal implications</strong> (e.g., for sentencing, parole).
        </p>
      </div>

      {/* Importation vs Deprivation */}
      <div className="bg-zinc-900 border-2 border-zinc-700 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-zinc-800 p-2"><Scale className="text-green-500" size={28} /></div>
          <h3 className={`text-green-400 font-mono font-bold ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Interactive Model</h3>
        </div>
        <p className={`text-zinc-400 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
          Most researchers now agree that <strong>both models contribute</strong> to institutional aggression.
          <br/><br/>
          <strong>Example:</strong> Dobbs & Waid (2004) studied random allocation to prisons in Texas 
          and found <em>both</em> importation (gang status) <em>and</em> deprivation (overcrowding) 
          independently predicted violence.
          <br/><br/>
          <span className="text-green-500">An interactive/combined model is the most valid explanation.</span>
        </p>
      </div>

      {/* Contradictory Research */}
      <div className="bg-zinc-900 border-2 border-zinc-700 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-zinc-800 p-2"><Users className="text-orange-500" size={28} /></div>
          <h3 className={`text-orange-400 font-mono font-bold ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Contradictory Research</h3>
        </div>
        <p className={`text-zinc-400 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
          Hensley et al. (2002) studied 256 male and female inmates in Mississippi and found 
          <strong>mixed support</strong>.
          <br/><br/>
          In some prisons, <em>neither</em> importation nor deprivation factors predicted violence. 
          This suggests <strong>contextual variables</strong> (specific to each facility) may moderate 
          the models' validity.
        </p>
      </div>

    </div>
  )
}
