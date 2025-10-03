import { useEffect, useState } from "react";

export default function useCountUp(end: number, duration: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1);
      setCount(Math.floor(progressRatio * end));
      if (progress < duration) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [end, duration]);

  return count;
}