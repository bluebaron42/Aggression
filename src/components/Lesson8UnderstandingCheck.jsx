import React, { useState, useMemo } from 'react'
import { CheckCircle, AlertCircle, Brain } from 'lucide-react'

export default function Lesson8UnderstandingCheck({ isPresentation }) {
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

  // ⭐ CRITICAL: Randomize answer order on component mount
  const questions = useMemo(() => {
    const baseQuestions = [
      {
        id: 1,
        type: 'scenario',
        question: 'According to the IMPORTATION MODEL, what is the primary source of aggression in prisons?',
        options: [
          { text: 'The prison environment itself causes psychological deprivation', correct: false },
          { text: 'Aggressive individuals bring their violent traits INTO the prison system', correct: true },
          { text: 'Prison officers deliberately provoke inmates', correct: false },
          { text: 'Aggression only occurs when inmates are overcrowded', correct: false }
        ],
        feedback: 'Correct! The importation model suggests that aggression in prisons stems from the characteristics that individuals bring WITH them into the institution. Inmates with histories of violence, criminality, or poor impulse control "import" these traits, explaining why some prisons have higher violence rates regardless of conditions.'
      },
      {
        id: 2,
        type: 'scenario',
        question: 'How does the DEPRIVATION MODEL explain institutional aggression differently from the importation model?',
        options: [
          { text: 'It focuses entirely on individual personality traits of inmates', correct: false },
          { text: 'It emphasizes that the PRISON ENVIRONMENT itself creates frustration and deprivation, triggering aggression', correct: true },
          { text: 'It claims aggression is completely unrelated to prison conditions', correct: false },
          { text: 'It only applies to maximum-security prisons', correct: false }
        ],
        feedback: 'Exactly! The deprivation model argues that aggression emerges from the CONDITIONS of imprisonment—lack of autonomy, privacy, goods, heterosexual contact, and security. The prison environment itself frustrates fundamental human needs, leading to aggression. This contrasts with importation theory by focusing on situational rather than dispositional factors.'
      },
      {
        id: 3,
        type: 'scenario',
        question: 'In the Three Prisons Study, researchers observed that different prison environments produced DIFFERENT LEVELS of aggression in similar inmate populations. Which model best explains this finding?',
        options: [
          { text: 'Only the importation model—different prisons attracted different types of prisoners', correct: false },
          { text: 'Only the deprivation model—environmental conditions directly caused aggression variations', correct: false },
          { text: 'An INTERACTION of both models—inmate characteristics AND environmental factors work together', correct: true },
          { text: 'Neither model can explain variations between prisons', correct: false }
        ],
        feedback: 'Perfect! Modern understanding recognizes that BOTH factors matter. The same types of inmates showed different aggression rates depending on prison conditions. This suggests that importation (who enters) and deprivation (what conditions they face) interact—aggressive dispositions may only manifest when environmental triggers are present, and depriving conditions may only escalate aggression in individuals with predispositions toward violence.'
      },
      {
        id: 4,
        type: 'matching',
        question: 'Match each model to its core explanation of institutional aggression:',
        items: [
          { label: 'IMPORTATION MODEL', options: ['Prison environment creates deprivation and frustration → aggression', 'Individual traits of inmates cause aggression regardless of conditions', 'Aggressive inmates bring violence INTO the system'], correct: 2 },
          { label: 'DEPRIVATION MODEL', options: ['Lack of autonomy, privacy, goods, contact → psychological harm → aggression', 'Personality disorders determine prison violence', 'Officer training determines inmate behavior'], correct: 0 }
        ],
        feedback: 'The key distinction: Importation focuses on PERSON characteristics (inmates bring aggression), while deprivation focuses on ENVIRONMENTAL characteristics (prison conditions CREATE aggression). This is a fundamental difference in locating the cause—inside the person vs. inside the situation.'
      },
      {
        id: 5,
        type: 'scenario',
        question: 'Sykes identified five major deprivations in prison life. Which represents the loss that might frustrate inmates the MOST according to the deprivation model?',
        options: [
          { text: 'Loss of autonomy (inability to make decisions)', correct: false },
          { text: 'Loss of security (fear of violence from other inmates)', correct: false },
          { text: 'Loss of heterosexual contact (isolation from opposite sex relationships)', correct: false },
          { text: 'All five deprivations can frustrate inmates significantly, and their combined effect is what triggers aggression', correct: true }
        ],
        feedback: 'Excellent insight! According to Sykes, it\'s not ONE deprivation but the ACCUMULATION of all five losses—autonomy, security, goods, liberty, and heterosexual contact—that creates the psychological pressure leading to aggression. The prison environment removes multiple fundamental human needs simultaneously, which is why institutional settings are uniquely conducive to violence.'
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
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowFeedback(false)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setShowFeedback(false)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowFeedback(false)
  }

  const currentQ = questions[currentQuestion]
  const score = Object.values(answers).filter(Boolean).length
  const totalAttempted = Object.keys(answers).length

  if (currentQ.type === 'scenario') {
    return (
      <div className={`flex flex-col gap-6 ${isPresentation ? 'p-8' : 'p-6'}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Brain className="text-slate-500" size={isPresentation ? 40 : 32} />
            <h3 className={`font-bold text-slate-200 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
              Question {currentQuestion + 1} of {questions.length}
            </h3>
          </div>
          <div className={`text-slate-400 font-mono ${isPresentation ? 'text-lg' : 'text-sm'}`}>
            {totalAttempted > 0 && `${score}/${totalAttempted} Correct`}
          </div>
        </div>

        <div className="bg-slate-900/50 border-2 border-slate-700 rounded-lg p-6">
          <p className={`text-slate-100 font-semibold leading-relaxed ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
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
                    ? 'bg-slate-700 border-slate-600 text-slate-200'
                    : 'bg-red-900 border-red-500 text-red-100'
                  : 'bg-slate-800 border-slate-600 text-slate-100 hover:bg-slate-700 hover:border-slate-500 cursor-pointer'
              } ${isPresentation ? 'text-xl' : 'text-base'}`}
            >
              {option.text}
            </button>
          ))}
        </div>

        {showFeedback && (
          <div className="bg-slate-800/70 border-l-4 border-slate-500 p-4 rounded">
            <p className={`text-slate-200 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
              {currentQ.feedback}
            </p>
          </div>
        )}

        <div className="flex gap-3 justify-between mt-6">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`px-6 py-2 bg-slate-800 text-slate-300 rounded-lg font-bold hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
              isPresentation ? 'text-lg' : 'text-sm'
            }`}
          >
            ← Previous
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={resetQuiz}
              className={`px-6 py-2 bg-slate-600 text-white rounded-lg font-bold hover:bg-slate-500 transition-all ${
                isPresentation ? 'text-lg' : 'text-sm'
              }`}
            >
              Review Again
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              disabled={!showFeedback}
              className={`px-6 py-2 bg-slate-600 text-white rounded-lg font-bold hover:bg-slate-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
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
          <Brain className="text-slate-500" size={isPresentation ? 40 : 32} />
          <h3 className={`font-bold text-slate-200 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
            Question {currentQuestion + 1} of {questions.length}
          </h3>
        </div>
        <div className={`text-slate-400 font-mono ${isPresentation ? 'text-lg' : 'text-sm'}`}>
          {totalAttempted > 0 && `${score}/${totalAttempted} Correct`}
        </div>
      </div>

      <div className="bg-slate-900/50 border-2 border-slate-700 rounded-lg p-6">
        <p className={`text-slate-100 font-semibold leading-relaxed ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
          {currentQ.question}
        </p>
      </div>

      <div className="space-y-6">
        {currentQ.items.map((item, itemIdx) => (
          <div key={itemIdx} className="space-y-3">
            <div className="bg-slate-800/50 p-3 rounded border-l-4 border-slate-600">
              <p className={`text-slate-200 font-bold ${isPresentation ? 'text-xl' : 'text-base'}`}>
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
                        ? 'bg-slate-700 border-slate-600 text-slate-200'
                        : 'bg-red-900 border-red-500 text-red-100'
                      : 'bg-slate-800 border-slate-600 text-slate-100 hover:bg-slate-700 hover:border-slate-500 cursor-pointer'
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
        <div className="bg-slate-800/70 border-l-4 border-slate-500 p-4 rounded">
          <p className={`text-slate-200 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
            {currentQ.feedback}
          </p>
        </div>
      )}

      <div className="flex gap-3 justify-between mt-6">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className={`px-6 py-2 bg-slate-800 text-slate-300 rounded-lg font-bold hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
            isPresentation ? 'text-lg' : 'text-sm'
          }`}
        >
          ← Previous
        </button>

        {currentQuestion === questions.length - 1 ? (
          <button
            onClick={resetQuiz}
            className={`px-6 py-2 bg-slate-600 text-white rounded-lg font-bold hover:bg-slate-500 transition-all ${
              isPresentation ? 'text-lg' : 'text-sm'
            }`}
          >
            Review Again
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            disabled={!showFeedback}
            className={`px-6 py-2 bg-slate-600 text-white rounded-lg font-bold hover:bg-slate-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
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
