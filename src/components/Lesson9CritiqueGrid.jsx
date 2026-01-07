import React, { useState } from 'react'
import { AlertCircle, CheckCircle, Lightbulb } from 'lucide-react'

export default function Lesson9CritiqueGrid({ isPresentation }) {
  const [expandedSection, setExpandedSection] = useState(null)

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

  return (
    <div className={`flex flex-col gap-4 ${isPresentation ? 'p-8' : 'p-6'}`}>
      <div className="flex items-center gap-3 mb-4">
        <AlertCircle className="text-blue-500" size={isPresentation ? 40 : 32} />
        <h3 className={`font-bold text-blue-100 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
          Critical Evaluation: Weaknesses in Media-Aggression Research
        </h3>
      </div>

      <div className="space-y-3">
        {critiques.map((critique) => {
          const IconComponent = critique.icon
          const isExpanded = expandedSection === critique.id

          return (
            <div key={critique.id} className={`${critique.bgColor} rounded-lg border-2 overflow-hidden`}>
              <button
                onClick={() => setExpandedSection(isExpanded ? null : critique.id)}
                className={`w-full p-4 flex items-center justify-between hover:opacity-80 transition-opacity`}
              >
                <div className="flex items-center gap-3 text-left">
                  <IconComponent className={`${critique.color} flex-shrink-0`} size={24} />
                  <h4 className={`font-bold text-blue-100 ${isPresentation ? 'text-lg' : 'text-base'}`}>
                    {critique.title}
                  </h4>
                </div>
                <span className={`text-blue-400 font-bold ${isPresentation ? 'text-2xl' : 'text-xl'}`}>
                  {isExpanded ? '−' : '+'}
                </span>
              </button>

              {isExpanded && (
                <div className="bg-blue-950/30 border-t-2 border-blue-600 px-4 py-4 space-y-3">
                  <ul className="space-y-2">
                    {critique.points.map((point, idx) => (
                      <li
                        key={idx}
                        className={`flex gap-3 text-blue-200 ${isPresentation ? 'text-base' : 'text-sm'}`}
                      >
                        <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-blue-900/50 rounded p-3 border-l-4 border-blue-400 mt-4">
                    <p className={`text-blue-300 font-semibold mb-2 flex items-center gap-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                      <Lightbulb size={16} className="text-blue-400" />
                      Critical Implication:
                    </p>
                    <p className={`text-blue-100 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                      {critique.implication}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="bg-blue-900/40 border-2 border-blue-500 rounded-lg p-4 mt-4">
        <div className="flex items-start gap-3">
          <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
          <div>
            <p className={`text-blue-100 font-bold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
              Balanced Conclusion:
            </p>
            <p className={`text-blue-200 leading-relaxed ${isPresentation ? 'text-base' : 'text-sm'}`}>
              Media likely has SOME influence on aggression, particularly in priming hostile thoughts and reducing empathy. However, the effect is WEAK and INCONSISTENT, affected by individual differences, family factors, and peer influences. The gap between lab findings (effect size ~0.24) and real-world patterns (decreasing violence during high media consumption) suggests media is ONE MINOR factor, not a major cause of serious aggression.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
