import React, { useState } from 'react';
import { FileText, Search } from 'lucide-react';

export default function Lesson2EssayPlan({ isPresentation }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className={`bg-indigo-950 border border-indigo-800 flex flex-col h-full relative overflow-hidden rounded-xl shadow-2xl ${isPresentation ? 'p-16' : 'p-8'}`}>
      <div className="absolute top-0 right-0 opacity-10"><FileText size={isPresentation ? 160 : 120} className="text-fuchsia-500" /></div>
      
      <div className={`flex items-center justify-between mb-8 z-10 relative border-b border-indigo-900 pb-4 ${isPresentation ? 'pb-6 mb-12' : ''}`}>
        <h3 className={`font-bold text-white tracking-widest uppercase ${isPresentation ? 'text-4xl' : 'text-xl'}`}>ESSAY BLUEPRINT</h3>
        <span className={`bg-fuchsia-600 text-white font-bold font-mono ${isPresentation ? 'px-4 py-2 text-sm' : 'px-3 py-1 text-xs'}`}>16 MARKS</span>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button onClick={() => setRevealed(true)} className={`group flex items-center gap-3 bg-fuchsia-700 hover:bg-fuchsia-600 text-white font-bold uppercase transition-all shadow-lg ${isPresentation ? 'px-12 py-6 text-2xl gap-4' : 'px-8 py-4'}`}><Search size={isPresentation ? 28 : 20} /> DECODE PLAN</button>
        </div>
      ) : (
        <div className={`space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative h-full ${isPresentation ? 'space-y-6' : ''}`}>
          <div className={`bg-indigo-900/30 border-l-4 border-fuchsia-500 mb-4 ${isPresentation ? 'p-6 mb-6' : 'p-4'}`}>
            <p className={`text-fuchsia-200 font-mono italic ${isPresentation ? 'text-base' : 'text-sm'}`}>Question: "Discuss genetic factors in aggression." (16 Marks)</p>
          </div>

          <div className={`border-l-4 border-orange-500 pl-4 py-2 ${isPresentation ? 'pl-6' : ''}`}>
            <strong className={`text-orange-400 block mb-1 font-bold ${isPresentation ? 'text-2xl mb-3' : 'text-sm'}`}>AO1: Concepts (6 Marks)</strong>
            <ul className={`text-indigo-200 list-disc space-y-1 ${isPresentation ? 'text-lg space-y-2 pl-6' : 'text-xs pl-4'}`}>
              <li><strong>Twin Studies:</strong> Coccaro (50% MZ vs 19% DZ).</li>
              <li><strong>MAOA Gene:</strong> Enzyme regulates neurotransmitters (Serotonin).</li>
              <li><strong>MAOA-L Variant:</strong> Low activity → Dysregulation → Aggression.</li>
              <li><strong>GxE Interaction:</strong> Frazzetto (Gene + Childhood Trauma).</li>
            </ul>
          </div>

          <div className={`border-l-4 border-green-500 pl-4 py-2 ${isPresentation ? 'pl-6' : ''}`}>
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-2xl mb-3' : 'text-sm'}`}>AO3: Research Support</strong>
            <p className={`text-indigo-200 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Brunner et al. (1993):</strong> Dutch family study showing violent men shared the MAOA-L variant.
            </p>
          </div>

          <div className={`border-l-4 border-green-500 pl-4 py-2 ${isPresentation ? 'pl-6' : ''}`}>
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-2xl mb-3' : 'text-sm'}`}>AO3: Support (IPV)</strong>
            <p className={`text-indigo-200 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Stuart et al. (2014):</strong> Found strongest IPV perpetrators had MAOA-L gene.
            </p>
          </div>

          <div className={`border-l-4 border-red-500 pl-4 py-2 ${isPresentation ? 'pl-6' : ''}`}>
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-2xl mb-3' : 'text-sm'}`}>AO3: Complex Biology</strong>
            <p className={`text-indigo-200 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              The link isn't simple. Neural explanations cite <em>low</em> serotonin, but MAOA-L causes <em>high</em> synaptic serotonin (less breakdown). Mechanism is likely receptor sensitivity/dysregulation, not just levels.
            </p>
          </div>

          <div className={`border-l-4 border-yellow-500 pl-4 py-2 ${isPresentation ? 'pl-6' : ''}`}>
            <strong className={`text-yellow-400 block mb-1 font-bold ${isPresentation ? 'text-2xl mb-3' : 'text-sm'}`}>AO3: Interactionism</strong>
            <p className={`text-indigo-200 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              Genes are not destiny. <strong>Frazzetto (2007)</strong> found MAOA-L only predicted aggression in those with early trauma. High-activity gene <em>buffered</em> against trauma effects.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
