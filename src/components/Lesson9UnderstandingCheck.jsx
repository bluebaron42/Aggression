import React, { useState, useMemo } from 'react'
import { CheckCircle, AlertCircle, Brain, Eye } from 'lucide-react'

export default function Lesson9UnderstandingCheck({ isPresentation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState(false)
  const [showExplanation, setShowExplanation] = useState({})

  // Shuffle function to randomize answer order
  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // ⭐ CRITICAL: Randomize answer order on component mount
  const questions = useMemo(() => {
    const baseQuestions = [
      {
        id: 1,
        type: 'scenario',
        question: 'What is the specification claim about media influences on aggression?',
        options: [
          { text: 'Media influences can only affect children, not adolescents', correct: false },
          { text: 'Media influences on aggression include effects of TV, film, and computer games', correct: true },
          { text: 'Media has no measurable effect on aggressive behaviour', correct: false },
          { text: 'Media influences only affect individuals with pre-existing violent tendencies', correct: false }
        ],
        feedback: 'Spec explicitly includes TV, film, and games — a broad scope of media channels.'
      },
      {
        id: 2,
        type: 'scenario',
        question: 'According to research, what is a key problem with claiming that TV/film viewing CAUSES aggression?',
        options: [
          { text: 'Most people who watch violent TV do not become aggressive', correct: true },
          { text: 'No one has ever studied the effects of violent media', correct: false },
          { text: 'Only criminals watch violent television', correct: false },
          { text: 'TV violence is too obvious to study scientifically', correct: false }
        ],
        feedback: 'Most viewers stay non-aggressive. Weak correlations challenge simple cause → effect claims.'
      },
      {
        id: 3,
        type: 'scenario',
        question: 'How do computer games differ from passive media like TV in their potential effects on aggression?',
        options: [
          { text: 'Computer games have no effect on aggression whatsoever', correct: false },
          { text: 'Computer games are more passive than TV and therefore safer', correct: false },
          { text: 'Computer games are more ACTIVE and require player engagement, potentially having stronger effects than passive viewing', correct: true },
          { text: 'Computer games only affect professional gamers', correct: false }
        ],
        feedback: 'Games are active: players enact violence and earn rewards. That interactivity can amplify short-term effects vs passive TV.'
      },
      {
        id: 4,
        type: 'matching',
        question: 'Match each research type to its key limitation in studying media and aggression:',
        items: [
          { label: 'Correlational Studies', options: ['Cannot prove causation; aggressive people may select violent media (reverse causality)', 'Cannot generalize to real-world aggression; artificial lab setting lacks validity', 'Cannot represent long-term effects; snapshot only'], correct: 0 },
          { label: 'Experimental Studies', options: ['Ecological validity issues—laboratory aggression (button pressing) may not reflect real violence', 'Sample bias—only volunteers who agree to be studied', 'Cannot study ethical scenarios involving actual harm'], correct: 0 }
        ],
        feedback: 'Core trade-offs: correlation = no causation, experiment = lab validity only. Know which weakness you are carrying.'
      },
      {
        id: 5,
        type: 'scenario',
        question: 'What does the "definition of aggression" problem mean when evaluating media effects research?',
        options: [
          { text: 'Researchers disagree about whether aggression is inherited or learned', correct: false },
          { text: 'Different studies define aggression differently (e.g., button-pressing vs. physical violence), making it hard to compare findings across studies', correct: true },
          { text: 'Aggression is too obvious to require a formal definition', correct: false },
          { text: 'The specification requires only one specific definition of aggression', correct: false }
        ],
        feedback: 'Operational definitions vary (buttons, ratings, self-report). Inconsistent measures weaken overall conclusions.'
      }
    ]

    // Shuffle options for scenario questions
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

  const handleAnswer = (isCorrect) => {
    setAnswers({ ...answers, [currentQuestion]: isCorrect })
    setShowFeedback(true)
    setShowExplanation(prev => ({ ...prev, [currentQuestion]: false }))
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowFeedback(false)
      setShowExplanation(prev => ({ ...prev, [currentQuestion + 1]: false }))
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setShowFeedback(false)
      setShowExplanation(prev => ({ ...prev, [currentQuestion - 1]: false }))
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowFeedback(false)
    setShowExplanation({})
  }

  const currentQ = questions[currentQuestion]
  const score = Object.values(answers).filter(Boolean).length
  const totalAttempted = Object.keys(answers).length

  if (currentQ.type === 'scenario') {
    return (
      <div className={`flex flex-col gap-6 ${isPresentation ? 'p-8' : 'p-6'}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Brain className="text-blue-500" size={isPresentation ? 40 : 32} />
            <h3 className={`font-bold text-blue-100 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
              Question {currentQuestion + 1} of {questions.length}
            </h3>
          </div>
          <div className={`text-blue-400 font-mono ${isPresentation ? 'text-lg' : 'text-sm'}`}>
            {totalAttempted > 0 && `${score}/${totalAttempted} Correct`}
          </div>
        </div>

        <div className="bg-blue-950/50 border-2 border-blue-700 rounded-lg p-6">
          <p className={`text-blue-100 font-semibold leading-relaxed ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
            {currentQ.question}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {currentQ.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option.correct)}
              disabled={showFeedback}
              className={`p-4 text-left rounded-lg font-semibold transition-all border-2 ${
                showFeedback
                  ? option.correct
                    ? 'bg-green-900 border-green-500 text-green-100'
                    : answers[currentQuestion] === false && !option.correct
                    ? 'bg-blue-700 border-blue-600 text-blue-200'
                    : 'bg-red-900 border-red-500 text-red-100'
                  : 'bg-blue-800 border-blue-600 text-blue-100 hover:bg-blue-700 hover:border-blue-500 cursor-pointer'
              } ${isPresentation ? 'text-xl' : 'text-base'}`}
            >
              {option.text}
            </button>
          ))}
        </div>

        {showFeedback && (
          <div className="bg-blue-800/70 border-l-4 border-blue-500 p-4 rounded space-y-3">
            <div className="flex items-center gap-2 text-blue-100">
              <CheckCircle size={18} className="text-green-400" />
              <span className={`font-semibold ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                {answers[currentQuestion] ? 'Correct choice locked in' : 'Review: best answer highlighted in green'}
              </span>
            </div>
            <button
              onClick={() => setShowExplanation(prev => ({ ...prev, [currentQuestion]: !prev[currentQuestion] }))}
              className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded font-bold hover:bg-blue-600 transition-all ${isPresentation ? 'text-lg' : 'text-sm'}`}
            >
              <Eye size={18} /> {showExplanation[currentQuestion] ? 'Hide explanation' : 'Reveal explanation'}
            </button>

            {showExplanation[currentQuestion] && (
              <p className={`text-blue-100 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                {currentQ.feedback}
              </p>
            )}
          </div>
        )}

        <div className="flex gap-3 justify-between mt-6">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`px-6 py-2 bg-blue-800 text-blue-300 rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
              isPresentation ? 'text-lg' : 'text-sm'
            }`}
          >
            ← Previous
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={resetQuiz}
              className={`px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-500 transition-all ${
                isPresentation ? 'text-lg' : 'text-sm'
              }`}
            >
              Review Again
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              disabled={!showFeedback}
              className={`px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
                isPresentation ? 'text-lg' : 'text-sm'
              }`}
            >
              Next →
            </button>
          )}
        </div>
      </div>
    )
  }

  // Matching question type
  return (
    <div className={`flex flex-col gap-6 ${isPresentation ? 'p-8' : 'p-6'}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Brain className="text-blue-500" size={isPresentation ? 40 : 32} />
          <h3 className={`font-bold text-blue-100 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
            Question {currentQuestion + 1} of {questions.length}
          </h3>
        </div>
        <div className={`text-blue-400 font-mono ${isPresentation ? 'text-lg' : 'text-sm'}`}>
          {totalAttempted > 0 && `${score}/${totalAttempted} Correct`}
        </div>
      </div>

      <div className="bg-blue-950/50 border-2 border-blue-700 rounded-lg p-6">
        <p className={`text-blue-100 font-semibold leading-relaxed ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
          {currentQ.question}
        </p>
      </div>

      <div className="space-y-6">
        {currentQ.items.map((item, itemIdx) => (
          <div key={itemIdx} className="space-y-3">
            <div className="bg-blue-800/50 p-3 rounded border-l-4 border-blue-600">
              <p className={`text-blue-200 font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>
                {item.label}
              </p>
            </div>
            <div className="flex flex-col gap-2 ml-4">
              {item.options.map((option, optIdx) => (
                <button
                  key={optIdx}
                  onClick={() => handleAnswer(optIdx === item.correct)}
                  disabled={showFeedback}
                  className={`p-3 text-left rounded-lg font-semibold transition-all border-2 ${
                    showFeedback
                      ? optIdx === item.correct
                        ? 'bg-green-900 border-green-500 text-green-100'
                        : answers[currentQuestion] === false && optIdx !== item.correct
                        ? 'bg-blue-700 border-blue-600 text-blue-200'
                        : 'bg-red-900 border-red-500 text-red-100'
                      : 'bg-blue-800 border-blue-600 text-blue-100 hover:bg-blue-700 hover:border-blue-500 cursor-pointer'
                  } ${isPresentation ? 'text-lg' : 'text-sm'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showFeedback && (
        <div className="bg-blue-800/70 border-l-4 border-blue-500 p-4 rounded space-y-3">
          <div className="flex items-center gap-2 text-blue-100">
            <CheckCircle size={18} className="text-green-400" />
            <span className={`font-semibold ${isPresentation ? 'text-lg' : 'text-sm'}`}>
              {answers[currentQuestion] ? 'Great match locked in' : 'Best matches highlighted in green'}
            </span>
          </div>
          <button
            onClick={() => setShowExplanation(prev => ({ ...prev, [currentQuestion]: !prev[currentQuestion] }))}
            className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded font-bold hover:bg-blue-600 transition-all ${isPresentation ? 'text-lg' : 'text-sm'}`}
          >
            <Eye size={18} /> {showExplanation[currentQuestion] ? 'Hide explanation' : 'Reveal explanation'}
          </button>

          {showExplanation[currentQuestion] && (
            <p className={`text-blue-100 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
              {currentQ.feedback}
            </p>
          )}
        </div>
      )}

      <div className="flex gap-3 justify-between mt-6">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className={`px-6 py-2 bg-blue-800 text-blue-300 rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
            isPresentation ? 'text-lg' : 'text-sm'
          }`}
        >
          ← Previous
        </button>

        {currentQuestion === questions.length - 1 ? (
          <button
            onClick={resetQuiz}
            className={`px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-500 transition-all ${
              isPresentation ? 'text-lg' : 'text-sm'
            }`}
          >
            Review Again
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            disabled={!showFeedback}
            className={`px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
              isPresentation ? 'text-lg' : 'text-sm'
            }`}
          >
            Next →
          </button>
        )}
      </div>
    </div>
  )
}
