import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import CountdownTimer from "../general/CountdownTimer";
import IFrame from "../general/IFrame";
import { LIVE_VIDEO_LINK } from "../utils/Constants";

export default function RightBox() {
  const [finished, setFinished] = useState(false);
  return (
    <div className={styles.right}>
      {!finished ? (
        <>
          <h1 className={styles.rightTitle}>Begins in...</h1>
          <CountdownTimer onFinished={() => setFinished(true)} />
        </>
      ) : (
        <>
          <h1 className={styles.rightTitle}>Watch Live</h1>
          <IFrame link={LIVE_VIDEO_LINK} borderRadius={10} />
        </>
      )}
    </div>
  );
}
