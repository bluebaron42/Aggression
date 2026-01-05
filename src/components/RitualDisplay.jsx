import React, { useState } from 'react';
import { Swords, Shield, ChevronRight } from 'lucide-react';

export default function RitualDisplay({ isPresentation }) {
  const [stage, setStage] = useState('conflict');

  return (
    <div className={`grid ${isPresentation ? 'grid-cols-1 lg:grid-cols-3 gap-12' : 'grid-cols-1 lg:grid-cols-2 gap-8'} h-full`}>
      {/* Visuals */}
      <div className={`${isPresentation ? 'lg:col-span-2' : ''} bg-stone-900 border border-stone-800 rounded-xl ${isPresentation ? 'p-12' : 'p-8'} flex items-center justify-center relative overflow-hidden shadow-inner`}>
        
        {/* Wolf A (Victor) */}
        <div className={`absolute transition-all duration-700 flex flex-col items-center
          ${stage === 'conflict' ? 'left-1/4 scale-100' : ''}
          ${stage === 'threat' ? 'left-1/3 scale-125' : ''}
          ${stage === 'appeasement' ? 'left-1/2 -translate-x-full scale-110' : ''}
        `}>
          <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center transition-colors duration-500 ${stage === 'threat' ? 'bg-red-900/50 border-red-500' : 'bg-stone-800 border-stone-600'}`}>
            <Swords size={48} className={stage === 'threat' ? 'text-red-500' : 'text-stone-500'} />
          </div>
          <span className="text-stone-400 text-xs font-mono mt-2 font-bold uppercase">Wolf A (Dominant)</span>
        </div>

        {/* Wolf B (Loser) */}
        <div className={`absolute transition-all duration-700 flex flex-col items-center
          ${stage === 'conflict' ? 'right-1/4 scale-100' : ''}
          ${stage === 'threat' ? 'right-1/3 scale-100' : ''}
          ${stage === 'appeasement' ? 'right-1/4 scale-75 rotate-12 opacity-80' : ''}
        `}>
          <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center transition-colors duration-500 ${stage === 'appeasement' ? 'bg-emerald-900/50 border-emerald-500' : 'bg-stone-800 border-stone-600'}`}>
            {stage === 'appeasement' ? <Shield size={48} className="text-emerald-500" /> : <Swords size={48} className="text-stone-500" />}
          </div>
          <span className="text-stone-400 text-xs font-mono mt-2 font-bold uppercase">Wolf B (Submissive)</span>
        </div>

        {/* Interaction Effects */}
        {stage === 'threat' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500 font-bold font-serif text-2xl animate-pulse">THREAT DISPLAY</div>
        )}
        {stage === 'appeasement' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-500 font-bold font-serif text-2xl animate-pulse">INHIBITION</div>
        )}
      </div>

      {/* Controls & Theory */}
      <div className={`flex flex-col justify-center ${isPresentation ? 'gap-8' : 'gap-6'}`}>
        <div className={`flex ${isPresentation ? 'flex-col gap-3' : 'gap-2'} bg-stone-900 ${isPresentation ? 'p-6' : 'p-2'} rounded-lg border border-stone-800`}>
          <button onClick={() => setStage('conflict')} className={`flex-1 font-bold uppercase rounded transition-all ${stage === 'conflict' ? 'bg-stone-700 text-white' : 'text-stone-500 hover:text-stone-300'} ${isPresentation ? 'py-4 text-lg' : 'py-2 text-xs'}`}>1. Confrontation</button>
          <button onClick={() => setStage('threat')} className={`flex-1 font-bold uppercase rounded transition-all ${stage === 'threat' ? 'bg-red-900/50 text-red-300' : 'text-stone-500 hover:text-stone-300'} ${isPresentation ? 'py-4 text-lg' : 'py-2 text-xs'}`}>2. Ritual Threat</button>
          <button onClick={() => setStage('appeasement')} className={`flex-1 font-bold uppercase rounded transition-all ${stage === 'appeasement' ? 'bg-emerald-900/50 text-emerald-300' : 'text-stone-500 hover:text-stone-300'} ${isPresentation ? 'py-4 text-lg' : 'py-2 text-xs'}`}>3. Appeasement</button>
        </div>

        <div className={`bg-stone-900/50 border-l-4 border-amber-600 rounded-r-xl ${isPresentation ? 'p-12' : 'p-8'}`}>
          <h3 className={`font-serif text-amber-500 mb-4 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>Lorenz (1966)</h3>
          <p className={`text-stone-300 mb-6 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
            Observed that actual physical fighting is rare. Most aggression is <strong>Ritualistic</strong> (signaling). 
            <br/><br/>
            <strong>Appeasement Displays:</strong> The loser signals defeat (e.g. exposing neck). This inhibits aggression in the victor, preventing the species from wiping itself out. 
            <br/><br/>
            <span className="text-white font-bold">Adaptive Function:</span> Spreads species out, establishes dominance, ensures survival.
          </p>
        </div>
      </div>
    </div>
  );
}
