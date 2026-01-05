import React from 'react';
import { Eye, Activity, CheckCircle, ChevronRight } from 'lucide-react';

export default function InstinctAnatomy({ isPresentation }) {
  return (
    <div className="flex flex-col h-full gap-8">
      {/* The Flowchart */}
      <div className="flex items-center justify-between bg-stone-900 border border-stone-800 p-8 rounded-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-topography opacity-10"></div>
        
        {/* Step 1 */}
        <div className="flex flex-col items-center z-10 w-1/3">
          <div className="w-20 h-20 rounded-full bg-red-900/30 border-2 border-red-500 flex items-center justify-center mb-4">
            <Eye size={32} className="text-red-400" />
          </div>
          <h4 className={`text-red-400 font-bold uppercase mb-1 ${isPresentation ? 'text-xl' : 'text-sm'}`}>Sign Stimulus</h4>
          <p className={`text-stone-500 text-center ${isPresentation ? 'text-lg' : 'text-xs'}`}>Environmental Trigger</p>
        </div>

        <ChevronRight size={isPresentation ? 48 : 32} className="text-stone-600" />

        {/* Step 2 */}
        <div className="flex flex-col items-center z-10 w-1/3">
          <div className="w-24 h-24 rounded-lg bg-amber-900/30 border-2 border-amber-500 flex items-center justify-center mb-4">
            <div className="text-center">
              <span className="text-2xl font-bold text-amber-500 block">IRM</span>
              <span className={`text-amber-300 uppercase leading-none ${isPresentation ? 'text-sm' : 'text-[8px]'}`}>Innate Releasing Mechanism</span>
            </div>
          </div>
          <h4 className={`text-amber-400 font-bold uppercase mb-1 ${isPresentation ? 'text-xl' : 'text-sm'}`}>Neural Network</h4>
          <p className={`text-stone-500 text-center ${isPresentation ? 'text-lg' : 'text-xs'}`}>Built-in physiological process</p>
        </div>

        <ChevronRight size={isPresentation ? 48 : 32} className="text-stone-600" />

        {/* Step 3 */}
        <div className="flex flex-col items-center z-10 w-1/3">
          <div className="w-20 h-20 rounded-full bg-emerald-900/30 border-2 border-emerald-500 flex items-center justify-center mb-4">
            <Activity size={32} className="text-emerald-400" />
          </div>
          <h4 className={`text-emerald-400 font-bold uppercase mb-1 ${isPresentation ? 'text-xl' : 'text-sm'}`}>FAP</h4>
          <p className={`text-stone-500 text-center ${isPresentation ? 'text-lg' : 'text-xs'}`}>Fixed Action Pattern</p>
        </div>
      </div>

      {/* The Checklist */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {["Stereotyped (Unchanging)", "Universal (All species members)", "Unaffected by Learning (Innate)", "Ballistic (Runs to completion)", "Single-purpose", "Triggered by Sign Stimulus"].map((feature, i) => (
          <div key={i} className="bg-stone-900/50 border border-stone-800 p-4 rounded flex items-center gap-3">
            <CheckCircle size={isPresentation ? 24 : 16} className="text-amber-600 shrink-0" />
            <span className={`text-stone-300 font-mono ${isPresentation ? 'text-lg' : 'text-xs'}`}>{feature}</span>
          </div>
        ))}
      </div>

      {/* Explanation Paragraph */}
      <div className="bg-stone-900/30 p-4 border-l-4 border-emerald-600 rounded-r-lg">
        <p className={`text-stone-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
          The <strong>Innate Releasing Mechanism (IRM)</strong> acts as a neural 'gatekeeper'. When it detects a specific <strong>Sign Stimulus</strong> (the "key"), it releases the <strong>Fixed Action Pattern (FAP)</strong>. This neural network ensures that the animal responds immediately and correctly to threats or mating opportunities without the need for conscious decision-making or learning.
        </p>
      </div>
      
      <div className="text-center text-stone-500 text-xs italic">
        Lea (1984) - Characteristics of FAPs
      </div>
    </div>
  );
}
