'use client';

import React, { useState } from 'react';
import { Container, Section, Badge, Button, Card, cn, NoohaLogo } from '@nooha/ui';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Activity,
  ShieldCheck,
  Database,
  GraduationCap,
  Users,
  Layout,
  Lock,
  ClipboardCheck,
  Wallet,
  Calendar,
  BarChart3,
  Search,
  Server,
  Zap,
  Globe,
  CheckCircle2,
  Layers,
  Sparkles,
  Brain,
  Landmark,
  MapPin,
  Settings,
  FileText,
  CreditCard,
  Key,
  Download,
  Terminal,
  RefreshCcw,
  Plus
} from 'lucide-react';

export function ErpProductFeature() {
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);

  const roles = [
    { id: 'admin', title: 'Administrator', image: '/assets/images/NOOHA-PROD-03.png', desc: 'Full institutional oversight and technical governance.', icon: <Terminal size={24} />, modules: ['Institution', 'Users', 'Reports', 'Configuration', 'Monitoring'] },
    { id: 'head', title: 'Headteacher', image: '/assets/images/NOOHA-PROD-02.png', desc: 'Operational management and high-level academic overview.', icon: <Landmark size={24} />, modules: ['Management', 'Analytics', 'Staff', 'Reports'] },
    { id: 'deputy', title: 'Deputy Head', image: '/assets/images/NOOHA-EDU-03.jpg', desc: 'Daily coordination of institutional activities and staff.', icon: <ClipboardCheck size={24} />, modules: ['Attendance', 'Scheduling', 'Students'] },
    { id: 'teacher', title: 'Teacher', image: '/assets/images/NOOHA-EDU-02.jpg', desc: 'Academic delivery, classroom management, and results.', icon: <GraduationCap size={24} />, modules: ['Students', 'Attendance', 'Subjects', 'Results', 'Timetable'] },
    { id: 'finance', title: 'Finance', image: '/assets/images/NOOHA-PROD-01.jpg', desc: 'Monetary operations, fee tracking, and bookkeeping.', icon: <Wallet size={24} />, modules: ['Finance', 'Fee Records', 'Payments', 'Financial Reports'] },
    { id: 'staff', title: 'Other Staff', image: '/assets/images/Education.jfif', desc: 'Access restricted to specific assigned operational duties.', icon: <Users size={24} />, modules: ['Profiles', 'Attendance', 'Assigned Tasks'] },
  ];

  const journeyStages = [
    { id: '01', title: 'Apply', icon: <FileText size={20} />, desc: 'Institutional application' },
    { id: '02', title: 'Verify', icon: <ShieldCheck size={20} />, desc: 'Technical verification' },
    { id: '03', title: 'Select', icon: <Layers size={20} />, desc: 'Module selection' },
    { id: '04', title: 'Subscribe', icon: <CreditCard size={20} />, desc: 'Subscription setup' },
    { id: '05', title: 'Payment', icon: <CheckCircle2 size={20} />, desc: 'Confirmation' },
    { id: '06', title: 'License', icon: <Key size={20} />, desc: 'Credential issuance' },
    { id: '07', title: 'Install', icon: <Download size={20} />, desc: 'Guided installation' },
    { id: '08', title: 'Activate', icon: <Zap size={20} />, desc: 'Device validation' },
    { id: '09', title: 'Configure', icon: <Settings size={20} />, desc: 'School setup wizard' },
    { id: '10', title: 'Operate', icon: <Layout size={20} />, desc: 'Live operation' },
  ];

  return (
    <main className="pt-20">
      {/* 01. Product Hero */}
      <Section padding="xl" className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-nooha-green/5 blur-[120px] rounded-full pointer-events-none" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <Badge variant="primary" className="mb-8 font-black tracking-[0.4em] px-5 py-2 uppercase">NOOHA ERP</Badge>
              <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.05]">
                The operating system for <span className="text-nooha-green">modern school administration.</span>
              </h1>
              <p className="text-body text-xl mb-12 font-medium text-nooha-muted">
                Bring your school's people, processes, information, and operations together in one connected platform built to evolve with your institution.
              </p>
              <div className="flex flex-wrap gap-5">
                <Button size="xl" href="/demo" className="shadow-glow-green group">
                  Request a Demo <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="secondary" size="xl" href="#overview" className="px-12">Explore the Platform</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.45, 0.32, 0.9] }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-10 bg-nooha-green/10 rounded-full blur-[120px] opacity-30 pointer-events-none" />
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-nooha-green/20 to-nooha-cyan/20 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-[2.5rem] border border-white/5 bg-nooha-slate overflow-hidden shadow-[0_48px_100px_-20px_rgba(0,0,0,0.9)]">
                   <img src="/assets/images/NOOHA-ERP-01.png" alt="Nooha ERP Command" className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
                   <div className="absolute top-0 left-0 right-0 h-10 bg-nooha-midnight/80 backdrop-blur-md border-b border-white/5 flex items-center px-4 justify-between">
                      <div className="flex gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-zinc-800" /><div className="w-1.5 h-1.5 rounded-full bg-zinc-800" /><div className="w-1.5 h-1.5 rounded-full bg-zinc-800" /></div>
                      <div className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.4em]">enterprise.dashboard.active</div>
                      <div className="w-12" />
                   </div>
                </div>
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-8 -left-8 p-6 rounded-[2rem] bg-nooha-midnight/90 border border-white/10 shadow-2xl backdrop-blur-xl z-20 hidden md:flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-nooha-green/10 flex items-center justify-center text-nooha-green border border-nooha-green/20 shadow-inner"><Activity size={24} /></div>
                  <div><p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em] mb-1">Institutional Health</p><p className="text-white font-black text-lg tracking-tight">System <span className="text-nooha-green ml-1 uppercase text-sm">Nominal</span></p></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 02. The Challenge */}
      <Section reveal className="bg-nooha-navy relative overflow-hidden border-t border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center py-24">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-caption mb-4 block text-error/60 uppercase">THE CHALLENGE</span>
              <h2 className="text-h2 text-white mb-8 leading-tight">School operations shouldn't live in <span className="text-nooha-green opacity-80 italic">disconnected systems.</span></h2>
              <p className="text-body max-w-xl mb-12">
                Student records, academic results, attendance, finance, staff information, and workflows are deeply connected. Managing them across separate tools creates information silos and operational friction.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { id: '01', title: 'Disconnected information', desc: 'Records often exist in different places, making it difficult to maintain a consistent view.' },
                  { id: '02', title: 'Manual processes', desc: 'Repetitive work consumes time that could be spent supporting students and teachers.' },
                  { id: '03', title: 'Limited visibility', desc: 'Fragmentation makes it harder to see trends, identify issues, and make informed decisions.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-nooha-green/20 transition-all group">
                    <span className="text-xl font-black text-zinc-800 group-hover:text-nooha-green/40 transition-colors leading-none">{item.id}</span>
                    <div><h4 className="text-white font-bold mb-1 tracking-tight">{item.title}</h4><p className="text-nooha-muted text-xs leading-relaxed">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative p-12 rounded-[3.5rem] bg-nooha-slate/40 border border-white/5 overflow-hidden min-h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
              <div className="relative w-full max-w-md">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl bg-nooha-green/10 border border-nooha-green/20 flex items-center justify-center animate-pulse z-20">
                    <NoohaLogo variant="compact" size="lg" />
                 </div>
                 {[
                   { label: 'Finance', icon: <Wallet size={16} />, delay: 0, x: -140, y: -120 },
                   { label: 'Attendance', icon: <ClipboardCheck size={16} />, delay: 1, x: 140, y: -100 },
                   { label: 'Exams', icon: <GraduationCap size={16} />, delay: 0.5, x: -120, y: 120 },
                   { label: 'Staff', icon: <Users size={16} />, delay: 1.5, x: 130, y: 110 },
                 ].map((card, i) => (
                   <motion.div key={card.label} initial={{ x: card.x, y: card.y, opacity: 0.2, scale: 0.8 }} whileInView={{ x: card.x * 0.4, y: card.y * 0.4, opacity: 0.6, scale: 1 }} viewport={{ once: true }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: card.delay, ease: "easeInOut" }} className="absolute p-4 rounded-xl bg-nooha-midnight border border-white/5 shadow-2xl flex items-center gap-3" style={{ top: '50%', left: '50%', marginTop: '-24px', marginLeft: '-60px' }}>
                      <div className="text-nooha-green">{card.icon}</div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/60">{card.label}</span>
                   </motion.div>
                 ))}
              </div>
              <div className="absolute bottom-10 text-center w-full"><p className="text-[9px] font-black text-zinc-700 uppercase tracking-[0.6em]">Disconnected Operational Silos</p></div>
            </motion.div>
          </div>
          <div className="py-20 text-center border-t border-white/5">
             <p className="text-caption mb-6 block">The Pivot</p>
             <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">The answer isn't more tools.</h3>
             <p className="text-2xl md:text-4xl font-black text-nooha-green italic tracking-tighter uppercase">It's better-connected systems.</p>
          </div>
        </Container>
      </Section>

      {/* 03. Platform Overview */}
      <Section id="overview" className="bg-nooha-navy relative overflow-hidden border-t border-white/5">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-32">
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-caption mb-4 block uppercase tracking-[0.4em]">ONE CONNECTED PLATFORM</span>
                <h2 className="text-h2 text-white mb-8 leading-tight">Everything your institution needs, <span className="text-nooha-green opacity-80">working together.</span></h2>
                <p className="text-body text-xl font-medium text-nooha-muted">Nooha ERP connects the people, processes, and information that keep an institution running—giving each department the tools it needs while keeping the wider organization connected.</p>
             </motion.div>
          </div>

          <div className="relative min-h-[600px] flex items-center justify-center mb-32">
             <div className="relative z-20 w-48 h-48 rounded-full bg-nooha-midnight border-2 border-nooha-green/20 flex items-center justify-center shadow-[0_0_80px_rgba(16,185,129,0.15)] animate-float">
                <NoohaLogo variant="compact" size="xl" animate />
                <div className="absolute -bottom-10 whitespace-nowrap text-[10px] font-black text-nooha-green uppercase tracking-[0.4em]">NOOHA ERP CORE</div>
             </div>
             <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-12 pointer-events-none">
                {[
                  { label: 'Students', desc: 'Centralized profiles & records', icon: <Users size={20} /> },
                  { label: 'Academics', desc: 'Results & frameworks', icon: <GraduationCap size={20} /> },
                  { label: 'Finance', desc: 'Fee management & ledgers', icon: <Wallet size={20} /> },
                  { label: 'Attendance', desc: 'Daily tracking & analysis', icon: <ClipboardCheck size={20} /> },
                  { label: 'Staff & Users', desc: 'Responsibilities & assignments', icon: <Users size={20} /> },
                  { label: 'Administration', desc: 'Governance & configuration', icon: <Layout size={20} /> },
                ].map((d, i) => (
                  <div key={d.label} className="flex items-center justify-center">
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-nooha-slate/40 border border-white/5 pointer-events-auto backdrop-blur-xl w-60 group hover:border-nooha-blue/30 transition-all shadow-2xl">
                       <div className="w-10 h-10 rounded-xl bg-nooha-blue/5 border border-nooha-blue/10 flex items-center justify-center text-nooha-blue mb-4 group-hover:scale-110 transition-transform">{d.icon}</div>
                       <h4 className="text-white font-bold mb-1 tracking-tight">{d.label}</h4><p className="text-[10px] text-zinc-500 font-medium leading-relaxed">{d.desc}</p>
                    </motion.div>
                  </div>
                ))}
             </div>
          </div>
        </Container>
      </Section>

      {/* 06. Roles & Permissions - VISUAL INFOGRAPHIC WITH HUMAN ASSETS */}
      <Section id="roles" className="bg-nooha-midnight relative overflow-hidden border-t border-white/5 py-40">
        <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-32">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Badge variant="primary" className="mb-6 uppercase tracking-widest">ROLES & PERMISSIONS</Badge>
              <h2 className="text-h2 text-white mb-8 leading-tight">The right access for the <br/> <span className="text-nooha-blue">right responsibility.</span></h2>
              <p className="text-body text-xl font-medium text-nooha-muted">Nooha ERP serves your entire institutional community, providing specialized interfaces and data access mapped precisely to individual operational duties.</p>
            </motion.div>
          </div>

          <div className="relative min-h-[700px] flex items-center justify-center">
             {/* Central Hub - High fidelity text/logo hub */}
             <div className="relative z-10 w-72 h-72 rounded-full bg-nooha-midnight border-2 border-nooha-blue/20 flex flex-col items-center justify-center shadow-[0_0_120px_rgba(37,99,235,0.15)]">
                <NoohaLogo variant="compact" size="xl" animate />
                <p className="mt-6 text-[11px] font-black text-white uppercase tracking-[0.5em]">SYSTEM CORE</p>
                <div className="mt-4 flex gap-1">
                   <AnimatePresence mode="wait">
                      {hoveredRole ? (
                        <motion.div
                          key={hoveredRole}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="flex gap-2"
                        >
                           {roles.find(r => r.id === hoveredRole)?.modules?.slice(0, 3).map(m => (
                             <span key={m} className="px-2 py-1 rounded-sm bg-nooha-blue/10 text-nooha-blue text-[8px] font-black uppercase tracking-widest border border-nooha-blue/20">{m}</span>
                           ))}
                        </motion.div>
                      ) : (
                        <motion.span className="text-[8px] font-bold text-zinc-700 uppercase tracking-widest">Hover a role node to view access</motion.span>
                      )}
                   </AnimatePresence>
                </div>
             </div>

             {/* Connection Network */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <circle cx="50%" cy="50%" r="300" fill="none" stroke="#2563EB" strokeWidth="0.5" strokeDasharray="8 8" />
             </svg>

             {/* Role Nodes - Now using real human images */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-5xl max-h-[800px]">
                   {roles.map((role, i) => {
                     const angle = (i * 360) / roles.length;
                     const radius = 340;
                     const x = Math.cos((angle * Math.PI) / 180) * radius;
                     const y = Math.sin((angle * Math.PI) / 180) * radius;

                     return (
                       <motion.div
                         key={role.id}
                         initial={{ opacity: 0, scale: 0.5 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         viewport={{ once: true }}
                         transition={{ delay: i * 0.1 }}
                         onMouseEnter={() => setHoveredRole(role.id)}
                         onMouseLeave={() => setHoveredRole(null)}
                         className={cn(
                           "absolute w-60 p-4 rounded-[2rem] bg-nooha-slate/40 border transition-all duration-700 cursor-pointer backdrop-blur-xl group",
                           hoveredRole === role.id ? "border-nooha-blue bg-nooha-blue/10 scale-110 z-20 shadow-glow-blue" : "border-white/5"
                         )}
                         style={{
                           left: `calc(50% + ${x}px)`,
                           top: `calc(50% + ${y}px)`,
                           transform: 'translate(-50%, -50%)',
                         }}
                       >
                          <div className="relative mb-4 flex items-center justify-between">
                             <div className={cn(
                               "w-12 h-12 rounded-xl flex items-center justify-center transition-colors overflow-hidden border",
                               hoveredRole === role.id ? "border-nooha-blue" : "border-white/10"
                             )}>
                                <img
                                  src={role.image}
                                  alt={role.title}
                                  className={cn(
                                    "w-full h-full object-cover transition-all duration-700",
                                    hoveredRole === role.id ? "grayscale-0 scale-110" : "grayscale opacity-50"
                                  )}
                                />
                             </div>
                             <div className={cn(
                               "w-8 h-8 rounded-lg flex items-center justify-center transition-all",
                               hoveredRole === role.id ? "bg-nooha-blue text-white" : "bg-white/5 text-zinc-600"
                             )}>
                                {role.icon}
                             </div>
                          </div>
                          <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-2 group-hover:text-nooha-blue transition-colors">{role.title}</h4>
                          <p className="text-[9px] text-nooha-muted font-medium leading-relaxed line-clamp-2">{role.desc}</p>
                       </motion.div>
                     );
                   })}
                </div>
             </div>
          </div>

          <div className="mt-32 pt-20 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
             {[
               { title: 'Human-Centered Design', desc: 'Interfaces optimized for real operational fatigue, reducing errors in high-velocity academic environments.' },
               { title: 'Cryptographic Security', desc: 'Advanced RBAC ensuring data sovereignty and institution-wide compliance by default.' },
               { title: 'Operational Insight', desc: 'Turn daily user actions into actionable institutional telemetry through automated neural processing.' }
             ].map(item => (
               <div key={item.title} className="group">
                  <h4 className="text-white font-bold mb-4 tracking-tight group-hover:text-nooha-blue transition-colors uppercase text-xs tracking-widest">{item.title}</h4>
                  <p className="text-sm text-nooha-muted leading-relaxed font-medium">{item.desc}</p>
               </div>
             ))}
          </div>
        </Container>
      </Section>

      {/* 07. Administration & Configuration - INTERLOCKING PATH */}
      <Section id="configuration" className="bg-nooha-navy relative overflow-hidden border-t border-white/5 py-40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
             <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-caption mb-4 block uppercase tracking-[0.4em]">SYSTEM INITIALIZATION</span>
                <h2 className="text-h2 text-white mb-8 leading-tight">Configure Nooha around your <span className="text-nooha-green">institution.</span></h2>
                <p className="text-body text-xl font-medium text-nooha-muted mb-12">Nooha ERP is designed to be configured, not just installed. We use an interlocking setup logic to ensure institutional consistency.</p>
                <div className="flex gap-4">
                   <Button variant="premium" className="px-10 h-16">Launch Setup Wizard</Button>
                   <Button variant="ghost" className="px-10 h-16">View Blueprints</Button>
                </div>
             </motion.div>

             <div className="relative">
                {/* Interlocking Hexagonal Layout (Simulated with skewed cards) */}
                <div className="grid grid-cols-1 gap-2">
                   {[
                     { label: 'Institution Identity', icon: <Landmark size={20} />, active: true },
                     { label: 'Academic Structure', icon: <Layers size={20} />, active: true },
                     { label: 'Users & Responsibilities', icon: <Users size={20} />, active: true },
                     { label: 'Institutional Policies', icon: <ShieldCheck size={20} />, active: false },
                     { label: 'Operational Readiness', icon: <CheckCircle2 size={20} />, active: false }
                   ].map((step, i) => (
                     <motion.div
                       key={step.label}
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className={cn(
                         "p-1 pr-1 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl overflow-hidden group",
                         i % 2 === 0 ? "ml-12" : "mr-12"
                       )}
                     >
                        <div className="bg-nooha-midnight/60 backdrop-blur-xl border border-white/5 p-6 rounded-2xl flex items-center justify-between group-hover:border-nooha-green/30 transition-all">
                           <div className="flex items-center gap-6">
                              <span className="text-2xl font-black text-nooha-green/10 italic leading-none">{(i+1).toString().padStart(2, '0')}</span>
                              <span className="text-sm font-black text-white uppercase tracking-widest">{step.label}</span>
                           </div>
                           <div className={cn("transition-all duration-500", step.active ? "text-nooha-green" : "text-zinc-800")}>{step.icon}</div>
                        </div>
                     </motion.div>
                   ))}
                </div>
             </div>
          </div>
        </Container>
      </Section>

      {/* 08. Security - LAYERED CONCENTRIC ARCHITECTURE */}
      <Section id="security" className="bg-nooha-midnight relative overflow-hidden border-t border-white/5 py-40">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-40">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Badge variant="primary" className="mb-6 uppercase tracking-widest">SECURITY ARCHITECTURE</Badge>
              <h2 className="text-h2 text-white mb-8">Institutional data deserves <br/><span className="text-nooha-blue">institutional control.</span></h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
             <div className="relative aspect-square flex items-center justify-center max-w-lg mx-auto">
                {/* Visualizing layers as per reference */}
                <div className="absolute inset-0 border border-nooha-blue/5 rounded-full animate-pulse" />
                <div className="absolute inset-10 border border-nooha-blue/10 rounded-full" />
                <div className="absolute inset-20 border border-nooha-blue/20 rounded-full" />

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="relative z-10 w-48 h-48 rounded-full bg-nooha-slate border-2 border-nooha-blue/40 flex items-center justify-center shadow-glow-blue"
                >
                   <NoohaLogo variant="monochrome" size="lg" className="opacity-40" />
                   <div className="absolute inset-0 bg-nooha-blue/5 animate-pulse rounded-full" />
                </motion.div>

                {/* Satellite data markers */}
                {['TENANT', 'RBAC', 'ID', 'LOGS'].map((m, i) => (
                  <motion.div
                    key={m}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-full"
                  >
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 p-2 rounded-lg bg-nooha-midnight border border-nooha-blue/30 shadow-2xl">
                        <span className="text-[8px] font-black text-nooha-blue uppercase tracking-widest">{m}</span>
                     </div>
                  </motion.div>
                ))}
             </div>

             <div className="space-y-12">
                {[
                  { title: 'Tenant Isolation', desc: 'Every institution operates within its own secure, isolated context. There is no shared storage between institutional cores.', icon: <Server className="text-nooha-blue" /> },
                  { title: 'Structured Access', desc: 'Permissions are determine by institutional role and explicit responsibility, not just account type.', icon: <Lock className="text-nooha-blue" /> },
                  { title: 'Terminal Audit', desc: 'Every critical system action is logged for accountability and system integrity.', icon: <Activity className="text-nooha-blue" /> }
                ].map(p => (
                  <div key={p.title} className="flex gap-8 group">
                     <div className="w-12 h-12 rounded-2xl bg-nooha-blue/5 border border-nooha-blue/20 flex items-center justify-center group-hover:bg-nooha-blue group-hover:text-white transition-all shadow-inner">{p.icon}</div>
                     <div><h4 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-nooha-blue transition-colors">{p.title}</h4><p className="text-sm text-nooha-muted leading-relaxed font-medium">{p.desc}</p></div>
                  </div>
                ))}
             </div>
          </div>
        </Container>
      </Section>

      {/* 09. Deployment - TECHNICAL ONBOARDING GRID */}
      <Section id="deployment" className="bg-nooha-navy relative overflow-hidden border-t border-white/5 py-40">
        <Container>
           <div className="text-center max-w-4xl mx-auto mb-32">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                 <span className="text-caption mb-4 block uppercase tracking-[0.4em]">COMMERCIAL → TECHNICAL TRANSITION</span>
                 <h2 className="text-h2 text-white mb-8 leading-tight">A precision path to deployment.</h2>
                 <p className="text-body text-xl font-medium text-nooha-muted">Nooha provides a clear, guided journey from your initial inquiry to a fully operational institutional ecosystem.</p>
              </motion.div>
           </div>

           <div className="relative">
              {/* Reference 2 style interlocking grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-[4rem] overflow-hidden shadow-2xl">
                 {journeyStages.map((s, i) => (
                   <motion.div
                     key={s.id}
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.05 }}
                     className="p-10 bg-nooha-midnight hover:bg-nooha-slate/40 transition-colors group flex flex-col items-center text-center relative"
                   >
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-700 mb-8 group-hover:bg-nooha-green/10 group-hover:text-nooha-green group-hover:border-nooha-green/20 transition-all shadow-inner">
                         {s.icon}
                      </div>
                      <span className="text-2xl font-black text-white/5 mb-4 group-hover:text-nooha-green/10 transition-colors italic leading-none">{s.id}</span>
                      <h4 className="text-white font-black text-[10px] mb-2 group-hover:text-nooha-green transition-colors uppercase tracking-[0.3em]">{s.title}</h4>
                      <p className="text-[10px] text-nooha-muted font-bold uppercase tracking-widest leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">{s.desc}</p>

                      {/* Connection Marker */}
                      {i < journeyStages.length - 1 && (
                         <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 rounded-full border border-white/5 bg-nooha-midnight z-10 translate-x-1/2 -translate-y-1/2" />
                      )}
                   </motion.div>
                 ))}
              </div>
           </div>

           <div className="mt-40 p-12 md:p-24 rounded-[5rem] bg-nooha-blue relative overflow-hidden text-center shadow-glow-blue">
              <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative z-10">
                 <div className="w-24 h-24 rounded-[3rem] bg-nooha-midnight/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white mx-auto mb-10 shadow-2xl">
                    <CheckCircle2 size={40} strokeWidth={1} />
                 </div>
                 <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Operational Launch</h3>
                 <p className="text-white/80 max-w-xl mx-auto font-medium text-xl">Your institution operates within a tailored digital environment, supported by terminal technical architecture.</p>
              </motion.div>
           </div>
        </Container>
      </Section>

      {/* 10. Operational Lifecycle - HUMAN CYCLIC FLOW */}
      <Section id="lifecycle" className="bg-nooha-midnight relative overflow-hidden border-t border-white/5 py-40">
         <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
               <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5">
                  <Badge variant="primary" className="mb-6 uppercase tracking-widest">CONTINUOUS EVOLUTION</Badge>
                  <h2 className="text-h2 text-white mb-8">A system that grows with your <span className="text-nooha-blue">institution.</span></h2>
                  <p className="text-body text-xl font-medium text-nooha-muted mb-12">Nooha ERP isn’t software you merely install—it is the operational record of your institution’s entire lifecycle.</p>

                  <div className="space-y-8">
                     {[
                       { t: 'Configure', d: 'Establish your institutional structure and policies.' },
                       { t: 'Onboard', d: 'Invite users and assign specialized access roles.' },
                       { t: 'Operate', d: 'Execute daily academic and administrative workflows.' }
                     ].map(step => (
                       <div key={step.t} className="flex gap-6 group">
                          <div className="w-10 h-10 rounded-xl bg-nooha-blue/5 border border-nooha-blue/10 flex items-center justify-center text-nooha-blue group-hover:bg-nooha-blue group-hover:text-white transition-all shadow-inner">
                             <Zap size={18} />
                          </div>
                          <div><h4 className="text-white font-bold tracking-tight mb-1 uppercase text-xs tracking-widest">{step.t}</h4><p className="text-xs text-nooha-muted font-medium">{step.d}</p></div>
                       </div>
                     ))}
                  </div>
               </motion.div>

               <div className="lg:col-span-7 relative aspect-square flex items-center justify-center max-w-xl mx-auto">
                  {/* Central Human Asset as per reference 3 */}
                  <div className="relative z-10 w-80 h-80 rounded-full border-4 border-nooha-blue/20 p-2 overflow-hidden shadow-2xl">
                     <img
                       src="/assets/images/NOOHA-EDU-02.jpg"
                       alt="Institutional Intelligence"
                       className="w-full h-full object-cover rounded-full opacity-80"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-nooha-midnight via-transparent to-transparent" />
                     <div className="absolute bottom-10 left-0 right-0 text-center">
                        <Badge variant="primary" className="px-6 py-2 uppercase font-black">NEURAL CORE ACTIVE</Badge>
                     </div>
                  </div>

                  {/* Rotating cyclic modules as per reference 3 */}
                  {[
                    { l: 'CONFIGURE', angle: 0 },
                    { l: 'ONBOARD', angle: 60 },
                    { l: 'OPERATE', angle: 120 },
                    { l: 'MONITOR', angle: 180 },
                    { l: 'REPORT', angle: 240 },
                    { l: 'IMPROVE', angle: 300 },
                  ].map((s, i) => {
                    const x = Math.cos((s.angle * Math.PI) / 180) * 360;
                    const y = Math.sin((s.angle * Math.PI) / 180) * 360;
                    return (
                      <motion.div
                        key={s.l}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="absolute px-6 py-3 rounded-2xl bg-nooha-slate/80 border border-nooha-blue/30 backdrop-blur-xl shadow-glow-blue z-20 group hover:bg-nooha-blue transition-colors cursor-default"
                        style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}
                      >
                         <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] group-hover:text-white transition-colors">{s.l}</span>
                      </motion.div>
                    );
                  })}

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-white/5 rounded-full pointer-events-none"
                  />
               </div>
            </div>
         </Container>
      </Section>

      {/* 11. Future Extensibility - REMAINING SLOTS */}
      <Section id="extensibility" className="bg-nooha-navy relative overflow-hidden border-y border-white/5 py-40">
        <Container>
           <div className="text-center max-w-4xl mx-auto mb-40">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                 <span className="text-caption mb-4 block uppercase tracking-[0.4em]">BUILT TO EVOLVE</span>
                 <h2 className="text-h2 text-white mb-8 leading-tight">Start with what you need. <br/> <span className="text-nooha-blue">Grow when you're ready.</span></h2>
              </motion.div>
           </div>

           <div className="relative min-h-[400px] flex items-center justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-6xl">
                 {[
                   { label: 'Students', active: true },
                   { label: 'Academics', active: true },
                   { label: 'Attendance', active: true },
                   { label: 'Finance', active: false },
                   { label: 'Reports', active: false },
                 ].map((m, i) => (
                   <motion.div
                     key={m.label}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className={cn(
                       "aspect-square rounded-[3rem] border flex flex-col items-center justify-center p-8 text-center transition-all duration-700",
                       m.active ? "bg-nooha-blue/10 border-nooha-blue/40 shadow-glow-blue" : "bg-nooha-slate border-white/5 opacity-40 grayscale"
                     )}
                   >
                      <div className={cn("w-14 h-14 rounded-2xl mb-6 flex items-center justify-center", m.active ? "bg-nooha-blue text-white" : "bg-zinc-800 text-zinc-600 shadow-inner")}>
                         {m.active ? <CheckCircle2 size={28} /> : <Plus size={28} />}
                      </div>
                      <h4 className={cn("font-black text-xs uppercase tracking-widest", m.active ? "text-white" : "text-zinc-700")}>{m.label}</h4>
                      {!m.active && <p className="text-[8px] font-black text-zinc-800 uppercase tracking-[0.3em] mt-3">AVAILABLE SLOT</p>}
                   </motion.div>
                 ))}
              </div>
           </div>
        </Container>
      </Section>

      {/* 12. Terminal CTA - COMMAND CENTER */}
      <Section padding="none" className="bg-nooha-navy relative overflow-hidden py-40">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-32 rounded-[5rem] bg-nooha-blue relative overflow-hidden text-center shadow-[0_64px_120px_-20px_rgba(37,99,235,0.4)]"
          >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent)] pointer-events-none" />
             <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />

             <div className="relative z-10 max-w-4xl mx-auto">
                <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.6em] mb-12 block">READY TO BRING YOUR INSTITUTION TOGETHER?</span>

                <h2 className="text-4xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-[1.05]">The Command Center for <br/> <span className="opacity-60 italic">Your Elite School.</span></h2>

                <p className="text-white/80 text-xl md:text-2xl mb-16 font-medium leading-relaxed max-w-2xl mx-auto">
                   Explore the platform, discuss your institutional requirements, and take the next step toward a connected future.
                </p>

                <div className="flex flex-wrap justify-center gap-8">
                   <Button href="/demo" size="xl" className="bg-nooha-midnight text-white hover:bg-black px-16 group h-20 shadow-2xl border-none">
                      Request a Demo <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform" />
                   </Button>
                   <Button href="/apply" variant="outline" size="xl" className="text-white border-white/20 hover:bg-white/10 hover:border-white px-16 h-20 backdrop-blur-md">
                      Start an Application
                   </Button>
                </div>

                <div className="mt-32 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-12 text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">
                   <span>Modular Selection</span>
                   <span>Technical Onboarding</span>
                   <span>Enterprise Support</span>
                </div>
             </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
