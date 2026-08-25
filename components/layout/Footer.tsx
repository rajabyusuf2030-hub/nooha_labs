'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { Container, Section, NoohaLogo } from '@nooha/ui';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const footerGroups = [
    {
      title: 'Products',
      links: [
        { label: 'Nooha ERP', href: '/products/erp' },
        { label: 'Nooha Rental', href: '/products/rental' },
        { label: 'Nooha AI', href: '/products/ai' },
        { label: 'View All', href: '/products' },
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Engineering', href: '/services#engineering' },
        { label: 'Intelligence', href: '/services#ai' },
        { label: 'Cloud Native', href: '/services#cloud' },
        { label: 'Consulting', href: '/contact' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/portfolio' },
        { label: 'Documentation', href: '/faq' },
        { label: 'Help Center', href: '/faq' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact Sales', href: '/contact' },
        { label: 'Security', href: '/privacy' },
      ]
    }
  ];

  return (
    <footer className="bg-nooha-navy border-t border-nooha-border relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-nooha-blue/5 blur-[160px] rounded-full pointer-events-none" />

      <Section padding="lg" className="relative z-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-10">
              <NoohaLogo size="md" href="/" withLabs />
              <p className="text-nooha-muted text-sm leading-relaxed max-w-sm font-medium">
                {siteConfig.description}
              </p>
              <div className="flex gap-4">
                <SocialLink href={siteConfig.socials.linkedin} icon={<Linkedin size={18} strokeWidth={1.5} />} />
                <SocialLink href={siteConfig.socials.github} icon={<Github size={18} strokeWidth={1.5} />} />
                <SocialLink href={siteConfig.socials.twitter} icon={<Twitter size={18} strokeWidth={1.5} />} />
              </div>
            </div>

            {/* Link Groups */}
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-white font-black mb-8 text-caption opacity-40">{group.title}</h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-nooha-muted hover:text-white transition-all text-xs font-bold uppercase tracking-widest hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-32 pt-10 border-t border-nooha-border flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
               <p className="text-nooha-muted text-[10px] font-black uppercase tracking-[0.3em]">
                 © {new Date().getFullYear()} Nooha Labs Ltd.
               </p>
               <div className="h-4 w-px bg-nooha-border hidden md:block" />
               <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest italic">{siteConfig.tagline}</span>
            </div>

            <div className="flex gap-10">
              <Link href="/privacy" className="text-nooha-muted hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-nooha-muted hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Terms of Service</Link>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 rounded-medium bg-nooha-slate border border-nooha-border text-nooha-muted flex items-center justify-center hover:text-nooha-blue hover:border-nooha-blue/20 hover:bg-nooha-blue/5 transition-all shadow-sm shadow-inner"
    >
      {icon}
    </a>
  );
}
