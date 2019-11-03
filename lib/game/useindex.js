import { useState, useEffect } from 'react';

export const useIndex = (wordCount) => {
    const delay = 3000; // 3 sec
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((idx) => {
                const newIdx = idx + 1
                if (newIdx == (wordCount*2)-1) {
                    clearInterval(interval)
                }
                return newIdx
            });
        }, delay);
        return () => clearInterval(interval);
      }, []);  

  return index;
}