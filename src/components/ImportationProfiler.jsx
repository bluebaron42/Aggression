import React, { useState } from 'react'
import { UserCheck, AlertCircle, Shield } from 'lucide-react'

export default function ImportationProfiler({ isPresentation }) {
  const [selectedInmate, setSelectedInmate] = useState(0)

  const inmates = [
    {
      id: "A-4721",
      name: "Subject Alpha",
      background: "Gang Member",
      prePrison: "Violent crime history, gang affiliation (Crips), territorial disputes",
      temperament: "High aggression, low impulse control",
      socialEnv: "Criminality normalized in peer group",
      prediction: "HIGH RISK - Will import gang subculture, recruit inmates, territorial violence",
      riskLevel: "critical"
    },
    {
      id: "B-2093",
      name: "Subject Beta",
      background: "White Collar Criminal",
      prePrison: "Fraud, embezzlement. No violent history.",
      temperament: "Calculated, non-confrontational",
      socialEnv: "Professional background, middle-class norms",
      prediction: "LOW RISK - Unlikely to engage in physical aggression",
      riskLevel: "low"
    },
    {
      id: "C-8156",
      name: "Subject Gamma",
      background: "Drug Offender",
      prePrison: "Substance abuse, theft. Some assault charges.",
      temperament: "Impulsive when provoked, paranoia",
      socialEnv: "Street culture, distrust of authority",
      prediction: "MODERATE RISK - May engage in reactive violence under stress",
      riskLevel: "moderate"
    }
  ]

  const current = inmates[selectedInmate]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Profile Display */}
      <div className="bg-zinc-950 border-2 border-zinc-700 p-6 font-mono">
        <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-orange-600">
          <h3 className="text-orange-500 font-bold text-xl uppercase tracking-wider">Inmate Profile System</h3>
          <UserCheck className="text-orange-500" size={24} />
        </div>

        <div className="space-y-4">
          <div className="bg-black p-4 border-l-4 border-green-600">
            <span className="text-green-500 text-xs uppercase block mb-1">Inmate ID</span>
            <span className={`text-white font-bold ${isPresentation ? 'text-3xl' : 'text-xl'}`}>{current.id}</span>
          </div>

          <div className="bg-black p-4 border-l-4 border-zinc-500">
            <span className="text-zinc-400 text-xs uppercase block mb-1">Classification</span>
            <span className={`text-white ${isPresentation ? 'text-2xl' : 'text-base'}`}>{current.background}</span>
          </div>

          <div className="bg-black p-4 border-l-4 border-zinc-500">
            <span className="text-zinc-400 text-xs uppercase block mb-2">Pre-Prison History</span>
            <p className={`text-zinc-300 ${isPresentation ? 'text-xl' : 'text-sm'}`}>{current.prePrison}</p>
          </div>

          <div className="bg-black p-4 border-l-4 border-zinc-500">
            <span className="text-zinc-400 text-xs uppercase block mb-2">Temperament Profile</span>
            <p className={`text-zinc-300 ${isPresentation ? 'text-xl' : 'text-sm'}`}>{current.temperament}</p>
          </div>

          <div className="bg-black p-4 border-l-4 border-zinc-500">
            <span className="text-zinc-400 text-xs uppercase block mb-2">Social Environment</span>
            <p className={`text-zinc-300 ${isPresentation ? 'text-xl' : 'text-sm'}`}>{current.socialEnv}</p>
          </div>

          <div className={`p-4 border-2 ${current.riskLevel === 'critical' ? 'bg-red-950/30 border-red-600' : current.riskLevel === 'moderate' ? 'bg-yellow-950/30 border-yellow-600' : 'bg-green-950/30 border-green-600'}`}>
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={16} className={current.riskLevel === 'critical' ? 'text-red-500' : current.riskLevel === 'moderate' ? 'text-yellow-500' : 'text-green-500'} />
              <span className={`text-xs uppercase font-bold ${current.riskLevel === 'critical' ? 'text-red-500' : current.riskLevel === 'moderate' ? 'text-yellow-500' : 'text-green-500'}`}>Risk Assessment</span>
            </div>
            <p className={`${current.riskLevel === 'critical' ? 'text-red-300' : current.riskLevel === 'moderate' ? 'text-yellow-300' : 'text-green-300'} ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              {current.prediction}
            </p>
          </div>
        </div>
      </div>

      {/* Theory Explanation */}
      <div className="bg-zinc-900 p-8 border-2 border-orange-600">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="text-orange-500" size={32} />
          <h3 className={`text-orange-500 font-bold uppercase ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>Importation Model</h3>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className={`text-white font-bold mb-2 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Theory (Irwin & Cressey)</h4>
            <p className={`text-zinc-300 leading-relaxed ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
              Prisoners <strong>import</strong> their criminal subculture, beliefs, norms, and attitudes from the outside world. 
              Aggression in prisons is <em>not inevitable</em> — it depends on who is imprisoned.
            </p>
          </div>

          <div className="bg-black p-4 border-l-4 border-orange-600">
            <strong className="text-orange-400 block text-xs uppercase mb-2">Key Factors</strong>
            <ul className={`text-zinc-300 space-y-2 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              <li>• <strong>Individual temperament</strong> (e.g., inherent impulsivity)</li>
              <li>• <strong>Social environment</strong> (e.g., gang membership pre-prison)</li>
              <li>• <strong>Criminality</strong> (subcultural norms that glorify violence)</li>
            </ul>
          </div>

          <div className="flex gap-3">
            {inmates.map((inmate, idx) => (
              <button
                key={inmate.id}
                onClick={() => setSelectedInmate(idx)}
                className={`flex-1 p-3 border-2 font-bold text-xs uppercase transition-all ${selectedInmate === idx ? 'bg-orange-600 border-orange-500 text-black' : 'bg-black border-zinc-700 text-zinc-500 hover:border-orange-800'}`}
              >
                {inmate.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
