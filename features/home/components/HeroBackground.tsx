'use client';

import React from 'react';

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-nooha-navy">
      {/* Layer 1: Noise Texture */}
      <div className="absolute inset-0 opacity-[0.15] bg-noise pointer-events-none mix-blend-overlay" />

      {/* Layer 2: Deep Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.08),_transparent_70%)]" />

      {/* Layer 3: Technical Grid */}
      <div className="absolute inset-0 bg-grid-white pointer-events-none" />

      {/* Layer 4: System Blueprints (Almost Invisible) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none text-nooha-green" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>

        {/* Central Architecture Chain: Users -> API -> DB -> AI */}
        <g transform="translate(100, 200) scale(0.8)">
           {/* Users Node */}
           <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
           <text x="50" y="55" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">USERS</text>
           <path d="M80 50 L150 50" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />

           {/* API Gateway */}
           <rect x="150" y="30" width="100" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
           <text x="200" y="55" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">API_GATEWAY</text>
           <path d="M250 50 L320 50" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />

           {/* Database Cluster */}
           <path d="M320 30 L420 30 L420 70 L320 70 Z" fill="none" stroke="currentColor" strokeWidth="1" />
           <path d="M320 40 L420 40 M320 50 L420 50 M320 60 L420 60" stroke="currentColor" strokeWidth="1" opacity="0.5" />
           <text x="370" y="55" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">DB_CLUSTER</text>
           <path d="M420 50 L490 50" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />

           {/* AI Engine */}
           <polygon points="490,50 530,10 570,50 530,90" fill="none" stroke="currentColor" strokeWidth="1" />
           <text x="530" y="55" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">AI_CORE</text>
        </g>

        {/* Database Relationship Fragments (Scattered) */}
        <g transform="translate(800, 100) scale(0.6)">
           <rect x="0" y="0" width="80" height="100" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
           <path d="M0 20 L80 20" stroke="currentColor" strokeWidth="1" />
           <text x="40" y="14" textAnchor="middle" fontSize="8" fill="currentColor">TBL_STUDENTS</text>
           <rect x="150" y="40" width="80" height="100" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
           <path d="M150 60 L230 60" stroke="currentColor" strokeWidth="1" />
           <text x="190" y="54" textAnchor="middle" fontSize="8" fill="currentColor">TBL_FINANCE</text>
           <path d="M80 50 C 110 50, 120 70, 150 70" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        </g>

        {/* Circuit Traces */}
        <path d="M1200 0 V100 H1300 V200 M1250 100 V150 H1400" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <circle cx="1200" cy="50" r="2" fill="currentColor" />
        <circle cx="1300" cy="150" r="2" fill="currentColor" />

        {/* Code Fragments */}
        <g transform="translate(50, 600)" className="font-mono">
           <text x="0" y="0" fontSize="8" fill="currentColor" opacity="0.8">{"export const solve = (i) => {"}</text>
           <text x="10" y="12" fontSize="8" fill="currentColor" opacity="0.8">{"  return ecosystem.scale(i);"}</text>
           <text x="0" y="24" fontSize="8" fill="currentColor" opacity="0.8">{"};"}</text>
        </g>
      </svg>

      {/* Layer 5: Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-nooha-green/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-nooha-blue/5 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />

      {/* Layer 6: Subtle Circuit Lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-nooha-green/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-nooha-green/10 to-transparent pointer-events-none" />
    </div>
  );
}
