import React, { useState } from 'react'
import { Lock, Users, Heart, Package, Home, Shield } from 'lucide-react'

export default function DeprivationBreakdown({ isPresentation }) {
  const [activeDeprivation, setActiveDeprivation] = useState(0)

  const deprivations = [
    {
      name: "Liberty",
      icon: Lock,
      description: "Confinement and restriction of movement. Loss of freedom.",
      psychImpact: "Frustration, helplessness, resentment toward authority",
      adaptiveResponse: "Territorial control of space (e.g., claiming cells, areas)",
      color: "red"
    },
    {
      name: "Autonomy",
      icon: Shield,
      description: "Every action is controlled and monitored. No decision-making power.",
      psychImpact: "Loss of identity, dehumanization, learned helplessness",
      adaptiveResponse: "Asserting power through violence to regain control",
      color: "orange"
    },
    {
      name: "Goods & Services",
      icon: Package,
      description: "Basic material comforts are removed (quality food, possessions).",
      psychImpact: "Deprivation stress, resource scarcity mindset",
      adaptiveResponse: "Violence to acquire/protect scarce goods (black market)",
      color: "yellow"
    },
    {
      name: "Heterosexual Relationships",
      icon: Heart,
      description: "Separation from romantic/sexual partners.",
      psychImpact: "Sexual frustration, loneliness, emotional isolation",
      adaptiveResponse: "Compensatory hyper-masculinity, dominance displays",
      color: "pink"
    },
    {
      name: "Security",
      icon: Users,
      description: "Constant threat from other inmates. No guarantee of safety.",
      psychImpact: "Chronic fear, hypervigilance, paranoia",
      adaptiveResponse: "Preemptive violence for self-protection, gang alliances",
      color: "purple"
    }
  ]

  const current = deprivations[activeDeprivation]
  const Icon = current.icon

  return (
    <div className="flex flex-col h-full gap-6">
      {/* Header */}
      <div className="bg-zinc-950 border-2 border-green-700 p-6">
        <h3 className={`text-green-500 font-mono font-bold uppercase mb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
          The Deprivation Model
        </h3>
        <p className={`text-zinc-400 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
          <strong className="text-green-400">Sykes (1958):</strong> Harsh prison conditions cause aggression. Violence is an adaptive solution to stress.
        </p>
      </div>

      {/* Interactive Display */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Deprivation Selector */}
        <div className="space-y-2">
          {deprivations.map((dep, idx) => {
            const DepIcon = dep.icon
            return (
              <button
                key={dep.name}
                onClick={() => setActiveDeprivation(idx)}
                className={`w-full p-4 border-2 text-left transition-all flex items-center gap-4 ${activeDeprivation === idx ? `bg-${dep.color}-950/50 border-${dep.color}-600` : 'bg-black border-zinc-800 hover:border-zinc-600'}`}
              >
                <DepIcon size={24} className={activeDeprivation === idx ? `text-${dep.color}-500` : 'text-zinc-600'} />
                <div className="flex-grow">
                  <h4 className={`font-bold ${activeDeprivation === idx ? `text-${dep.color}-400` : 'text-zinc-500'} ${isPresentation ? 'text-2xl' : 'text-base'}`}>
                    {idx + 1}. {dep.name}
                  </h4>
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Detail */}
        <div className="bg-zinc-950 border-2 border-green-700 p-6 flex flex-col">
          <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-green-800">
            <Icon size={48} className="text-green-500" />
            <h3 className={`text-green-400 font-bold uppercase ${isPresentation ? 'text-3xl' : 'text-2xl'}`}>
              {current.name}
            </h3>
          </div>

          <div className="space-y-4 flex-grow">
            <div className="bg-black p-4 border-l-4 border-zinc-600">
              <strong className="text-zinc-400 text-xs uppercase block mb-1">What is Deprived</strong>
              <p className={`text-white ${isPresentation ? 'text-2xl' : 'text-sm'}`}>{current.description}</p>
            </div>

            <div className="bg-black p-4 border-l-4 border-yellow-600">
              <strong className="text-yellow-400 text-xs uppercase block mb-1">Psychological Impact</strong>
              <p className={`text-zinc-300 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>{current.psychImpact}</p>
            </div>

            <div className="bg-red-950/30 p-4 border-l-4 border-red-600">
              <strong className="text-red-400 text-xs uppercase block mb-1">Adaptive Response (Violence)</strong>
              <p className={`text-red-300 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>{current.adaptiveResponse}</p>
            </div>
          </div>

          <div className="mt-4 bg-green-950/20 p-3 border border-green-800 text-center">
            <span className={`text-green-500 font-mono text-xs uppercase ${isPresentation ? 'text-xl' : ''}`}>
              Deprivation {activeDeprivation + 1} / 5
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
