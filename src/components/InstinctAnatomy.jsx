import React from 'react';
import { Eye, Activity, CheckCircle, ChevronRight } from 'lucide-react';

export default function InstinctAnatomy({ isPresentation }) {
  return (
    <div className={`flex flex-col h-full ${isPresentation ? 'gap-12' : 'gap-8'}`}>
      {/* The Flowchart */}
      <div className={`flex items-center justify-between bg-gradient-to-r from-stone-900 via-stone-950 to-stone-900 border border-stone-800 rounded-xl relative overflow-hidden shadow-2xl ${isPresentation ? 'p-12 gap-6' : 'p-8'}`}>
        <div className="absolute inset-0 bg-topography opacity-10"></div>
        
        {/* Step 1 */}
        <div className="flex flex-col items-center z-10 w-1/3 min-w-[200px]">
          <div className="w-20 h-20 rounded-full bg-red-900/30 border-2 border-red-500 flex items-center justify-center mb-4">
            <Eye size={32} className="text-red-400" />
          </div>
          <h4 className={`text-red-400 font-bold uppercase mb-1 ${isPresentation ? 'text-xl' : 'text-sm'}`}>Sign Stimulus</h4>
          <p className={`text-stone-500 text-center ${isPresentation ? 'text-xl' : 'text-xs'}`}>Environmental Trigger</p>
        </div>

        <ChevronRight size={isPresentation ? 48 : 32} className="text-stone-600" />

        {/* Step 2 */}
        <div className="flex flex-col items-center z-10 w-1/3 min-w-[200px] gap-2">
          <div className={`font-black uppercase tracking-tight text-amber-400 text-center ${isPresentation ? 'text-3xl' : 'text-xl'}`}>IRM</div>
          <div className={`relative rounded-xl bg-amber-900/40 border-2 border-amber-500 flex items-center justify-center shadow-[0_10px_40px_rgba(251,191,36,0.12)] ${isPresentation ? 'w-32 h-32' : 'w-24 h-24'}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-amber-500/10 pointer-events-none rounded-xl"></div>
            <div className="flex flex-col items-center justify-center gap-1 text-center px-3">
              <span className={`text-amber-200 uppercase tracking-wide ${isPresentation ? 'text-lg' : 'text-[10px]'}`}>Innate</span>
              <span className={`text-amber-200 uppercase tracking-wide ${isPresentation ? 'text-lg' : 'text-[10px]'}`}>Releasing</span>
              <span className={`text-amber-200 uppercase tracking-wide ${isPresentation ? 'text-lg' : 'text-[10px]'}`}>Mechanism</span>
            </div>
          </div>
          <h4 className={`text-amber-400 font-bold uppercase mb-1 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>Neural Network</h4>
          <p className={`text-stone-500 text-center ${isPresentation ? 'text-xl' : 'text-xs'}`}>Built-in physiological process</p>
        </div>

        <ChevronRight size={isPresentation ? 48 : 32} className="text-stone-600" />

        {/* Step 3 */}
        <div className="flex flex-col items-center z-10 w-1/3 min-w-[200px]">
          <div className="w-20 h-20 rounded-full bg-emerald-900/30 border-2 border-emerald-500 flex items-center justify-center mb-4">
            <Activity size={32} className="text-emerald-400" />
          </div>
          <h4 className={`text-emerald-400 font-bold uppercase mb-1 ${isPresentation ? 'text-xl' : 'text-sm'}`}>FAP</h4>
          <p className={`text-stone-500 text-center ${isPresentation ? 'text-xl' : 'text-xs'}`}>Fixed Action Pattern</p>
        </div>
      </div>

      {/* The Checklist */}
      <div className={`grid ${isPresentation ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6' : 'grid-cols-2 md:grid-cols-3 gap-4'}`}>
        {["Stereotyped (Unchanging)", "Universal (All species members)", "Unaffected by Learning (Innate)", "Ballistic (Runs to completion)", "Single-purpose", "Triggered by Sign Stimulus"].map((feature, i) => (
          <div key={i} className={`bg-stone-900/50 border border-stone-800 rounded flex items-center shadow-md ${isPresentation ? 'p-6 gap-4 flex-col' : 'p-4 gap-3'}`}>
            <CheckCircle size={isPresentation ? 32 : 16} className="text-amber-600 shrink-0" />
            <span className={`text-stone-300 font-mono text-center ${isPresentation ? 'text-base leading-tight' : 'text-xs'}`}>{feature}</span>
          </div>
        ))}
      </div>

      {/* Explanation Paragraph */}
      <div className={`bg-stone-900/30 border-l-4 border-emerald-600 rounded-r-lg ${isPresentation ? 'p-8' : 'p-4'}`}>
        <p className={`text-stone-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
          The <strong>Innate Releasing Mechanism (IRM)</strong> acts as a neural 'gatekeeper'. When it detects a specific <strong>Sign Stimulus</strong> (the "key"), it releases the <strong>Fixed Action Pattern (FAP)</strong>. This neural network ensures that the animal responds immediately and correctly to threats or mating opportunities without the need for conscious decision-making or learning.
        </p>
      </div>
      
      <div className={`text-center text-stone-500 italic ${isPresentation ? 'text-sm' : 'text-xs'}`}>
        Lea (1984) - Characteristics of FAPs
      </div>
    </div>
  );
}
