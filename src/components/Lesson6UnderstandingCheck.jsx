import React, { useState, useMemo } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'

export default function Lesson6UnderstandingCheck({ isPresentation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})

  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const questions = useMemo(() => {
    const base = [
      {
        id: 1,
        type: 'scenario',
        question: 'Which mediational process is most directly linked to self-efficacy?',
        options: [
          { text: 'Attention', correct: false },
          { text: 'Reproduction', correct: true },
          { text: 'Retention', correct: false },
          { text: 'Motivation', correct: false }
        ],
        feedback: 'Reproduction involves judging one\'s capability to perform the act; self-efficacy determines likelihood of imitation.'
      },
      {
        id: 2,
        type: 'scenario',
        question: 'A child watches a model get punished for aggression. What happens to imitation?',
        options: [
          { text: 'Increases strongly', correct: false },
          { text: 'Decreases due to vicarious punishment', correct: true },
          { text: 'No change', correct: false },
          { text: 'Only verbal imitation increases', correct: false }
        ],
        feedback: 'Vicarious punishment reduces motivation to imitate the observed behavior.'
      },
      {
        id: 3,
        type: 'matching',
        question: 'Match SLT concept to description:',
        items: [
          { label: 'Attention', options: ['Noticing the model', 'Remembering behavior', 'Will to act'], correct: 0 },
          { label: 'Motivation', options: ['Noticing the model', 'Memory trace', 'Drive from consequences'], correct: 2 }
        ],
        feedback: 'Attention = noticing the model; Motivation = consequence-driven will to act (vicarious reinforcement/punishment).'
      },
      {
        id: 4,
        type: 'scenario',
        question: 'Imitation is most likely when...',
        options: [
          { text: 'Model is low-status and punished', correct: false },
          { text: 'Model is similar/high-status and rewarded', correct: true },
          { text: 'Observer has low self-efficacy', correct: false },
          { text: 'No consequences are observed', correct: false }
        ],
        feedback: 'Identification (similarity/status) + vicarious reinforcement maximizes imitation.'
      },
      {
        id: 5,
        type: 'scenario',
        question: 'Bandura (1961) primarily supports which mechanism?',
        options: [
          { text: 'Classical conditioning', correct: false },
          { text: 'Observation and imitation', correct: true },
          { text: 'Genetic predisposition', correct: false },
          { text: 'De-individuation', correct: false }
        ],
        feedback: 'Children reproduced aggressive acts after observing aggressive models; key SLT prediction.'
      }
    ]

    return base.map(q => {
      if (q.type === 'scenario') return { ...q, options: shuffleArray(q.options) }
      if (q.type === 'matching') return { ...q, items: q.items.map(it => ({ ...it, options: shuffleArray(it.options) })) }
      return q
    })
  }, [])

  const handleAnswer = (id, answer) => setAnswers(prev => ({ ...prev, [id]: answer }))
  const currentQ = questions[currentQuestion]
  const userAnswer = answers[currentQ.id]
  const isAnswered = userAnswer !== undefined

  const isCorrect = isAnswered ? (currentQ.type === 'matching' ? currentQ.items.every((it, idx) => userAnswer?.[idx] === it.correct) : userAnswer?.correct === true) : null

  return (
    <div className={`flex flex-col h-full gap-6 ${isPresentation ? 'px-12' : ''}`}>
      <div className="flex items-center justify-between">
        <h3 className={`font-bold text-teal-400 uppercase tracking-widest ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Check Your Understanding</h3>
        <span className={`font-mono text-slate-400 ${isPresentation ? 'text-xl' : 'text-sm'}`}>Question {currentQuestion + 1} of {questions.length}</span>
      </div>
      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-teal-500 transition-all duration-300" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} /></div>
      <div className={`flex-grow bg-slate-900/50 border border-slate-800 rounded-xl p-8 flex flex-col justify-center ${isPresentation ? 'text-xl' : 'text-base'}`}>
        <h4 className={`font-bold text-white mb-8 ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>{currentQ.question}</h4>
        {currentQ.type === 'matching' && (
          <div className="space-y-6">
            {currentQ.items.map((item, itemIdx) => (
              <div key={itemIdx} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <p className={`font-bold text-teal-300 mb-3 ${isPresentation ? 'text-2xl' : 'text-base'}`}>{item.label}</p>
                <div className="space-y-2">
                  {item.options.map((option, optIdx) => (
                    <button key={optIdx} onClick={() => { const next = [...(userAnswer || [])]; next[itemIdx] = optIdx; handleAnswer(currentQ.id, next) }} className={`w-full text-left p-3 rounded-lg transition-all text-sm border ${userAnswer?.[itemIdx] === optIdx ? 'bg-teal-700 border-teal-600 text-white' : 'bg-slate-700 border-transparent hover:bg-slate-600 text-slate-300 hover:text-white'}`}>{option}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {currentQ.type === 'scenario' && (
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => (
              <button key={idx} onClick={() => handleAnswer(currentQ.id, option)} className={`w-full text-left p-4 rounded-lg transition-all border font-medium ${userAnswer === option ? (option.correct ? 'bg-green-900/30 border-green-500 text-green-300' : 'bg-red-900/30 border-red-500 text-red-300') : 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white'}`}>{option.text}</button>
            ))}
          </div>
        )}
      </div>
      {isAnswered && (
        <div className={`bg-slate-900/80 border rounded-xl p-6 ${isCorrect ? 'border-green-500 bg-green-900/10' : 'border-red-500 bg-red-900/10'}`}>
          <div className="flex items-start gap-3 mb-3">
            {isCorrect ? (<CheckCircle className="text-green-500" size={24} />) : (<AlertCircle className="text-red-500" size={24} />)}
            <div>
              <p className={`font-bold text-lg mb-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>{isCorrect ? 'Excellent!' : 'Not quite...'}</p>
              <p className={`${isPresentation ? 'text-xl' : 'text-base'} text-slate-200 leading-relaxed`}>{currentQ.feedback}</p>
            </div>
          </div>
        </div>
      )}
      <div className="flex gap-4 justify-between">
        <button onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))} disabled={currentQuestion === 0} className={`px-6 py-3 font-bold rounded-lg transition-all border ${currentQuestion === 0 ? 'border-transparent text-slate-600 cursor-not-allowed' : 'border-teal-700 text-teal-500 hover:bg-teal-900/30 hover:text-white'}`}>\u2190 BACK</button>
        {currentQuestion === questions.length - 1 ? (
          <button disabled={!isAnswered} className={`px-8 py-3 font-bold rounded-lg transition-all ${isAnswered ? 'bg-green-600 hover:bg-green-500 text-white shadow-lg' : 'bg-slate-700 text-slate-500 cursor-not-allowed'}`}>COMPLETE \u2713</button>
        ) : (
          <button onClick={() => setCurrentQuestion(currentQuestion + 1)} disabled={!isAnswered} className={`px-8 py-3 font-bold rounded-lg transition-all ${isAnswered ? 'bg-teal-600 hover:bg-teal-500 text-black shadow-lg' : 'bg-slate-700 text-slate-500 cursor-not-allowed'}`}>NEXT \u2192</button>
        )}
      </div>
      {!isAnswered && (<p className="text-center text-slate-400 text-sm italic">Select your answer to continue</p>)}
    </div>
  )
}
