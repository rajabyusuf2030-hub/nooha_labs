'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { CommandPalette, Button } from '@nooha/ui';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-nooha-midnight text-white selection:bg-nooha-blue/30 selection:text-white">
      <Navbar />
      <CommandPalette />

      {/* Persistent Technical Support Access (I-A) */}
      <div className="fixed bottom-10 right-10 z-[40]">
         <Link
            href="/contact?subject=Technical%20Support"
            className="flex items-center gap-4 p-4 pr-6 rounded-2xl bg-nooha-slate border border-white/5 shadow-2xl hover:border-nooha-blue/40 transition-all group backdrop-blur-xl"
         >
            <div className="w-10 h-10 rounded-xl bg-nooha-blue/10 flex items-center justify-center text-nooha-blue group-hover:bg-nooha-blue group-hover:text-white transition-all">
               <MessageSquare size={18} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 group-hover:text-white transition-colors">Technical Support</span>
         </Link>
      </div>

      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
