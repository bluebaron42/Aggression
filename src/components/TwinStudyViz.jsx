import React, { useState } from 'react';
import { Dna } from 'lucide-react';

export default function TwinStudyViz({ isPresentation }) {
  const [view, setView] = useState('mz');

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 h-full ${isPresentation ? 'gap-16' : ''}`}>
      {/* Visual Representation */}
      <div className={`bg-indigo-950 border border-indigo-800 rounded-xl flex flex-col items-center justify-center relative overflow-hidden ${isPresentation ? 'p-16' : 'p-8'}`}>
        <div className="absolute inset-0 bg-grid-dna opacity-10"></div>
        
        {/* DNA Helix Animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
          <Dna size={isPresentation ? 400 : 300} className="text-fuchsia-500 animate-pulse-purple" />
        </div>

        <div className={`flex gap-8 relative z-10 items-end ${isPresentation ? 'h-80' : 'h-64'}`}>
          {/* Bar 1 */}
          <div className="flex flex-col items-center gap-2">
            <span className={`text-fuchsia-300 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>50%</span>
            <div className={`w-24 bg-gradient-to-t from-fuchsia-900 to-fuchsia-500 rounded-t transition-all duration-1000 ${view === 'mz' ? (isPresentation ? 'h-80' : 'h-64') : (isPresentation ? 'h-32' : 'h-24')} ${view !== 'mz' ? 'opacity-30' : ''}`}></div>
            <span className={`uppercase font-bold text-fuchsia-500 ${isPresentation ? 'text-sm' : 'text-xs'}`}>MZ Twins</span>
          </div>
          
          {/* Bar 2 */}
          <div className="flex flex-col items-center gap-2">
            <span className={`text-indigo-300 font-bold ${isPresentation ? 'text-2xl' : 'text-lg'}`}>19%</span>
            <div className={`w-24 bg-gradient-to-t from-indigo-900 to-indigo-500 rounded-t transition-all duration-1000 ${view === 'dz' ? (isPresentation ? 'h-32' : 'h-24') : (isPresentation ? 'h-16' : 'h-12')} ${view !== 'dz' ? 'opacity-30' : ''}`}></div>
            <span className={`uppercase font-bold text-indigo-500 ${isPresentation ? 'text-sm' : 'text-xs'}`}>DZ Twins</span>
          </div>
        </div>
      </div>

      {/* Content Panel */}
      <div className={`flex flex-col justify-center bg-indigo-900/30 border-l-4 border-fuchsia-500 rounded-r-xl ${isPresentation ? 'p-16' : 'p-8'}`}>
        <div className={`flex gap-4 mb-6 ${isPresentation ? 'gap-6 mb-8' : ''}`}>
          <button onClick={() => setView('mz')} className={`flex-1 font-bold uppercase border-b-2 transition-all ${isPresentation ? 'py-4 text-lg' : 'py-3 text-sm'} ${view === 'mz' ? 'border-fuchsia-500 text-fuchsia-400' : 'border-indigo-800 text-indigo-600'}`}>MZ (Identical)</button>
          <button onClick={() => setView('dz')} className={`flex-1 font-bold uppercase border-b-2 transition-all ${isPresentation ? 'py-4 text-lg' : 'py-3 text-sm'} ${view === 'dz' ? 'border-indigo-500 text-indigo-400' : 'border-indigo-800 text-indigo-600'}`}>DZ (Non-Identical)</button>
        </div>

        <div className="animate-fadeIn">
          <h3 className={`font-bold text-white mb-2 uppercase ${isPresentation ? 'text-3xl mb-4' : 'text-xl'}`}>Coccaro et al. (1997)</h3>
          <p className={`text-indigo-200 mb-4 leading-relaxed ${isPresentation ? 'text-lg mb-6' : 'text-sm'}`}>
            Studied adult male twins to investigate physical aggression.
          </p>
          
          <div className={`bg-indigo-950 rounded border border-indigo-800 mb-4 ${isPresentation ? 'p-8' : 'p-4'}`}>
            <strong className={`block text-fuchsia-400 uppercase mb-1 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Concordance Rates</strong>
            <p className={`text-white ${isPresentation ? 'text-base' : 'text-sm'}`}>
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
