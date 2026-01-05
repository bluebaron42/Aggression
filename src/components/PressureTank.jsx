import React, { useState } from 'react'
import { Ban, Flame } from 'lucide-react'

export default function PressureTank({ isPresentation }) {
  const [pressure, setPressure] = useState(10)
  const [vented, setVented] = useState(false)

  const addPressure = () => {
    setPressure(prev => Math.min(100, prev + 20))
    setVented(false)
  }

  const releasePressure = () => {
    setPressure(0)
    setVented(true)
  }

  const getStatusColor = () => {
    if (pressure < 40) return 'text-green-500'
    if (pressure < 80) return 'text-yellow-500'
    return 'text-red-500 animate-pulse'
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Visualizer */}
      <div className="bg-slate-900 border-2 border-slate-700 p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-inner rounded-xl">
        <div className="w-48 h-64 border-4 border-slate-600 bg-slate-950 rounded-lg relative overflow-hidden">
          {/* Water/Steam Level */}
          <div
            className={`absolute bottom-0 w-full transition-all duration-500 ease-out ${pressure > 80 ? 'bg-red-600' : 'bg-orange-500'}`}
            style={{ height: `${pressure}%` }}
          >
            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_2px,transparent_3px)] bg-[size:10px_10px]"></div>
          </div>

          {/* Gauge Needle */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-slate-800 rounded-full border-2 border-slate-500 flex items-center justify-center">
            <div className="w-1 h-6 bg-red-500 origin-bottom transition-transform duration-300" style={{ transform: `rotate(${pressure * 1.8 - 90}deg)` }}></div>
          </div>
        </div>

        {/* Steam Vent Effect */}
        {vented && (
          <div className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-4 h-20 bg-white/20 rounded-full blur-lg animate-steam"></div>
            <div className="w-4 h-20 bg-white/20 rounded-full blur-lg animate-steam" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-4 h-20 bg-white/20 rounded-full blur-lg animate-steam" style={{ animationDelay: '0.4s' }}></div>
          </div>
        )}
      </div>

      {/* Controls & Theory */}
      <div className="flex flex-col justify-center gap-6">
        <div className="bg-slate-800/50 p-6 border-l-4 border-orange-500 rounded-xl">
          <h3 className={`font-mech text-orange-400 mb-2 ${isPresentation ? 'text-3xl' : 'text-xl'}`}>
            The Hydraulic Model
          </h3>
          <p className={`text-slate-300 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
            Dollard et al. (1939) based this on psychodynamic <strong>Catharsis</strong>.
            <br />
            <br />
            1. Goal Blocking creates a <strong>Drive</strong> (Frustration).<br />
            2. Pressure builds up.<br />
            3. Aggression is the physiological release (Catharsis) that reduces drive.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={addPressure}
            disabled={pressure >= 100}
            className="bg-slate-700 hover:bg-slate-600 border border-slate-500 p-4 rounded flex flex-col items-center gap-2 group disabled:opacity-50 transition-all"
          >
            <Ban size={32} className="text-red-400 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-white uppercase text-sm">Block Goal</span>
            <span className="text-[10px] text-slate-400">+ Frustration</span>
          </button>

          <button
            onClick={releasePressure}
            className="bg-orange-900/50 hover:bg-orange-800 border border-orange-600 p-4 rounded flex flex-col items-center gap-2 group transition-all"
          >
            <Flame size={32} className="text-orange-400 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-white uppercase text-sm">Aggress</span>
            <span className="text-[10px] text-orange-300">= Catharsis</span>
          </button>
        </div>

        <div className="text-center font-data text-xs text-slate-500">
          PRESSURE STATUS: <span className={`font-bold ${getStatusColor()}`}>{pressure}% PSI</span>
        </div>
      </div>
    </div>
  )
}
