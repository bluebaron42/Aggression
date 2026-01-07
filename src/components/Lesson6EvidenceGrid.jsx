import React from 'react'
import { Search, AlertTriangle } from 'lucide-react'

export default function Lesson6EvidenceGrid({ isPresentation }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-slate-900 border border-slate-800 p-8 relative rounded-xl">
        <div className="absolute top-4 right-4 opacity-20"><Search size={48} className="text-teal-500"/></div>
        <h3 className={`text-teal-500 font-bold font-mono mb-4 border-b border-slate-800 pb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Poulin & Boivin (2000)</h3>
        <div className={`space-y-4 text-slate-300 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
          <p><strong className={`text-white font-mono ${isPresentation ? 'text-xl' : 'text-xs'}`}>Participants:</strong> Boys aged 9–12 who formed friendships with similarly aggressive peers.</p>
          <p><strong className={`text-white font-mono ${isPresentation ? 'text-xl' : 'text-xs'}`}>Process:</strong> Friendships mutually reinforced <em>proactive</em> aggression via observation, success, and group approval.</p>
          <p><strong className={`text-white font-mono ${isPresentation ? 'text-xl' : 'text-xs'}`}>Implication:</strong> Frequent exposure to aggressive models and rewarding outcomes increased imitation — consistent with SLT.</p>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-8 relative rounded-xl">
        <div className="absolute top-4 right-4 opacity-20"><AlertTriangle size={48} className="text-yellow-500"/></div>
        <h3 className={`text-yellow-500 font-bold font-mono mb-4 border-b border-slate-800 pb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Counterpoint: Reactive Aggression</h3>
        <div className={`space-y-4 text-slate-300 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
          <p><strong className={`text-white font-mono ${isPresentation ? 'text-xl' : 'text-xs'}`}>Finding:</strong> Friends did <em>not</em> show similarity for <em>reactive</em> (hot‑blooded) aggression; boys observed outbursts but rarely imitated them.</p>
          <p><strong className={`text-white font-mono ${isPresentation ? 'text-xl' : 'text-xs'}`}>Reason:</strong> Outcomes of reactive aggression are unpredictable and less rewarding, so less reinforcement for imitation.</p>
          <p className={`text-yellow-400/90 italic ${isPresentation ? 'text-xl' : 'text-sm'}`}>
            Interpretation: SLT explains proactive aggression well, but is a weaker account of reactive aggression.
          </p>
        </div>
      </div>
    </div>
  )
}
