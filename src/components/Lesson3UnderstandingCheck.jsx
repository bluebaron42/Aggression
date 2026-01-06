import React, { useState, useMemo } from 'react'
import { CheckCircle, AlertCircle, Brain } from 'lucide-react'

export default function Lesson3UnderstandingCheck({ isPresentation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState(false)

  // Shuffle function to randomize answer order
  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Randomize answer order on component mount
  const questions = useMemo(() => {
    const baseQuestions = [
      {
        id: 1,
        type: 'scenario',
        question: 'What is a Fixed Action Pattern (FAP)?',
        options: [
          { text: 'A learned sequence of behaviors triggered by practice', correct: false },
          { text: 'An innate, species-specific sequence triggered by a sign stimulus', correct: true },
          { text: 'A flexible behavior that can be stopped mid-sequence', correct: false },
          { text: 'A random aggressive response with no specific trigger', correct: false }
        ],
        feedback: 'Correct! A Fixed Action Pattern is an INNATE (not learned), species-specific behavioral sequence that is triggered by a sign stimulus and runs to completion (ballistic). Once started, it cannot be stopped. This is central to Lorenz\'s ethological theory of aggression.'
      },
    {
      id: 2,
      type: 'matching',
      question: 'Match the ethological concept to its definition:',
      items: [
        { label: 'Sign Stimulus', options: ['The innate behavioral sequence', 'The environmental trigger that releases the FAP', 'The brain mechanism that stores instinct'], correct: 1 },
        { label: 'Innate Releasing Mechanism (IRM)', options: ['The neural template that detects the sign stimulus', 'The behavior itself', 'The evolutionary benefit'], correct: 0 }
      ],
      feedback: 'Sign stimuli are environmental triggers (like the red spot on a stickleback). The IRM is the neural/brain template that recognizes the sign stimulus and releases the FAP. Together they form the instinct pathway: Sign Stimulus → IRM → FAP.'
    },
    {
      id: 3,
      type: 'scenario',
      question: 'What did Tinbergen (1951) discover about stickleback aggression?',
      options: [
        { text: 'Sticklebacks only attack realistic-looking fish models', correct: false },
        { text: 'Shape doesn\'t matter - any model with a red spot triggers attack (FAP)', correct: true },
        { text: 'Sticklebacks need to learn to be aggressive', correct: false },
        { text: 'Sticklebacks only attack during feeding time', correct: false }
      ],
      feedback: 'Exactly! Tinbergen showed that male sticklebacks would attack crude wooden models as long as they had a red underside (sign stimulus), but ignored realistic models without red. The shape was irrelevant - only the red spot mattered. This demonstrated the FAP concept beautifully.'
    },
    {
      id: 4,
      type: 'scenario',
      question: 'According to Lorenz, why does ritualistic aggression (threat displays) exist in nature?',
      options: [
        { text: 'To entertain observers', correct: false },
        { text: 'To prevent actual physical harm while still resolving conflicts', correct: true },
        { text: 'To waste the opponent\'s energy', correct: false },
        { text: 'Rituals have no evolutionary function', correct: false }
      ],
      feedback: 'Correct! Lorenz argued that ritualistic aggression (displays, posturing) evolved because it\'s ADAPTIVE - it allows conflicts to be resolved without serious injury or death. Appeasement signals also prevent escalation. However, Goodall\'s chimps challenged this - they ignored appeasement and killed rivals anyway.'
    },
    {
      id: 5,
      type: 'scenario',
      question: 'What is the main weakness of applying ethological explanations to HUMAN aggression?',
      options: [
        { text: 'Humans have no instincts at all', correct: false },
        { text: 'Cultural differences show environment/learning override instinct', correct: true },
        { text: 'Ethology has no supporting evidence', correct: false },
        { text: 'FAPs don\'t exist in animals', correct: false }
      ],
      feedback: 'Excellent critical thinking! Nisbett (1993) found huge cultural differences in aggression (e.g., Northern vs. Southern US "culture of honour"). If aggression were purely instinctual/ethological, we wouldn\'t see such variation. Culture and learning appear to override biological instincts in humans, making ethological explanations reductionist.'
    }
  ]

    // Shuffle options for scenario questions and matching items
    return baseQuestions.map(q => {
      if (q.type === 'scenario') {
        return { ...q, options: shuffleArray(q.options) }
      } else if (q.type === 'matching') {
        return {
          ...q,
          items: q.items.map(item => ({
            ...item,
            options: shuffleArray(item.options)
          }))
        }
      }
      return q
    })
  }, [])

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
        <h3 className={`font-bold text-amber-400 uppercase tracking-widest ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
          Check Your Understanding
        </h3>
        <span className={`font-mono text-slate-400 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
          Question {currentQuestion + 1} of {questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-500 transition-all duration-300"
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
                <p className={`font-bold text-amber-300 mb-3 ${isPresentation ? 'text-2xl' : 'text-base'}`}>
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
                          ? 'bg-amber-700 border-amber-600 text-white'
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
                      : 'bg-amber-700 border-amber-600 text-white'
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
              : 'border-amber-700 text-amber-500 hover:bg-amber-900/30 hover:text-white'
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
                ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg'
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
