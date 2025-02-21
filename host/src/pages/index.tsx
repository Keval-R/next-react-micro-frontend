'use client'
import dynamic from 'next/dynamic';

import { Suspense } from 'react';

const HomePage = dynamic(() => import('nextApp/HomePage'), {
  ssr: false,
});
const ProductPage = dynamic(() => import('reactApp/ProductPage'), {
  ssr: false,
});

export default function Home() {

  return (
    <>
      <h1>Host Next App</h1>
      <HomePage />
      <Suspense fallback={<div>Loading Products...</div>}>
        <ProductPage />
      </Suspense>
    </>
  );
}
