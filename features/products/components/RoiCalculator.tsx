'use client';

import React, { useState } from 'react';
import { Card, Button } from '@nooha/ui';
import { TrendingUp, Calculator, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function RoiCalculator() {
  const [students, setStudents] = useState(500);
  const [manualHours, setManualHours] = useState(40);

  // ROI Logic
  const hourlyRate = 1200; // Estimated KES per staff hour
  const yearlySavingsRaw = manualHours * 4 * 12 * hourlyRate * 0.7;
  const yearlySavings = Math.round(yearlySavingsRaw).toLocaleString(); // 70% efficiency gain
  const recoverySpeed = students > 800 ? '4 Months' : '7 Months';

  return (
    <div className="mt-40 border-t border-white/5 pt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
         <span className="text-[10px] font-black text-nooha-blue uppercase tracking-[0.4em] mb-4 block">Efficiency Engine</span>
         <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Calculate Your Institutional ROI</h2>
         <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">Input your institution metrics below to see how Nooha ERP impacts your operational bottom line through automated auditing and workflows.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
         <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
         >
            <Card className="p-12 bg-nooha-slate/40 border-white/5 backdrop-blur-xl">
               <div className="space-y-12">
                  <div className="space-y-8">
                     <div className="flex justify-between items-end">
                        <div className="space-y-1">
                           <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Enrollment Scale</label>
                           <p className="text-white font-bold text-lg">Total Students</p>
                        </div>
                        <span className="text-4xl font-black text-nooha-blue tracking-tighter">{students}</span>
                     </div>
                     <input
                       type="range" min="100" max="5000" step="50"
                       value={students} onChange={(e) => setStudents(parseInt(e.target.value))}
                       className="w-full h-1 bg-nooha-midnight rounded-full appearance-none cursor-pointer accent-nooha-blue hover:accent-nooha-cyan transition-all"
                     />
                  </div>

                  <div className="space-y-8">
                     <div className="flex justify-between items-end">
                        <div className="space-y-1">
                           <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Resource Drain</label>
                           <p className="text-white font-bold text-lg">Manual Admin Hours / Week</p>
                        </div>
                        <span className="text-4xl font-black text-nooha-blue tracking-tighter">{manualHours} <span className="text-sm text-zinc-600 font-black ml-1 uppercase tracking-tighter">Hrs</span></span>
                     </div>
                     <input
                       type="range" min="10" max="200" step="5"
                       value={manualHours} onChange={(e) => setManualHours(parseInt(e.target.value))}
                       className="w-full h-1 bg-nooha-midnight rounded-full appearance-none cursor-pointer accent-nooha-blue hover:accent-nooha-cyan transition-all"
                     />
                  </div>

                  <div className="pt-10 border-t border-white/5">
                     <p className="text-[10px] text-zinc-600 leading-relaxed uppercase tracking-[0.2em] font-bold">
                        *Calculations based on standard regional institutional benchmarks and regional staff overhead averages.
                     </p>
                  </div>
               </div>
            </Card>
         </motion.div>

         <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={yearlySavings}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <ResultCard
                   label="Est. Annual Savings"
                   value={`KES ${yearlySavings}`}
                   icon={<Calculator size={20} className="text-nooha-blue" />}
                />
                <ResultCard
                   label="Investment Recovery"
                   value={recoverySpeed}
                   icon={<TrendingUp size={20} className="text-nooha-cyan" />}
                />
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
               <Card variant="premium" className="p-12 relative overflow-hidden group shadow-[0_48px_100px_-20px_rgba(37,99,235,0.3)] border-blue-500/20">
                  <div className="relative z-10">
                     <span className="text-[10px] font-black text-blue-300 uppercase tracking-[0.4em] mb-4 block">Strategic Next Step</span>
                     <h4 className="text-white font-black text-2xl mb-4 tracking-tight leading-tight">Ready to recover your <br/> institutional time?</h4>
                     <p className="text-blue-100/70 text-sm mb-10 leading-relaxed max-w-sm font-medium">Schedule a 15-minute strategy call to get a formal audit of your school's data security and operational efficiency.</p>
                     <Button href="/contact?subject=Institutional%20ROI%20Audit" className="bg-nooha-midnight text-white border-none hover:bg-black font-black h-14 px-8 group/btn uppercase tracking-widest text-[10px]">
                        Book Formal Audit <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                     </Button>
                  </div>
                  <ShieldCheck size={200} className="absolute -bottom-10 -right-10 text-white/5 rotate-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-1000" />
               </Card>
            </motion.div>
         </div>
      </div>
    </div>
  );
}

function ResultCard({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
  return (
    <Card className="bg-[#111827]/80 border-[#1E293B] p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/30 transition-all">
       <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-3xl rounded-full" />
       <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-[#1E293B] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
          {icon}
       </div>
       <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">{label}</p>
       <p className="text-2xl font-black text-white tracking-tight">{value}</p>
    </Card>
  );
}
