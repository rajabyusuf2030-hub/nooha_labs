import React from 'react';
import Link from 'next/link';
import { Button, Section, Container } from '@nooha/ui';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <Section className="min-h-[70vh] flex items-center justify-center">
      <Container className="text-center max-w-lg">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary">
          <Compass size={32} />
        </div>
        <h1 className="mt-6 text-4xl font-extrabold text-white">Page Not Found</h1>
        <p className="mt-3 text-sm text-zinc-300">
          The requested page path does not exist or has been relocated within the Nooha Labs ecosystem.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/" size="md">
            Return to Home
          </Button>
          <Button href="/contact" variant="outline" size="md">
            Contact Support
          </Button>
        </div>
      </Container>
    </Section>
  );
}
