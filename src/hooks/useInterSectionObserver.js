import { useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      entry.target.classList.toggle('visible', entry.isIntersecting);
    }, options);

    const currentElement = elementRef.current;
    observerRef.current = observer;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (observerRef.current && currentElement) {
        observerRef.current.unobserve(currentElement);
      }
    };
  }, [options]);

  return elementRef;
};

export default useIntersectionObserver;
