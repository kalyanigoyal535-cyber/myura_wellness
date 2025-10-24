import React from 'react';
import ProductCard from '../ui/ProductCard';

const PRODUCTS = [
  { id: 'p1', title: 'Bone & Joint Support', price: 1299, oldPrice: 1499, img: '/assets/BoneAndJoint.jpg' },
  { id: 'p2', title: 'Dia Care', price: 1190, oldPrice: 1499, img: '/assets/DIACARE.jpg' },
  { id: 'p3', title: 'Gut & Digestion', price: 980, oldPrice: 1199, img: '/assets/GutAndDigestion.jpg' },
  { id: 'p4', title: 'Liver Detox', price: 1320, oldPrice: 1990, img: '/assets/LiverDetox.jpg' }
];

export default function FeaturedProducts(){
  return (
    <section className="py-12">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-emerald-700">Featured products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
