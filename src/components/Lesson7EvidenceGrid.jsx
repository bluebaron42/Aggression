import React from 'react'
import { FileText, Zap } from 'lucide-react'

export default function Lesson7EvidenceGrid({ isPresentation }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      <div className="bg-black border border-zinc-800 p-8 relative hover:border-red-600 transition-all group cursor-default">
        <div className="absolute top-4 right-4 opacity-20"><FileText size={48} className="text-red-600"/></div>
        <h3 className={`text-red-600 font-glitch font-bold mb-4 border-b border-zinc-800 pb-2 ${isPresentation ? 'text-5xl' : 'text-2xl'}`}>Dodd (1985)</h3>
        <div className={`space-y-4 text-zinc-400 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
          <p><strong className={`text-white font-code ${isPresentation ? 'text-xl' : 'text-xs'}`}>Method:</strong> Asked students: "If you could do anything humanly possible with complete assurance you wouldn't be detected/held responsible, what would you do?"</p>
          <p><strong className={`text-white font-code ${isPresentation ? 'text-xl' : 'text-xs'}`}>Findings:</strong> 36% of responses were antisocial. 26% were criminal acts (robbery, assassination). Only 9% were prosocial.</p>
          <p><strong className={`text-white font-code ${isPresentation ? 'text-xl' : 'text-xs'}`}>Link:</strong> Perceived anonymity releases aggressive desires.</p>
        </div>
      </div>

      <div className="bg-black border border-zinc-800 p-8 relative hover:border-red-600 transition-all group cursor-default">
        <div className="absolute top-4 right-4 opacity-20"><Zap size={48} className="text-red-600"/></div>
        <h3 className={`text-red-600 font-glitch font-bold mb-4 border-b border-zinc-800 pb-2 ${isPresentation ? 'text-5xl' : 'text-2xl'}`}>Zimbardo (1969)</h3>
        <div className={`space-y-4 text-zinc-400 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
          <p><strong className={`text-white font-code ${isPresentation ? 'text-xl' : 'text-xs'}`}>Method:</strong> Female students shocked a confederate. Group A: Hoods/Coats (Anonymous). Group B: Name tags (Individuated).</p>
          <p><strong className={`text-white font-code ${isPresentation ? 'text-xl' : 'text-xs'}`}>Findings:</strong> Anonymous participants shocked for <strong>twice as long</strong> as the individuated group.</p>
        </div>
      </div>
    </div>
  )
}
