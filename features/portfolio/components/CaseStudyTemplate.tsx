'use client';

import React from 'react';
import { Card, Badge, Button } from '@nooha/ui';
import { CheckCircle2, TrendingUp, Zap, ShieldCheck } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
}

export function CaseStudyTemplate({ title, client, challenge, solution, results, metrics }: CaseStudyProps) {
  return (
    <div className="py-12 border-t border-[#1E293B] mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-4">The Challenge</h3>
            <p className="text-xl text-white leading-relaxed font-medium">{challenge}</p>
          </div>

          <div>
            <h3 className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-4">The Nooha Solution</h3>
            <p className="text-zinc-300 leading-relaxed">{solution}</p>
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <Card variant="glass" className="bg-[#111827]/40 border-[#1E293B] p-8">
            <h4 className="text-white font-bold mb-8">Performance Metrics</h4>
            <div className="space-y-8">
              {metrics.map((m, i) => (
                <div key={i}>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">{m.label}</p>
                  <p className="text-3xl font-extrabold text-emerald-500">{m.value}</p>
                </div>
              ))}
            </div>
            <Button className="w-full mt-10 bg-zinc-800 hover:bg-zinc-700 text-white border-none">
              View Technical PDF
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
