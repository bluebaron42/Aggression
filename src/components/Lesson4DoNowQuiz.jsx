import React, { useState } from 'react'
import { Skull, CheckCircle } from 'lucide-react'

export default function Lesson4DoNowQuiz({ questions, isPresentation }) {
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
        <div className="bg-stone-900/80 border border-amber-700/50 p-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10"><Skull size={64} className="text-amber-600" /></div>
          <h3 className={`font-serif text-amber-500 mb-4 ${isPresentation ? 'text-4xl' : 'text-xl'}`}>SURVIVAL CHECK</h3>
          <p className={`text-stone-400 font-mono ${isPresentation ? 'text-2xl' : 'text-sm'}`}>:: RETRIEVING PRIOR DATA ::</p>
        </div>
        <div className={`flex flex-col ${isPresentation ? 'gap-6' : 'gap-3'}`}>
          {!showResults ? (
            <>
              <button
                onClick={() => setShowResults(true)}
                disabled={Object.keys(answers).length < questions.length}
                className={`bg-amber-800 hover:bg-amber-700 disabled:opacity-50 disabled:grayscale text-white font-mono tracking-widest uppercase w-full transition-all shadow-lg border border-amber-600 ${isPresentation ? 'px-12 py-8 text-3xl' : 'px-8 py-4'}`}
              >
                Submit Analysis
              </button>
              <button
                onClick={() => setShowResults(true)}
                className={`bg-transparent hover:bg-stone-800 text-stone-400 border border-stone-700 font-mono uppercase w-full transition-all ${isPresentation ? 'px-12 py-6 text-2xl' : 'px-8 py-3 text-sm'}`}
              >
                Bypass Security
              </button>
            </>
          ) : (
            <div className={`bg-emerald-900/20 border border-emerald-600 w-full text-center animate-fadeIn ${isPresentation ? 'p-10' : 'p-6'}`}>
              <span className={`font-serif font-bold text-emerald-400 block mb-2 ${isPresentation ? 'text-6xl mb-6' : 'text-3xl'}`}>
                SCORE: {score}/{questions.length}
              </span>
              <span className={`text-emerald-600 uppercase tracking-widest font-mono ${isPresentation ? 'text-xl' : 'text-xs'}`}>
                Fitness Level Assessed
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar max-h-full">
        {questions.map((q) => (
          <div key={q.id} className={`bg-stone-950 border border-stone-800 hover:border-amber-700 transition-colors ${isPresentation ? 'p-6 mb-4' : 'p-4'}`}>
            <h4 className={`font-bold text-stone-300 mb-3 ${isPresentation ? 'text-3xl' : 'text-sm'}`}>
              <span className="text-amber-600 mr-2 font-mono">0{q.id} //</span>
              {q.question}
            </h4>
            {isPresentation ? (
              <div className="min-h-[40px]">
                {showResults && (
                  <div className="text-emerald-400 font-bold text-3xl animate-fadeIn mt-2 flex items-center gap-3">
                    <CheckCircle size={32}/> {q.options[q.correct]}
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(q.id, idx)}
                    className={`text-left transition-all px-4 py-2 text-xs border font-mono uppercase ${
                      showResults
                        ? idx === q.correct
                          ? 'bg-emerald-900/30 border-emerald-600 text-emerald-300'
                          : answers[q.id] === idx
                            ? 'bg-red-900/30 border-red-600 text-red-300'
                            : 'bg-stone-900 border-transparent text-stone-500 opacity-50'
                        : answers[q.id] === idx
                          ? 'bg-amber-900 border-amber-600 text-white'
                          : 'bg-stone-900 border-transparent hover:bg-stone-800 text-stone-400 hover:text-white'
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
