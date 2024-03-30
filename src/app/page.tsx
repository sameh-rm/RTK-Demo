import Loader from '@/components/layout/Loader';
import ShopPage from '@/components/pages/shop/ShopPage';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <ShopPage />;
    </Suspense>
  );
}
