import React from 'react'
import { Microscope, Activity, Ban, Syringe } from 'lucide-react'

export default function GospicBriefing({ isPresentation }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Left: The Study Context */}
      <div className="flex flex-col justify-center gap-6">
        <div className="bg-slate-900/80 border-l-4 border-cyan-500 p-6">
          <div className="flex items-center gap-3 mb-2">
            <Microscope className="text-cyan-400" size={24} />
            <h3 className="text-cyan-400 font-bold font-mono text-lg uppercase tracking-widest">
              Gospic et al. (2011)
            </h3>
          </div>
          <p className={`text-slate-300 ${isPresentation ? 'text-xl' : 'text-sm'} leading-relaxed`}>
            <strong>Objective:</strong> To investigate the neural correlates of aggression (amygdala activity) in response to social provocation.
            <br />
            <br />
            <strong>Method:</strong> Participants played the <em>Ultimatum Game</em> whilst having their brains scanned by fMRI.
          </p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl">
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
            <Activity className="text-red-500" /> The Ultimatum Game Rules
          </h4>

          <div className="flex flex-col gap-4">
            {/* Flow Visual */}
            <div className="flex justify-between items-center bg-black p-4 rounded mb-2 border border-slate-700">
              <div className="text-center w-1/3">
                <span className="text-xs text-slate-500 block uppercase tracking-wider">Player A</span>
                <span className="text-cyan-400 font-bold block mt-1">Proposes Split</span>
                <span className="text-[10px] text-slate-500">(e.g. £10 total)</span>
              </div>
              <div className="flex-grow flex justify-center text-slate-600">→</div>
              <div className="text-center w-1/3">
                <span className="text-xs text-slate-500 block uppercase tracking-wider">Player B (You)</span>
                <div className="flex gap-2 justify-center mt-1">
                  <span className="bg-green-900/30 text-green-400 text-[10px] px-2 py-1 rounded border border-green-500/30 font-bold">
                    Accept
                  </span>
                  <span className="bg-red-900/30 text-red-400 text-[10px] px-2 py-1 rounded border border-red-500/30 font-bold">
                    Reject
                  </span>
                </div>
              </div>
            </div>

            {/* Outcome Grid */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-green-900/10 p-3 rounded border-l-2 border-green-500">
                <strong className="text-green-400 block mb-1 uppercase tracking-wide">If Accepted:</strong>
                <span className="text-slate-300">Money is split as proposed. Both players gain.</span>
              </div>
              <div className="bg-red-900/10 p-3 rounded border-l-2 border-red-500">
                <strong className="text-red-400 block mb-1 uppercase tracking-wide">If Rejected:</strong>
                <span className="text-slate-300">
                  <strong>NOBODY</strong> gets any money. Rejection is an aggressive act to punish unfairness.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: The Findings & Simulation Prep */}
      <div className="flex flex-col gap-4">
        <div className="bg-slate-900/80 border-2 border-dashed border-red-500/30 p-6 rounded-xl flex-grow flex flex-col justify-center">
          <h4 className="text-red-400 font-bold font-mono uppercase mb-4 tracking-widest">KEY FINDINGS</h4>
          <ul className={`space-y-4 ${isPresentation ? 'text-lg' : 'text-sm'} text-slate-300`}>
            <li className="flex gap-3">
              <Activity className="text-red-500 shrink-0" />
              <span>
                <strong>Unfair offers</strong> (social provocation) led to a rapid, heightened response in the <strong>Amygdala</strong>.
              </span>
            </li>
            <li className="flex gap-3">
              <Ban className="text-red-500 shrink-0" />
              <span>
                There was a strong correlation between Amygdala activity and the decision to <strong>REJECT</strong> (Aggression).
              </span>
            </li>
            <li className="flex gap-3">
              <Syringe className="text-blue-500 shrink-0" />
              <span>
                <strong>Benzodiazepines</strong> (GABA agonist/Inhibitory) reduced amygdala activity and halved the number of rejections.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-cyan-950 border border-cyan-500 p-4 text-center rounded-xl">
          <h5 className="text-cyan-400 font-bold uppercase mb-1">Simulation Briefing</h5>
          <p className="text-cyan-100 text-sm">
            You are about to replicate this study. You will control the <strong>Intervention</strong> and observe the subject's <strong>Amygdala Response</strong> to provocation.
          </p>
        </div>
      </div>
    </div>
  )
}
