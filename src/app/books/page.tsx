import { BOOKS } from '@/lib/books';
import { BookList } from './_components/book-list';
import { BackTo } from '@/components/common/back-to';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <>
      <BackTo label="Home" href="/" className="mt-2 ml-2" />
      <main className="mx-20 my-20">
        <h1 className="mb-6 text-4xl font-medium">Booklist</h1>
        <BookList books={BOOKS} />
      </main>
    </>
  );
}
