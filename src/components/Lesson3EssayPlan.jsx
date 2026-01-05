import React, { useState } from 'react';
import { Scroll, BookOpen } from 'lucide-react';

export default function Lesson3EssayPlan({ isPresentation }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className={`bg-stone-900 border border-stone-800 flex flex-col h-full relative overflow-hidden rounded-xl shadow-2xl ${isPresentation ? 'p-16' : 'p-8'}`}>
      <div className="absolute top-0 right-0 opacity-10"><Scroll size={isPresentation ? 160 : 120} className="text-amber-600" /></div>
      
      <div className={`flex items-center justify-between mb-8 z-10 relative border-b border-stone-700 pb-4 ${isPresentation ? 'pb-6 mb-12' : ''}`}>
        <h3 className={`font-serif text-stone-200 tracking-wide ${isPresentation ? 'text-4xl' : 'text-xl'}`}>Field Notes: Essay Plan</h3>
        <span className={`bg-amber-700 text-white font-bold font-mono rounded ${isPresentation ? 'px-4 py-2 text-sm' : 'px-3 py-1 text-xs'}`}>16 MARKS</span>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button onClick={() => setRevealed(true)} className={`group flex items-center gap-3 bg-amber-700 hover:bg-amber-600 text-white font-bold uppercase transition-all shadow-lg rounded-lg ${isPresentation ? 'px-12 py-6 text-2xl gap-4' : 'px-8 py-4'}`}><BookOpen size={isPresentation ? 28 : 20} /> Open Journal</button>
        </div>
      ) : (
        <div className={`space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative h-full ${isPresentation ? 'space-y-6' : ''}`}>
          <div className={`bg-stone-800 border-l-4 border-amber-600 mb-4 rounded-r ${isPresentation ? 'p-6 mb-6' : 'p-4'}`}>
            <p className={`text-amber-100/80 font-serif italic ${isPresentation ? 'text-base' : 'text-sm'}`}>Question: "Discuss ethological explanations of aggression." (16 Marks)</p>
          </div>

          <div className={`border-l-4 border-orange-500 pl-4 py-2 ${isPresentation ? 'pl-6' : ''}`}>
            <strong className={`text-orange-400 block mb-1 font-bold ${isPresentation ? 'text-2xl mb-3' : 'text-sm'}`}>AO1: Concepts (6 Marks)</strong>
            <ul className={`text-stone-300 list-disc space-y-1 ${isPresentation ? 'text-lg space-y-2 pl-6' : 'text-xs pl-4'}`}>
              <li><strong>Ethology:</strong> Study of innate behavior in natural settings. Adaptive value (survival/dominance).</li>
              <li><strong>Ritualistic Aggression:</strong> Threat displays replace fighting to prevent species damage (Lorenz). Appeasement signals inhibit aggression.</li>
              <li><strong>IRM & FAP:</strong> Neural mechanism triggered by Sign Stimulus leads to Ballistic, Universal behavior sequence.</li>
            </ul>
          </div>

          <div className={`border-l-4 border-green-500 pl-4 py-2 ${isPresentation ? 'pl-6' : ''}`}>
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-2xl mb-3' : 'text-sm'}`}>AO3: Research Support</strong>
            <p className={`text-stone-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Tinbergen (1951):</strong> Sticklebacks. Models with red spots (sign stimulus) triggered aggressive attack (FAP) regardless of shape. Realistic models without red were ignored. Supports IRM/FAP concept.
            </p>
          </div>

          <div className={`border-l-4 border-red-500 pl-4 py-2 ${isPresentation ? 'pl-6' : ''}`}>
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-2xl mb-3' : 'text-sm'}`}>AO3: Evidence Against Rituals</strong>
            <p className={`text-stone-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Goodall (2010):</strong> Chimpanzees in Gombe. "Four Year War". One community systematically slaughtered another despite appeasement signals. Contradicts Lorenz's view that animal aggression is harmless/ritualistic.
            </p>
          </div>

          <div className={`border-l-4 border-red-500 pl-4 py-2 ${isPresentation ? 'pl-6' : ''}`}>
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-2xl mb-3' : 'text-sm'}`}>AO3: Cultural Differences</strong>
            <p className={`text-stone-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Nisbett (1993):</strong> "Culture of Honour" in Southern US. White males there more aggressive to insults than in North. If aggression was purely innate (Ethological), culture shouldn't matter.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
