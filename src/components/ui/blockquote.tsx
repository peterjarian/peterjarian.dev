import { ReactNode } from 'react';

export function Blockquote({ children }: { children: ReactNode }) {
  return <blockquote className="border-l-4 pl-6 italic">{children}</blockquote>;
}
