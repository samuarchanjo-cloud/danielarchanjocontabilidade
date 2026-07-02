import { useEffect, useMemo, useState } from 'react';

export function useCountUp(target, isActive, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return undefined;

    let frameId;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [duration, isActive, target]);

  return useMemo(() => value.toLocaleString('pt-BR'), [value]);
}
