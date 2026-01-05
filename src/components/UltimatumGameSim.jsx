import React, { useState } from 'react'
import { Microscope, Activity } from 'lucide-react'

export default function UltimatumGameSim({ isPresentation }) {
  const [drug, setDrug] = useState('placebo')
  const [offerType, setOfferType] = useState('fair')
  const [amygdalaLevel, setAmygdalaLevel] = useState(20)
  const [decision, setDecision] = useState(null)
  const [history, setHistory] = useState([])

  const runTrial = () => {
    let activity = 20
    let result = "Accept"

    if (offerType === 'unfair') {
      activity = 90

      if (drug === 'benzo') {
        activity = 40
      }
    }

    if (activity > 60) {
      result = "Reject (Aggression)"
    } else if (offerType === 'unfair' && activity <= 60) {
      result = "Accept (Regulated)"
    }

    setAmygdalaLevel(activity)
    setDecision(result)
    setHistory(prev => [{ offer: offerType, drug: drug, act: activity, res: result }, ...prev].slice(0, 3))
  }

  return (
    <div className="h-full flex flex-col font-mono text-xs md:text-sm bg-slate-900 border-4 border-slate-800 rounded-xl relative overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b-2 border-slate-800 bg-slate-950 z-10">
        <div className="flex items-center gap-2">
          <Microscope size={16} className="text-cyan-500" />
          <span className="text-cyan-500 font-bold tracking-widest">fMRI_SIMULATION_UNIT_01</span>
        </div>
        <div className="text-slate-400">SUBJECT_ID: 8944</div>
      </div>

      <div className="flex-grow flex relative z-10">
        {/* Controls (Left) */}
        <div className="w-1/4 border-r-2 border-slate-800 bg-slate-950 p-6 flex flex-col gap-8">
          <div>
            <span className="text-slate-500 block text-[10px] uppercase mb-2">1. Intervention</span>
            <div className="flex gap-2">
              <button
                onClick={() => setDrug('placebo')}
                className={`flex-1 py-2 border rounded transition-all ${
                  drug === 'placebo' ? 'bg-slate-800 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-500'
                }`}
              >
                Placebo
              </button>
              <button
                onClick={() => setDrug('benzo')}
                className={`flex-1 py-2 border rounded transition-all ${
                  drug === 'benzo' ? 'bg-slate-800 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-500'
                }`}
              >
                Benzo
              </button>
            </div>
          </div>

          <div>
            <span className="text-slate-500 block text-[10px] uppercase mb-2">2. Social Provocation</span>
            <div className="flex gap-2">
              <button
                onClick={() => setOfferType('fair')}
                className={`flex-1 py-2 border rounded transition-all ${
                  offerType === 'fair' ? 'bg-slate-800 border-green-500 text-green-400' : 'border-slate-700 text-slate-500'
                }`}
              >
                Fair (50/50)
              </button>
              <button
                onClick={() => setOfferType('unfair')}
                className={`flex-1 py-2 border rounded transition-all ${
                  offerType === 'unfair' ? 'bg-slate-800 border-red-500 text-red-400' : 'border-slate-700 text-slate-500'
                }`}
              >
                Unfair (80/20)
              </button>
            </div>
          </div>

          <button
            onClick={runTrial}
            className="mt-auto w-full py-4 bg-cyan-700 hover:bg-cyan-600 text-white font-bold rounded shadow-lg uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Activity size={16} /> Run Scan
          </button>
        </div>

        {/* Visualizer (Center) */}
        <div className="w-1/2 p-8 flex flex-col items-center justify-center bg-black relative">
          {/* Brain Visual */}
          <div className="relative w-64 h-64 opacity-90 transition-all duration-500">
            {/* Brain Outline */}
            <svg viewBox="0 0 100 100" className="w-full h-full fill-slate-900 stroke-slate-700 stroke-2">
              <path d="M50 95 C 20 95 10 70 10 50 C 10 20 30 5 50 5 C 70 5 90 20 90 50 C 90 70 80 95 50 95" />
            </svg>

            {/* Amygdala Hotspot */}
            <div
              className={`absolute top-[60%] left-[40%] w-8 h-8 rounded-full blur-xl transition-all duration-500 ${
                amygdalaLevel > 50 ? 'bg-red-500' : 'bg-blue-500'
              }`}
              style={{ opacity: amygdalaLevel / 100, transform: `scale(${1 + amygdalaLevel / 100})` }}
            ></div>
            <div className="absolute top-[60%] left-[40%] w-2 h-2 bg-white rounded-full"></div>
          </div>

          <div className="mt-8 text-center">
            <span className="text-slate-500 text-xs uppercase block mb-1">Amygdala Activity</span>
            <div className="w-64 h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div
                className={`h-full transition-all duration-500 ${amygdalaLevel > 60 ? 'bg-red-500' : 'bg-cyan-500'}`}
                style={{ width: `${amygdalaLevel}%` }}
              ></div>
            </div>
            <span className={`block mt-2 font-mono font-bold ${amygdalaLevel > 60 ? 'text-red-500' : 'text-cyan-500'}`}>
              {amygdalaLevel}%
            </span>
          </div>
        </div>

        {/* Output (Right) */}
        <div className="w-1/4 border-l-2 border-slate-800 bg-slate-950 p-6 flex flex-col">
          <span className="text-slate-500 block text-[10px] uppercase mb-4">Subject Response</span>

          <div
            className={`p-4 rounded border-l-4 mb-8 transition-all ${
              decision
                ? decision.includes('Reject')
                  ? 'bg-red-900/20 border-red-500'
                  : 'bg-green-900/20 border-green-500'
                : 'bg-slate-900 border-slate-700'
            }`}
          >
            <span
              className={`text-2xl font-bold block ${
                decision ? (decision.includes('Reject') ? 'text-red-400' : 'text-green-400') : 'text-slate-600'
              }`}
            >
              {decision || "WAITING..."}
            </span>
          </div>

          <div className="mt-auto">
            <span className="text-slate-500 block text-[10px] uppercase mb-2">Scan History</span>
            <div className="space-y-2">
              {history.map((h, i) => (
                <div key={i} className="text-[10px] font-mono p-2 bg-slate-900 border border-slate-800 rounded text-slate-400 flex justify-between">
                  <span>{h.offer === 'fair' ? 'FAIR' : 'UNFAIR'} + {h.drug === 'benzo' ? 'BENZ' : 'PLAC'}</span>
                  <span className={h.res.includes('Reject') ? 'text-red-500' : 'text-green-500'}>
                    {h.res.includes('Reject') ? 'REJ' : 'ACC'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
