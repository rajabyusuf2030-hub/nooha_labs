'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  ChevronDown,
  Rocket,
  Globe,
  Sparkles,
  ShieldCheck,
  Database,
  Zap,
  Brain,
  MessageSquare,
  Info,
  Layout,
  Users,
  Mail,
  Activity,
  Layers,
  Lock,
  ArrowRight,
  UserCheck,
  Building2,
  GraduationCap,
  BarChart3,
  Terminal,
  BookOpen,
  RefreshCcw,
  Server,
  FileText,
  Settings
} from 'lucide-react';
import { Button, Container, NoohaLogo, cn } from '@nooha/ui';
import { siteConfig } from '@/config/site';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navGroups = [
    {
      label: 'Products',
      href: '/products',
      width: 'w-[480px]',
      items: [
        { label: 'Nooha ERP', desc: 'The OS for schools.', href: '/products/erp', icon: Database, color: 'text-nooha-green' },
        { label: 'Nooha Rental', desc: 'Logistics mastery.', href: '/products/rental', icon: Zap, color: 'text-nooha-blue' },
        { label: 'Nooha AI', desc: 'Contextual intelligence.', href: '/products/ai', icon: Brain, color: 'text-nooha-violet' },
      ]
    },
    {
      label: 'Platform',
      href: '/platform',
      width: 'w-[320px]',
      items: [
        { label: 'Architecture', desc: 'System blueprints.', href: '/platform#architecture', icon: Layers },
        { label: 'Infrastructure', desc: 'Technical foundation.', href: '/platform#infrastructure', icon: Server },
        { label: 'Core Services', desc: 'Logic kernels.', href: '/platform#core-services', icon: Settings },
      ]
    },
    {
      label: 'Security',
      href: '/security',
      width: 'w-[320px]',
      items: [
        { label: 'Security Core', desc: 'Layered protection.', href: '/security', icon: ShieldCheck },
        { label: 'Trust Center', desc: 'Sovereignty & Proof.', href: '/trust', icon: Database },
        { label: 'System Status', desc: 'Real-time monitoring.', href: '/status', icon: Activity },
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      width: 'w-[320px]',
      items: [
        { label: 'Administration', desc: 'Centralized control.', href: '/solutions#admin', icon: Building2 },
        { label: 'Academics', desc: 'Teaching logic.', href: '/solutions#academics', icon: GraduationCap },
        { label: 'Leadership', desc: 'Strategic metrics.', href: '/solutions#leadership', icon: BarChart3 },
      ]
    },
    {
      label: 'Resources',
      href: '/docs',
      width: 'w-[320px]',
      items: [
        { label: 'Documentation', desc: 'Technical reference.', href: '/docs', icon: Terminal },
        { label: 'Legal Portal', desc: 'Compliance & Governance.', href: '/legal', icon: FileText },
        { label: 'Guides', desc: 'Workflow blueprints.', href: '/resources#guides', icon: BookOpen },
      ]
    },
    {
      label: 'Company',
      href: '/about',
      width: 'w-[320px]',
      items: [
        { label: 'About Us', desc: 'Our lab origins.', href: '/about', icon: Info },
        { label: 'Strategic Pulse', desc: 'Our methodology.', href: '/about#pulse', icon: Activity },
        { label: 'Careers', desc: 'Join the lab.', href: '/about#careers', icon: Users },
      ]
    }
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-normal",
        isScrolled
          ? "bg-nooha-navy/80 backdrop-blur-xl border-b border-nooha-border py-4 shadow-elevated"
          : "bg-transparent py-8"
      )}
    >
      <Container size="full" className="px-10">
        <div className="flex items-center justify-between">
          <NoohaLogo size="md" animate href="/" onMouseEnter={() => setActiveDropdown(null)} />

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(group.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={cn(
                  "flex items-center gap-1.5 px-4 py-2.5 rounded-small transition-all text-[11px] font-black uppercase tracking-[0.2em]",
                  activeDropdown === group.label ? "text-white bg-white/5 shadow-inner" : "text-nooha-muted hover:text-white"
                )}>
                  {group.label}
                  <ChevronDown size={12} className={cn("transition-transform duration-normal opacity-40", activeDropdown === group.label && "rotate-180 opacity-100 text-nooha-blue")} />
                </button>

                <AnimatePresence>
                  {activeDropdown === group.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.21, 0.45, 0.32, 0.9] }}
                      className={cn("absolute top-full left-0 pt-4", group.width)}
                    >
                      <div className="bg-nooha-slate border border-nooha-border rounded-medium shadow-elevated overflow-hidden backdrop-blur-2xl">
                        <div className="p-3 space-y-1">
                          {group.items?.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="flex items-start gap-4 p-4 rounded-md hover:bg-white/5 transition-all group/item"
                            >
                              <div className={cn(
                                "w-10 h-10 rounded-xl bg-nooha-navy border border-nooha-border flex items-center justify-center transition-all shadow-inner",
                                (item as any).color || "text-nooha-muted group-hover/item:text-nooha-blue"
                              )}>
                                <item.icon size={18} strokeWidth={1.5} />
                              </div>
                              <div className="pt-0.5">
                                <p className="text-[11px] font-black text-white uppercase tracking-wider mb-1">{item.label}</p>
                                <p className="text-[10px] text-nooha-muted font-medium leading-relaxed">{item.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="bg-nooha-navy/50 p-4 border-t border-nooha-border">
                           <Link href={group.href} className="flex items-center justify-center gap-2 text-[9px] font-black text-nooha-blue uppercase tracking-[0.3em] hover:text-white transition-colors">
                              Experience {group.label} <ArrowRight size={10} />
                           </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="h-5 w-px bg-nooha-border mx-6" />

            <div className="flex items-center gap-6 pl-2">
              <Link href="/explore" className="text-[10px] font-black uppercase tracking-[0.2em] text-nooha-muted hover:text-nooha-blue transition-colors">
                 Explore Nooha
              </Link>
              <Button size="sm" href="/demo" className="h-11 px-8 rounded-small text-[10px] font-black uppercase tracking-[0.2em] shadow-glow-blue">
                Request Demo
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 transition-colors border border-white/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              className="lg:hidden mt-6 bg-nooha-slate border border-nooha-border rounded-large overflow-hidden shadow-elevated"
            >
              <div className="p-10 space-y-12">
                {navGroups.map(group => (
                  <div key={group.label} className="space-y-8">
                    <p className="text-[10px] font-black text-nooha-blue uppercase tracking-[0.5em]">{group.label}</p>
                    <div className="grid grid-cols-1 gap-8">
                       {group.items.map(item => (
                         <Link key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-5 group">
                            <div className="w-12 h-12 rounded-2xl bg-nooha-navy border border-nooha-border flex items-center justify-center text-nooha-muted group-hover:text-nooha-blue transition-all">
                               <item.icon size={22} strokeWidth={1.5} />
                            </div>
                            <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">{item.label}</span>
                         </Link>
                       ))}
                    </div>
                  </div>
                ))}

                <div className="pt-8 border-t border-nooha-border flex flex-col gap-5">
                  <Button variant="secondary" className="w-full h-14 text-button" href={siteConfig.hubUrl}>Hub Login</Button>
                  <Button className="w-full h-14 text-button shadow-glow-blue" href="/apply">Institutional Application</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  );
}
