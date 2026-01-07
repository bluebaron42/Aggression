import React, { useState, useEffect } from 'react'
import { AlertTriangle, TrendingUp, Users, Shield, Building } from 'lucide-react'

export default function ThreePrisonsSim({ isPresentation }) {
  const [phase, setPhase] = useState('briefing') // briefing, running, results
  const [turn, setTurn] = useState(0)
  const maxTurns = 6

  const [prisons, setPrisons] = useState([
    {
      id: 'A',
      name: 'Rikers Detention Center',
      type: 'High-Security (Gang-Heavy)',
      importationRisk: 9, // High gang population
      deprivationLevel: 5, // Moderate conditions
      violence: 40,
      resources: { education: 0, security: 1, amenities: 0 },
      description: 'Majority gang-affiliated inmates. High importation risk.',
      color: 'red'
    },
    {
      id: 'B',
      name: 'Alcatraz Supermax',
      type: 'Maximum Security (Harsh Regime)',
      importationRisk: 4, // Mixed population
      deprivationLevel: 9, // Extremely harsh
      violence: 50,
      resources: { education: 0, security: 1, amenities: 0 },
      description: 'Solitary confinement, constant lockdowns. High deprivation.',
      color: 'orange'
    },
    {
      id: 'C',
      name: 'Halden Rehabilitation',
      type: 'Rehabilitative (Low-Security)',
      importationRisk: 3, // Screened population
      deprivationLevel: 2, // Good conditions
      violence: 15,
      resources: { education: 1, security: 1, amenities: 0 },
      description: 'Focus on education and reintegration. Low both factors.',
      color: 'green'
    }
  ])

  const [log, setLog] = useState([])
  const resourceLimit = 6 // Total points to allocate per turn

  const allocateResource = (prisonId, resourceType, delta) => {
    if (phase !== 'running') return
    
    setPrisons(prev => {
      const totalAllocated = prev.reduce((sum, p) => 
        sum + Object.values(p.resources).reduce((a, b) => a + b, 0), 0
      )
      
      return prev.map(p => {
        if (p.id === prisonId) {
          const currentValue = p.resources[resourceType]
          const newValue = Math.max(0, Math.min(3, currentValue + delta))
          
          // Calculate what the new total would be
          const currentPrisonTotal = Object.values(p.resources).reduce((a, b) => a + b, 0)
          const newPrisonTotal = currentPrisonTotal - currentValue + newValue
          const newGlobalTotal = totalAllocated - currentValue + newValue
          
          // Only allow if we're within the global limit
          if (newGlobalTotal <= resourceLimit) {
            return {
              ...p,
              resources: { ...p.resources, [resourceType]: newValue }
            }
          }
        }
        return p
      })
    })
  }

  const advanceTurn = () => {
    if (turn >= maxTurns) {
      setPhase('results')
      return
    }

    // Calculate violence change based on model
    const updatedPrisons = prisons.map(p => {
      let violenceDelta = 0
      
      // Importation Model Impact
      const gangEffect = p.importationRisk * 2
      violenceDelta += gangEffect
      
      // Deprivation Model Impact  
      const deprivationEffect = p.deprivationLevel * 1.5
      violenceDelta += deprivationEffect
      
      // Resource Mitigation
      const educationMitigation = p.resources.education * -8
      const securityMitigation = p.resources.security * -5
      const amenitiesMitigation = p.resources.amenities * -6
      
      violenceDelta += educationMitigation + securityMitigation + amenitiesMitigation
      
      // Apply random variation
      violenceDelta += (Math.random() * 10 - 5)
      
      const newViolence = Math.max(0, Math.min(100, p.violence + violenceDelta))
      
      // Generate log
      let reason = ""
      if (gangEffect > deprivationEffect) {
        reason = `IMPORTATION: Gang activity (${p.importationRisk}/10 risk)`
      } else {
        reason = `DEPRIVATION: Harsh conditions (${p.deprivationLevel}/10 severity)`
      }
      
      if (educationMitigation < 0) reason += ` | Education programs reducing violence`
      if (securityMitigation < 0) reason += ` | Security staff controlling outbreaks`
      if (amenitiesMitigation < 0) reason += ` | Improved amenities lowering stress`
      
      setLog(prev => [...prev, {
        turn: turn + 1,
        prison: p.name,
        violence: newViolence.toFixed(0),
        change: violenceDelta > 0 ? `+${violenceDelta.toFixed(0)}` : violenceDelta.toFixed(0),
        reason
      }])
      
      return { ...p, violence: newViolence }
    })
    
    setPrisons(updatedPrisons)
    setTurn(turn + 1)
  }

  const reset = () => {
    setPhase('briefing')
    setTurn(0)
    setLog([])
    setPrisons([
      { id: 'A', name: 'Rikers Detention Center', type: 'High-Security (Gang-Heavy)', importationRisk: 9, deprivationLevel: 5, violence: 40, resources: { education: 0, security: 1, amenities: 0 }, description: 'Majority gang-affiliated inmates. High importation risk.', color: 'red' },
      { id: 'B', name: 'Alcatraz Supermax', type: 'Maximum Security (Harsh Regime)', importationRisk: 4, deprivationLevel: 9, violence: 50, resources: { education: 0, security: 1, amenities: 0 }, description: 'Solitary confinement, constant lockdowns. High deprivation.', color: 'orange' },
      { id: 'C', name: 'Halden Rehabilitation', type: 'Rehabilitative (Low-Security)', importationRisk: 3, deprivationLevel: 2, violence: 15, resources: { education: 1, security: 1, amenities: 0 }, description: 'Focus on education and reintegration. Low both factors.', color: 'green' }
    ])
  }

  const totalAllocated = prisons.reduce((sum, p) => 
    sum + Object.values(p.resources).reduce((a, b) => a + b, 0), 0
  )

  return (
    <div className="h-full flex flex-col bg-zinc-950 border-4 border-zinc-800 font-mono text-xs">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b-2 border-orange-600 bg-black">
        <div className="flex items-center gap-2">
          <Building size={20} className="text-orange-500" />
          <span className="text-orange-500 font-bold tracking-widest text-lg">CORRECTIONAL_OVERSIGHT_SYS</span>
        </div>
        <div className="text-zinc-500">STATUS: {phase.toUpperCase()}</div>
      </div>

      <div className="flex-grow p-6 overflow-y-auto">
        {/* BRIEFING */}
        {phase === 'briefing' && (
          <div className="flex flex-col items-center justify-center h-full gap-6 max-w-4xl mx-auto">
            <div className="border-4 border-orange-700 p-8 bg-zinc-900 w-full">
              <div className="bg-orange-600 text-black font-bold px-4 py-2 text-center mb-6 text-xl uppercase">
                Mission Briefing: Three Prisons
              </div>
              
              <div className="space-y-4 text-zinc-300">
                <p className={isPresentation ? 'text-2xl' : 'text-sm'}>
                  You oversee <strong>3 correctional facilities</strong> with different profiles. Your goal: <strong>Minimize violence</strong> by allocating limited resources.
                </p>
                
                <div className="grid grid-cols-3 gap-4 my-6">
                  {prisons.map(p => {
                    const borderColor = p.color === 'red' ? 'border-red-700' : p.color === 'orange' ? 'border-orange-700' : 'border-green-700'
                    const bgColor = p.color === 'red' ? 'bg-red-950/30' : p.color === 'orange' ? 'bg-orange-950/30' : 'bg-green-950/30'
                    const textColor = p.color === 'red' ? 'text-red-400' : p.color === 'orange' ? 'text-orange-400' : 'text-green-400'
                    
                    return (
                    <div key={p.id} className={`${bgColor} border-2 ${borderColor} p-4`}>
                      <h4 className={`${textColor} font-bold mb-2`}>Prison {p.id}</h4>
                      <p className="text-xs text-zinc-400">{p.type}</p>
                      <div className="mt-3 space-y-1 text-xs">
                        <div>Import Risk: <span className="text-white font-bold">{p.importationRisk}/10</span></div>
                        <div>Deprivation: <span className="text-white font-bold">{p.deprivationLevel}/10</span></div>
                      </div>
                    </div>
                  )})}
                </div>

                <div className="bg-black p-4 border-l-4 border-orange-600">
                  <strong className="text-orange-400 block mb-2">Resources (6 points total per turn)</strong>
                  <ul className="space-y-1 text-xs">
                    <li>• <strong>Education Programs</strong>: Reduce importation effects</li>
                    <li>• <strong>Security Staff</strong>: Control immediate violence</li>
                    <li>• <strong>Amenities</strong>: Reduce deprivation stress</li>
                  </ul>
                </div>

                <div className="bg-red-950/20 p-4 border border-red-700 text-center">
                  <strong className="text-red-400">Hypothesis:</strong> Both importation and deprivation contribute. Allocate wisely.
                </div>
              </div>
            </div>

            <button 
              onClick={() => setPhase('running')}
              className="bg-orange-600 text-black px-12 py-4 font-bold text-xl uppercase hover:bg-orange-500 transition-all"
            >
              Begin Simulation
            </button>
          </div>
        )}

        {/* RUNNING */}
        {phase === 'running' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-zinc-900 p-4 border border-zinc-700">
              <div>
                <span className="text-zinc-500 text-xs uppercase">Turn Progress</span>
                <div className="text-white font-bold text-2xl">{turn} / {maxTurns}</div>
              </div>
              <div>
                <span className="text-zinc-500 text-xs uppercase">Resources Allocated</span>
                <div className={`font-bold text-2xl ${totalAllocated > resourceLimit ? 'text-red-500' : 'text-green-500'}`}>
                  {totalAllocated} / {resourceLimit}
                </div>
              </div>
              <button
                onClick={advanceTurn}
                disabled={totalAllocated > resourceLimit}
                className={`px-8 py-3 font-bold uppercase ${totalAllocated > resourceLimit ? 'bg-zinc-700 text-zinc-500 cursor-not-allowed' : 'bg-orange-600 text-black hover:bg-orange-500'}`}
              >
                Advance Turn →
              </button>
            </div>

            {/* Prisons Grid */}
            <div className="grid grid-cols-3 gap-4">
              {prisons.map(p => {
                const borderColor = p.color === 'red' ? 'border-red-700' : p.color === 'orange' ? 'border-orange-700' : 'border-green-700'
                const bgColor = p.color === 'red' ? 'bg-red-950/20' : p.color === 'orange' ? 'bg-orange-950/20' : 'bg-green-950/20'
                const textColor = p.color === 'red' ? 'text-red-400' : p.color === 'orange' ? 'text-orange-400' : 'text-green-400'
                
                return (
                <div key={p.id} className={`${bgColor} border-2 ${borderColor} p-4`}>
                  <h3 className={`${textColor} font-bold text-lg mb-2`}>Prison {p.id}</h3>
                  <p className="text-zinc-400 text-xs mb-4">{p.name}</p>
                  
                  {/* Violence Meter */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-500">Violence Level</span>
                      <span className={`font-bold ${p.violence > 70 ? 'text-red-500' : p.violence > 40 ? 'text-yellow-500' : 'text-green-500'}`}>
                        {p.violence.toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full h-3 bg-zinc-800 border border-zinc-700">
                      <div 
                        className={`h-full transition-all ${p.violence > 70 ? 'bg-red-600' : p.violence > 40 ? 'bg-yellow-600' : 'bg-green-600'}`}
                        style={{ width: `${p.violence}%` }}
                      />
                    </div>
                  </div>

                  {/* Resource Controls */}
                  <div className="space-y-2">
                    <div className="bg-black p-2 border border-zinc-800">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-zinc-400">Education</span>
                        <span className="text-white font-bold">{p.resources.education}</span>
                      </div>
                      <div className="flex gap-1">
                        <button 
                          onClick={() => allocateResource(p.id, 'education', -1)} 
                          className="flex-1 bg-red-900 hover:bg-red-800 text-white px-2 py-1 text-xs cursor-pointer"
                        >
                          -
                        </button>
                        <button 
                          onClick={() => allocateResource(p.id, 'education', 1)} 
                          className="flex-1 bg-green-900 hover:bg-green-800 text-white px-2 py-1 text-xs cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="bg-black p-2 border border-zinc-800">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-zinc-400">Security</span>
                        <span className="text-white font-bold">{p.resources.security}</span>
                      </div>
                      <div className="flex gap-1">
                        <button 
                          onClick={() => allocateResource(p.id, 'security', -1)} 
                          className="flex-1 bg-red-900 hover:bg-red-800 text-white px-2 py-1 text-xs cursor-pointer"
                        >
                          -
                        </button>
                        <button 
                          onClick={() => allocateResource(p.id, 'security', 1)} 
                          className="flex-1 bg-green-900 hover:bg-green-800 text-white px-2 py-1 text-xs cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="bg-black p-2 border border-zinc-800">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-zinc-400">Amenities</span>
                        <span className="text-white font-bold">{p.resources.amenities}</span>
                      </div>
                      <div className="flex gap-1">
                        <button 
                          onClick={() => allocateResource(p.id, 'amenities', -1)} 
                          className="flex-1 bg-red-900 hover:bg-red-800 text-white px-2 py-1 text-xs cursor-pointer"
                        >
                          -
                        </button>
                        <button 
                          onClick={() => allocateResource(p.id, 'amenities', 1)} 
                          className="flex-1 bg-green-900 hover:bg-green-800 text-white px-2 py-1 text-xs cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 text-xs text-zinc-500 space-y-1">
                    <div>Import Risk: {p.importationRisk}/10</div>
                    <div>Deprivation: {p.deprivationLevel}/10</div>
                  </div>
                </div>
              )})}
            </div>

            {/* Event Log */}
            {log.length > 0 && (
              <div className="bg-black border-2 border-zinc-700 p-4 max-h-64 overflow-y-auto">
                <h4 className="text-orange-500 font-bold mb-3 uppercase">Incident Log</h4>
                <div className="space-y-2">
                  {log.slice().reverse().map((entry, idx) => (
                    <div key={idx} className="text-xs border-l-2 border-zinc-700 pl-3 py-1">
                      <div className="flex gap-4">
                        <span className="text-zinc-600">T{entry.turn}</span>
                        <span className="text-zinc-400 flex-grow">{entry.prison}</span>
                        <span className={entry.change.startsWith('+') ? 'text-red-500' : 'text-green-500'}>
                          {entry.change}%
                        </span>
                        <span className="text-white">{entry.violence}%</span>
                      </div>
                      <div className="text-zinc-600 mt-1">{entry.reason}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* RESULTS */}
        {phase === 'results' && (
          <div className="flex flex-col items-center justify-center h-full gap-6 max-w-4xl mx-auto">
            <div className="border-4 border-orange-700 p-8 bg-zinc-900 w-full">
              <div className="bg-orange-600 text-black font-bold px-4 py-2 text-center mb-6 text-xl uppercase">
                Final Report
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {prisons.map(p => {
                  const borderColor = p.color === 'red' ? 'border-red-700' : p.color === 'orange' ? 'border-orange-700' : 'border-green-700'
                  const bgColor = p.color === 'red' ? 'bg-red-950/30' : p.color === 'orange' ? 'bg-orange-950/30' : 'bg-green-950/30'
                  const textColor = p.color === 'red' ? 'text-red-400' : p.color === 'orange' ? 'text-orange-400' : 'text-green-400'
                  
                  return (
                  <div key={p.id} className={`${bgColor} border-2 ${borderColor} p-4 text-center`}>
                    <h4 className={`${textColor} font-bold text-lg mb-2`}>Prison {p.id}</h4>
                    <div className={`text-4xl font-bold mb-2 ${p.violence > 70 ? 'text-red-500' : p.violence > 40 ? 'text-yellow-500' : 'text-green-500'}`}>
                      {p.violence.toFixed(0)}%
                    </div>
                    <div className="text-xs text-zinc-400">
                      {p.violence > 70 ? 'CRITICAL' : p.violence > 40 ? 'MODERATE' : 'CONTROLLED'}
                    </div>
                  </div>
                )})}
              </div>

              <div className="bg-black p-6 border-l-4 border-orange-600">
                <h4 className="text-orange-400 font-bold mb-3 uppercase">Theoretical Analysis</h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>• <strong>Prison A (High Importation):</strong> Gang culture drives baseline violence. Education programs most effective.</li>
                  <li>• <strong>Prison B (High Deprivation):</strong> Harsh conditions create reactive violence. Amenities reduce stress.</li>
                  <li>• <strong>Prison C (Rehabilitative):</strong> Low both factors = Low violence. Demonstrates importance of both models.</li>
                </ul>
              </div>

              <div className="mt-6 bg-green-950/20 p-4 border border-green-700 text-center">
                <p className="text-green-400 text-sm">
                  <strong>Conclusion:</strong> Both Importation and Deprivation models explain institutional aggression. An interactive approach is most effective.
                </p>
              </div>
            </div>

            <button onClick={reset} className="text-orange-500 underline uppercase font-bold hover:text-white">
              Reset Simulation
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
