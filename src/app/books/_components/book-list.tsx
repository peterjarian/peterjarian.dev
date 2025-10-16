import { Book, getBookStatusText, getBookStatusColor } from '@/lib/books';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import clsx from 'clsx';

type BookListProps = {
  books: Book[];
};

export function BookList({ books }: BookListProps) {
  return (
    <ol className="space-y-6">
      {books.map((book, index) => (
        <li key={index}>
          <div className="flex gap-4">
            {/* Book Cover */}
            <div>
              {book.coverUrl ? (
                <Image
                  src={book.coverUrl}
                  alt={`${book.title} cover`}
                  width={120}
                  height={180}
                  priority={index < 5}
                  className="rounded object-cover"
                />
              ) : (
                <div className="flex h-[180px] w-[120px] items-center justify-center rounded bg-gray-200 text-sm text-gray-400">
                  No Cover
                </div>
              )}
            </div>

            {/* Book Info */}
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
              <h3 className="text-lg leading-tight font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-600">by {book.authors.join(', ')}</p>
              <span className={clsx('text-xs font-medium tracking-wide uppercase', getBookStatusColor(book.status))}>
                {getBookStatusText(book.status)}
              </span>
            </div>
          </div>
          {index < books.length - 1 && <Separator className="my-4" />}
        </li>
      ))}
    </ol>
  );
}
