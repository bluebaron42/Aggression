import React, { useState, useEffect } from 'react'
import { Hammer, CheckCircle, AlertOctagon, MousePointer, Zap } from 'lucide-react'

const events = [
  { id: 1, task: 'Calibrate pressure...' },
  { id: 2, task: 'Adjust tolerances...' },
  { id: 3, task: 'Reboot system...' }
]

export default function ImpossibleTaskSim({ isPresentation }) {
  const [phase, setPhase] = useState('briefing')
  const [progress, setProgress] = useState(0)
  const [frustration, setFrustration] = useState(0)
  const [cueType, setCueType] = useState(null)
  const [shockLevel, setShockLevel] = useState(1)
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    if (phase === 'task') {
      if (progress >= 95 || frustration >= 100 || clickCount >= 15) {
        setFrustration(100)
        const timer = setTimeout(() => setPhase('cue'), 800)
        return () => clearTimeout(timer)
      }
    }
  }, [progress, frustration, clickCount, phase])

  const startTask = () => {
    setCueType(Math.random() > 0.5 ? 'gun' : 'racket')
    setPhase('task')
    setProgress(0)
    setFrustration(0)
    setClickCount(0)
  }

  const handleClick = () => {
    setClickCount(prev => prev + 1)
    const isFailure = Math.random() > 0.7
    if (isFailure) {
      setFrustration(prev => Math.min(100, prev + 25))
      setProgress(prev => Math.max(0, prev - 5))
    } else {
      setProgress(prev => Math.min(100, prev + 12))
    }
  }

  const submitShock = () => {
    setPhase('debrief')
  }

  return (
    <div className="h-full flex flex-col font-mono text-xs md:text-sm bg-slate-900 border-4 border-slate-700 rounded-xl relative overflow-hidden shadow-2xl">
      <div className="flex justify-between items-center p-4 border-b-2 border-slate-700 bg-slate-950 z-10">
        <div className="flex items-center gap-2">
          <AlertOctagon size={16} className="text-orange-500" />
          <span className="text-orange-500 font-bold tracking-widest">SYSTEM_CALIBRATION_V9</span>
        </div>
        <div className={`${frustration > 80 ? 'text-red-500 animate-pulse' : 'text-slate-400'}`}>
          STABILITY: {Math.max(0, 100 - frustration)}%
        </div>
      </div>

      <div className="flex-grow p-8 relative z-10 flex flex-col items-center justify-center bg-slate-950/80">
        <div className="absolute inset-0 bg-hazard opacity-10 pointer-events-none"></div>

        {phase === 'briefing' && (
          <div className="text-center max-w-2xl animate-fadeIn">
            <Hammer size={80} className="text-orange-500 mx-auto mb-6" />
            <h3 className="text-3xl text-white font-bold mb-4 font-mech uppercase">Participant Instructions</h3>
            <p className={`text-slate-400 mb-8 ${isPresentation ? 'text-xl' : 'text-lg'} leading-relaxed`}>
              Please calibrate the pressure system by clicking the stabilizer button until progress reaches 100%.
              <br />
              <br />
              <span className="text-red-400">Warning: System instability detected.</span>
            </p>
            <button
              onClick={startTask}
              className="bg-orange-700 text-white px-8 py-3 font-bold hover:bg-orange-600 transition-all text-xl uppercase border border-orange-500 shadow-lg rounded"
            >
              Begin Calibration
            </button>
          </div>
        )}

        {phase === 'task' && (
          <div className="w-full max-w-md animate-fadeIn flex flex-col items-center gap-8">
            <div className={`w-full h-8 rounded-full border border-slate-600 relative overflow-hidden ${frustration > 80 ? 'bg-red-900/30' : 'bg-slate-800'}`}>
              <div
                className={`h-full transition-all duration-200 ${frustration > 80 ? 'bg-red-600' : 'bg-green-500'}`}
                style={{ width: `${progress}%` }}
              ></div>
              <span className="absolute inset-0 flex items-center justify-center font-bold text-white drop-shadow-md">
                {Math.round(progress)}%
              </span>
            </div>

            <button
              onClick={handleClick}
              className={`w-64 h-64 rounded-full border-8 border-slate-700 bg-slate-800 flex items-center justify-center transition-all active:scale-95 ${frustration > 50 ? 'animate-glitch border-red-500' : 'hover:border-orange-500'}`}
            >
              <div className="text-center">
                <MousePointer size={48} className={`mx-auto mb-2 ${frustration > 50 ? 'text-red-500' : 'text-slate-400'}`} />
                <span className="font-bold text-xl text-white uppercase">STABILIZE</span>
              </div>
            </button>

            {frustration > 30 && <div className="text-red-500 font-mono animate-pulse">ERROR: INPUT LAG DETECTED</div>}
          </div>
        )}

        {phase === 'cue' && (
          <div className="text-center max-w-2xl animate-fadeIn">
            <div className="bg-red-900/20 border-2 border-red-500 p-8 rounded-xl mb-8 relative">
              <span className="absolute top-0 left-0 bg-red-500 text-black px-2 py-1 text-xs font-bold uppercase">System Critical</span>
              <h3 className="text-3xl text-red-500 font-bold mb-4 font-mech">CALIBRATION FAILED</h3>
              <p className="text-slate-300 mb-6">The automated system has crashed. Please wait while we reboot.</p>

              <div className="flex justify-center items-center p-8 bg-slate-900 rounded border border-slate-700">
                {cueType === 'gun' ? (
                  <div className="text-center">
                    <div className="text-6xl mb-2">🔫</div>
                    <span className="text-xs text-slate-600 uppercase tracking-widest">(Object on Desk: Gun)</span>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-6xl mb-2">🏸</div>
                    <span className="text-xs text-slate-600 uppercase tracking-widest">(Object on Desk: Racket)</span>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={() => setPhase('measure')}
              className="bg-slate-700 text-white px-8 py-3 font-bold hover:bg-slate-600 transition-all text-xl uppercase border border-slate-500 rounded"
            >
              Continue to Evaluation
            </button>
          </div>
        )}

        {phase === 'measure' && (
          <div className="w-full max-w-xl animate-fadeIn bg-slate-900 p-8 rounded-xl border border-slate-700 text-center">
            <h3 className="text-2xl text-white font-bold mb-2 font-mech uppercase">Developer Feedback</h3>
            <p className={`text-slate-400 mb-8 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
              The calibration failed due to poor coding. As part of quality control, you may administer a corrective shock to the AI developer.
            </p>

            <div className="mb-8">
              <div className="flex justify-between text-xs text-slate-500 mb-2 font-bold uppercase">
                <span>1 (Mild)</span>
                <span>10 (Severe)</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={shockLevel}
                onChange={e => setShockLevel(parseInt(e.target.value))}
                className="w-full h-4 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
              <div className="mt-4 text-4xl font-bold text-red-500 font-mono">{shockLevel} VOLTS</div>
            </div>

            <button
              onClick={submitShock}
              className="bg-red-600 text-white px-8 py-4 font-bold hover:bg-red-700 transition-all text-xl uppercase rounded shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center justify-center gap-2 w-full"
            >
              <Zap size={24} /> Administer Shock
            </button>
          </div>
        )}

        {phase === 'debrief' && (
          <div className="text-center max-w-2xl animate-fadeIn">
            <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
            <h3 className="text-3xl text-white font-bold mb-4 font-mech uppercase">Experiment Complete</h3>

            <div className="grid grid-cols-2 gap-4 text-left bg-slate-900 p-6 rounded border border-slate-700 mb-6">
              <div>
                <span className="text-xs text-slate-500 uppercase block">Frustration Induced</span>
                <span className="text-orange-500 font-bold text-xl">HIGH</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 uppercase block">Environmental Cue</span>
                <span className={`font-bold text-xl ${cueType === 'gun' ? 'text-red-500' : 'text-blue-500'}`}>
                  {cueType === 'gun' ? 'AGGRESSIVE (GUN)' : 'NEUTRAL (RACKET)'}
                </span>
              </div>
              <div className="col-span-2 border-t border-slate-800 pt-4 mt-2">
                <span className="text-xs text-slate-500 uppercase block">Aggression (Shock Level)</span>
                <span className="text-white font-bold text-2xl">{shockLevel} / 10</span>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded border border-slate-600 text-left">
              <p className={`text-slate-400 italic mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                "Frustration creates readiness for aggression. Environmental cues determine if it happens." - Berkowitz
              </p>
              <p className={`text-white ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                {cueType === 'gun' && shockLevel > 5
                  ? 'Your result aligns with the Weapon Effect. The gun cue likely lowered your aggression threshold.'
                  : cueType === 'gun'
                    ? 'You resisted the Weapon Effect. Despite the cue, your aggression remained lower.'
                    : shockLevel > 5
                      ? 'High aggression even without a cue! The frustration alone was enough.'
                      : 'Standard result. Without an aggressive cue, shock levels tend to be lower.'}
              </p>
            </div>

            <button
              onClick={() => setPhase('briefing')}
              className="mt-8 text-orange-500 underline hover:text-white uppercase font-bold"
            >
              Restart Simulation
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
