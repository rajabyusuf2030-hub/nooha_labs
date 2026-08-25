import './globals.css';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { constructMetadata, generateOrganizationJsonLd } from '@/config/seo';
import { AppProviders } from '@/providers/AppProviders';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { cn } from '@nooha/ui';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = constructMetadata({
  title: 'Nooha Labs — Engineering the Future of Institutional Infrastructure',
  description: 'High-scale ERP systems, intelligent AI assistants, and digital platforms designed for elite African institutions. Build what comes next.',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = generateOrganizationJsonLd();
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html
      lang="en"
      className={cn(
        "dark",
        plusJakartaSans.variable,
        jetBrainsMono.variable
      )}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <AppProviders>
          <MarketingLayout>
            {children}
          </MarketingLayout>
        </AppProviders>
      </body>
    </html>
  );
}
