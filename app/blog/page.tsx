import { BlogFeature } from '@/features/blog';
import { constructMetadata } from '@/config/seo';

export const metadata = constructMetadata({
  title: 'Blog',
  description: 'Technical insights, industry analysis, and company updates from the Nooha Labs engineering team.',
});

export default function BlogPage() {
  return <BlogFeature />;
}
