import ProductDetailsPage from '@/components/pages/shop/ProductDetails';
import React from 'react';

const Page = (props: { params: { slug: string } }) => {
  return <ProductDetailsPage slug={props.params.slug} />;
};

export default Page;
