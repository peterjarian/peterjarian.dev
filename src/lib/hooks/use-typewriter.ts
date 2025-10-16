'use client';

import { useState, useEffect } from 'react';

const TYPING_SPEED = 150;
const DELETING_SPEED = 100;
const DELAY_BETWEEN_WORDS = 2000;

type UseTypewriterProps = {
  words: string[];
};

export function useTypewriter({ words }: UseTypewriterProps): [string] {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), DELAY_BETWEEN_WORDS);
          return;
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words]);

  return [currentText];
}
