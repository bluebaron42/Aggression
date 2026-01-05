import React, { useState, useEffect } from 'react';

export default function MAOAMechanism({ isPresentation }) {
  const [variant, setVariant] = useState('normal');
  const [entities, setEntities] = useState({ pellets: [], enzymes: [] });

  // Initialize Simulation State
  useEffect(() => {
    const initialEnzymes = variant === 'normal'
      ? Array.from({ length: 4 }).map((_, i) => ({ id: i, x: 20 + i * 20, y: 50, angle: 0, targetId: null, vx: 0, vy: 0 }))
      : [{ id: 0, x: 50, y: 50, angle: 0, targetId: null, vx: 0, vy: 0 }];
    
    setEntities({ pellets: [], enzymes: initialEnzymes });
  }, [variant]);

  // Game Loop
  useEffect(() => {
    const loop = setInterval(() => {
      setEntities(prev => {
        let { pellets, enzymes } = prev;
        
        const cfg = variant === 'normal'
          ? { maxPellets: 16, spawnChance: 0.2, maxSpeed: 2.1, maxForce: 0.14, separationRadius: 10, separationWeight: 0.6, alignWeight: 0.25, cohesionWeight: 0.15, wander: 0.12, arriveRadius: 12, grabRadius: 4.5, seekWeight: 1.0 }
          : { maxPellets: 60, spawnChance: 0.28, maxSpeed: 1.7, maxForce: 0.12, separationRadius: 10, separationWeight: 0.7, alignWeight: 0.2, cohesionWeight: 0.12, wander: 0.18, arriveRadius: 10, grabRadius: 4.5, seekWeight: 1.05 };

        // Rectangular obstacles for pre- and post-synaptic terminals across the full width (normalized 0-100 box)
        const obstacles = [
          { x: 0, y: 0, w: 100, h: 8, nx: 0, ny: 1 },    // top bar, push down
          { x: 0, y: 92, w: 100, h: 8, nx: 0, ny: -1 }   // bottom bar, push up
        ];

        // 1. Spawn Pellets (Neurotransmitters)
        if (pellets.length < cfg.maxPellets && Math.random() < cfg.spawnChance) {
          pellets = [
            ...pellets,
            {
              id: Math.random(),
              x: Math.random() * 90 + 5,
              y: Math.random() * 80 + 10
            }
          ];
        }

        // 2. Move Enzymes (Boid-like swarm)
        const newEnzymes = enzymes.map((enz, _, list) => {
          let { x, y, vx = 0, vy = 0 } = enz;
          let target = pellets.find(p => p.id === enz.targetId);

          if (!target && pellets.length) {
            let minDist = Infinity;
            pellets.forEach(p => {
              const dx = p.x - x;
              const dy = p.y - y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < minDist) {
                minDist = dist;
                target = p;
              }
            });
          }

          const steer = { x: 0, y: 0 };

          // Seek target
          if (target) {
            const dx = target.x - x;
            const dy = target.y - y;
            const dist = Math.max(0.001, Math.sqrt(dx * dx + dy * dy));
            // Arrive: slow down within arriveRadius to improve capture instead of orbiting
            const desiredSpeed = dist < cfg.arriveRadius ? cfg.maxSpeed * (dist / cfg.arriveRadius) : cfg.maxSpeed;
            steer.x += (dx / dist) * desiredSpeed * cfg.seekWeight;
            steer.y += (dy / dist) * desiredSpeed * cfg.seekWeight;
          }

          // Separation
          let sepCount = 0;
          let sepX = 0;
          let sepY = 0;
          list.forEach(other => {
            if (other.id === enz.id) return;
            const dx = x - other.x;
            const dy = y - other.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > 0 && dist < cfg.separationRadius) {
              sepX += dx / dist;
              sepY += dy / dist;
              sepCount += 1;
            }
          });
          if (sepCount) {
            steer.x += (sepX / sepCount) * cfg.separationWeight;
            steer.y += (sepY / sepCount) * cfg.separationWeight;
          }

          // Alignment & cohesion
          let aliX = 0; let aliY = 0; let cohX = 0; let cohY = 0; let neigh = 0;
          list.forEach(other => {
            if (other.id === enz.id) return;
            const dx = x - other.x;
            const dy = y - other.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 28) {
              aliX += other.vx || 0;
              aliY += other.vy || 0;
              cohX += other.x;
              cohY += other.y;
              neigh += 1;
            }
          });
          if (neigh) {
            aliX = (aliX / neigh) * cfg.alignWeight;
            aliY = (aliY / neigh) * cfg.alignWeight;
            steer.x += aliX;
            steer.y += aliY;

            const avgX = cohX / neigh;
            const avgY = cohY / neigh;
            const cdx = avgX - x;
            const cdy = avgY - y;
            const cdist = Math.max(0.001, Math.sqrt(cdx * cdx + cdy * cdy));
            steer.x += (cdx / cdist) * cfg.cohesionWeight;
            steer.y += (cdy / cdist) * cfg.cohesionWeight;
          }

          // Wander jitter to avoid lockstep
          steer.x += (Math.random() - 0.5) * cfg.wander;
          steer.y += (Math.random() - 0.5) * cfg.wander;

          // Boundary steering
          const margin = 6;
          if (x < margin) steer.x += cfg.maxForce * 6;
          if (x > 100 - margin) steer.x -= cfg.maxForce * 6;
          if (y < margin) steer.y += cfg.maxForce * 6;
          if (y > 100 - margin) steer.y -= cfg.maxForce * 6;

          // Obstacle avoidance (pre/post terminals): if inside or near, push along surface normal and damp velocity
          obstacles.forEach(obs => {
            const pad = 1.5; // inflate a bit for early avoidance
            const insideX = x > obs.x - pad && x < obs.x + obs.w + pad;
            const insideY = y > obs.y - pad && y < obs.y + obs.h + pad;
            if (insideX && insideY) {
              steer.x += obs.nx * cfg.maxForce * 10;
              steer.y += obs.ny * cfg.maxForce * 10;
              vx *= 0.4;
              vy *= 0.4;
            }
          });

          // Apply steering with force cap
          vx += Math.max(-cfg.maxForce, Math.min(cfg.maxForce, steer.x));
          vy += Math.max(-cfg.maxForce, Math.min(cfg.maxForce, steer.y));

          // Limit speed
          const speed = Math.sqrt(vx * vx + vy * vy) || 0.001;
          const limited = Math.min(speed, cfg.maxSpeed);
          vx = (vx / speed) * limited;
          vy = (vy / speed) * limited;

          x = Math.max(5, Math.min(95, x + vx));
          y = Math.max(5, Math.min(95, y + vy));

          const angle = Math.atan2(vy, vx) * (180 / Math.PI);
          return { ...enz, x, y, vx, vy, angle, targetId: target?.id || null };
        });

        // 3. Eat Pellets (Collision Detection)
        const survivedPellets = pellets.filter(p => {
          const eaten = newEnzymes.some(enz => {
            const dx = p.x - enz.x;
            const dy = p.y - enz.y;
            return Math.sqrt(dx * dx + dy * dy) < cfg.grabRadius;
          });
          return !eaten;
        });

        return { pellets: survivedPellets, enzymes: newEnzymes };
      });
    }, 50); 

    return () => clearInterval(loop);
  }, [variant]);

  return (
    <div className={`flex flex-col h-full gap-8 ${isPresentation ? 'gap-16' : ''}`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isPresentation ? 'gap-16' : ''}`}>
        {/* Visual Synapse */}
        <div className={`bg-black border border-indigo-800 rounded-xl relative overflow-hidden p-4 flex items-center justify-center shadow-inner ${isPresentation ? 'p-8 h-96' : 'h-64 md:h-auto'}`}>
          <div className="absolute inset-0 bg-indigo-900/10"></div>

          {/* Pre-synaptic */}
          <div className={`absolute top-0 w-32 h-12 bg-slate-800 rounded-b-xl border-b-4 border-slate-600 z-10 flex justify-center items-center text-slate-400 font-mono ${isPresentation ? 'text-xs' : 'text-[10px]'}`}>PRE-SYNAPTIC</div>
          
          {/* Rendering Entities */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Pellets */}
            {entities.pellets.map(p => (
              <div
                key={p.id}
                className={`rounded-full bg-yellow-400 shadow-[0_0_5px_rgba(250,204,21,0.8)] ${isPresentation ? 'w-3 h-3' : 'w-2 h-2'}`}
                style={{ left: `${p.x}%`, top: `${p.y}%`, transition: 'all 0.05s linear', position: 'absolute' }}
              ></div>
            ))}

            {/* Enzymes (Triangles) */}
            {entities.enzymes.map(enz => (
              <div
                key={enz.id}
                className={`text-fuchsia-500 ${isPresentation ? 'w-8 h-8' : 'w-6 h-6'}`}
                style={{
                  left: `${enz.x}%`,
                  top: `${enz.y}%`,
                  transform: `rotate(${enz.angle}deg)`,
                  transition: 'all 0.05s linear',
                  position: 'absolute'
                }}
              >
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M20,20 L80,50 L20,80 Z" />
                </svg>
              </div>
            ))}
          </div>

          {/* Post-synaptic */}
          <div className={`absolute bottom-0 w-32 h-12 bg-slate-800 rounded-t-xl border-t-4 border-slate-600 z-10 flex justify-center items-center text-slate-400 font-mono ${isPresentation ? 'text-xs' : 'text-[10px]'}`}>POST-SYNAPTIC</div>
          
          {/* Status Overlay */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded font-bold font-mono border ${isPresentation ? 'text-sm px-4 py-2' : 'text-xs'} ${variant === 'normal' ? 'bg-green-900/80 text-green-400 border-green-500' : 'bg-red-900/80 text-red-400 border-red-500'}`}>
            {variant === 'normal' ? "LEVELS: REGULATED" : "LEVELS: CRITICAL"}
          </div>
        </div>

        {/* Controls & Theory */}
        <div className={`flex flex-col justify-center gap-6 ${isPresentation ? 'gap-8' : ''}`}>
          <div className={`flex gap-4 ${isPresentation ? 'gap-6' : ''}`}>
            <button onClick={() => setVariant('normal')} className={`flex-1 border rounded-xl text-left transition-all ${isPresentation ? 'p-6' : 'p-4'} ${variant === 'normal' ? 'bg-indigo-900/50 border-indigo-500' : 'bg-indigo-950 border-indigo-900 opacity-50'}`}>
              <strong className={`block text-white mb-1 font-mono ${isPresentation ? 'text-lg' : ''}`}>MAOA-H (High)</strong>
              <span className={`text-indigo-300 ${isPresentation ? 'text-base' : 'text-xs'}`}>High Enzyme Activity. <br/>Efficient Cleanup.</span>
            </button>
            <button onClick={() => setVariant('low')} className={`flex-1 border rounded-xl text-left transition-all ${isPresentation ? 'p-6' : 'p-4'} ${variant === 'low' ? 'bg-red-900/20 border-red-500' : 'bg-indigo-950 border-indigo-900 opacity-50'}`}>
              <strong className={`block text-white mb-1 font-mono ${isPresentation ? 'text-lg' : ''}`}>MAOA-L (Low)</strong>
              <span className={`text-red-300 ${isPresentation ? 'text-base' : 'text-xs'}`}>Enzyme Deficit. <br/>Synaptic Flooding.</span>
            </button>
          </div>

          <div className={`bg-indigo-900/20 rounded-xl border-l-4 border-fuchsia-500 ${isPresentation ? 'p-8' : 'p-6'}`}>
            <h4 className={`text-fuchsia-400 font-bold uppercase mb-2 font-mono ${isPresentation ? 'text-base' : 'text-sm'}`}>The "Warrior Gene" Mechanism</h4>
            <p className={`text-indigo-100 leading-relaxed ${isPresentation ? 'text-lg' : 'text-sm'}`}>
              The MAOA enzyme (Purple Triangles) is responsible for breaking down neurotransmitters like Serotonin (Yellow Dots) after a nerve impulse.
              <br/><br/>
              <strong>MAOA-L:</strong> Produces insufficient enzyme. The synapse floods with Serotonin. While low serotonin is usually linked to impulsivity, this state of <em>dysregulation</em> prevents the brain from returning to a calm baseline, triggering aggressive outbursts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
