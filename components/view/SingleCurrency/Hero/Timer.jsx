import { useEffect, useState } from "react";

function Timer({ lunchTime }) {
  const [timeLeft, setTimeLeft] = useState(lunchTime - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(lunchTime - Date.now());
    }, 1000 * 60);

    // تمیز کردن تایمر هنگام unmount
    return () => clearInterval(interval);
  }, [lunchTime]);

  // محاسبه روزها، ساعت‌ها، دقیقه‌ها و ثانیه‌ها
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div className="center">
      <div className="full-center flex-col gap-1.5 sm:gap-2.5">
        <div className="w-7 sm:w-11 h-[27px] sm:h-[45px] rounded-[4px] bg-[#fff] dark:bg-[#0b2730] text-[#52555A] dark:text-[#fff] text-[11px] sm:text-[18px] full-center">
          {minutes}
        </div>
        <div className="text-[#373A41] dark:text-[#f5f5f5] text-[10px] sm:text-xs">
          دقیقه
        </div>
      </div>
      <div className="text-[#52555A] dark:text-[#fff] text-[11px] sm:text-[18px] mx-2 sm:mx-3 -translate-y-2/4">
        :
      </div>
      <div className="full-center flex-col gap-1.5 sm:gap-2.5">
        <div className="w-7 sm:w-11 h-[27px] sm:h-[45px] rounded-[4px] bg-[#fff] dark:bg-[#0b2730] text-[#52555A] dark:text-[#fff] text-[11px] sm:text-[18px] full-center">
          {hours}
        </div>
        <div className="text-[#373A41] dark:text-[#f5f5f5] text-[10px] sm:text-xs">
          ساعت
        </div>
      </div>
      <div className="text-[#52555A] dark:text-[#fff] text-[11px] sm:text-[18px] mx-2 sm:mx-3 -translate-y-2/4">
        :
      </div>
      <div className="full-center flex-col gap-1.5 sm:gap-2.5">
        <div className="w-7 sm:w-11 h-[27px] sm:h-[45px] rounded-[4px] bg-[#fff] dark:bg-[#0b2730] text-[#52555A] dark:text-[#fff] text-[11px] sm:text-[18px] full-center">
          {days}
        </div>
        <div className="text-[#373A41] dark:text-[#f5f5f5] text-[10px] sm:text-xs">
          روز
        </div>
      </div>
    </div>
  );
}

export default Timer;
