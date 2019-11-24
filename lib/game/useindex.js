import { useState, useEffect } from 'react';

export const useIndex = ( { elementCount, displayTime }) => {
    const [index, setIndex] = useState(0);
    const handler = () => {
        setIndex((prev) => {
            if (prev < elementCount) {
                return prev + 1
            } else {
                return prev
            }
        })
    }
    useEffect(() => {
      const id = setInterval(handler, displayTime);
      return () => clearInterval(id);
    }, []);
    return index
}