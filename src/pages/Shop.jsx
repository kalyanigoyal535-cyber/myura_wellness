import React from 'react';
import FeaturedProducts from '../sections/FeaturedProducts';

export default function Shop(){
  return (
    <div className="container-custom pt-28 py-8">
      <h1 className="text-3xl font-bold text-emerald-700">Shop</h1>
      <p className="mt-2 text-slate-600">All products (sample)</p>
      <FeaturedProducts />
    </div>
  );
}
