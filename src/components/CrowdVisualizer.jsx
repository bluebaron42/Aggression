import React, { useState } from 'react'
import { Users } from 'lucide-react'

export default function CrowdVisualizer({ isPresentation }) {
  const [density, setDensity] = useState(10)

  // Generate crowd icons based on density
  const crowd = Array.from({ length: Math.floor(density / 2) }).map((_, i) => ({
    id: i,
    blur: density > 30 ? (density - 30) / 40 : 0,
    color: density > 60 ? `rgba(220, 38, 38, ${0.5 + Math.random() * 0.5})` : `rgba(255, 255, 255, ${0.3 + Math.random() * 0.5})`
  }))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Visualizer */}
      <div className="bg-black border border-zinc-800 p-4 relative overflow-hidden flex flex-wrap content-center justify-center gap-2">
        {crowd.map((c) => (
          <Users 
            key={c.id} 
            size={isPresentation ? 40 : 24} 
            style={{ 
              color: c.color, 
              filter: `blur(${c.blur}px)`,
              transform: `scale(${1 + (density/200)})` 
            }} 
            className="transition-all duration-500"
          />
        ))}
        
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {density > 80 && (
            <h3 className="font-glitch text-red-500 text-6xl animate-pulse text-center bg-black/50 p-4">DISINHIBITION<br/>ACTIVE</h3>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col justify-center bg-zinc-900/50 p-8 border-l-4 border-red-600">
        <label className="text-zinc-400 font-code text-xs uppercase mb-4 block">Crowd Density / Anonymity Level</label>
        <input 
          type="range" 
          min="10" 
          max="100" 
          value={density} 
          onChange={(e) => setDensity(e.target.value)}
          className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-600 mb-8"
        />
        
        <div className="space-y-6">
          <div className={`transition-all duration-500 ${density < 40 ? 'opacity-100' : 'opacity-30'}`}>
            <strong className={`text-white block mb-1 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>Low Density: Individuated</strong>
            <p className="text-zinc-500 text-sm">Personal identity is intact. Social norms and fear of evaluation inhibit aggression.</p>
          </div>
          <div className={`transition-all duration-500 ${density >= 40 && density < 80 ? 'opacity-100' : 'opacity-30'}`}>
            <strong className={`text-white block mb-1 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>Med Density: De-individuation Begins</strong>
            <p className="text-zinc-500 text-sm">Anonymity increases. Responsibility becomes diffused. Fear of negative evaluation drops.</p>
          </div>
          <div className={`transition-all duration-500 ${density >= 80 ? 'opacity-100' : 'opacity-30'}`}>
            <strong className={`text-red-500 block mb-1 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>High Density: Disinhibited</strong>
            <p className="text-zinc-500 text-sm">Loss of self-identity. Behavior becomes impulsive, irrational, and anti-social. The "Mob Mentality" takes over.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
