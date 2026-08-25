import { ErpProductFeature } from '@/features/products';
import { constructMetadata } from '@/config/seo';

export const metadata = constructMetadata({
  title: 'Nooha ERP',
  description: 'The operating system for modern schools. Automate grading, fees, and institutional intelligence.',
});

export default function ErpProductPage() {
  return <ErpProductFeature />;
}
