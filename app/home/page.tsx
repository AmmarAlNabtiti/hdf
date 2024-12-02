'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';

// Dynamically import the component
const DynamicComponent = dynamic(() => import('@/components/server/Ammar'));

export default function TestChunksPage() {
  const [showDynamic, setShowDynamic] = useState(false);

  const handleLoadComponent = () => {
    setShowDynamic(true);
  };

  return (
    <div>
      <h1>Testing _next/static/chunks</h1>
      <button onClick={handleLoadComponent}>Load Dynamic Component</button>
      {showDynamic && <DynamicComponent />}
    </div>
  );
}
