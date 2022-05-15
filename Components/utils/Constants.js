export const VENUE_DATE = "2022-06-06T00:00:00-06:30";
export const VENUE_DURATION = 2 * 60 * 60 * 1000; // 2hours
export const GROOM_NAME = "Sreekumar";
export const BRIDE_NAME = "Amrutha";
export const VENUE_LOCATION = "";

export const IMAGE_PATH = "/assets/images/";

export function CountDownTimer(countDownDate) {
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
  if (distance <= 0) {
    return { distance: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return { distance, days, hours, minutes, seconds };
}
