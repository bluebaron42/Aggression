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
    <div className="h-full flex flex-col font-mono text-xs md:text-sm bg-slate-950 border-4 border-indigo-800 rounded-xl relative overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b-2 border-indigo-800 bg-slate-900 z-10">
        <div className="flex items-center gap-2">
          <Scan size={16} className="text-fuchsia-500" />
          <span className="text-fuchsia-500 font-bold tracking-widest">GENETIC_PROFILER_V4.0</span>
        </div>
        <div className="text-indigo-400">ACCURACY: {Math.round((score / Math.max(1, caseIdx + (phase==='results'?1:0))) * 100)}%</div>
      </div>

      <div className="flex-grow p-8 relative z-10 flex flex-col items-center justify-center">
        
        {phase === 'briefing' && (
          <div className="text-center max-w-2xl animate-fadeIn">
            <FileCode size={80} className="text-indigo-500 mx-auto mb-6" />
            <h3 className="text-3xl text-white font-bold mb-4 font-mono uppercase">Mission Briefing</h3>
            <p className="text-indigo-300 mb-8 text-lg">
              You must analyze subject profiles based on the <strong>Interactionist Approach</strong> (Frazzetto et al. 2007).
              <br/><br/>
              Review the <strong>Genotype</strong> and <strong>Environment</strong> history to predict the Aggression Risk Level.
            </p>
            <button onClick={() => setPhase('game')} className="bg-fuchsia-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-fuchsia-600 transition-all text-xl uppercase shadow-lg">Start Analysis</button>
          </div>
        )}

        {phase === 'game' && (
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 animate-fadeIn">
            
            {/* Subject Profile */}
            <div className="bg-indigo-900/20 border-2 border-indigo-500/50 p-8 rounded-xl relative">
              <div className="absolute -top-3 left-4 bg-indigo-500 text-black px-2 py-1 text-xs font-bold uppercase">Subject #{cases[caseIdx].id}</div>
              
              <div className="space-y-6 mt-4">
                <div>
                  <span className="text-indigo-400 text-xs uppercase block mb-1">Genotype Analysis</span>
                  <div className="flex items-center gap-3 text-2xl font-bold text-white">
                    <Dna className="text-fuchsia-500" />
                    {cases[caseIdx].gene}
                  </div>
                </div>
                
                <div className="w-full h-px bg-indigo-800"></div>

                <div>
                  <span className="text-indigo-400 text-xs uppercase block mb-1">Environmental History (0-15 yrs)</span>
                  <div className="flex items-center gap-3 text-2xl font-bold text-white">
                    <Shield className={cases[caseIdx].env.includes("Trauma") ? "text-red-500" : "text-green-500"} />
                    {cases[caseIdx].env}
                  </div>
                </div>
              </div>
            </div>

            {/* Prediction Console */}
            <div className="flex flex-col justify-center gap-4">
              {!feedback ? (
                <>
                  <h4 className="text-white text-center mb-4 uppercase tracking-widest font-bold">Predict Aggression Risk</h4>
                  <button onClick={() => handlePredict('LOW')} className="p-6 bg-green-900/30 border-2 border-green-600 hover:bg-green-900/50 text-green-400 rounded-xl font-bold text-xl transition-all">
                    LOW RISK
                  </button>
                  <button onClick={() => handlePredict('HIGH')} className="p-6 bg-red-900/30 border-2 border-red-600 hover:bg-red-900/50 text-red-400 rounded-xl font-bold text-xl transition-all">
                    HIGH RISK
                  </button>
                </>
              ) : (
                <div className={`p-6 rounded-xl border-2 animate-fadeIn text-center ${feedback.type === 'success' ? 'bg-green-900/30 border-green-500' : 'bg-red-900/30 border-red-500'}`}>
                  <h4 className={`text-2xl font-bold mb-4 uppercase ${feedback.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {feedback.type === 'success' ? 'ANALYSIS CORRECT' : 'PREDICTION FAILED'}
                  </h4>
                  <p className="text-white mb-6 text-sm leading-relaxed">{feedback.msg}</p>
                  <button onClick={nextCase} className="bg-white text-indigo-950 px-8 py-3 rounded font-bold hover:bg-indigo-200 transition-all uppercase w-full">Next Subject</button>
                </div>
              )}
            </div>
          </div>
        )}

        {phase === 'results' && (
          <div className="text-center max-w-xl animate-fadeIn">
            <Siren size={80} className={`mx-auto mb-6 ${score === 3 ? 'text-green-500' : 'text-yellow-500'}`} />
            <h3 className="text-3xl text-white font-bold mb-6 font-mono uppercase">BATCH PROCESSED</h3>
            
            <div className="bg-indigo-900/30 p-6 rounded-xl border border-indigo-700 mb-8">
              <span className="text-indigo-300 block mb-2 uppercase text-xs">Final Accuracy</span>
              <span className={`text-6xl font-bold ${score === 3 ? 'text-green-400' : 'text-yellow-400'}`}>{Math.round((score/3)*100)}%</span>
            </div>

            <p className="text-indigo-200 mb-8 text-sm">
              Conclusion: The MAOA gene (Nature) interacts with early experience (Nurture). This is the <strong>Diathesis-Stress Model</strong>.
            </p>
            <button onClick={reset} className="text-indigo-400 underline hover:text-white uppercase">Reset Simulation</button>
          </div>
        )}
      </div>
    </div>
  );
}
