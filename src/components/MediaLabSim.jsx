import React, { useState, useEffect } from 'react'
import { Microscope, Play, Users, AlertCircle, TrendingUp, Ban, Zap, Clock } from 'lucide-react'

export default function MediaLabSim({ isPresentation }) {
  const [phase, setPhase] = useState('briefing')
  const [studyType, setStudyType] = useState(null)
  const [isRunning, setIsRunning] = useState(false)
  const [progress, setProgress] = useState(0)
  const [participants, setParticipants] = useState(0)
  const [dataPoints, setDataPoints] = useState([])
  const [results, setResults] = useState(null)

  // Animated data collection
  useEffect(() => {
    if (isRunning && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(100, prev + 2))
        
        // Add data points during collection
        if (progress % 10 === 0 && progress < 100) {
          const newPoint = {
            id: dataPoints.length,
            aggression: Math.random() * 100,
            mediaExposure: Math.random() * 100
          }
          setDataPoints(prev => [...prev, newPoint])
          setParticipants(prev => prev + Math.floor(Math.random() * 50) + 20)
        }
      }, 100)
      return () => clearTimeout(timer)
    } else if (progress >= 100 && isRunning) {
      setIsRunning(false)
      calculateResults()
    }
  }, [isRunning, progress, dataPoints.length])

  const startStudy = (type) => {
    setStudyType(type)
    setPhase('running')
    setIsRunning(true)
    setProgress(0)
    setParticipants(0)
    setDataPoints([])
    setResults(null)
  }

  const calculateResults = () => {
    if (studyType === 'correlational') {
      setResults({
        type: 'correlational',
        finding: 'r = 0.24',
        pValue: 'p < 0.05',
        variance: '5.76%',
        strength: 'Weak positive correlation',
        validity: 'High ecological validity (real-world data)',
        limitation: 'CANNOT prove causation. Reverse causality possible: aggressive people may select violent media.',
        conclusion: 'Association exists but direction unclear. Third variables (family, peers, personality) may explain BOTH media preference AND aggression.',
        color: 'yellow',
        visual: 'scatter'
      })
    } else if (studyType === 'experimental') {
      setResults({
        type: 'experimental',
        finding: 'Experimental group: 6.2 shocks | Control: 4.1 shocks',
        pValue: 'p < 0.01',
        variance: '12%',
        strength: 'Can demonstrate causation (controlled conditions)',
        validity: 'LOW ecological validity: Button-pressing ≠ real violence',
        limitation: 'Artificial lab setting, demand characteristics, short-term effects only. Measures hostile thoughts, not actual aggression.',
        conclusion: 'Shows media CAN prime aggressive thoughts in lab. But lab aggression differs fundamentally from real-world violence.',
        color: 'blue',
        visual: 'bars'
      })
    } else {
      setResults({
        type: 'longitudinal',
        finding: 'Correlation persists over 10 years (r ≈ 0.15)',
        pValue: 'p < 0.05',
        variance: '2.25%',
        strength: 'Can track long-term patterns',
        validity: 'Better ecological validity than lab experiments',
        limitation: 'Cannot control for confounding variables. Sample attrition. Self-report bias.',
        conclusion: 'Suggests small, long-term association. But cannot rule out that aggressive children CHOOSE violent media (not media causing aggression).',
        color: 'purple',
        visual: 'timeline'
      })
    }
    
    setPhase('results')
  }

  const reset = () => {
    setPhase('design')
    setResults(null)
    setStudyType(null)
    setProgress(0)
    setParticipants(0)
    setDataPoints([])
    setIsRunning(false)
  }

  return (
    <div className="h-full flex flex-col bg-slate-900 border-2 border-blue-700 rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b-2 border-blue-700 bg-slate-950">
        <div className="flex items-center gap-2">
          <Microscope size={isPresentation ? 24 : 20} className="text-blue-500" />
          <span className={`text-blue-400 font-bold tracking-widest font-mono uppercase ${isPresentation ? 'text-base' : 'text-sm'}`}>
            MEDIA_RESEARCH_LAB
          </span>
        </div>
        <div className={`text-blue-600 font-mono ${isPresentation ? 'text-sm' : 'text-xs'} flex items-center gap-2`}>
          {isRunning && <Zap size={16} className="text-blue-500 animate-pulse" />}
          {phase === 'briefing' ? 'STANDBY' : phase === 'design' ? 'READY' : phase === 'running' ? 'COLLECTING DATA...' : 'ANALYSIS COMPLETE'}
        </div>
      </div>

      <div className="flex-grow p-6 relative overflow-y-auto">
        {/* BRIEFING PHASE */}
        {phase === 'briefing' && (
          <div className="flex flex-col items-center justify-center h-full gap-8 max-w-5xl mx-auto">
            <div className="border-4 border-blue-700 p-8 bg-blue-950/30 shadow-2xl rounded-xl w-full">
              <h3 className={`font-bold text-white mb-6 border-b border-blue-700 pb-4 text-center ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>
                Interactive Research Simulation
              </h3>
              
              <div className="space-y-4 text-blue-100 mb-6">
                <p className={`leading-relaxed ${isPresentation ? 'text-2xl' : 'text-base'}`}>
                  You are a research psychologist investigating whether violent media causes aggressive behavior. 
                  Run different study designs and watch data collection happen in real-time.
                </p>
                
                <div className="bg-blue-900/30 p-6 border-l-4 border-blue-500 rounded">
                  <strong className={`text-blue-300 block mb-2 ${isPresentation ? 'text-xl' : 'text-base'}`}>Research Question:</strong>
                  <p className={`text-blue-100 italic ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    "Does exposure to violent media content cause increased aggressive behavior?"
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 border border-blue-700 rounded">
                  <strong className={`text-blue-400 uppercase block mb-2 ${isPresentation ? 'text-lg' : 'text-xs'}`}>Your Task</strong>
                  <p className={`text-slate-300 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                    Choose a research design, watch the simulation collect data, and examine the findings with their methodological strengths and limitations.
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setPhase('design')} 
              className={`bg-blue-600 text-white px-12 py-4 font-bold uppercase hover:bg-blue-500 transition-all shadow-lg rounded ${isPresentation ? 'text-2xl' : 'text-lg'}`}
            >
              Start Lab Simulation
            </button>
          </div>
        )}

        {/* DESIGN PHASE */}
        {phase === 'design' && (
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <h3 className={`text-white font-bold uppercase ${isPresentation ? 'text-4xl' : 'text-2xl'} mb-4`}>
              Select Research Method
            </h3>
            
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full ${isPresentation ? 'max-w-7xl' : 'max-w-6xl'}`}>
              {/* Correlational Study */}
              <div className="bg-slate-800 p-6 border-2 border-yellow-600 rounded-xl hover:border-yellow-500 transition-all hover:scale-105 transform">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp size={isPresentation ? 32 : 24} className="text-yellow-500" />
                  <h4 className={`text-yellow-400 font-bold uppercase ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Correlational</h4>
                </div>
                <p className={`text-slate-300 mb-4 ${isPresentation ? 'text-lg' : 'text-sm'} leading-relaxed`}>
                  Survey thousands of participants on media consumption and aggression levels. Calculate correlation coefficient.
                </p>
                <div className="bg-yellow-900/20 p-3 rounded mb-4 border border-yellow-800">
                  <p className={`text-yellow-300 font-mono ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                    <strong>Strength:</strong> Real-world data, large samples<br/>
                    <strong>Weakness:</strong> Cannot prove causation
                  </p>
                </div>
                <button
                  onClick={() => startStudy('correlational')}
                  className={`w-full bg-yellow-600 text-black px-4 py-3 font-bold uppercase hover:bg-yellow-500 transition-all rounded ${isPresentation ? 'text-lg' : 'text-base'}`}
                >
                  Run Study →
                </button>
              </div>

              {/* Experimental Study */}
              <div className="bg-slate-800 p-6 border-2 border-blue-600 rounded-xl hover:border-blue-500 transition-all hover:scale-105 transform">
                <div className="flex items-center gap-2 mb-4">
                  <Play size={isPresentation ? 32 : 24} className="text-blue-500" />
                  <h4 className={`text-blue-400 font-bold uppercase ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Experimental</h4>
                </div>
                <p className={`text-slate-300 mb-4 ${isPresentation ? 'text-lg' : 'text-sm'} leading-relaxed`}>
                  Randomly assign participants to watch violent vs. non-violent media. Measure "aggression" via button-pressing task.
                </p>
                <div className="bg-blue-900/20 p-3 rounded mb-4 border border-blue-800">
                  <p className={`text-blue-300 font-mono ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                    <strong>Strength:</strong> Can prove causation<br/>
                    <strong>Weakness:</strong> Artificial lab setting
                  </p>
                </div>
                <button
                  onClick={() => startStudy('experimental')}
                  className={`w-full bg-blue-600 text-white px-4 py-3 font-bold uppercase hover:bg-blue-500 transition-all rounded ${isPresentation ? 'text-lg' : 'text-base'}`}
                >
                  Run Study →
                </button>
              </div>

              {/* Longitudinal Study */}
              <div className="bg-slate-800 p-6 border-2 border-purple-600 rounded-xl hover:border-purple-500 transition-all hover:scale-105 transform">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={isPresentation ? 32 : 24} className="text-purple-500" />
                  <h4 className={`text-purple-400 font-bold uppercase ${isPresentation ? 'text-2xl' : 'text-lg'}`}>Longitudinal</h4>
                </div>
                <p className={`text-slate-300 mb-4 ${isPresentation ? 'text-lg' : 'text-sm'} leading-relaxed`}>
                  Follow same participants over 10 years. Track media habits and aggressive behavior over time.
                </p>
                <div className="bg-purple-900/20 p-3 rounded mb-4 border border-purple-800">
                  <p className={`text-purple-300 font-mono ${isPresentation ? 'text-sm' : 'text-xs'}`}>
                    <strong>Strength:</strong> Long-term patterns<br/>
                    <strong>Weakness:</strong> Cannot control variables
                  </p>
                </div>
                <button
                  onClick={() => startStudy('longitudinal')}
                  className={`w-full bg-purple-600 text-white px-4 py-3 font-bold uppercase hover:bg-purple-500 transition-all rounded ${isPresentation ? 'text-lg' : 'text-base'}`}
                >
                  Run Study →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* RUNNING PHASE - ANIMATED DATA COLLECTION */}
        {phase === 'running' && (
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <div className="text-center">
              <h3 className={`text-blue-400 font-bold uppercase mb-2 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
                {studyType === 'correlational' ? 'Surveying Participants...' : 
                 studyType === 'experimental' ? 'Running Lab Experiment...' : 
                 'Tracking Longitudinal Data...'}
              </h3>
              <p className={`text-blue-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                Participants enrolled: <span className="font-mono font-bold">{participants}</span>
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-3xl">
              <div className={`w-full bg-slate-800 rounded-lg overflow-hidden border-2 border-blue-600 ${isPresentation ? 'h-12' : 'h-8'}`}>
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 flex items-center justify-center"
                  style={{ width: `${progress}%` }}
                >
                  <span className={`text-white font-bold font-mono ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                    {progress}%
                  </span>
                </div>
              </div>
            </div>

            {/* Live Data Visualization */}
            <div className="bg-slate-800 border-2 border-blue-600 rounded-xl p-6 w-full max-w-4xl">
              <h4 className={`text-blue-300 font-mono uppercase mb-4 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                Live Data Collection
              </h4>
              <div className="grid grid-cols-5 gap-2">
                {dataPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="bg-blue-600 rounded animate-pulse"
                    style={{ 
                      opacity: 0.3 + (point.aggression / 200),
                      height: `${20 + (point.mediaExposure / 2)}px`
                    }}
                  />
                ))}
              </div>
              <p className={`text-slate-400 mt-4 text-center ${isPresentation ? 'text-lg' : 'text-xs'}`}>
                Data points collected: {dataPoints.length}
              </p>
            </div>

            <div className={`text-blue-400 font-mono animate-pulse ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              <Zap className="inline mr-2" size={isPresentation ? 24 : 16} />
              Analyzing data...
            </div>
          </div>
        )}

        {/* RESULTS PHASE */}
        {phase === 'results' && results && (
          <div className="flex flex-col gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-800 border-2 border-blue-600 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-blue-400 font-bold uppercase ${isPresentation ? 'text-3xl' : 'text-xl'}`}>
                  Results: {results.type} Study
                </h3>
                <span className={`px-4 py-2 bg-${results.color}-600 text-black font-bold rounded uppercase ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                  Complete
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-950/50 p-6 border-l-4 border-blue-500 rounded">
                  <strong className={`text-blue-300 block mb-2 uppercase ${isPresentation ? 'text-xl' : 'text-sm'}`}>Statistical Finding</strong>
                  <p className={`text-blue-100 font-mono mb-2 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
                    {results.finding}
                  </p>
                  <div className="flex gap-6 mt-3">
                    <span className={`text-blue-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      Significance: <strong className="text-green-400 font-mono">{results.pValue}</strong>
                    </span>
                    <span className={`text-blue-400 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                      Variance Explained: <strong className="text-orange-400 font-mono">{results.variance}</strong>
                    </span>
                  </div>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${isPresentation ? 'gap-6' : ''}`}>
                  <div className="bg-green-900/20 p-6 border-l-4 border-green-500 rounded">
                    <strong className={`text-green-300 block mb-2 uppercase flex items-center gap-2 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                      <TrendingUp size={isPresentation ? 24 : 16} />
                      Methodological Strength
                    </strong>
                    <p className={`text-green-100 ${isPresentation ? 'text-lg' : 'text-sm'} leading-relaxed`}>
                      {results.strength}
                    </p>
                  </div>

                  <div className="bg-red-900/20 p-6 border-l-4 border-red-500 rounded">
                    <strong className={`text-red-300 block mb-2 uppercase flex items-center gap-2 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                      <Ban size={isPresentation ? 24 : 16} />
                      Validity Issue
                    </strong>
                    <p className={`text-red-100 ${isPresentation ? 'text-lg' : 'text-sm'} leading-relaxed`}>
                      {results.validity}
                    </p>
                  </div>
                </div>

                <div className="bg-orange-900/20 p-6 border-l-4 border-orange-500 rounded">
                  <strong className={`text-orange-300 block mb-3 uppercase flex items-center gap-2 ${isPresentation ? 'text-xl' : 'text-sm'}`}>
                    <AlertCircle size={isPresentation ? 24 : 16} />
                    Critical Evaluation
                  </strong>
                  <p className={`text-orange-100 ${isPresentation ? 'text-lg' : 'text-sm'} leading-relaxed`}>
                    {results.limitation}
                  </p>
                </div>

                <div className="bg-slate-900/50 p-6 border border-slate-600 rounded">
                  <strong className={`text-slate-300 block mb-3 uppercase ${isPresentation ? 'text-xl' : 'text-sm'}`}>Conclusion</strong>
                  <p className={`text-slate-200 ${isPresentation ? 'text-xl' : 'text-sm'} italic leading-relaxed`}>
                    {results.conclusion}
                  </p>
                </div>
              </div>
            </div>

            <div className={`flex gap-4 ${isPresentation ? 'gap-6' : ''}`}>
              <button
                onClick={reset}
                className={`flex-1 bg-slate-700 text-slate-200 px-6 py-4 font-bold uppercase hover:bg-slate-600 transition-all rounded ${isPresentation ? 'text-xl' : 'text-base'}`}
              >
                Try Different Method
              </button>
              <button
                onClick={() => setPhase('briefing')}
                className={`flex-1 bg-blue-600 text-white px-6 py-4 font-bold uppercase hover:bg-blue-500 transition-all rounded ${isPresentation ? 'text-xl' : 'text-base'}`}
              >
                Reset Lab
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
