type BookStatus = 'notStarted' | 'currentlyReading' | 'completed';

export type Book = {
  title: string;
  coverUrl?: string;
  authors: string[];
  status: BookStatus;
};

export const BOOKS: Book[] = [
  {
    title: 'Financial Intelligence for Entrepreneurs',
    coverUrl: '/books/financial-intelligence-for-entrepeneurs.webp',
    authors: ['Karen Berman', 'Joe Knight'],
    status: 'currentlyReading',
  },
];

export function getBookStatusText(status: BookStatus) {
  const mapping: Record<BookStatus, string> = {
    notStarted: 'Not started',
    currentlyReading: 'Currently reading',
    completed: 'Completed',
  };

  return mapping[status];
}

export function getBookStatusColor(status: BookStatus) {
  const mapping: Record<BookStatus, string> = {
    notStarted: 'text-muted-foreground',
    currentlyReading: 'text-purple-500',
    completed: 'text-blue-500',
  };

  return mapping[status];
}
