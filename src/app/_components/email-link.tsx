'use client';

import { SOCIALS } from '@/lib/socials';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';

export function EmailLink() {
  return (
    <a
      href={SOCIALS.EMAIL}
      onClick={() => {
        navigator.clipboard.writeText('peter.vdheijden@icloud.com');
        toast.success('Email copied to clipboard.');
      }}
    >
      <Mail size={32} className="hover:stroke-foreground/80" />
    </a>
  );
}
