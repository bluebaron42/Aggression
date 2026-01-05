import React from 'react';
import { Users, AlertTriangle } from 'lucide-react';

export default function EvidenceGrid({ isPresentation }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 h-full ${isPresentation ? 'gap-16' : ''}`}>
      <div className={`bg-indigo-900/30 border border-indigo-800 rounded-xl relative hover:border-fuchsia-500 transition-all group ${isPresentation ? 'p-16' : 'p-8'}`}>
        <div className="absolute top-4 right-4 opacity-20"><Users size={isPresentation ? 64 : 48} className="text-fuchsia-500"/></div>
        <h3 className={`text-fuchsia-400 font-bold mb-4 border-b border-indigo-800 pb-2 ${isPresentation ? 'text-3xl mb-6 pb-4' : 'text-2xl'}`}>Brunner et al. (1993)</h3>
        <div className={`space-y-4 text-indigo-200 ${isPresentation ? 'space-y-6' : ''}`}>
          <p className={isPresentation ? 'text-lg' : ''}><strong className="text-white">Sample:</strong> 28 males from a large Dutch family with a history of impulsive violent crime (rape, attempted murder).</p>
          <p className={isPresentation ? 'text-lg' : ''}><strong className="text-white">Findings:</strong> The men had abnormally low levels of MAOA in their brains and possessed the Low-Activity gene variant.</p>
          <p className={`text-fuchsia-300/80 italic ${isPresentation ? 'text-base' : 'text-sm'}`}>"Direct link between a specific gene variant and extreme aggression."</p>
        </div>
      </div>

      <div className={`bg-indigo-900/30 border border-indigo-800 rounded-xl relative hover:border-indigo-500 transition-all group ${isPresentation ? 'p-16' : 'p-8'}`}>
        <div className="absolute top-4 right-4 opacity-20"><AlertTriangle size={isPresentation ? 64 : 48} className="text-indigo-500"/></div>
        <h3 className={`text-indigo-400 font-bold mb-4 border-b border-indigo-800 pb-2 ${isPresentation ? 'text-3xl mb-6 pb-4' : 'text-2xl'}`}>Stuart et al. (2014)</h3>
        <div className={`space-y-4 text-indigo-200 ${isPresentation ? 'space-y-6' : ''}`}>
          <p className={isPresentation ? 'text-lg' : ''}><strong className="text-white">Sample:</strong> 97 men in a batterer treatment program for Intimate Partner Violence (IPV).</p>
          <p className={isPresentation ? 'text-lg' : ''}><strong className="text-white">Findings:</strong> Men with the <strong>MAOA-L</strong> gene were the most violent perpetrators, engaging in the highest levels of physical and psychological aggression.</p>
        </div>
      </div>
    </div>
  );
}
