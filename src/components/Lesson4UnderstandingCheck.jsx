import React, { useState, useMemo } from 'react'
import { CheckCircle, AlertCircle, Brain } from 'lucide-react'

export default function Lesson4UnderstandingCheck({ isPresentation }) {
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
      question: 'Why does paternity uncertainty create evolutionary pressure for male aggression?',
      options: [
        { text: 'Males want to control all resources in their territory', correct: false },
        { text: 'Males risk investing resources in offspring that are not genetically theirs', correct: true },
        { text: 'Males are naturally more aggressive than females', correct: false },
        { text: 'Males need to compete for food', correct: false }
      ],
      feedback: 'Correct! Paternity uncertainty means males face the risk of cuckoldry - investing time and resources in raising another male\'s offspring. This evolutionary pressure favored the development of mate retention strategies, including aggressive behaviors to prevent infidelity.'
    },
    {
      id: 2,
      type: 'matching',
      question: 'Match the mate retention strategy to its description:',
      items: [
        { label: 'Direct Guarding', options: ['Threatening rival males or the partner', 'Monitoring partner\'s location and activities', 'Gifts and emotional manipulation'], correct: 1 },
        { label: 'Negative Inducements', options: ['Threatening rival males or the partner', 'Monitoring partner\'s location', 'Isolating partner from friends'], correct: 0 }
      ],
      feedback: 'Direct guarding involves vigilance - checking up on your partner, monitoring where they go. Negative inducements use threats and coercion. Both strategies evolved to reduce the risk of infidelity, though they vary in intensity and can escalate to violence.'
    },
    {
      id: 3,
      type: 'scenario',
      question: 'According to Shackleford et al. (2005), what is the relationship between mate retention behaviors and intimate partner violence (IPV)?',
      options: [
        { text: 'No relationship - they are independent behaviors', correct: false },
        { text: 'Negative correlation - more retention means less violence', correct: false },
        { text: 'Positive correlation - higher mate retention predicts higher IPV', correct: true },
        { text: 'Only direct guarding correlates with IPV', correct: false }
      ],
      feedback: 'Exactly right! Shackleford\'s study of 107 married couples found a positive correlation between mate retention strategies and IPV. Men who used more mate retention behaviors were more likely to commit violence against their partners, supporting the evolutionary explanation.'
    },
    {
      id: 4,
      type: 'scenario',
      question: 'How does Volk et al. (2012) explain bullying from an evolutionary perspective?',
      options: [
        { text: 'Bullying is a pathological behavior with no adaptive value', correct: false },
        { text: 'Bullying can be adaptive - it secures resources and status', correct: true },
        { text: 'Bullying only occurs due to poor parenting', correct: false },
        { text: 'Bullying is learned purely from media', correct: false }
      ],
      feedback: 'Correct! Volk argues that bullying can be evolutionarily adaptive. For males, it establishes dominance and access to resources. For females, it can eliminate rivals and protect relationship fidelity. This doesn\'t justify bullying, but suggests interventions need to provide alternative routes to status.'
    },
    {
      id: 5,
      type: 'scenario',
      question: 'What is the main weakness of evolutionary explanations of aggression?',
      options: [
        { text: 'There is no research evidence to support them', correct: false },
        { text: 'They cannot explain gender differences in aggression', correct: false },
        { text: 'Cultural differences contradict the idea of universal evolutionary drives', correct: true },
        { text: 'They only apply to animals, not humans', correct: false }
      ],
      feedback: 'Excellent critical thinking! While evolutionary theory predicts universal behaviors, we see huge cultural variation. The !Kung San devalue aggression while the Yanomamö reward it with status. If aggression were purely driven by evolution, such cultural differences shouldn\'t exist - suggesting social/cultural factors override biological ones.'
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
