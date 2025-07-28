'use client';
import { Suspense } from 'react';
import Navbar from './navbar';

export default function NavbarWrapper() {
  return (
    <Suspense fallback={<div className="w-full h-16 bg-white border-b border-border-color"></div>}>
      <Navbar />
    </Suspense>
  );
}