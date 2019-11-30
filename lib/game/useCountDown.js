import { useState, useEffect } from 'react';

export default (timeout) => {
  const start = timeout / 1000;
  const [remaining, setRemaining] = useState(start);
  const handler = () => {
    setRemaining((prev) => prev > 1 ? prev - 1 : start)
  }
  useEffect(() => {
    const id = setInterval(handler, 1000);
    return () => clearInterval(id);
  }, []);
  return remaining
}