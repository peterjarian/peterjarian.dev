import '@/styles/globals.css';
import { inter } from '@/styles/fonts';
import { Toaster } from '@/components/ui/sonner';

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
