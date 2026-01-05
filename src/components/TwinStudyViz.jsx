import React, { useState } from 'react';
import { Dna } from 'lucide-react';

export default function TwinStudyViz({ isPresentation }) {
  const [view, setView] = useState('mz');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Visual Representation */}
      <div className="bg-indigo-950 border border-indigo-800 rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dna opacity-10"></div>
        
        {/* DNA Helix Animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
          <Dna size={300} className="text-fuchsia-500 animate-pulse-purple" />
        </div>

        <div className="flex gap-8 relative z-10 items-end h-64">
          {/* Bar 1 */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-fuchsia-300 font-bold text-lg">50%</span>
            <div className={`w-24 bg-gradient-to-t from-fuchsia-900 to-fuchsia-500 rounded-t transition-all duration-1000 ${view === 'mz' ? 'h-64' : 'h-24 opacity-30'}`}></div>
            <span className="text-xs uppercase font-bold text-fuchsia-500">MZ Twins</span>
          </div>
          
          {/* Bar 2 */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-indigo-300 font-bold text-lg">19%</span>
            <div className={`w-24 bg-gradient-to-t from-indigo-900 to-indigo-500 rounded-t transition-all duration-1000 ${view === 'dz' ? 'h-24' : 'h-12 opacity-30'}`}></div>
            <span className="text-xs uppercase font-bold text-indigo-500">DZ Twins</span>
          </div>
        </div>
      </div>

      {/* Content Panel */}
      <div className="flex flex-col justify-center bg-indigo-900/30 border-l-4 border-fuchsia-500 p-8 rounded-r-xl">
        <div className="flex gap-4 mb-6">
          <button onClick={() => setView('mz')} className={`flex-1 py-3 font-bold uppercase text-sm border-b-2 transition-all ${view === 'mz' ? 'border-fuchsia-500 text-fuchsia-400' : 'border-indigo-800 text-indigo-600'}`}>MZ (Identical)</button>
          <button onClick={() => setView('dz')} className={`flex-1 py-3 font-bold uppercase text-sm border-b-2 transition-all ${view === 'dz' ? 'border-indigo-500 text-indigo-400' : 'border-indigo-800 text-indigo-600'}`}>DZ (Non-Identical)</button>
        </div>

        <div className="animate-fadeIn">
          <h3 className={`font-bold text-white mb-2 uppercase ${isPresentation ? 'text-3xl' : 'text-xl'}`}>Coccaro et al. (1997)</h3>
          <p className={`text-indigo-200 mb-4 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
            Studied adult male twins to investigate physical aggression.
          </p>
          
          <div className="bg-indigo-950 p-4 rounded border border-indigo-800 mb-4">
            <strong className="block text-fuchsia-400 text-xs uppercase mb-1">Concordance Rates</strong>
            <p className="text-white text-sm">
              {view === 'mz' 
                ? "MZ Twins share 100% of genes. A 50% concordance suggests a strong genetic component, but environment still plays a huge role (otherwise it would be 100%)."
                : "DZ Twins share 50% of genes. The significantly lower concordance (19%) compared to MZ confirms the genetic influence."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
