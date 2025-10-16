import Link from 'next/link';
import type { Route } from 'next';
import type { UrlObject } from 'url';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

type BackToProps = ComponentProps<'nav'> & {
  label: string;
  href: Route | UrlObject;
};

export function BackTo({ label, href, className, ...options }: BackToProps) {
  return (
    <nav className={cn('', className)} {...options}>
      <Link href={href} className="inline-block">
        <p className="uppercase hover:underline">Back to {label}</p>
      </Link>
    </nav>
  );
}
