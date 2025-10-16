import React from 'react';

export default function Contact(){
  return (
    <div className="container-custom pt-28 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-emerald-700">Contact Us</h1>
      <p className="mt-2 text-slate-700">Email: care@myurawellness.com</p>
      <form className="mt-4 grid gap-3">
        <input className="border p-2 rounded" placeholder="Name" />
        <input className="border p-2 rounded" placeholder="Email" />
        <textarea className="border p-2 rounded" rows="5" placeholder="Message" />
        <button className="bg-emerald-700 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
}
