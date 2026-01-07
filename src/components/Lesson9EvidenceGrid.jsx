import React from 'react'
import { Microscope, TrendingUp, BarChart3, AlertCircle } from 'lucide-react'

export default function Lesson9EvidenceGrid({ isPresentation }) {
  const researchStudies = [
    {
      title: 'Correlational Studies on Violent Media',
      researcher: 'Meta-analysis (Anderson & Bushman)',
      sample: 'Multiple studies across thousands of participants (various ages)',
      design: 'Longitudinal and cross-sectional studies examining media viewing and aggression',
      findings: 'Small positive correlation found between violent media exposure and aggressive behaviour (r = 0.24). However, correlation is weak and many confounding variables exist.',
      relevance: 'Shows that while some link exists, the relationship is FAR from deterministic—most people who watch violent media do not become aggressive.',
      color: 'bg-blue-900/40 border-blue-600'
    },
    {
      title: 'Experimental Studies: Short-term Effects',
      researcher: 'Bushman & Huesmann',
      sample: 'N=various, typically college students and children',
      design: 'Laboratory experiments: participants exposed to violent videos/games, then given opportunity to harm (button-pressing, hot sauce allocation)',
      findings: 'Participants exposed to violent media showed increased physiological arousal and hostile thoughts immediately after viewing. Slightly more likely to give "punishments" in artificial aggression tasks.',
      relevance: 'Demonstrates short-term COGNITIVE effects (hostile thoughts, arousal) but ecological validity is questionable—button-pressing is not real aggression.',
      color: 'bg-blue-900/40 border-blue-600'
    },
    {
      title: 'Computer Games: Active Participation Effects',
      researcher: 'Anderson & Dill; Gentile et al.',
      sample: 'N=hundreds, mostly adolescents and young adults',
      design: 'Experimental and correlational studies; some measure real aggressive behavior, others use proxy measures (loud noise, hot sauce to opponent)',
      findings: 'Aggressive game playing correlates with aggressive behavior and reduced empathy. Experimental exposure to violent games shows increased hostile thoughts and arousal. Effect sizes are small to moderate.',
      relevance: 'Active participation in violent games MAY have stronger effects than passive TV viewing because the player is directly rewarded for violence. However, reverse causality is a concern (aggressive people prefer violent games).',
      color: 'bg-blue-900/40 border-blue-600'
    },
    {
      title: 'Real-World Aggression: Limited Evidence',
      researcher: 'Freedman; meta-analysis critics',
      sample: 'Police data, school violence statistics, longitudinal behavioral records',
      design: 'Ecological studies examining whether violent media availability correlates with crime rates',
      findings: 'Countries with HIGH violent media consumption (Japan, South Korea) have LOW violent crime rates. Violent crime has DECREASED during periods when violent media consumption increased (1990s-2000s in US).',
      relevance: 'This counterfactual evidence suggests that if media were a major causal factor, we should see different patterns in real-world aggression data. Suggests media effects are weaker than lab studies imply.',
      color: 'bg-blue-900/40 border-blue-600'
    }
  ]

  return (
    <div className={`flex flex-col gap-6 ${isPresentation ? 'p-8' : 'p-6'}`}>
      <div className="flex items-center gap-3 mb-4">
        <Microscope className="text-blue-500" size={isPresentation ? 40 : 32} />
        <h3 className={`font-bold text-blue-100 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
          Research Evidence: Media Effects on Aggression
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {researchStudies.map((study, idx) => (
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

            <div className="bg-blue-950/50 rounded p-3 border-l-2 border-blue-500">
              <p className={`text-blue-300 font-semibold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                Sample & Design:
              </p>
              <p className={`text-blue-200 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                {study.sample}
              </p>
              <p className={`text-blue-200 text-xs italic mt-2 ${isPresentation ? 'text-sm' : ''}`}>
                {study.design}
              </p>
            </div>

            <div className="bg-blue-950/50 rounded p-3 border-l-2 border-blue-500">
              <p className={`text-blue-300 font-semibold mb-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                Findings:
              </p>
              <p className={`text-blue-200 leading-snug ${isPresentation ? 'text-base' : 'text-sm'}`}>
                {study.findings}
              </p>
            </div>

            <div className="bg-blue-950/50 rounded p-3 border-l-2 border-blue-400">
              <p className={`text-blue-300 font-semibold mb-2 flex items-center gap-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                <TrendingUp size={16} className="text-blue-400" />
                Relevance:
              </p>
              <p className={`text-blue-200 leading-snug ${isPresentation ? 'text-base' : 'text-sm'}`}>
                {study.relevance}
              </p>
            </div>
          </div>
        ))}
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
