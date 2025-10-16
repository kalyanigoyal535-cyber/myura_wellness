import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-amber-50 border-t mt-8">
      <div className="container-custom py-8 text-center">
        <div className="text-lg font-semibold text-emerald-700">MYURA Wellness</div>
        <div className="mt-2 text-sm text-slate-700">care@myurawellness.com • +91 9133 001 177</div>
        <div className="mt-4 space-x-4">
          <a href="/faqs" className="text-sm">Faqs</a>
          <a href="/returns" className="text-sm">Returns</a>
          <a href="/privacy" className="text-sm">Privacy</a>
        </div>
        <div className="mt-4 text-xs text-slate-600">© {new Date().getFullYear()} JAC Nutrition Pvt. Ltd.</div>
      </div>
    </footer>
  );
}
