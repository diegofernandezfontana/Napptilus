import { useState, useEffect, useRef } from 'react';

export const useInfiniteScroll = () => {
  const itemRef = useRef(null);
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(function(entries) {
      const { isIntersecting } = entries[0];

      if (isIntersecting) {
        setIsDisplayed(true);
      } else {
        setIsDisplayed(false);
      }
    });

    observer.observe(itemRef.current);

    return () => {
      observer.disconnect();
    };
  }, [itemRef]);

  return { itemRef, isDisplayed };
};
