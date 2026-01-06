import React, { useState, useMemo } from 'react'
import { CheckCircle, AlertCircle, Brain } from 'lucide-react'

export default function Lesson5UnderstandingCheck({ isPresentation }) {
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
      question: 'According to Dollard et al. (1939), what is the relationship between frustration and aggression?',
      options: [
        { text: 'Frustration sometimes leads to aggression', correct: false },
        { text: 'Frustration ALWAYS leads to aggression (inevitable)', correct: true },
        { text: 'Frustration has no relationship with aggression', correct: false },
        { text: 'Frustration only leads to aggression in males', correct: false }
      ],
      feedback: 'Correct! Dollard\'s original hypothesis stated that frustration ALWAYS produces aggression. This was a bold, deterministic claim - like a hydraulic pressure model where blocked goals build pressure that must be released as aggression. However, this absolute claim was later challenged and reformulated by Berkowitz.'
    },
    {
      id: 2,
      type: 'scenario',
      question: 'What does the "Weapon Effect" (Berkowitz & LePage, 1967) demonstrate?',
      options: [
        { text: 'Weapons make people feel safer', correct: false },
        { text: 'Environmental cues (like weapons) can prime aggressive thoughts and behavior', correct: true },
        { text: 'Only trained soldiers are affected by the presence of weapons', correct: false },
        { text: 'Weapons reduce aggression through deterrence', correct: false }
      ],
      feedback: 'Exactly! The weapon effect shows that aggressive cues in the environment can trigger aggressive behavior. In the study, participants gave stronger electric shocks when a gun was present vs. badminton rackets. This supports Berkowitz\'s idea that aggression is cued by environmental triggers, not just internal frustration.'
    },
    {
      id: 3,
      type: 'matching',
      question: 'Match the study to its key finding:',
      items: [
        { label: 'Berkowitz & LePage (1967)', options: ['Stronger shocks given when guns were present', 'Venting anger INCREASES aggression', 'Impossible puzzles increase frustration'], correct: 0 },
        { label: 'Bushman (2002)', options: ['Weapons prime aggression', 'Catharsis hypothesis is FALSE - venting increases aggression', 'Cortisol moderates testosterone'], correct: 1 }
      ],
      feedback: 'The weapon effect (Berkowitz) showed environmental priming of aggression. Bushman\'s study challenged the catharsis hypothesis - people who "vented" by hitting a punching bag were MORE aggressive afterward, not less. This suggests expressing anger doesn\'t reduce it - it rehearses and intensifies it.'
    },
    {
      id: 4,
      type: 'scenario',
      question: 'How did Berkowitz REFORMULATE the original frustration-aggression hypothesis?',
      options: [
        { text: 'He said frustration has no effect on aggression', correct: false },
        { text: 'He added that frustration must be combined with aggressive CUES in the environment', correct: true },
        { text: 'He said only physical frustration leads to aggression', correct: false },
        { text: 'He removed all mention of frustration', correct: false }
      ],
      feedback: 'Perfect! Berkowitz reformulated the hypothesis to include environmental cues. Frustration creates a readiness for aggression (negative affect), but aggressive cues (weapons, violent images, aggressive words) are needed to actually trigger the behavior. This explains why frustration doesn\'t ALWAYS lead to aggression.'
    },
    {
      id: 5,
      type: 'scenario',
      question: 'Why is the Dual-Hormone Hypothesis (Testosterone + Cortisol) relevant to the frustration-aggression model?',
      options: [
        { text: 'It has no relevance to frustration', correct: false },
        { text: 'High cortisol (stress/frustration) can BLOCK testosterone\'s aggressive effects', correct: true },
        { text: 'Cortisol always increases aggression', correct: false },
        { text: 'Testosterone is only produced during frustration', correct: false }
      ],
      feedback: 'Excellent integration! The dual-hormone hypothesis shows that stress (cortisol) - which often accompanies frustration - can actually INHIBIT the aggressive effects of testosterone. This adds biological nuance to the frustration-aggression model: high stress might suppress aggression rather than cause it, contradicting Dollard\'s simple hydraulic model.'
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
        <h3 className={`font-bold text-orange-400 uppercase tracking-widest ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
          Check Your Understanding
        </h3>
        <span className={`font-mono text-slate-400 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
          Question {currentQuestion + 1} of {questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-orange-500 transition-all duration-300"
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
                <p className={`font-bold text-orange-300 mb-3 ${isPresentation ? 'text-2xl' : 'text-base'}`}>
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
                          ? 'bg-orange-700 border-orange-600 text-white'
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
                      : 'bg-orange-700 border-orange-600 text-white'
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
              : 'border-orange-700 text-orange-500 hover:bg-orange-900/30 hover:text-white'
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
                ? 'bg-orange-600 hover:bg-orange-500 text-white shadow-lg'
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
