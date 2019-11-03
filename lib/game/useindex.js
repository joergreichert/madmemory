import { useState, useEffect, useRef } from 'react';

export const useIndex = (name, wordCount) => {
    const delay = 3000; // 3 sec
    const [index, setIndex] = useState(0);
    const handler = () => {
        setIndex((prev) => {
            if (prev < wordCount) {
                return prev + 1
            } else {
                return prev    
            }
        })
    }
    useEffect(() => {
      const id = setInterval(handler, delay);
      return () => clearInterval(id);
    }, []);
    return index
}