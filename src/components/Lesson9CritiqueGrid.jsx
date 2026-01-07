import React, { useState, useEffect } from 'react'
import { AlertCircle, CheckCircle, Lightbulb, ChevronLeft, ChevronRight, Eye } from 'lucide-react'

export default function Lesson9CritiqueGrid({ isPresentation }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [revealDetails, setRevealDetails] = useState(false)
  const [isFading, setIsFading] = useState(false)

  const critiques = [
    {
      id: 'definition',
      title: 'Definition Problem: What IS Aggression?',
      icon: AlertCircle,
      color: 'text-red-400',
      bgColor: 'bg-red-900/20 border-red-700',
      points: [
        'Different studies use DIFFERENT definitions and measures of aggression',
        'Button-pressing, hot sauce allocation, peer nominations, teacher ratings—all called "aggression" but measure very different constructs',
        'Lab aggression (pushing buttons) ≠ Real violence (physical assault)',
        'Makes it IMPOSSIBLE to synthesize findings across studies with confidence',
        'Meta-analyses must make decisions about which studies to include based on definition compatibility'
      ],
      implication: 'Without consistent operational definitions, claims about media effects lack credibility. A study measuring "hostile thoughts" is not directly comparable to one measuring "physical violence."'
    },
    {
      id: 'causation',
      title: 'Correlation vs. Causation Problem',
      icon: AlertCircle,
      color: 'text-orange-400',
      bgColor: 'bg-orange-900/20 border-orange-700',
      points: [
        'Correlational studies find weak relationships (r = 0.24) but CANNOT prove causation',
        'REVERSE CAUSALITY: Aggressive individuals may PREFER violent media (not media causing aggression)',
        'THIRD VARIABLES: Family factors, peer influences, personality traits could cause BOTH media preference AND aggression',
        'Experimental controls for causation but sacrifices ecological validity',
        'Real-world data (Japan: high violent media, low violence) contradicts causal model'
      ],
      implication: 'Even if media and aggression correlate, we cannot conclude media CAUSES aggression without ruling out alternative explanations. The weak correlations suggest media is ONE minor factor among many.'
    },
    {
      id: 'validity',
      title: 'Ecological Validity: Lab ≠ Real World',
      icon: AlertCircle,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-900/20 border-yellow-700',
      points: [
        'Experimental studies use ARTIFICIAL measures of aggression (button-pressing, noise, hot sauce)',
        'Lab setting is highly controlled, artificial, and aware that researcher is watching',
        'Participants know they are being studied on "aggression"—DEMAND CHARACTERISTICS',
        'Short-term effects in lab (hostile thoughts) ≠ long-term real aggression',
        'Missing context: family, friends, consequences, moral barriers that prevent real violence'
      ],
      implication: 'The effect sizes in lab studies are likely INFLATED due to artificial conditions. Real-world effects may be much smaller or nonexistent compared to laboratory demonstrations.'
    },
    {
      id: 'methodology',
      title: 'Methodological Issues',
      icon: AlertCircle,
      color: 'text-pink-400',
      bgColor: 'bg-pink-900/20 border-pink-700',
      points: [
        'PUBLICATION BIAS: Studies finding NO effect are less likely to be published',
        'SELECTIVE REPORTING: Researchers may report significant findings but hide nonsignificant results',
        'SMALL EFFECT SIZES in meta-analyses (r < 0.30) suggest media is not a major factor',
        'INDIVIDUAL DIFFERENCES: Some people affected more than others—not universal effect',
        'SAMPLING BIAS: Lab studies use volunteer college students, not representative populations'
      ],
      implication: 'Literature may be biased toward finding media effects. True population effect could be even smaller than reported. Meta-analyses may overstate the importance of effects.'
    },
    {
      id: 'timing',
      title: 'Long-term vs. Short-term Effects',
      icon: Lightbulb,
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/20 border-purple-700',
      points: [
        'MOST experimental studies examine SHORT-TERM effects (immediately after exposure)',
        'Few longitudinal studies follow participants for years to see lasting effects',
        'Media exposure may PRIME hostile thoughts temporarily but not create lasting aggressive disposition',
        'Developmental factors: effects might differ in children vs. adolescents vs. adults',
        'HABITUATION: People exposed to violent media may become DESENSITIZED over time, not MORE aggressive'
      ],
      implication: 'Short-term cognitive priming ≠ lasting behavioral change. The gap between lab findings and real-world aggression patterns suggests effects are weaker and more temporary than sometimes claimed.'
    }
  ]

  const total = critiques.length

  const goPrev = () => {
    setIsFading(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + total) % total)
      setRevealDetails(false)
      setIsFading(false)
    }, 200)
  }

  const goNext = () => {
    setIsFading(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % total)
      setRevealDetails(false)
      setIsFading(false)
    }, 200)
  }

  const current = critiques[currentIndex]
  const IconComponent = current.icon

  return (
    <div className={`flex flex-col gap-4 ${isPresentation ? 'p-8' : 'p-6'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <AlertCircle className="text-blue-500" size={isPresentation ? 40 : 32} />
          <h3 className={`font-bold text-blue-100 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
            Critical Evaluation: Click-through Card Deck
          </h3>
        </div>
        <div className={`text-blue-400 font-mono ${isPresentation ? 'text-lg' : 'text-sm'}`}>
          {currentIndex + 1}/{total}
        </div>
      </div>

      {/* Card Deck */}
      <div className="relative">
        <div
          className={`${current.bgColor} border-2 rounded-xl p-5 shadow-xl transition-all duration-200 ${isFading ? 'opacity-0' : 'opacity-100'} `}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <IconComponent className={`${current.color} flex-shrink-0`} size={isPresentation ? 28 : 24} />
              <h4 className={`font-bold text-blue-100 ${isPresentation ? 'text-xl' : 'text-lg'}`}>
                {current.title}
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                className={`px-3 py-2 bg-blue-800 text-blue-200 rounded hover:bg-blue-700 transition-all ${isPresentation ? 'text-lg' : 'text-sm'}`}
                aria-label="Previous card"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={goNext}
                className={`px-3 py-2 bg-blue-800 text-blue-200 rounded hover:bg-blue-700 transition-all ${isPresentation ? 'text-lg' : 'text-sm'}`}
                aria-label="Next card"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="mt-4">
            <button
              onClick={() => setRevealDetails(!revealDetails)}
              className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded font-bold hover:bg-blue-600 transition-all ${isPresentation ? 'text-lg' : 'text-sm'}`}
            >
              <Eye size={18} /> {revealDetails ? 'Hide details' : 'Reveal details'}
            </button>

            {revealDetails && (
              <div className="mt-4 space-y-3">
                <ul className="space-y-2">
                  {current.points.map((point, idx) => (
                    <li key={idx} className={`flex gap-3 text-blue-200 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                      <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-900/50 rounded p-3 border-l-4 border-blue-400">
                  <p className={`text-blue-300 font-semibold mb-2 flex items-center gap-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                    <Lightbulb size={16} className="text-blue-400" />
                    Critical Implication
                  </p>
                  <p className={`text-blue-100 ${isPresentation ? 'text-base' : 'text-sm'}`}>{current.implication}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Subtle stacked preview (disabled, display only) */}
        <div className="absolute top-2 right-2 opacity-30 pointer-events-none">
          <div className="w-20 h-12 bg-blue-900/30 border border-blue-700 rounded rotate-6" />
          <div className="w-20 h-12 bg-blue-900/20 border border-blue-700 rounded -mt-2 rotate-3" />
        </div>
      </div>

      <div className="bg-blue-900/40 border-2 border-blue-500 rounded-lg p-4 mt-2">
        <div className="flex items-start gap-3">
          <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
          <div>
            <p className={`text-blue-100 font-bold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>Balanced Conclusion</p>
            <p className={`text-blue-200 leading-relaxed ${isPresentation ? 'text-base' : 'text-sm'}`}>
              Media likely has SOME influence (priming, reduced empathy) but effects are WEAK/INCONSISTENT and moderated by individual differences and context. Real-world patterns (e.g., decreasing violence amid rising media use) suggest media is a MINOR factor among many.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
