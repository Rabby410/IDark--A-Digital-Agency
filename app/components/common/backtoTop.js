'use client'

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 10);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
  };

  return (
    <button
      className={`fixed bottom-4 z-50 right-4 bg-white border-2 border-red-500 text-red-500 p-2 rounded-full shadow-md transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={scrollToTop}
      aria-label="Back to Top"
    >
      <FaArrowUp className="text-2xl" />
    </button>
  );
}
