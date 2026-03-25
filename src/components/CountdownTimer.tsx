import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 26,
    seconds: 42,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-sm font-medium uppercase tracking-widest text-brand-primary">Esta Oferta Termina Em:</p>
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="bg-brand-accent text-white rounded-lg w-16 h-16 flex items-center justify-center text-3xl font-bold shadow-lg">
            {formatNumber(timeLeft.hours)}
          </div>
          <span className="text-[10px] uppercase mt-1 font-semibold">Horas</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-brand-accent text-white rounded-lg w-16 h-16 flex items-center justify-center text-3xl font-bold shadow-lg">
            {formatNumber(timeLeft.minutes)}
          </div>
          <span className="text-[10px] uppercase mt-1 font-semibold">Minutos</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-brand-accent text-white rounded-lg w-16 h-16 flex items-center justify-center text-3xl font-bold shadow-lg">
            {formatNumber(timeLeft.seconds)}
          </div>
          <span className="text-[10px] uppercase mt-1 font-semibold">Segundos</span>
        </div>
      </div>
    </div>
  );
}
