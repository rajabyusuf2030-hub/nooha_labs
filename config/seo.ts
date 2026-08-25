import { Metadata } from 'next';
import { siteConfig } from './site';

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = `${siteConfig.url}/og-image.png`,
  icons = '/favicon.ico',
  noIndex = false,
  path = '',
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  path?: string;
} = {}): Metadata {
  const pageUrl = `${siteConfig.url}${path}`;

  return {
    title: title === siteConfig.name ? `${title} — ${siteConfig.tagline}` : `${title} | ${siteConfig.name}`,
    description,
    keywords: [
      'Nooha Labs',
      'Software Development Kenya',
      'Web Application Design',
      'Nooha ERP',
      'Rental Management Platform',
      'Nooha AI Assistant',
      'Next.js 15 App Router',
      'TypeScript Engineering',
      'Mombasa Technology Company',
    ],
    authors: [{ name: 'Nooha Labs Team', url: siteConfig.url }],
    creator: 'Nooha Labs Ltd',
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@noohalabs',
    },
    icons,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mombasa',
      addressCountry: 'KE',
    },
    sameAs: [siteConfig.socials.linkedin, siteConfig.socials.github, siteConfig.socials.twitter],
  };
}
