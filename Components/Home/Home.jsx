import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Button from "../general/Button";
import CountdownTimer from "../general/CountdownTimer";
import DecoratedBorder from "../general/DecoratedBorder";
import {
  BRIDE_NAME,
  GROOM_NAME,
  IMAGE_PATH,
  VENUE_DATE,
} from "../utils/Constants";
import { RSVP } from "../utils/RouteUrls";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.base}>
      <DecoratedBorder />

      <div className={styles.left}>
        <h1 className={styles.venue}>{new Date(VENUE_DATE).toDateString()}</h1>
        <div className={styles.groomBrideBase}>
          <h1 className={styles.groomTitle}>{GROOM_NAME}</h1>
          <div className={styles.heartImageBase}>
            <Image src={IMAGE_PATH + "heart.svg"} layout={"fill"} priority />
            <span className={styles.ambersand}>&</span>
          </div>
          <h1 className={styles.groomTitle}>{BRIDE_NAME}</h1>
        </div>

        <div className={styles.buttonBase}>
          <Button text={"RSVP NOW"} onClick={() => router.push(RSVP)} />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.rightTitle}>Begins in...</h1>
        <CountdownTimer />
      </div>
    </div>
  );
}
