import React, { useState } from 'react'
import { Target, CheckCircle } from 'lucide-react'

export default function Lesson5DoNowQuiz({ questions, isPresentation }) {
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (qId, optionIdx) => {
    if (showResults) return
    setAnswers(prev => ({ ...prev, [qId]: optionIdx }))
  }

  const score = Object.keys(answers).reduce(
    (acc, qId) => acc + (answers[Number(qId)] === questions[Number(qId) - 1].correct ? 1 : 0),
    0
  )

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 h-full content-start transition-all ${isPresentation ? 'gap-16' : 'gap-8'}`}>
      <div className="space-y-6">
        <div className="bg-slate-900/80 border-2 border-orange-600/50 p-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20"><Target size={64} className="text-orange-500" /></div>
          <h3 className={`font-mech text-orange-500 mb-4 ${isPresentation ? 'text-4xl' : 'text-xl'}`}>SYSTEM CHECK</h3>
          <p className={`text-slate-400 font-data ${isPresentation ? 'text-2xl' : 'text-sm'}`}>Verifying Biological Pre-requisites.</p>
        </div>
        <div className={`flex flex-col ${isPresentation ? 'gap-6' : 'gap-3'}`}>
          {!showResults ? (
            <>
              <button
                onClick={() => setShowResults(true)}
                disabled={Object.keys(answers).length < questions.length}
                className={`bg-orange-700 hover:bg-orange-600 disabled:opacity-50 disabled:grayscale text-white font-mech tracking-widest uppercase w-full transition-all shadow-lg border border-orange-500 ${isPresentation ? 'px-12 py-8 text-3xl' : 'px-8 py-4'}`}
              >
                Initialize Test
              </button>
              <button
                onClick={() => setShowResults(true)}
                className={`bg-transparent hover:bg-slate-800 text-slate-400 border border-slate-700 font-mech uppercase w-full transition-all ${isPresentation ? 'px-12 py-6 text-2xl' : 'px-8 py-3 text-sm'}`}
              >
                Bypass
              </button>
            </>
          ) : (
            <div className={`bg-green-900/20 border border-green-600 w-full text-center animate-fadeIn ${isPresentation ? 'p-10' : 'p-6'}`}>
              <span className={`font-mech font-bold text-green-400 block mb-2 ${isPresentation ? 'text-6xl mb-6' : 'text-3xl'}`}>
                YIELD: {score}/{questions.length}
              </span>
              <span className={`text-green-600 uppercase tracking-widest font-data ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                Diagnostics Complete
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar max-h-full">
        {questions.map((q) => (
          <div key={q.id} className={`bg-slate-900 border border-slate-800 hover:border-orange-700 transition-colors ${isPresentation ? 'p-6 mb-4' : 'p-4'}`}>
            <h4 className={`font-bold text-slate-200 mb-3 ${isPresentation ? 'text-3xl' : 'text-sm'}`}>
              <span className="text-orange-600 mr-2 font-data">0{q.id} //</span>
              {q.question}
            </h4>
            {isPresentation ? (
              <div className="min-h-[40px]">
                {showResults && (
                  <div className="text-green-400 font-bold text-3xl animate-fadeIn mt-2 flex items-center gap-3">
                    <CheckCircle size={32} /> {q.options[q.correct]}
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(q.id, idx)}
                    className={`text-left transition-all px-4 py-2 text-xs border font-data uppercase ${
                      showResults
                        ? idx === q.correct
                          ? 'bg-green-900/30 border-green-600 text-green-300'
                          : answers[q.id] === idx
                            ? 'bg-red-900/30 border-red-600 text-red-300'
                            : 'bg-slate-800/50 border-transparent text-slate-500 opacity-50'
                        : answers[q.id] === idx
                          ? 'bg-orange-900 border-orange-600 text-white'
                          : 'bg-slate-800 border-transparent hover:bg-slate-700 text-slate-400 hover:text-white'
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
