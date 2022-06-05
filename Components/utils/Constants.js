export const VENUE_DATE = "2022-06-06T03:30:00.000Z";
export const VENUE_DURATION = 2 * 60 * 60 * 1000; // 2hours
export const GROOM_NAME = "Sreekumar";
export const BRIDE_NAME = "Amrutha";
export const VENUE_LOCATION =
  "https://www.google.com/maps/dir//10.4516517,76.2792281/@10.4519474,76.2794675,19.7z/data=!4m5!4m4!1m1!4e2!1m0!3e0";
export const LIVE_VIDEO_LINK = "https://www.youtube.com/embed/c_mTxy4U7-g";

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
