import React from 'react'

export default function Slide({ children, isPresentation }) {
  return (
    <div className={`flex flex-col h-full animate-fadeIn text-slate-100 mx-auto w-full transition-all duration-300 relative ${isPresentation ? 'p-10 max-w-[98vw] text-4xl' : 'p-8 max-w-7xl text-base'}`}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grid-subtle -z-20 opacity-20"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-900/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className={`flex-grow overflow-y-auto pr-2 custom-scrollbar flex flex-col z-10 ${isPresentation ? 'gap-8' : 'gap-6'}`}>
        {children}
      </div>
    </div>
  )
}
