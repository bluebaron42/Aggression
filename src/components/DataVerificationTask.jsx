import React, { useState } from 'react';
import { FileText, CheckCircle } from 'lucide-react';

export default function DataVerificationTask({ isPresentation }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const logs = [
    { id: 1, text: "LOG_01: MZ (Identical) twins share 50% of their genetic material.", status: "CORRUPT", reason: "FALSE. MZ twins share 100% of their genes. DZ twins share 50%." },
    { id: 2, text: "LOG_02: The MAOA enzyme is responsible for breaking down serotonin in the synapse.", status: "VALID", reason: "TRUE. It 'mops up' neurotransmitters after a nerve impulse." },
    { id: 3, text: "LOG_03: Coccaro (1997) found higher concordance rates for aggression in DZ twins.", status: "CORRUPT", reason: "FALSE. MZ concordance was 50%, while DZ was only 19%." },
    { id: 4, text: "LOG_04: The MAOA-L (Low Activity) gene leads to a flood of serotonin.", status: "VALID", reason: "TRUE. Low enzyme activity means serotonin isn't recycled, leading to dysregulation." }
  ];

  const handleAnswer = (selection) => {
    const correct = selection === logs[currentQ].status;
    setFeedback({
      correct,
      text: logs[currentQ].reason
    });
    if (correct) setScore(s => s + 1);
  };

  const nextQ = () => {
    setFeedback(null);
    if (currentQ < logs.length - 1) {
      setCurrentQ(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  return (
    <div className={`h-full flex flex-col items-center justify-center ${isPresentation ? 'p-16' : 'p-8'}`}>
      <div className={`w-full max-w-4xl bg-indigo-950 border-2 ${isComplete ? 'border-green-500' : 'border-indigo-500'} rounded-xl overflow-hidden shadow-2xl relative`}>
        <div className={`bg-black/40 ${isPresentation ? 'p-8' : 'p-4'} border-b border-indigo-500/30 flex justify-between items-center`}>
          <div className="flex items-center gap-2">
            <FileText size={isPresentation ? 32 : 20} className="text-fuchsia-400" />
            <span className={`font-mono text-fuchsia-400 font-bold tracking-widest ${isPresentation ? 'text-lg' : 'text-xs'}`}>DATA_VERIFICATION_PROTOCOL</span>
          </div>
          <div className={`font-mono text-indigo-300 ${isPresentation ? 'text-lg' : 'text-xs'}`}>BATCH {currentQ + 1}/{logs.length}</div>
        </div>

        <div className={`${isPresentation ? 'p-16 min-h-[500px]' : 'p-12 min-h-[300px]'} text-center relative flex flex-col justify-center`}>
          <div className="absolute inset-0 bg-grid-dna opacity-10 pointer-events-none"></div>
          
          {!isComplete ? (
            <>
              <div className={`mb-8 font-mono text-white relative z-10 ${isPresentation ? 'text-3xl' : 'text-lg md:text-2xl'}`}>
                "{logs[currentQ].text}"
              </div>

              {!feedback ? (
                <div className={`flex gap-8 justify-center relative z-10 ${isPresentation ? 'gap-12' : ''}`}>
                  <button onClick={() => handleAnswer('VALID')} className={`bg-green-900/30 border-2 border-green-600 text-green-400 font-bold rounded-lg hover:bg-green-900/50 hover:scale-105 transition-all ${isPresentation ? 'px-16 py-8 text-2xl w-64' : 'px-8 py-4 w-48'}`}>
                    VALID
                  </button>
                  <button onClick={() => handleAnswer('CORRUPT')} className={`bg-red-900/30 border-2 border-red-600 text-red-400 font-bold rounded-lg hover:bg-red-900/50 hover:scale-105 transition-all ${isPresentation ? 'px-16 py-8 text-2xl w-64' : 'px-8 py-4 w-48'}`}>
                    CORRUPT
                  </button>
                </div>
              ) : (
                <div className="animate-fadeIn relative z-10">
                  <div className={`font-bold mb-4 ${feedback.correct ? 'text-green-400' : 'text-red-400'} ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>
                    {feedback.correct ? "VERIFICATION SUCCESSFUL" : "VERIFICATION FAILED"}
                  </div>
                  <p className={`text-indigo-200 mb-8 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>{feedback.text}</p>
                  <button onClick={nextQ} className={`bg-indigo-600 text-white font-bold rounded hover:bg-indigo-500 transition-all ${isPresentation ? 'px-12 py-4 text-xl' : 'px-8 py-3'}`}>
                    NEXT LOG
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="animate-fadeIn">
              <CheckCircle size={isPresentation ? 120 : 80} className="text-green-500 mx-auto mb-6" />
              <h3 className={`text-white font-bold mb-2 ${isPresentation ? 'text-4xl' : 'text-3xl'}`}>QUALITY CONTROL COMPLETE</h3>
              <p className={`text-indigo-300 ${isPresentation ? 'text-2xl' : 'text-xl'}`}>Accuracy: {score}/{logs.length}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
