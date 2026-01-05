import React, { useState } from 'react'
import { CheckCircle, AlertCircle, Brain } from 'lucide-react'

export default function AFLQuiz({ isPresentation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState(false)

  const questions = [
    {
      id: 1,
      type: 'matching',
      question: 'Match the brain region to its primary function:',
      items: [
        { label: 'Amygdala', options: ['Threat assessment & emotional response', 'Impulse control', 'Memory formation'], correct: 0 },
        { label: 'OFC (Orbitofrontal Cortex)', options: ['Threat assessment & emotional response', 'Impulse control & inhibition', 'Motor planning'], correct: 1 }
      ],
      feedback: 'The amygdala detects threats quickly, while the OFC helps us control our impulses. Together they create a balance between threat response and self-control.'
    },
    {
      id: 2,
      type: 'scenario',
      question: 'A person has low serotonin levels. What would you expect to happen?',
      options: [
        { text: 'Increased self-control and calm behavior', correct: false },
        { text: 'Reduced firing in the OFC, leading to impulsive aggression', correct: true },
        { text: 'Heightened amygdala activity in threat situations only', correct: false },
        { text: 'No change in behavior', correct: false }
      ],
      feedback: 'Correct! Low serotonin reduces the ability of the OFC to inhibit aggressive impulses, making impulsive aggression more likely. This is a key mechanism in the neural model of aggression.'
    },
    {
      id: 3,
      type: 'scenario',
      question: 'A person has high testosterone and high cortisol (stress). According to the dual-hormone hypothesis, what would happen?',
      options: [
        { text: 'Maximum aggression due to both hormones', correct: false },
        { text: 'High testosterone drives aggression (cortisol has no effect)', correct: false },
        { text: 'High cortisol blocks the testosterone effect, limiting aggression', correct: true },
        { text: 'Both hormones cancel each other out completely', correct: false }
      ],
      feedback: 'Excellent! The dual-hormone hypothesis explains that testosterone only predicts aggression when cortisol is LOW. High stress (cortisol) blocks testosterone\'s effect on the amygdala, preventing aggressive behavior.'
    },
    {
      id: 4,
      type: 'matching',
      question: 'Match the neurotransmitter/hormone to its effect on aggression:',
      items: [
        { label: 'Serotonin', options: ['Increases aggression when high', 'Decreases aggression (inhibitory)', 'Has no effect'], correct: 1 },
        { label: 'Testosterone', options: ['Decreases aggression', 'Increases aggression through amygdala activation', 'Regulates serotonin only'], correct: 1 }
      ],
      feedback: 'Serotonin is inhibitory - low levels increase impulsive aggression. Testosterone is excitatory - high levels increase amygdala reactivity. Understanding these opposing effects helps explain individual differences in aggression.'
    },
    {
      id: 5,
      type: 'scenario',
      question: 'Explain what would happen in someone with BOTH low serotonin AND high testosterone:',
      options: [
        { text: 'No effect on aggression', correct: false },
        { text: 'Slightly increased aggression', correct: false },
        { text: 'Critically high risk of aggressive behavior (explosive aggression)', correct: true },
        { text: 'Decreased aggression due to hormone conflict', correct: false }
      ],
      feedback: 'Perfect! This is the "critical state" scenario. Low serotonin removes the inhibitory brakes from the OFC, AND high testosterone amplifies the amygdala\'s threat response. This is a dangerous combination that significantly increases aggression risk.'
    }
  ]

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const currentQ = questions[currentQuestion]
  const userAnswer = answers[currentQ.id]
  const isAnswered = userAnswer !== undefined

  const getIsCorrect = () => {
    if (currentQ.type === 'matching') {
      return currentQ.items.every((item, idx) => userAnswer?.[idx] === item.correct)
    } else {
      return userAnswer?.correct === true
    }
  }

  const isCorrect = isAnswered ? getIsCorrect() : null

  return (
    <div className={`flex flex-col h-full gap-6 ${isPresentation ? 'px-12' : ''}`}>
      {/* Progress */}
      <div className="flex items-center justify-between">
        <h3 className={`font-bold text-red-400 uppercase tracking-widest ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
          Check Your Understanding
        </h3>
        <span className={`font-mono text-slate-400 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
          Question {currentQuestion + 1} of {questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-500 transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Container */}
      <div className={`flex-grow bg-slate-900/50 border border-slate-800 rounded-xl p-8 flex flex-col justify-center ${isPresentation ? 'text-xl' : 'text-base'}`}>
        <h4 className={`font-bold text-white mb-8 ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>
          {currentQ.question}
        </h4>

        {/* Matching questions */}
        {currentQ.type === 'matching' && (
          <div className="space-y-6">
            {currentQ.items.map((item, itemIdx) => (
              <div key={itemIdx} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <p className={`font-bold text-red-300 mb-3 ${isPresentation ? 'text-2xl' : 'text-base'}`}>
                  {item.label}
                </p>
                <div className="space-y-2">
                  {item.options.map((option, optIdx) => (
                    <button
                      key={optIdx}
                      onClick={() => {
                        const newAnswers = [...(userAnswer || [])]
                        newAnswers[itemIdx] = optIdx
                        handleAnswer(currentQ.id, newAnswers)
                        setShowFeedback(false)
                      }}
                      className={`w-full text-left p-3 rounded-lg transition-all text-sm border ${
                        userAnswer?.[itemIdx] === optIdx
                          ? 'bg-red-700 border-red-600 text-white'
                          : 'bg-slate-700 border-transparent hover:bg-slate-600 text-slate-300 hover:text-white'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Scenario/Multiple choice questions */}
        {(currentQ.type === 'scenario') && (
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => {
                  handleAnswer(currentQ.id, option)
                  setShowFeedback(false)
                }}
                className={`w-full text-left p-4 rounded-lg transition-all border font-medium ${
                  userAnswer === option
                    ? isAnswered ? (option.correct ? 'bg-green-900/30 border-green-500 text-green-300' : 'bg-red-900/30 border-red-500 text-red-300')
                      : 'bg-red-700 border-red-600 text-white'
                    : 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Feedback Section */}
      {isAnswered && (
        <div className={`bg-slate-900/80 border rounded-xl p-6 animate-fadeIn ${
          isCorrect ? 'border-green-500 bg-green-900/10' : 'border-red-500 bg-red-900/10'
        }`}>
          <div className="flex items-start gap-3 mb-3">
            {isCorrect ? (
              <CheckCircle className="text-green-500 shrink-0 mt-1" size={24} />
            ) : (
              <AlertCircle className="text-red-500 shrink-0 mt-1" size={24} />
            )}
            <div>
              <p className={`font-bold text-lg mb-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {isCorrect ? 'Excellent!' : 'Not quite...'}
              </p>
              <p className={`${isPresentation ? 'text-xl' : 'text-base'} text-slate-200 leading-relaxed`}>
                {currentQ.feedback}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-4 justify-between">
        <button
          onClick={() => {
            setCurrentQuestion(Math.max(0, currentQuestion - 1))
            setShowFeedback(false)
          }}
          disabled={currentQuestion === 0}
          className={`px-6 py-3 font-bold rounded-lg transition-all border ${
            currentQuestion === 0
              ? 'border-transparent text-slate-600 cursor-not-allowed'
              : 'border-red-700 text-red-500 hover:bg-red-900/30 hover:text-white'
          }`}
        >
          ← BACK
        </button>

        {currentQuestion === questions.length - 1 ? (
          <button
            disabled={!isAnswered}
            className={`px-8 py-3 font-bold rounded-lg transition-all ${
              isAnswered
                ? 'bg-green-600 hover:bg-green-500 text-white shadow-lg'
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            COMPLETE ✓
          </button>
        ) : (
          <button
            onClick={() => {
              setCurrentQuestion(currentQuestion + 1)
              setShowFeedback(false)
            }}
            disabled={!isAnswered}
            className={`px-8 py-3 font-bold rounded-lg transition-all ${
              isAnswered
                ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg'
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            NEXT →
          </button>
        )}
      </div>

      {/* Help text */}
      {!isAnswered && (
        <p className="text-center text-slate-400 text-sm italic">
          Select your answer to continue
        </p>
      )}
    </div>
  )
}
