import Image from "next/image";
import styles from "../../styles/Home.module.css";
import RightBox from "../CoreComponents/RightBox";
import DecoratedBorder from "../general/DecoratedBorder";
import {
  BRIDE_NAME,
  GROOM_NAME,
  IMAGE_PATH,
  VENUE_DATE
} from "../utils/Constants";

export default function Home() {
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
      </div>

      <RightBox />
    </div>
  );
}
