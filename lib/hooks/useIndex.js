import { useState, useEffect } from 'react';

export default ({ elementCount, displayTime, level }) => {
  const [index, setIndex] = useState({[level]: 0});
  const handler = () => {
    setIndex(prev => {
      const idx = prev[level];
      if (idx < elementCount) {
        return {[level]: idx+1}
      } else {
        return {[level]: idx}
      }
    })
  }
  useEffect(() => {
    const id = setInterval(handler, displayTime);
    return () => clearInterval(id);
  }, []);
  return index
}