import { ApplyFeature } from '@/features/apply';
import { constructMetadata } from '@/config/seo';

export const metadata = constructMetadata({
  title: 'Apply for Nooha ERP',
  description: 'Begin the institutional onboarding process for the Nooha ERP ecosystem.',
  path: '/apply',
});

export default function ApplyPage() {
  return <ApplyFeature />;
}
