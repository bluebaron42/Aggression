import React, { useState } from 'react';
import { Scan, FileCode, Dna, Shield, Siren } from 'lucide-react';

export default function GeneticProfilerSim({ isPresentation }) {
  const [phase, setPhase] = useState('briefing');
  const [caseIdx, setCaseIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);

  const cases = [
    { id: 1, gene: "MAOA-L (Low)", env: "Severe Childhood Trauma", correct: "HIGH", explanation: "Correct. This is the classic GxE interaction (Frazzetto et al.). The 'Warrior Gene' combined with trauma triggers the aggressive phenotype." },
    { id: 2, gene: "MAOA-H (High)", env: "Severe Childhood Trauma", correct: "LOW", explanation: "Correct. The high-activity gene produces enough enzyme to 'buffer' the effects of the trauma, preventing dysregulation." },
    { id: 3, gene: "MAOA-L (Low)", env: "Safe / Loving Home", correct: "LOW", explanation: "Correct. Without the environmental trigger (stress/trauma), the gene alone typically does NOT lead to high aggression. (Diathesis-Stress)." },
  ];

  const handlePredict = (prediction) => {
    const currentCase = cases[caseIdx];
    if (prediction === currentCase.correct) {
      setScore(s => s + 1);
      setFeedback({ type: 'success', msg: currentCase.explanation });
    } else {
      setFeedback({ type: 'error', msg: `Incorrect. ${currentCase.explanation}` });
    }
  };

  const nextCase = () => {
    if (caseIdx < cases.length - 1) {
      setCaseIdx(prev => prev + 1);
      setFeedback(null);
    } else {
      setPhase('results');
    }
  };

  const reset = () => {
    setPhase('briefing');
    setCaseIdx(0);
    setScore(0);
    setFeedback(null);
  };

  return (
    <div className={`h-full flex flex-col font-mono bg-slate-950 border-4 border-indigo-800 rounded-xl relative overflow-hidden shadow-2xl ${isPresentation ? 'text-sm' : 'text-xs md:text-sm'}`}>
      {/* Header */}
      <div className={`flex justify-between items-center border-b-2 border-indigo-800 bg-slate-900 z-10 ${isPresentation ? 'p-8' : 'p-4'}`}>
        <div className="flex items-center gap-2">
          <Scan size={isPresentation ? 24 : 16} className="text-fuchsia-500" />
          <span className={`text-fuchsia-500 font-bold tracking-widest ${isPresentation ? 'text-xl' : ''}`}>GENETIC_PROFILER_V4.0</span>
        </div>
        <div className={`text-indigo-400 ${isPresentation ? 'text-sm' : ''}`}>ACCURACY: {Math.round((score / Math.max(1, caseIdx + (phase==='results'?1:0))) * 100)}%</div>
      </div>

      <div className={`flex-grow relative z-10 flex flex-col items-center justify-center ${isPresentation ? 'p-16' : 'p-8'}`}>
        
        {phase === 'briefing' && (
          <div className={`text-center max-w-2xl animate-fadeIn ${isPresentation ? '' : ''}`}>
            <FileCode size={isPresentation ? 120 : 80} className="text-indigo-500 mx-auto mb-6" />
            <h3 className={`text-white font-bold font-mono uppercase mb-4 ${isPresentation ? 'text-4xl' : 'text-3xl'}`}>Mission Briefing</h3>
            <p className={`text-indigo-300 mb-8 ${isPresentation ? 'text-xl' : 'text-lg'}`}>
              You must analyze subject profiles based on the <strong>Interactionist Approach</strong> (Frazzetto et al. 2007).
              <br/><br/>
              Review the <strong>Genotype</strong> and <strong>Environment</strong> history to predict the Aggression Risk Level.
            </p>
            <button onClick={() => setPhase('game')} className={`bg-fuchsia-700 text-white rounded-lg font-bold hover:bg-fuchsia-600 transition-all uppercase shadow-lg ${isPresentation ? 'px-12 py-4 text-xl' : 'px-8 py-3 text-xl'}`}>Start Analysis</button>
          </div>
        )}

        {phase === 'game' && (
          <div className={`w-full max-w-4xl ${isPresentation ? 'grid-cols-1 gap-16' : 'grid grid-cols-1 md:grid-cols-2 gap-12'} animate-fadeIn`}>
            
            {/* Subject Profile */}
            <div className={`bg-indigo-900/20 border-2 border-indigo-500/50 rounded-xl relative ${isPresentation ? 'p-12' : 'p-8'}`}>
              <div className={`absolute -top-3 left-4 bg-indigo-500 text-black px-2 py-1 font-bold uppercase ${isPresentation ? 'text-sm' : 'text-xs'}`}>Subject #{cases[caseIdx].id}</div>
              
              <div className={`space-y-6 mt-4 ${isPresentation ? 'space-y-8' : ''}`}>
                <div>
                  <span className={`text-indigo-400 uppercase block mb-1 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Genotype Analysis</span>
                  <div className={`flex items-center gap-3 font-bold text-white ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>
                    <Dna className="text-fuchsia-500" size={isPresentation ? 36 : 24} />
                    {cases[caseIdx].gene}
                  </div>
                </div>
                
                <div className="w-full h-px bg-indigo-800"></div>

                <div>
                  <span className={`text-indigo-400 uppercase block mb-1 ${isPresentation ? 'text-sm' : 'text-xs'}`}>Environmental History (0-15 yrs)</span>
                  <div className={`flex items-center gap-3 font-bold text-white ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>
                    <Shield className={cases[caseIdx].env.includes("Trauma") ? "text-red-500" : "text-green-500"} size={isPresentation ? 36 : 24} />
                    {cases[caseIdx].env}
                  </div>
                </div>
              </div>
            </div>

            {/* Prediction Console */}
            <div className={`flex flex-col justify-center gap-4 ${isPresentation ? 'gap-8' : ''}`}>
              {!feedback ? (
                <>
                  <h4 className={`text-white text-center mb-4 uppercase tracking-widest font-bold ${isPresentation ? 'text-2xl' : ''}`}>Predict Aggression Risk</h4>
                  <button onClick={() => handlePredict('LOW')} className={`bg-green-900/30 border-2 border-green-600 hover:bg-green-900/50 text-green-400 rounded-xl font-bold transition-all ${isPresentation ? 'p-8 text-2xl' : 'p-6 text-xl'}`}>
                    LOW RISK
                  </button>
                  <button onClick={() => handlePredict('HIGH')} className={`bg-red-900/30 border-2 border-red-600 hover:bg-red-900/50 text-red-400 rounded-xl font-bold transition-all ${isPresentation ? 'p-8 text-2xl' : 'p-6 text-xl'}`}>
                    HIGH RISK
                  </button>
                </>
              ) : (
                <div className={`rounded-xl border-2 animate-fadeIn text-center ${isPresentation ? 'p-12' : 'p-6'} ${feedback.type === 'success' ? 'bg-green-900/30 border-green-500' : 'bg-red-900/30 border-red-500'}`}>
                  <h4 className={`font-bold mb-4 uppercase ${isPresentation ? 'text-3xl' : 'text-2xl'} ${feedback.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {feedback.type === 'success' ? 'ANALYSIS CORRECT' : 'PREDICTION FAILED'}
                  </h4>
                  <p className={`mb-6 leading-relaxed text-white ${isPresentation ? 'text-xl' : 'text-sm'}`}>{feedback.msg}</p>
                  <button onClick={nextCase} className={`bg-white text-indigo-950 rounded font-bold hover:bg-indigo-200 transition-all uppercase w-full ${isPresentation ? 'px-12 py-4 text-xl' : 'px-8 py-3'}`}>Next Subject</button>
                </div>
              )}
            </div>
          </div>
        )}

        {phase === 'results' && (
          <div className="text-center max-w-xl animate-fadeIn">
            <Siren size={isPresentation ? 120 : 80} className={`mx-auto mb-6 ${score === 3 ? 'text-green-500' : 'text-yellow-500'}`} />
            <h3 className={`text-white font-bold font-mono uppercase mb-6 ${isPresentation ? 'text-4xl' : 'text-3xl'}`}>BATCH PROCESSED</h3>
            
            <div className={`bg-indigo-900/30 rounded-xl border border-indigo-700 mb-8 ${isPresentation ? 'p-12' : 'p-6'}`}>
              <span className={`text-indigo-300 block mb-2 uppercase ${isPresentation ? 'text-sm' : 'text-xs'}`}>Final Accuracy</span>
              <span className={`font-bold ${isPresentation ? 'text-7xl' : 'text-6xl'} ${score === 3 ? 'text-green-400' : 'text-yellow-400'}`}>{Math.round((score/3)*100)}%</span>
            </div>

            <p className={`mb-8 ${isPresentation ? 'text-xl' : 'text-sm'} text-indigo-200`}>
              Conclusion: The MAOA gene (Nature) interacts with early experience (Nurture). This is the <strong>Diathesis-Stress Model</strong>.
            </p>
            <button onClick={reset} className={`text-indigo-400 underline hover:text-white uppercase ${isPresentation ? 'text-xl' : ''}`}>Reset Simulation</button>
          </div>
        )}
      </div>
    </div>
  );
}
