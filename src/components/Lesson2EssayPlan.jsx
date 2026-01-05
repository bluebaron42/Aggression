import React, { useState } from 'react';
import { FileText, Search } from 'lucide-react';

export default function Lesson2EssayPlan({ isPresentation }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className={`bg-indigo-950 border border-indigo-800 p-8 flex flex-col h-full relative overflow-hidden rounded-xl shadow-2xl`}>
      <div className="absolute top-0 right-0 p-4 opacity-10"><FileText size={120} className="text-fuchsia-500" /></div>
      
      <div className="flex items-center justify-between mb-8 z-10 relative border-b border-indigo-900 pb-4">
        <h3 className={`font-bold text-white tracking-widest uppercase ${isPresentation ? 'text-3xl' : 'text-xl'}`}>ESSAY BLUEPRINT</h3>
        <span className="bg-fuchsia-600 text-white px-3 py-1 text-xs font-bold font-mono">16 MARKS</span>
      </div>

      {!revealed ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 z-10 relative">
          <button onClick={() => setRevealed(true)} className={`group flex items-center gap-3 bg-fuchsia-700 hover:bg-fuchsia-600 text-white font-bold uppercase transition-all shadow-lg ${isPresentation ? 'px-10 py-6 text-2xl' : 'px-8 py-4'}`}><Search size={20} /> DECODE PLAN</button>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn overflow-y-auto custom-scrollbar pr-2 z-10 relative h-full">
          <div className="bg-indigo-900/30 p-4 border-l-4 border-fuchsia-500 mb-4">
            <p className="text-fuchsia-200 text-sm font-mono italic">Question: "Discuss genetic factors in aggression." (16 Marks)</p>
          </div>

          <div className={`border-l-4 border-blue-500 pl-4 py-2`}>
            <strong className={`text-blue-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO1: Concepts (6 Marks)</strong>
            <ul className={`text-indigo-200 list-disc pl-4 space-y-1 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <li><strong>Twin Studies:</strong> Coccaro (50% MZ vs 19% DZ).</li>
              <li><strong>MAOA Gene:</strong> Enzyme regulates neurotransmitters (Serotonin).</li>
              <li><strong>MAOA-L Variant:</strong> Low activity → Dysregulation → Aggression.</li>
              <li><strong>GxE Interaction:</strong> Frazzetto (Gene + Childhood Trauma).</li>
            </ul>
          </div>

          <div className={`border-l-4 border-green-500 pl-4 py-2`}>
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Research Support</strong>
            <p className={`text-indigo-200 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Brunner et al. (1993):</strong> Dutch family study showing violent men shared the MAOA-L variant.
            </p>
          </div>

          <div className={`border-l-4 border-green-500 pl-4 py-2`}>
            <strong className={`text-green-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Support (IPV)</strong>
            <p className={`text-indigo-200 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              <strong>Stuart et al. (2014):</strong> Found strongest IPV perpetrators had MAOA-L gene.
            </p>
          </div>

          <div className={`border-l-4 border-red-500 pl-4 py-2`}>
            <strong className={`text-red-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Complex Biology</strong>
            <p className={`text-indigo-200 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              The link isn't simple. Neural explanations cite <em>low</em> serotonin, but MAOA-L causes <em>high</em> synaptic serotonin (less breakdown). Mechanism is likely receptor sensitivity/dysregulation, not just levels.
            </p>
          </div>

          <div className={`border-l-4 border-yellow-500 pl-4 py-2`}>
            <strong className={`text-yellow-400 block mb-1 font-bold ${isPresentation ? 'text-xl' : 'text-sm'}`}>AO3: Interactionism</strong>
            <p className={`text-indigo-200 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
              Genes are not destiny. <strong>Frazzetto (2007)</strong> found MAOA-L only predicted aggression in those with early trauma. High-activity gene <em>buffered</em> against trauma effects.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
