'use client';

import { useTypewriter } from '@/lib/hooks/use-typewriter';

export function SubHeader() {
  const [header] = useTypewriter({
    words: [
      'to build products with impact.',
      'to communicate with customers.',
      'to build scalable systems.',
      'doing fitness.',
      'playing football.',
      'reading.',
    ],
  });

  return (
    <h2 className="text-xl">
      I like {header}
      <span>|</span>
    </h2>
  );
}
