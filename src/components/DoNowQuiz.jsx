import React, { useState } from 'react'
import { Activity, CheckCircle } from 'lucide-react'

export default function DoNowQuiz({ questions, isPresentation }) {
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (qId, optionIdx) => {
    setAnswers(prev => ({ ...prev, [qId]: optionIdx }))
  }

  const score = Object.keys(answers).reduce(
    (acc, qId) => acc + (answers[Number(qId)] === questions[Number(qId) - 1].correct ? 1 : 0),
    0
  )

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 h-full content-start transition-all ${isPresentation ? 'gap-16' : 'gap-8'}`}>
      <div className="space-y-6">
        <div className={`bg-gradient-to-br from-red-900/20 to-slate-900 rounded-2xl border border-red-500/20 p-8 shadow-lg relative overflow-hidden`}>
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Activity size={64} />
          </div>
          <h3 className={`font-bold text-white mb-4 uppercase ${isPresentation ? 'text-4xl' : 'text-xl'}`}>
            Diagnostics: Retrieval
          </h3>
          <p className={`text-slate-300 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
            Verify core biological knowledge.
          </p>
        </div>
        <div className={`flex flex-col ${isPresentation ? 'gap-6' : 'gap-3'}`}>
          {!showResults ? (
            <>
              <button
                onClick={() => setShowResults(true)}
                disabled={Object.keys(answers).length < 5}
                className={`bg-red-700 hover:bg-red-600 disabled:opacity-50 disabled:grayscale text-white font-bold rounded-xl w-full transition-all shadow-lg ${isPresentation ? 'px-12 py-8 text-3xl' : 'px-8 py-4'}`}
              >
                Analyze Results
              </button>
              <button
                onClick={() => setShowResults(true)}
                className={`bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-300 hover:text-white font-bold rounded-xl w-full transition-all ${isPresentation ? 'px-12 py-6 text-2xl' : 'px-8 py-3 text-sm'}`}
              >
                Reveal All Answers
              </button>
            </>
          ) : (
            <div className={`bg-green-900/20 border border-green-500 rounded-xl w-full text-center animate-fadeIn ${isPresentation ? 'p-10' : 'p-6'}`}>
              <span className={`font-bold text-white block mb-2 ${isPresentation ? 'text-6xl mb-6' : 'text-3xl'}`}>
                SCORE: {score}/5
              </span>
              <span className={`text-green-400 uppercase tracking-widest ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                Baseline Established
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar max-h-full">
        {questions.map((q) => (
          <div key={q.id} className={`bg-slate-900 border border-slate-800 rounded-xl hover:border-red-700 transition-colors ${isPresentation ? 'p-6 mb-4' : 'p-4'}`}>
            <h4 className={`font-bold text-red-100 mb-3 ${isPresentation ? 'text-3xl' : 'text-sm'}`}>
              <span className="text-red-600 mr-2 font-mono">Q{q.id}</span>
              {q.question}
            </h4>
            {isPresentation ? (
              <div className="min-h-[40px]">
                {showResults && (
                  <div className="text-white font-bold text-3xl animate-fadeIn mt-2 flex items-center gap-3">
                    <CheckCircle size={32} className="text-green-500" /> {q.options[q.correct]}
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => !showResults && handleSelect(q.id, idx)}
                    className={`text-left rounded-lg transition-all px-4 py-2 text-xs border font-mono ${
                      showResults
                        ? idx === q.correct
                          ? "bg-green-900/30 border-green-500 text-green-300"
                          : answers[q.id] === idx
                            ? "bg-red-900/30 border-red-500 text-red-300"
                            : "bg-slate-800/50 border-transparent text-slate-500 opacity-50"
                        : answers[q.id] === idx
                          ? "bg-red-700 border-red-600 text-white"
                          : "bg-slate-800 border-transparent hover:bg-slate-700 text-slate-400 hover:text-white"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
