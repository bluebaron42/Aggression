import React, { useState } from 'react'
import { Microscope, TrendingUp, BarChart3, AlertCircle, Eye } from 'lucide-react'

export default function Lesson9EvidenceGrid({ isPresentation }) {
  const researchStudies = [
    {
      title: 'Correlational Studies on Violent Media',
      researcher: 'Meta-analysis (Anderson & Bushman)',
      sample: 'Multiple studies across thousands of participants (various ages)',
      design: 'Longitudinal and cross-sectional studies examining media viewing and aggression',
      findings: 'Small positive correlation (r ≈ 0.24).',
      details: 'Correlation is weak and confounded by family, peers, and personality. Most viewers remain non-aggressive.',
      relevance: 'Signals association, not causation — media is a minor factor.',
      color: 'bg-blue-900/40 border-blue-600'
    },
    {
      title: 'Experimental Studies: Short-term Effects',
      researcher: 'Bushman & Huesmann',
      sample: 'N=various, typically college students and children',
      design: 'Laboratory experiments: participants exposed to violent videos/games, then given opportunity to harm (button-pressing, hot sauce allocation)',
      findings: 'Short-term bump in arousal + hostile thoughts.',
      details: 'Violent media groups give louder noise/hot sauce in lab tasks, but measures are artificial and short-lived.',
      relevance: 'Supports priming in controlled settings; real-world generalisation is limited.',
      color: 'bg-blue-900/40 border-blue-600'
    },
    {
      title: 'Computer Games: Active Participation Effects',
      researcher: 'Anderson & Dill; Gentile et al.',
      sample: 'N=hundreds, mostly adolescents and young adults',
      design: 'Experimental and correlational studies; some measure real aggressive behavior, others use proxy measures (loud noise, hot sauce to opponent)',
      findings: 'Active play links to slightly higher hostile thoughts + lower empathy.',
      details: 'Effect sizes are small-moderate; reverse causality likely (aggressive players choose violent games).',
      relevance: 'Interactivity may nudge effects upward vs passive viewing, but still small.',
      color: 'bg-blue-900/40 border-blue-600'
    },
    {
      title: 'Real-World Aggression: Limited Evidence',
      researcher: 'Freedman; meta-analysis critics',
      sample: 'Police data, school violence statistics, longitudinal behavioral records',
      design: 'Ecological studies examining whether violent media availability correlates with crime rates',
      findings: 'High media, low crime (e.g., Japan).',
      details: 'Violent crime fell in US while media violence rose (1990s-2000s). Counter-evidence to strong causal claims.',
      relevance: 'Real-world pattern contradicts large media-effect claims.',
      color: 'bg-blue-900/40 border-blue-600'
    }
  ]

  const [expandedStudy, setExpandedStudy] = useState(null)

  return (
    <div className={`flex flex-col gap-6 ${isPresentation ? 'p-8' : 'p-6'}`}>
      <div className="flex items-center gap-3 mb-4">
        <Microscope className="text-blue-500" size={isPresentation ? 40 : 32} />
        <h3 className={`font-bold text-blue-100 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
          Research Evidence: Media Effects on Aggression
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {researchStudies.map((study, idx) => {
          const isOpen = expandedStudy === idx

          return (
            <div
              key={idx}
              className={`${study.color} rounded-lg border-2 p-5 flex flex-col gap-3 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-start gap-3">
                <BarChart3 className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className={`font-bold text-blue-100 ${isPresentation ? 'text-lg' : 'text-base'}`}>
                    {study.title}
                  </h4>
                  <p className={`text-blue-400 text-sm font-semibold ${isPresentation ? 'text-base' : ''}`}>
                    {study.researcher}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <div className="bg-blue-950/50 rounded p-3 border-l-2 border-blue-500">
                  <p className={`text-blue-300 font-semibold mb-1 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                    Sample & Design
                  </p>
                  <p className={`text-blue-200 ${isPresentation ? 'text-base' : 'text-sm'}`}>{study.sample}</p>
                  <p className={`text-blue-200 text-xs italic mt-1 ${isPresentation ? 'text-sm' : ''}`}>{study.design}</p>
                </div>

                <div className="bg-blue-950/50 rounded p-3 border-l-2 border-blue-500">
                  <div className="flex items-center justify-between mb-1">
                    <p className={`text-blue-300 font-semibold ${isPresentation ? 'text-base' : 'text-sm'}`}>Findings</p>
                    <span className="text-blue-200 font-mono text-xs">tap to reveal</span>
                  </div>
                  <p className={`text-blue-100 font-bold ${isPresentation ? 'text-lg' : 'text-base'}`}>{study.findings}</p>
                  {isOpen && (
                    <p className={`text-blue-200 leading-snug mt-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                      {study.details}
                    </p>
                  )}
                </div>

                <div className="bg-blue-950/50 rounded p-3 border-l-2 border-blue-400">
                  <p className={`text-blue-300 font-semibold mb-2 flex items-center gap-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                    <TrendingUp size={16} className="text-blue-400" />
                    Relevance
                  </p>
                  <p className={`text-blue-200 leading-snug ${isPresentation ? 'text-base' : 'text-sm'}`}>
                    {study.relevance}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setExpandedStudy(isOpen ? null : idx)}
                className={`inline-flex items-center gap-2 justify-center mt-1 px-4 py-2 bg-blue-700 text-white rounded font-bold hover:bg-blue-600 transition-all ${isPresentation ? 'text-lg' : 'text-sm'}`}
              >
                <Eye size={18} /> {isOpen ? 'Hide details' : 'Reveal details'}
              </button>
            </div>
          )
        })}
      </div>

      <div className="bg-blue-950/30 border-2 border-blue-600 rounded-lg p-4 flex items-start gap-3 mt-4">
        <AlertCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
        <div>
          <p className={`text-blue-200 font-semibold ${isPresentation ? 'text-base' : 'text-sm'}`}>
            Key Takeaway: The research shows CORRELATION, not CAUSATION. Most people exposed to violent media remain non-aggressive, suggesting media is ONE factor among many (personality, family, peer groups) in determining aggressive behavior.
          </p>
        </div>
      </div>
    </div>
  )
}
