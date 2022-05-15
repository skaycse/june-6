import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import invitationStyles from "../../styles/Invitation.module.css";
import CountdownTimer from "../general/CountdownTimer";
import DecoratedBorder from "../general/DecoratedBorder";
import { BRIDE_NAME, GROOM_NAME, IMAGE_PATH } from "../utils/Constants";

export default function Invitation() {
  const [userName, setUserName] = useState(false);
  const [family, setFamily] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const user = params.get("user");
      setUserName(user);

      const family = window.location.search.toLowerCase().includes("family");
      if (family) setFamily(true);
    }
  }, [typeof window]);

  return (
    <div className={styles.base}>
      <DecoratedBorder />

      <div className={styles.left}>
        <div className={invitationStyles.invitationBase}>
          <p className={invitationStyles.parents}>
            Mr. John Doe and Mrs. Jane Doe <br />
            ABC house Lions Street <br />
            Mob: 99999999 <br />
            <span className={invitationStyles.inviteMsg}>
              Cordially invites{" "}
              {userName ? (
                <span className={"captalize"}>{userName + "'s "}</span>
              ) : (
                "your "
              )}
              esteemed presence {family && "with family"} on the auspicious
              ocassion of the wedding ceremony of our son
            </span>
          </p>

          <div className={invitationStyles.brideGroomBase}>
            <div className={invitationStyles.brideGroom}>
              <p>{GROOM_NAME}</p>
              <p style={{ fontWeight: 600 }}>with</p>
              <p>{BRIDE_NAME}</p>
            </div>
          </div>

          <p
            className={invitationStyles.parents}
            style={{ textAlign: "right", alignSelf: "end" }}
          >
            D/o Mr. John Doe and Mrs. Jane Doe <br />
            ABC house Lions Street <br />
            {/* Mob: 99999999 */}
          </p>
        </div>

        <div className={invitationStyles.locationRowBase}>
          <div className={invitationStyles.locationRow}>
            <div className={invitationStyles.locationIcon}>
              <img src={IMAGE_PATH + "calendar.svg"} />
            </div>
            <p>On Monday,June 02, 2022</p>
          </div>

          <div className={invitationStyles.locationRow}>
            <div className={invitationStyles.locationIcon}>
              <img src={IMAGE_PATH + "location.svg"} />
            </div>
            <p>at Avenue park Thrissur</p>
          </div>

          <div className={invitationStyles.locationRow}>
            <div className={invitationStyles.locationIcon}>
              <img src={IMAGE_PATH + "clock.svg"} />
            </div>
            <p>from 5:00pm to 6:00pm</p>
          </div>
        </div>

        {/* <h2>Hey {userName && userName}</h2>
        <h3>
          You're Invited to our wedding{" "}
          <span>{family && "with your family"}</span>
        </h3>
        <h4>Register below to let me know you're attending the event</h4> */}
      </div>

      <div className={styles.right}>
        <h1 className={styles.rightTitle}>Begins in...</h1>
        <CountdownTimer />
      </div>
    </div>
  );
}
