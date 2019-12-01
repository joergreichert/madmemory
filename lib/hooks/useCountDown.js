import { useState, useEffect } from 'react';

export default (timeout) => {
  const checkIntervalInMs = 1000
  const start = timeout / checkIntervalInMs;
  const [remaining, setRemaining] = useState(start);
  const handler = () => {
    setRemaining((prev) => prev > 1 ? prev - 1 : start)
  }
  useEffect(() => {
    const id = setInterval(handler, checkIntervalInMs);
    return () => clearInterval(id);
  }, []);
  return remaining
}