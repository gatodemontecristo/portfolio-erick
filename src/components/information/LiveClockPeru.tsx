import { useState, useEffect } from 'react';

export const LiveClockPeru = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-PE', {
      timeZone: 'America/Lima',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center md:p-4 p-2">
      <div className="md:text-2xl text-base font-orbitron text-center">
        {formatTime(currentTime)}
      </div>
    </div>
  );
};
