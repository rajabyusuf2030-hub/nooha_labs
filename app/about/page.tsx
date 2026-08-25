import { AboutFeature } from '@/features/about';
import { constructMetadata } from '@/config/seo';

export const metadata = constructMetadata({
  title: 'About Us',
  description: 'Learn about Nooha Labs, our mission, approach, and the values that drive our engineering team.',
});

export default function AboutPage() {
  return <AboutFeature />;
}
