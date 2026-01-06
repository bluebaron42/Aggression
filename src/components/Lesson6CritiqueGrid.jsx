import React from 'react'
import { AlertTriangle, Target } from 'lucide-react'

export default function Lesson6CritiqueGrid({ isPresentation }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 h-full`}>
      <div className="bg-slate-900 border border-slate-800 p-6 relative rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-900/20 p-2 rounded"><AlertTriangle className="text-red-500" size={32} /></div>
          <h3 className={`text-red-500 font-mono font-bold ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Biological Factors</h3>
        </div>
        <p className={`text-slate-300 leading-relaxed font-mono ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
          Boys consistently show higher physical aggression than girls. SLT alone struggles to explain this. Biological factors like testosterone may drive the urge; SLT shapes expression.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-6 relative rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-yellow-900/20 p-2 rounded"><Target className="text-yellow-500" size={32} /></div>
          <h3 className={`text-yellow-500 font-mono font-bold ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Artificiality</h3>
        </div>
        <p className={`text-slate-300 leading-relaxed font-mono ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
          The Bobo doll is designed to be hit. Children may respond to demand characteristics rather than genuine aggression. Low ecological validity.
        </p>
      </div>
    </div>
  )
}
