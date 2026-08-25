import { FaqFeature } from '@/features/faq';
import { constructMetadata } from '@/config/seo';

export const metadata = constructMetadata({
  title: 'FAQ',
  description: 'Get answers to common questions about Nooha Labs products, platform security, and implementation.',
});

export default function FaqPage() {
  return <FaqFeature />;
}
