export const VENUE_DATE = 1654453800000;

export function CountDownTimer(countDownDate) {
  const x = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the count down is finished
    if (distance < 0) {
      clearInterval(x);
      return { distance: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return { distance, days, hours, minutes, seconds };
  }, 1000);
}
