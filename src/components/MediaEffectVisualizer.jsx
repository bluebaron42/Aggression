import React, { useState } from 'react'
import { Tv, TrendingUp, Eye, AlertTriangle } from 'lucide-react'

export default function MediaEffectVisualizer({ isPresentation }) {
  const [mediaType, setMediaType] = useState('tv')
  const [exposure, setExposure] = useState('low')
  
  const getEffectStrength = () => {
    if (mediaType === 'game' && exposure === 'high') return 35
    if (mediaType === 'game' && exposure === 'medium') return 20
    if (mediaType === 'game' && exposure === 'low') return 10
    if (mediaType === 'tv' && exposure === 'high') return 24
    if (mediaType === 'tv' && exposure === 'medium') return 15
    return 8
  }

  const effectStrength = getEffectStrength()
  const isGame = mediaType === 'game'

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Visualization Panel */}
      <div className="bg-slate-900 border-2 border-blue-700 p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl rounded-xl">
        <div className={`absolute top-4 left-4 text-blue-500 font-mono uppercase tracking-widest ${isPresentation ? 'text-sm' : 'text-xs'}`}>
          MEDIA_ANALYSIS_V2.1
        </div>

        {/* Effect Meter */}
        <div className="mb-8 w-full max-w-md">
          <div className={`flex justify-between text-blue-400 font-mono mb-2 ${isPresentation ? 'text-lg' : 'text-xs'}`}>
            <span>CORRELATION STRENGTH (r)</span>
            <span>r = 0.{effectStrength < 10 ? '0' : ''}{effectStrength}</span>
          </div>
          <div className={`w-full bg-slate-800 rounded-lg overflow-hidden border border-slate-700 ${isPresentation ? 'h-10' : 'h-6'}`}>
            <div
              className={`h-full transition-all duration-1000 ease-out ${effectStrength > 30 ? 'bg-red-600' : effectStrength > 20 ? 'bg-orange-500' : 'bg-blue-500'}`}
              style={{ width: `${effectStrength * 2}%` }}
            ></div>
          </div>
          <div className={`flex justify-between text-slate-500 mt-1 ${isPresentation ? 'text-base' : 'text-xs'}`}>
            <span>No Effect</span>
            <span>Weak</span>
            <span>Moderate</span>
          </div>
        </div>

        {/* Media Type Visualization */}
        <div className={`p-12 border-4 border-dashed rounded-2xl mb-6 transition-all duration-500 ${isGame ? 'border-red-500 bg-red-900/20' : 'border-blue-500 bg-blue-900/20'} relative`}>
          <div className="absolute -top-3 left-4 bg-slate-900 px-2">
            <span className={`text-blue-400 font-mono uppercase ${isPresentation ? 'text-base' : 'text-xs'}`}>Media Type</span>
          </div>
          <Tv size={isPresentation ? 120 : 80} className={`${isGame ? 'text-red-400' : 'text-blue-400'} mx-auto mb-4 transition-all`} />
          <span className={`block text-center font-bold uppercase ${isPresentation ? 'text-3xl' : 'text-lg'}`}>
            {isGame ? 'Computer Games (Active)' : 'TV/Film (Passive)'}
          </span>
        </div>

        {/* Outcome Display */}
        <div className={`text-center font-mono transition-all duration-500 ${effectStrength > 25 ? 'scale-110' : 'scale-100'}`}>
          <div className={`${isPresentation ? 'text-7xl' : 'text-5xl'} font-bold mb-2 ${effectStrength > 30 ? 'text-red-500' : effectStrength > 20 ? 'text-orange-500' : 'text-blue-500'}`}>
            {effectStrength > 25 ? 'SMALL EFFECT' : 'WEAK EFFECT'}
          </div>
          <p className={`text-slate-400 max-w-md ${isPresentation ? 'text-xl' : 'text-sm'}`}>
            {effectStrength > 25 
              ? 'Explains ~6% of variance. 94% determined by other factors.'
              : 'Explains <5% of variance. Most aggression unrelated to media.'}
          </p>
        </div>
      </div>

      {/* Controls & Information */}
      <div className="flex flex-col justify-center bg-slate-900/50 border-l-4 border-blue-500 p-8 overflow-y-auto rounded-xl">
        <h3 className={`font-bold text-blue-400 mb-6 ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
          Meta-Analysis: Media & Aggression
        </h3>

        <div className="space-y-6 mb-6">
          <div className="bg-slate-800 p-4 border-2 border-slate-700 rounded-lg">
            <strong className={`text-blue-400 font-mono uppercase block mb-3 ${isPresentation ? 'text-base' : 'text-xs'}`}>Media Type</strong>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setMediaType('tv')}
                className={`${isPresentation ? 'p-6 text-lg' : 'p-4 text-sm'} border-2 font-bold uppercase transition-all rounded ${
                  mediaType === 'tv' 
                    ? 'bg-blue-900/50 border-blue-500 text-blue-300' 
                    : 'border-slate-600 text-slate-500 hover:border-slate-500'
                }`}
              >
                TV/Film
                {!isPresentation && <br/>}
                {!isPresentation && <span className="text-xs">(Passive)</span>}
              </button>
              <button
                onClick={() => setMediaType('game')}
                className={`${isPresentation ? 'p-6 text-lg' : 'p-4 text-sm'} border-2 font-bold uppercase transition-all rounded ${
                  mediaType === 'game' 
                    ? 'bg-red-900/50 border-red-500 text-red-300' 
                    : 'border-slate-600 text-slate-500 hover:border-slate-500'
                }`}
              >
                Games
                {!isPresentation && <br/>}
                {!isPresentation && <span className="text-xs">(Active)</span>}
              </button>
            </div>
          </div>

          <div className="bg-slate-800 p-4 border-2 border-slate-700 rounded-lg">
            <strong className={`text-blue-400 font-mono uppercase block mb-3 ${isPresentation ? 'text-base' : 'text-xs'}`}>Exposure Level</strong>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setExposure('low')}
                className={`${isPresentation ? 'p-4 text-lg' : 'p-3 text-sm'} border-2 font-bold uppercase transition-all rounded ${
                  exposure === 'low' 
                    ? 'bg-green-900/50 border-green-500 text-green-300' 
                    : 'border-slate-600 text-slate-500 hover:border-slate-500'
                }`}
              >
                Low
              </button>
              <button
                onClick={() => setExposure('medium')}
                className={`${isPresentation ? 'p-4 text-lg' : 'p-3 text-sm'} border-2 font-bold uppercase transition-all rounded ${
                  exposure === 'medium' 
                    ? 'bg-yellow-900/50 border-yellow-500 text-yellow-300' 
                    : 'border-slate-600 text-slate-500 hover:border-slate-500'
                }`}
              >
                Medium
              </button>
              <button
                onClick={() => setExposure('high')}
                className={`${isPresentation ? 'p-4 text-lg' : 'p-3 text-sm'} border-2 font-bold uppercase transition-all rounded ${
                  exposure === 'high' 
                    ? 'bg-red-900/50 border-red-500 text-red-300' 
                    : 'border-slate-600 text-slate-500 hover:border-slate-500'
                }`}
              >
                High
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-950/50 p-4 border-l-4 border-blue-500 rounded">
            <div className="flex items-start gap-2 mb-2">
              <TrendingUp size={isPresentation ? 24 : 16} className="text-blue-400 mt-1 flex-shrink-0" />
              <strong className={`text-blue-300 uppercase ${isPresentation ? 'text-lg' : 'text-sm'}`}>Research Finding</strong>
            </div>
            <p className={`text-blue-100 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              {isGame 
                ? 'Active participation in violent games shows slightly stronger correlations (r ≈ 0.24-0.35) than passive viewing. However, effect sizes remain SMALL.'
                : 'Meta-analyses find weak correlations (r ≈ 0.15-0.24) between violent TV/film and aggression. Most people unaffected.'}
            </p>
          </div>

          <div className="bg-slate-800/50 p-4 border-l-4 border-orange-500 rounded">
            <div className="flex items-start gap-2 mb-2">
              <AlertTriangle size={isPresentation ? 24 : 16} className="text-orange-400 mt-1 flex-shrink-0" />
              <strong className={`text-orange-300 uppercase ${isPresentation ? 'text-lg' : 'text-sm'}`}>Critical Note</strong>
            </div>
            <p className={`text-slate-200 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              Correlation ≠ Causation. Aggressive individuals may PREFER violent media (reverse causality). Family, peers, and personality explain far more variance than media.
            </p>
          </div>

          <div className="bg-slate-900 p-4 border border-slate-700 rounded">
            <div className="flex items-start gap-2 mb-2">
              <Eye size={isPresentation ? 24 : 16} className="text-slate-400 mt-1 flex-shrink-0" />
              <strong className={`text-slate-300 uppercase ${isPresentation ? 'text-lg' : 'text-sm'}`}>Real-World Pattern</strong>
            </div>
            <p className={`text-slate-400 leading-relaxed ${isPresentation ? 'text-xl' : 'text-sm'}`}>
              Japan: High violent media consumption, LOW violent crime. USA: Violence decreased 1990s-2000s while media violence increased. Contradicts simple causal model.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
