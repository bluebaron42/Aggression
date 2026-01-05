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
    <div className={`h-full flex flex-col font-mono bg-slate-900 border-4 border-slate-800 rounded-xl relative overflow-hidden shadow-2xl ${isPresentation ? 'text-sm' : 'text-xs md:text-sm'}`}>
      {/* Header */}
      <div className={`flex justify-between items-center border-b-2 border-slate-800 bg-slate-950 z-10 ${isPresentation ? 'p-6' : 'p-4'}`}>
        <div className="flex items-center gap-2">
          <Microscope size={isPresentation ? 20 : 16} className="text-red-500" />
          <span className={`text-red-500 font-bold tracking-widest ${isPresentation ? 'text-base' : ''}`}>fMRI_SIMULATION_UNIT_01</span>
        </div>
        <div className={`text-slate-400 ${isPresentation ? 'text-base' : ''}`}>SUBJECT_ID: 8944</div>
      </div>

      <div className={`flex-grow flex relative z-10 ${isPresentation ? '' : ''}`}>
        {/* Controls (Left) */}
        <div className={`border-r-2 border-slate-800 bg-slate-950 flex flex-col gap-8 ${isPresentation ? 'w-1/5 p-8 gap-12' : 'w-1/4 p-6'}`}>
          <div>
            <span className={`text-slate-500 block uppercase mb-2 ${isPresentation ? 'text-sm mb-3' : 'text-[10px]'}`}>1. Intervention</span>
            <div className={`flex gap-2 ${isPresentation ? 'gap-3' : ''}`}>
              <button
                onClick={() => setDrug('placebo')}
                className={`flex-1 border rounded transition-all ${isPresentation ? 'py-3' : 'py-2'} ${
                  drug === 'placebo' ? 'bg-slate-800 border-red-500 text-red-400' : 'border-slate-700 text-slate-500'
                }`}
              >
                Placebo
              </button>
              <button
                onClick={() => setDrug('benzo')}
                className={`flex-1 border rounded transition-all ${isPresentation ? 'py-3' : 'py-2'} ${
                  drug === 'benzo' ? 'bg-slate-800 border-red-500 text-red-400' : 'border-slate-700 text-slate-500'
                }`}
              >
                Benzo
              </button>
            </div>
          </div>

          <div>
            <span className={`text-slate-500 block uppercase mb-2 ${isPresentation ? 'text-sm mb-3' : 'text-[10px]'}`}>2. Social Provocation</span>
            <div className={`flex gap-2 ${isPresentation ? 'gap-3' : ''}`}>
              <button
                onClick={() => setOfferType('fair')}
                className={`flex-1 border rounded transition-all ${isPresentation ? 'py-3' : 'py-2'} ${
                  offerType === 'fair' ? 'bg-slate-800 border-green-500 text-green-400' : 'border-slate-700 text-slate-500'
                }`}
              >
                Fair (50/50)
              </button>
              <button
                onClick={() => setOfferType('unfair')}
                className={`flex-1 border rounded transition-all ${isPresentation ? 'py-3' : 'py-2'} ${
                  offerType === 'unfair' ? 'bg-slate-800 border-red-500 text-red-400' : 'border-slate-700 text-slate-500'
                }`}
              >
                Unfair (80/20)
              </button>
            </div>
          </div>

          <button
            onClick={runTrial}
            className={`mt-auto w-full bg-red-700 hover:bg-red-600 text-white font-bold rounded shadow-lg uppercase tracking-wider flex items-center justify-center gap-2 ${isPresentation ? 'py-5 text-base' : 'py-4'}`}
          >
            <Activity size={isPresentation ? 20 : 16} /> Run Scan
          </button>
        </div>

        {/* Visualizer (Center) */}
        <div className={`flex flex-col items-center justify-center bg-black relative ${isPresentation ? 'w-3/5 p-12' : 'w-1/2 p-8'}`}>
          {/* Brain Visual */}
          <div className={`relative opacity-90 transition-all duration-500 ${isPresentation ? 'w-80 h-80' : 'w-64 h-64'}`}>
            {/* Brain Outline */}
            <svg viewBox="0 0 100 100" className="w-full h-full fill-slate-900 stroke-slate-700 stroke-2">
              <path d="M50 95 C 20 95 10 70 10 50 C 10 20 30 5 50 5 C 70 5 90 20 90 50 C 90 70 80 95 50 95" />
            </svg>

            {/* Amygdala Hotspot */}
            <div
              className={`absolute top-[60%] left-[40%] rounded-full blur-xl transition-all duration-500 ${isPresentation ? 'w-12 h-12' : 'w-8 h-8'} ${
                amygdalaLevel > 50 ? 'bg-red-500' : 'bg-orange-500'
              }`}
              style={{ opacity: amygdalaLevel / 100, transform: `scale(${1 + amygdalaLevel / 100})` }}
            ></div>
            <div className={`absolute top-[60%] left-[40%] rounded-full bg-white ${isPresentation ? 'w-3 h-3' : 'w-2 h-2'}`}></div>
          </div>

          <div className={`text-center ${isPresentation ? 'mt-12' : 'mt-8'}`}>
            <span className={`text-slate-500 uppercase block mb-1 ${isPresentation ? 'text-base mb-3' : 'text-xs'}`}>Amygdala Activity</span>
            <div className={`bg-slate-800 rounded-full overflow-hidden border border-slate-700 ${isPresentation ? 'w-80 h-6' : 'w-64 h-4'}`}>
              <div
                className={`transition-all duration-500 ${amygdalaLevel > 60 ? 'bg-red-500' : 'bg-red-500'}`}
                style={{ width: `${amygdalaLevel}%`, height: '100%' }}
              ></div>
            </div>
            <span className={`block font-mono font-bold mt-2 ${isPresentation ? 'text-lg' : ''} ${amygdalaLevel > 60 ? 'text-red-500' : 'text-red-500'}`}>
              {amygdalaLevel}%
            </span>
          </div>
        </div>

        {/* Output (Right) */}
        <div className={`border-l-2 border-slate-800 bg-slate-950 flex flex-col ${isPresentation ? 'w-1/5 p-8' : 'w-1/4 p-6'}`}>
          <span className={`text-slate-500 uppercase mb-4 ${isPresentation ? 'text-sm mb-6' : 'text-[10px]'}`}>Subject Response</span>

          <div
            className={`rounded border-l-4 mb-8 transition-all ${isPresentation ? 'p-6 mb-12' : 'p-4'} ${
              decision
                ? decision.includes('Reject')
                  ? 'bg-red-900/20 border-red-500'
                  : 'bg-green-900/20 border-green-500'
                : 'bg-slate-900 border-slate-700'
            }`}
          >
            <span
              className={`font-bold block ${isPresentation ? 'text-2xl' : 'text-2xl'} ${
                decision ? (decision.includes('Reject') ? 'text-red-400' : 'text-green-400') : 'text-slate-600'
              }`}
            >
              {decision || "WAITING..."}
            </span>
          </div>

          <div className="mt-auto">
            <span className={`text-slate-500 uppercase mb-2 block ${isPresentation ? 'text-sm mb-3' : 'text-[10px]'}`}>Scan History</span>
            <div className={`space-y-2 ${isPresentation ? 'space-y-3' : ''}`}>
              {history.map((h, i) => (
                <div key={i} className={`font-mono p-2 bg-slate-900 border border-slate-800 rounded text-slate-400 flex justify-between ${isPresentation ? 'p-3 text-sm' : 'text-[10px]'}`}>
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
