'use client';

import React, { useEffect } from 'react';
import { Button, Section, Container, NoohaLogo } from '@nooha/ui';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.05),_transparent_70%)] pointer-events-none" />

      <Container className="text-center max-w-xl relative z-10">
        <div className="mx-auto mb-10">
           <NoohaLogo variant="monochrome" size="lg" className="opacity-20 mx-auto" />
        </div>

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[2.5rem] bg-error/10 border border-error/20 text-error mb-8 shadow-glow">
          <AlertTriangle size={32} strokeWidth={1.5} />
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">System Interruption</h1>
        <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-12">
          An unexpected technical exception occurred within the Nooha ecosystem. Our telemetry has been notified.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" onClick={() => reset()} className="gap-2 px-10 h-14">
            <RefreshCcw size={18} /> Re-initialize
          </Button>
          <Button variant="secondary" size="lg" href="/" className="px-10 h-14">
            Return Home
          </Button>
        </div>

        {error.digest && (
          <p className="mt-12 text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
            Digest: {error.digest}
          </p>
        )}
      </Container>
    </Section>
  );
}
