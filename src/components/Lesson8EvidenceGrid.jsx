import React from 'react'
import { FileText, BarChart } from 'lucide-react'

export default function Lesson8EvidenceGrid({ isPresentation }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      {/* Camp & Gaes */}
      <div className="bg-zinc-950 border-2 border-zinc-700 p-6 hover:border-orange-600 transition-all">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
          <h3 className={`text-orange-500 font-mono font-bold ${isPresentation ? 'text-4xl' : 'text-xl'}`}>Camp & Gaes (2005)</h3>
          <FileText size={32} className="text-orange-600 opacity-20" />
        </div>
        
        <div className={`space-y-4 text-zinc-400 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
          <div className="bg-black p-3 border-l-4 border-green-600">
            <strong className="text-green-400 text-xs uppercase block mb-1">Study Design</strong>
            <p>Studied <strong>561 male inmates</strong> with similar criminal histories across US prisons.</p>
          </div>

          <div className="bg-black p-3 border-l-4 border-orange-600">
            <strong className="text-orange-400 text-xs uppercase block mb-1">Key Finding</strong>
            <p>
              Those with <strong>gang membership</strong> and <strong>more street experience</strong> were 
              significantly more likely to engage in prison violence.
            </p>
          </div>

          <div className="bg-black p-3 border-l-4 border-zinc-600">
            <strong className="text-zinc-400 text-xs uppercase block mb-1">Link to Theory</strong>
            <p className="text-white">
              <strong className="text-green-500">Supports IMPORTATION MODEL.</strong> Pre-prison characteristics 
              (gang affiliation, criminal subculture) predict aggression inside.
            </p>
          </div>
        </div>
      </div>

      {/* Steiner */}
      <div className="bg-zinc-950 border-2 border-zinc-700 p-6 hover:border-green-600 transition-all">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
          <h3 className={`text-green-500 font-mono font-bold ${isPresentation ? 'text-4xl' : 'text-xl'}`}>Steiner (2009)</h3>
          <BarChart size={32} className="text-green-600 opacity-20" />
        </div>
        
        <div className={`space-y-4 text-zinc-400 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
          <div className="bg-black p-3 border-l-4 border-green-600">
            <strong className="text-green-400 text-xs uppercase block mb-1">Study Design</strong>
            <p>Meta-analysis examining prison conditions across multiple facilities.</p>
          </div>

          <div className="bg-black p-3 border-l-4 border-red-600">
            <strong className="text-red-400 text-xs uppercase block mb-1">Key Finding</strong>
            <p>
              <strong>Overcrowding</strong> and <strong>lack of meaningful activity</strong> were 
              strongly correlated with increased inmate-on-inmate violence.
            </p>
          </div>

          <div className="bg-black p-3 border-l-4 border-zinc-600">
            <strong className="text-zinc-400 text-xs uppercase block mb-1">Link to Theory</strong>
            <p className="text-white">
              <strong className="text-green-500">Supports DEPRIVATION MODEL.</strong> Harsh prison 
              conditions (deprivation of space, autonomy, goods) cause aggression.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
