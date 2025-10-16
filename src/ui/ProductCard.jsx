import React from 'react';

export default function ProductCard({ product }){
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center text-center bg-white">
      <img src={product.img} alt={product.title} className="w-full h-40 object-cover rounded-md" />
      <h3 className="mt-3 font-semibold text-slate-800">{product.title}</h3>
      <div className="mt-2 flex items-baseline gap-3">
        <span className="text-emerald-700 font-bold">₹{product.price}</span>
        <span className="line-through text-slate-400">₹{product.oldPrice}</span>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="bg-emerald-700 text-white px-3 py-2 rounded">Add to cart</button>
        <button className="border px-3 py-2 rounded">View</button>
      </div>
    </div>
  );
}
