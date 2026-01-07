import React from 'react'
import { Users, EyeOff } from 'lucide-react'

export default function Lesson7CritiqueGrid({ isPresentation }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      
      {/* Johnson & Downing */}
      <div className="bg-zinc-900 border border-zinc-800 p-6 relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-zinc-800 p-2"><Users className="text-zinc-400" size={32} /></div>
          <h3 className={`text-zinc-200 font-code font-bold ${isPresentation ? 'text-4xl' : 'text-xl'}`}>Nuance: Social Cues</h3>
        </div>
        <p className={`text-zinc-400 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
          <strong>Johnson & Downing (1979):</strong> Replicated Zimbardo but used <strong>KKK Hoods</strong> vs <strong>Nurse Uniforms</strong>. 
          <br/><br/>
          KKK group shocked most. Nurse group shocked <em>least</em>. 
          <br/>
          <strong>Conclusion:</strong> De-individuation makes people conform to the <strong>Group Norm</strong> (Prosocial for nurses), not just blindly aggressive.
        </p>
      </div>

      {/* Gergen */}
      <div className="bg-zinc-900 border border-zinc-800 p-6 relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-zinc-800 p-2"><EyeOff className="text-zinc-400" size={32} /></div>
          <h3 className={`text-zinc-200 font-code font-bold ${isPresentation ? 'text-4xl' : 'text-xl'}`}>Deviance in the Dark</h3>
        </div>
        <p className={`text-zinc-400 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
          <strong>Gergen et al. (1973):</strong> Strangers in a pitch-black room vs lit room. 
          <br/><br/>
          In the dark, participants did NOT become aggressive; they became intimate (kissing, touching).
          <br/>
          <strong>Conclusion:</strong> Anonymity frees up inhibited behavior, but that behavior isn't necessarily aggressive.
        </p>
      </div>

    </div>
  )
}
