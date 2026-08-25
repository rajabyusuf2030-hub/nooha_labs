import { CareersFeature } from '@/features/careers';
import { constructMetadata } from '@/config/seo';

export const metadata = constructMetadata({
  title: 'Careers',
  description: 'Join Nooha Labs and help us build the next generation of institutional digital ecosystems.',
});

export default function CareersPage() {
  return <CareersFeature />;
}
