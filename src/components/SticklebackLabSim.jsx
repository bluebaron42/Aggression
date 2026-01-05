import React, { useState } from 'react';
import { Fish, CheckCircle, X } from 'lucide-react';

export default function SticklebackLabSim({ isPresentation }) {
  const [phase, setPhase] = useState('intro');
  const [activeStimulus, setActiveStimulus] = useState(null);
  const [reaction, setReaction] = useState("calm");
  const [log, setLog] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [conclusion, setConclusion] = useState(null);

  const stimuli = [
    { id: 1, name: "Realistic Male (No Red)", type: "control", result: "ignore", desc: "A perfect model of a male stickleback, but painted silver." },
    { id: 2, name: "Realistic Female (Swollen)", type: "courtship", result: "ignore", desc: "A realistic female model with a swollen belly (eggs)." },
    { id: 3, name: "Crude Shape (Red Belly)", type: "experimental", result: "attack", desc: "A vague wooden block shape, but with a red underside." },
    { id: 4, name: "Crude Shape (No Red)", type: "control", result: "ignore", desc: "A vague wooden block shape, painted silver." }
  ];

  const testStimulus = (item) => {
    if (activeStimulus) return;
    
    setActiveStimulus(item);
    setReaction("analyzing");

    setTimeout(() => {
      setReaction(item.result);
      
      setTimeout(() => {
        const entry = { 
          id: Date.now(), 
          name: item.name, 
          reaction: item.result === 'attack' ? 'AGGRESSIVE FAP TRIGGERED' : 'NO AGGRESSION',
          color: item.result === 'attack' ? 'text-red-500' : 'text-stone-500'
        };
        setLog(prev => [entry, ...prev]);
        setActiveStimulus(null);
        setReaction("calm");
        
        if (log.length >= 2) setCompleted(true);
      }, 2000);
    }, 500);
  };

  const submitConclusion = (choice) => {
    if (choice === 'red') {
      setConclusion({ correct: true, msg: "CORRECT. The Red Spot is the Sign Stimulus that triggers the IRM." });
    } else {
      setConclusion({ correct: false, msg: "INCORRECT. The shape was irrelevant. Only the color mattered." });
    }
    setPhase('analysis');
  };

  return (
    <div className={`h-full flex flex-col font-mono bg-stone-900 border-4 border-stone-800 rounded-xl relative overflow-hidden shadow-2xl ${isPresentation ? 'text-sm' : 'text-xs md:text-sm'}`}>
      {/* Header */}
      <div className={`flex justify-between items-center border-b-2 border-stone-800 bg-stone-950 z-10 ${isPresentation ? 'p-8' : 'p-4'}`}>
        <div className="flex items-center gap-2">
          <Fish size={isPresentation ? 24 : 16} className="text-emerald-500" />
          <span className={`text-emerald-500 font-bold tracking-widest font-serif ${isPresentation ? 'text-lg' : ''}`}>TINBERGEN_LAB_1951</span>
        </div>
        <div className={`text-stone-500 ${isPresentation ? 'text-sm' : 'text-xs'}`}>SUBJECT: GASTEROSTEUS ACULEATUS</div>
      </div>

      <div className={`flex-grow flex relative z-10 ${isPresentation ? 'gap-8' : ''}`}>
        
        {/* Sidebar: Controls & Log */}
        <div className={`${isPresentation ? 'w-1/4' : 'w-1/3'} border-r-2 border-stone-800 bg-stone-950 ${isPresentation ? 'p-8' : 'p-4'} flex flex-col ${isPresentation ? 'gap-8' : 'gap-4'}`}>
          {phase === 'intro' ? (
            <div className="h-full flex flex-col justify-center text-center">
              <h3 className={`font-bold text-white mb-4 font-serif ${isPresentation ? 'text-2xl' : 'text-xl'}`}>HYPOTHESIS</h3>
              <p className={`text-stone-400 mb-6 ${isPresentation ? 'text-base' : 'text-xs'}`}>"Aggression in sticklebacks is an innate FAP triggered by a specific Sign Stimulus."</p>
              <button onClick={() => setPhase('experiment')} className={`bg-emerald-700 text-white rounded font-bold hover:bg-emerald-600 ${isPresentation ? 'py-4 text-lg' : 'py-3'}`}>BEGIN EXPERIMENT</button>
            </div>
          ) : phase === 'experiment' ? (
            <>
              <div>
                <span className={`text-stone-500 block uppercase mb-2 ${isPresentation ? 'text-sm' : 'text-[10px]'}`}>Select Stimulus</span>
                <div className={`grid grid-cols-1 ${isPresentation ? 'gap-3' : 'gap-2'}`}>
                  {stimuli.map(s => (
                    <button 
                      key={s.id} 
                      onClick={() => testStimulus(s)}
                      disabled={!!activeStimulus}
                      className={`border rounded text-left transition-all ${isPresentation ? 'p-4' : 'p-3'} ${activeStimulus?.id === s.id ? 'bg-amber-900/50 border-amber-500' : 'bg-stone-900 border-stone-700 hover:bg-stone-800'}`}
                    >
                      <div className={`font-bold text-stone-200 ${isPresentation ? 'text-sm' : ''}`}>{s.name}</div>
                      <div className={`text-stone-500 truncate ${isPresentation ? 'text-xs' : 'text-[10px]'}`}>{s.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex-grow flex flex-col min-h-0">
                <span className={`text-stone-500 block uppercase mb-2 mt-4 ${isPresentation ? 'text-sm' : 'text-[10px]'}`}>Field Notes</span>
                <div className={`flex-grow overflow-y-auto bg-stone-900/50 rounded border border-stone-800 custom-scrollbar ${isPresentation ? 'p-4' : 'p-2'}`}>
                  {log.length === 0 && <span className="opacity-50 text-stone-500">No observations recorded...</span>}
                  <div className="space-y-2">
                    {log.map(l => (
                      <div key={l.id} className="bg-stone-950 p-3 rounded border border-stone-700">
                        <span className="block font-bold text-stone-300 mb-1">{l.name}</span>
                        <span className={`block font-bold text-xs ${l.reaction.includes('AGGRESSIVE') ? 'text-red-500' : 'text-emerald-500'}`}>
                          {l.reaction}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {completed && (
                <div className={isPresentation ? 'mt-6' : 'mt-2'}>
                  <p className={`text-stone-400 mb-3 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Sufficient data collected.</p>
                  <div className={`flex gap-3 ${isPresentation ? 'flex-col' : 'gap-2'}`}>
                    <button onClick={() => submitConclusion('shape')} className={`bg-stone-800 text-stone-300 border border-stone-600 hover:bg-stone-700 rounded ${isPresentation ? 'py-3 text-sm' : 'py-2 text-[10px]'}`}>Trigger = SHAPE</button>
                    <button onClick={() => submitConclusion('red')} className={`bg-amber-900/50 text-amber-200 border border-amber-700 hover:bg-amber-800 rounded ${isPresentation ? 'py-3 text-sm' : 'py-2 text-[10px]'}`}>Trigger = RED SPOT</button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className={`h-full flex flex-col justify-center text-center ${isPresentation ? 'p-8' : 'p-4'}`}>
              <div className={`mb-4 ${conclusion.correct ? 'text-green-500' : 'text-red-500'}`}>
                {conclusion.correct ? <CheckCircle size={isPresentation ? 96 : 64} className="mx-auto"/> : <X size={isPresentation ? 96 : 64} className="mx-auto"/>}
              </div>
              <h3 className={`font-bold text-white mb-2 ${isPresentation ? 'text-2xl' : 'text-xl'}`}>{conclusion.correct ? "HYPOTHESIS CONFIRMED" : "HYPOTHESIS REJECTED"}</h3>
              <p className={`text-stone-400 mb-6 ${isPresentation ? 'text-base' : ''}`}>{conclusion.msg}</p>
              <button onClick={() => { setPhase('intro'); setLog([]); setCompleted(false); setConclusion(null); }} className="text-stone-500 underline hover:text-stone-400">Reset Lab</button>
            </div>
          )}
        </div>

        {/* The Tank Visual */}
        <div className={`${isPresentation ? 'w-3/4' : 'w-2/3'} bg-red-900/20 relative overflow-hidden flex items-center justify-center border-l border-stone-800`}>
          {/* Water Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.1)_0%,_transparent_70%)]"></div>
          
          {/* The Stickleback */}
          <div className={`absolute transition-all duration-500 ${reaction === 'attack' ? 'animate-attack' : 'animate-swim'}`} style={{ right: '20%' }}>
            <div className="relative">
              <Fish size={120} className="text-stone-300 fill-stone-800" />
              {/* Eye */}
              <div className={`absolute top-8 left-6 w-3 h-3 rounded-full ${reaction === 'attack' ? 'bg-red-500' : 'bg-black'}`}></div>
              {/* Spines */}
              <div className="absolute -top-2 left-10 w-1 h-6 bg-stone-400 rotate-12"></div>
              <div className="absolute -top-1 left-16 w-1 h-5 bg-stone-400 rotate-12"></div>
            </div>
          </div>

          {/* Dropped Stimulus */}
          {activeStimulus && (
            <div className="absolute left-1/4 transition-all duration-1000 animate-fadeIn flex flex-col items-center">
              {/* String holding it */}
              <div className="h-32 w-0.5 bg-stone-600 -mt-20"></div>
              
              {/* The Model Visual */}
              {activeStimulus.id === 1 && <Fish size={100} className="text-stone-400" />}
              {activeStimulus.id === 2 && <Fish size={100} className="text-stone-400 scale-y-125" />}
              {activeStimulus.id === 3 && (
                <div className="w-24 h-12 bg-stone-500 rounded-full relative">
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-red-600 rounded-b-full"></div>
                </div>
              )}
              {activeStimulus.id === 4 && <div className="w-24 h-12 bg-stone-500 rounded-full"></div>}
            </div>
          )}

          {/* Reaction Text Overlay */}
          {reaction === 'attack' && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600 font-bold font-serif text-6xl animate-pulse z-20">
              ATTACK!
            </div>
          )}
          {reaction === 'ignore' && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-500 font-mono bg-black/50 px-4 py-1 rounded">
              *No Reaction*
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
