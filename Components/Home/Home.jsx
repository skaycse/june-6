import styles from "../../styles/Home.module.css";
import invitationStyles from "../../styles/Invitation.module.css";
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
        <h1 className={styles.venue}>Monday, June 06, 2022</h1>
        <div className={styles.groomBrideBase}>
          <div className={invitationStyles.brideGroomBase}>
            <div className={invitationStyles.brideGroom}>
              <p>{GROOM_NAME}</p>
              <p style={{ fontWeight: 600 }}>with</p>
              <p>{BRIDE_NAME}</p>
            </div>
          </div>
        </div>
      </div>

      <RightBox />
    </div>
  );
}
