import React, { useState } from 'react'
import { BookOpen, CheckCircle, AlertCircle } from 'lucide-react'

export default function Lesson9EssayPlan({ isPresentation }) {
  const [selectedAO, setSelectedAO] = useState('AO1')

  const essayPlans = {
    AO1: {
      marks: 6,
      title: 'Knowledge & Understanding (AO1) - 6 Marks',
      content: [
        {
          point: 'Define and explain media influences on aggression',
          detail: 'Media influences include effects of TV, film, and computer games on aggressive behaviour. These can be short-term (priming hostile thoughts) or long-term (desensitization, social learning).'
        },
        {
          point: 'Identify effects of TV and film viewing',
          detail: 'Viewing violent content may increase arousal and hostile thoughts. Weak correlation found in meta-analyses (r ≈ 0.24). Aggressive behaviour may be linked through social learning (modeling) but causation unclear.'
        },
        {
          point: 'Identify effects of computer games',
          detail: 'Computer games are ACTIVE media where player engages in violence directly (not just watching). Research shows correlation between violent game play and aggression, but effect sizes are small. May have stronger influence than passive media due to active participation.'
        },
        {
          point: 'Outline key research evidence',
          detail: 'Meta-analyses show small positive correlations. Experimental studies demonstrate short-term cognitive priming of hostility. Longitudinal studies suggest small effects. Real-world data (Japan: high media, low crime) complicates causal claims.'
        }
      ],
      hints: '- Use correct terminology (correlation, causation, priming)\n- Distinguish between TV/film (passive) and games (active)\n- Reference effect sizes and their implications\n- Avoid overstating the strength of evidence'
    },
    AO3: {
      marks: 10,
      title: 'Analysis & Evaluation (AO3) - 10 Marks',
      content: [
        {
          point: 'Evaluate strength of correlational evidence',
          detail: 'Small correlations (r = 0.24) explain only 6% of variance in aggression. Cannot prove causation; reverse causality possible (aggressive people select violent media). Third variables (family, peers) likely involved.'
        },
        {
          point: 'Evaluate ecological validity of experiments',
          detail: 'Lab aggression (button-pressing, hot sauce) differs fundamentally from real violence. Artificial setting, demand characteristics, short timeframes. Findings may not generalize to real-world aggression.'
        },
        {
          point: 'Evaluate definition inconsistency',
          detail: 'Different studies define aggression differently (thoughts, arousal, behavior, self-report vs. observer-rated). This inconsistency makes it difficult to synthesize findings and draw firm conclusions about media effects.'
        },
        {
          point: 'Evaluate real-world contradictions',
          detail: 'Violent crime rates DECREASED (1990s-2000s USA) while violent media consumption INCREASED. Japan has high violent media but low violent crime. These real-world patterns contradict simple causal models.'
        },
        {
          point: 'Consider individual differences',
          detail: 'Effects are NOT universal. Some people are more susceptible than others. Personality, family factors, age, peer influences, and SES moderate media effects. Single-factor explanations are too simplistic.'
        },
        {
          point: 'Compare with alternative explanations',
          detail: 'Social learning can occur WITHOUT media (observing peers, family, teachers). Frustration-aggression (Lesson 5) and institutional factors (Lesson 8) may be more important than media. Media as one factor among many.'
        }
      ],
      hints: '- Use "suggests," "indicates," "could," NOT "proves"\n- Acknowledge that media likely HAS some effect (don\'t dismiss entirely)\n- BUT emphasize that effect is WEAK and INCONSISTENT\n- Reference specific studies and their limitations\n- Discuss publication bias and selective reporting\n- Use real-world evidence as counterweight to lab studies'
    }
  }

  const currentPlan = essayPlans[selectedAO]

  return (
    <div className={`flex flex-col gap-6 h-full ${isPresentation ? 'p-8' : 'p-6'}`}>
      <div className="flex items-center gap-3 mb-2">
        <BookOpen className="text-blue-500" size={isPresentation ? 40 : 32} />
        <h3 className={`font-bold text-blue-100 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
          16-Mark Essay Plan
        </h3>
      </div>

      <div className="flex gap-3">
        {Object.keys(essayPlans).map((ao) => (
          <button
            key={ao}
            onClick={() => setSelectedAO(ao)}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              selectedAO === ao
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-blue-800 text-blue-200 hover:bg-blue-700'
            } ${isPresentation ? 'text-lg' : 'text-base'}`}
          >
            {ao}
          </button>
        ))}
      </div>

      <div className={`flex-grow overflow-y-auto ${isPresentation ? 'pr-4' : ''}`}>
        <div className="bg-blue-900/30 border-2 border-blue-600 rounded-lg p-4 mb-4">
          <p className={`text-blue-100 font-bold ${isPresentation ? 'text-lg' : 'text-base'}`}>
            {currentPlan.title}
          </p>
        </div>

        <div className="space-y-4">
          {currentPlan.content.map((item, idx) => (
            <div
              key={idx}
              className="bg-blue-950/50 border-2 border-blue-700 rounded-lg p-4 hover:border-blue-500 transition-all"
            >
              <div className="flex items-start gap-3 mb-2">
                <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <h4 className={`font-bold text-blue-200 ${isPresentation ? 'text-base' : 'text-sm'}`}>
                  {idx + 1}. {item.point}
                </h4>
              </div>
              <p className={`text-blue-100 ml-8 leading-relaxed ${isPresentation ? 'text-base' : 'text-sm'}`}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-900/50 border-2 border-blue-500 rounded-lg p-4 mt-6">
          <p className={`text-blue-300 font-bold mb-3 flex items-center gap-2 ${isPresentation ? 'text-base' : 'text-sm'}`}>
            <AlertCircle className="text-blue-400" size={20} />
            Key Hints:
          </p>
          <div className={`text-blue-100 whitespace-pre-wrap leading-relaxed ${isPresentation ? 'text-base' : 'text-sm'}`}>
            {currentPlan.hints}
          </div>
        </div>
      </div>

      <div className="bg-blue-900/60 border-2 border-blue-500 rounded-lg p-4 mt-4">
        <p className={`text-blue-100 font-semibold leading-relaxed ${isPresentation ? 'text-base' : 'text-sm'}`}>
          <span className="text-blue-300">Essay Question:</span> "Discuss the effects of media on aggressive behaviour." Ensure you evaluate the STRENGTH of evidence, consider alternative explanations, and avoid claiming media is a major cause when research suggests it's one minor factor among many.
        </p>
      </div>
    </div>
  )
}
