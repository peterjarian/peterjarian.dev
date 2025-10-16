import { SubHeader } from './_components/sub-header';
import { GitHub } from '@/components/icons/github';
import { Book, Rss } from 'lucide-react';
import Link from 'next/link';
import { Blockquote } from '@/components/ui/blockquote';
import { Tile } from './_components/tile';
import { EmailLink } from './_components/email-link';
import { SOCIALS } from '@/lib/socials';
import { Linkedin } from '@/components/icons/linkedin';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center p-12">
      <div className="w-full max-w-2xl space-y-6">
        {/* Header */}
        <h1 className="flex flex-col">
          <span className="text-5xl">👋 Hi</span>
          <span className="text-3xl">my name is Peter</span>
        </h1>
        <SubHeader />

        {/* Socials */}
        <div className="flex items-center space-x-6">
          <a href={SOCIALS.GITHUB} target="_blank">
            <GitHub size={28} className="hover:fill-foreground/80" />
          </a>

          <a href={SOCIALS.LINKEDIN} target="_blank">
            <Linkedin size={27} className="hover:fill-foreground/80" />
          </a>

          <EmailLink />
        </div>

        {/* Quote */}
        <div>
          <h2 className="mb-2 text-xl font-medium">Favorite quote</h2>
          <Blockquote>Give people wonderful tools, and they&apos;ll do wonderful things. — Steve Jobs</Blockquote>
        </div>

        {/* About me */}
        <div>
          <h2 className="mb-2 text-xl font-medium">About me</h2>
          <p>
            My name is Peter, I am 19 years old and currently in my third year of IT Software Engineering at The Hague
            University of Applied Sciences. I enjoy building products, and use programming as a tool to realise creative
            product ideas. In my freetime I enjoy watching and playing football (or for Americans soccer) and doing
            fitness.
          </p>
        </div>

        {/* Tiles */}
        <div className="flex space-x-2">
          <Link href="/blog">
            <Tile icon={Rss} label="Blog" />
          </Link>

          <Link href="/books">
            <Tile icon={Book} label="Booklist" />
          </Link>
        </div>
      </div>
    </main>
  );
}
