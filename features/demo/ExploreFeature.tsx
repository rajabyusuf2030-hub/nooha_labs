'use client';

import React, { useState, useEffect } from 'react';
import { Container, Section, Card, Badge, Button, NoohaLogo, cn } from '@nooha/ui';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  GraduationCap,
  Activity,
  Wallet,
  BarChart3,
  Settings,
  Layout,
  ChevronRight,
  Search,
  Bell,
  Terminal,
  ShieldCheck,
  UserCheck,
  Zap,
  ArrowRight,
  Info,
  X
} from 'lucide-react';

type Role = 'Admin' | 'Teacher' | 'Finance';
type Tab = 'Overview' | 'Students' | 'Academics' | 'Attendance' | 'Finance' | 'Reports';

export function ExploreFeature() {
  const [role, setRole] = useState<Role>('Admin');
  const [activeTab, setActiveTab] = useState<Tab>('Overview');
  const [showTour, setShowTour] = useState(true);
  const [tourStep, setTourStep] = useState(0);

  const tourSteps = [
    { title: 'Welcome to Nooha', desc: 'Experience the high-fidelity institutional engine in a safe sandbox.', target: 'center' },
    { title: 'Role-Based Perspective', desc: 'Switch roles at the top to see how the system adapts to different responsibilities.', target: 'role-switcher' },
    { title: 'Global Operations', desc: 'Navigate through students, academics, and finance modules.', target: 'sidebar' },
    { title: 'Terminal Clarity', desc: 'Explore sample data and real-time telemetry analytics.', target: 'content' },
  ];

  const handleNextStep = () => {
    if (tourStep < tourSteps.length - 1) {
      setTourStep(tourStep + 1);
    } else {
      setShowTour(false);
    }
  };

  const navItems: { id: Tab; icon: any }[] = [
    { id: 'Overview', icon: Layout },
    { id: 'Students', icon: Users },
    { id: 'Academics', icon: GraduationCap },
    { id: 'Attendance', icon: Activity },
    { id: 'Finance', icon: Wallet },
    { id: 'Reports', icon: BarChart3 },
  ];

  return (
    <main className="pt-20 bg-nooha-navy min-h-screen">
      {/* Tour Overlay */}
      <AnimatePresence>
        {showTour && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-nooha-midnight/60"
          >
             <motion.div
               initial={{ scale: 0.9, opacity: 0, y: 20 }}
               animate={{ scale: 1, opacity: 1, y: 0 }}
               className="max-w-md w-full p-10 rounded-[3rem] bg-nooha-slate border border-nooha-blue/30 shadow-[0_0_100px_rgba(37,99,235,0.2)] text-center relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 p-8">
                   <button onClick={() => setShowTour(false)} className="text-zinc-700 hover:text-white transition-colors">
                      <X size={20} />
                   </button>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-nooha-blue/10 border border-nooha-blue/20 flex items-center justify-center text-nooha-blue mx-auto mb-8 shadow-inner">
                   <Zap size={28} />
                </div>

                <Badge variant="primary" className="mb-4 uppercase tracking-widest text-[9px]">Tour Step {tourStep + 1} of 4</Badge>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase italic">{tourSteps[tourStep].title}</h3>
                <p className="text-nooha-muted text-lg font-medium leading-relaxed mb-10">{tourSteps[tourStep].desc}</p>

                <div className="flex gap-4">
                   <Button variant="ghost" className="flex-1" onClick={() => setShowTour(false)}>Skip Tour</Button>
                   <Button variant="premium" className="flex-1 group" onClick={handleNextStep}>
                      {tourStep === tourSteps.length - 1 ? 'Start Exploring' : 'Continue'} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                   </Button>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Container size="full" className="h-[calc(100vh-80px)] p-6">
        <Card variant="glass" className="h-full flex flex-col p-0 border-white/5 overflow-hidden rounded-[3rem] shadow-2xl relative">

           {/* Top Command Bar */}
           <div className="h-20 border-b border-white/5 bg-nooha-midnight/40 flex items-center justify-between px-10 shrink-0">
              <div className="flex items-center gap-12">
                 <NoohaLogo variant="compact" size="md" animate />
                 <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/5">
                    <Search size={14} className="text-zinc-600" />
                    <span className="text-[10px] font-black text-zinc-700 uppercase tracking-widest">Global Institutional Search...</span>
                 </div>
              </div>

              {/* Role Switcher */}
              <div className="flex items-center gap-6" id="role-switcher">
                 <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Viewing as:</span>
                 <div className="flex p-1 rounded-xl bg-nooha-navy border border-white/5">
                    {(['Admin', 'Teacher', 'Finance'] as Role[]).map(r => (
                      <button
                        key={r}
                        onClick={() => setRole(r)}
                        className={cn(
                          "px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                          role === r ? "bg-nooha-blue text-white shadow-glow-blue" : "text-zinc-600 hover:text-zinc-400"
                        )}
                      >
                         {r}
                      </button>
                    ))}
                 </div>
              </div>

              <div className="flex items-center gap-6">
                 <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-colors cursor-pointer relative">
                    <Bell size={18} />
                    <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-nooha-blue animate-pulse" />
                 </div>
                 <div className="w-10 h-10 rounded-xl bg-nooha-blue/20 border border-nooha-blue/20 flex items-center justify-center text-nooha-blue">
                    <UserCheck size={18} />
                 </div>
              </div>
           </div>

           <div className="flex-1 flex overflow-hidden">
              {/* Sidebar */}
              <aside className="w-72 border-r border-white/5 bg-nooha-midnight/20 flex flex-col shrink-0" id="sidebar">
                 <div className="p-8 space-y-2 flex-1">
                    {navItems.map(item => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={cn(
                          "w-full flex items-center gap-4 p-4 rounded-2xl transition-all group",
                          activeTab === item.id ? "bg-nooha-blue/10 text-nooha-blue border border-nooha-blue/20" : "text-zinc-600 hover:text-zinc-400 hover:bg-white/5 border border-transparent"
                        )}
                      >
                         <item.icon size={18} className={cn("transition-colors", activeTab === item.id ? "text-nooha-blue" : "text-zinc-700 group-hover:text-zinc-500")} />
                         <span className="text-[11px] font-black uppercase tracking-widest">{item.id}</span>
                      </button>
                    ))}
                 </div>

                 <div className="p-8 border-t border-white/5 space-y-4">
                    <div className="p-5 rounded-2xl bg-nooha-blue border border-nooha-blue/20 shadow-glow-blue">
                       <p className="text-white font-black text-[10px] uppercase tracking-widest mb-2">Live Status</p>
                       <p className="text-[8px] text-white/60 leading-relaxed font-bold uppercase tracking-widest">v1.0.4 Operational <br/> Multi-tenant Active</p>
                    </div>
                 </div>
              </aside>

              {/* Main Content Area */}
              <section className="flex-1 overflow-y-auto p-12 bg-noise relative" id="content">
                 <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-16">
                       <div>
                          <Badge variant="primary" className="mb-4 px-3 py-1 uppercase text-[9px]">{role} Context</Badge>
                          <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic">{activeTab}</h2>
                       </div>
                       <div className="flex gap-4">
                          <Button variant="secondary" size="sm">System Log</Button>
                          <Button variant="premium" size="sm">New Entry</Button>
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                       {[1,2,3].map(i => (
                         <Card key={i} variant="glass" className="p-8 border-white/5 group hover:border-nooha-blue/20 transition-all">
                            <div className="flex items-center justify-between mb-6">
                               <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-700">
                                  {i === 1 ? <Activity size={18} /> : i === 2 ? <Users size={18} /> : <ShieldCheck size={18} />}
                               </div>
                               <span className="text-[10px] font-black text-zinc-800 uppercase tracking-widest">Metrics</span>
                            </div>
                            <h4 className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Institutional Velocity</h4>
                            <p className="text-3xl font-black text-white tracking-tighter uppercase italic">+31.2%</p>
                         </Card>
                       ))}
                    </div>

                    {/* Dashboard Table / List Mockup */}
                    <div className="rounded-[2.5rem] border border-white/5 bg-nooha-midnight/40 overflow-hidden shadow-2xl">
                       <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/5">
                          <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">Active System Entities</span>
                          <div className="flex gap-4">
                             <div className="w-1.5 h-1.5 rounded-full bg-nooha-blue animate-pulse" />
                             <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                          </div>
                       </div>
                       <div className="p-4">
                          {[1,2,3,4,5].map(i => (
                            <div key={i} className="flex items-center justify-between p-6 rounded-2xl hover:bg-white/5 transition-colors group">
                               <div className="flex items-center gap-6">
                                  <div className="w-12 h-12 rounded-xl bg-white/5 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                                     <img src={`/assets/images/${i % 2 === 0 ? 'NOOHA-EDU-02.jpg' : 'NOOHA-EDU-03.jpg'}`} className="w-full h-full object-cover" />
                                  </div>
                                  <div>
                                     <p className="text-white font-bold text-sm">Institutional Entity {i}</p>
                                     <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Active ID: NHA-00{i}</p>
                                  </div>
                               </div>
                               <div className="flex items-center gap-12">
                                  <div className="hidden lg:block text-right">
                                     <p className="text-zinc-600 font-bold text-[10px] uppercase tracking-widest mb-1">State</p>
                                     <Badge variant="outline" className="text-[8px] border-zinc-800 text-zinc-700">Synchronized</Badge>
                                  </div>
                                  <ChevronRight size={18} className="text-zinc-800 group-hover:text-nooha-blue transition-colors" />
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </section>
           </div>

           {/* Sandbox Warning Footer */}
           <div className="h-10 bg-nooha-blue border-t border-nooha-blue/20 flex items-center justify-center gap-4 px-10 shrink-0">
              <Info size={12} className="text-white/60" />
              <p className="text-[9px] font-black text-white uppercase tracking-[0.4em]">Interactive demonstration environment • This system contains synthetic data for structural validation</p>
           </div>
        </Card>
      </Container>

      {/* Conversion Strip */}
      <Section className="py-24">
         <Container>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-12 md:p-20 rounded-[4rem] bg-nooha-slate/40 border border-nooha-border relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <NoohaLogo variant="monochrome" size="xl" />
               </div>
               <div className="max-w-xl relative z-10">
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase italic">Ready to see <br/> your institution?</h3>
                  <p className="text-nooha-muted text-lg font-medium leading-relaxed">Request a professional demonstration tailored to your specific organizational context and technical requirements.</p>
               </div>
               <div className="flex flex-wrap gap-5 relative z-10">
                  <Button variant="premium" size="xl" href="/contact?subject=Private%20Demo">Request Private Demo</Button>
                  <Button variant="outline" size="xl" href="/apply" className="text-white border-white/20">Begin Application</Button>
               </div>
            </div>
         </Container>
      </Section>
    </main>
  );
}
