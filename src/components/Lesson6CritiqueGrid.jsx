import React from 'react'
import { AlertTriangle, Lightbulb } from 'lucide-react'

export default function Lesson6CritiqueGrid({ isPresentation }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 h-full`}>
      <div className="bg-slate-900 border border-slate-800 p-6 relative rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-900/20 p-2 rounded"><Lightbulb className="text-green-500" size={32} /></div>
          <h3 className={`text-green-500 font-mono font-bold ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Real-world Application</h3>
        </div>
        <ul className={`text-slate-300 leading-relaxed font-mono space-y-3 list-disc list-inside ${isPresentation ? 'text-2xl' : 'text-base'}`}>
          <li>SLT can help reduce aggression</li>
          <li>Children readily imitate rewarded models, especially those they identify with</li>
          <li>Encouraging friendships with non-aggressive peers provides opportunities to model non-aggressive behavior</li>
          <li>Presenting non-aggressive media characters offers alternative role models</li>
          <li>SLT offers practical steps to reduce aggressive development in children</li>
        </ul>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-6 relative rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-900/20 p-2 rounded"><AlertTriangle className="text-red-500" size={32} /></div>
          <h3 className={`text-red-500 font-mono font-bold ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Biological Influences</h3>
        </div>
        <ul className={`text-slate-300 leading-relaxed font-mono space-y-3 list-disc list-inside ${isPresentation ? 'text-2xl' : 'text-base'}`}>
          <li>SLT underestimates biological factors</li>
          <li>Bandura accepted an instinctive urge to be aggressive exists</li>
          <li>He argued the <em>form</em> aggression takes is primarily learned ("nurture")</li>
          <li>However, genetic, evolutionary, neural, and hormonal influences are well-established</li>
          <li>SLT barely acknowledges these factors</li>
          <li>Makes it an incomplete explanation that underplays biological roles</li>
        </ul>
      </div>
    </div>
  )
}
