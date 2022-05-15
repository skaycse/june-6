import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import invitationStyles from "../../styles/Invitation.module.css";
import RightBox from "../CoreComponents/RightBox";
import DecoratedBorder from "../general/DecoratedBorder";
import {
  BRIDE_NAME,
  GROOM_NAME,
  IMAGE_PATH,
  VENUE_LOCATION
} from "../utils/Constants";

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
            Mr. A. Madhavan and Mrs. Sathy Madhavan, <br />
            Sreenilayam, Edakkatil House, Nayarangadi, P.O. Kallur <br />
            Mob: 9211015478 <br />
            <span className={invitationStyles.inviteMsg}>
              Cordially invites{" "}
              {userName ? (
                <span className={"captalize"}>{userName + "'s "}</span>
              ) : (
                "your "
              )}
              esteemed presence {family && "with family"} on the auspicious
              occasion of the wedding ceremony of our son
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
            D/o Mr. P. Mohandas and Mrs. Kumari Mohandas, <br />
            Perumbily House, PO Kallur <br />
            {/* Mob: 99999999 */}
          </p>
        </div>

        <div className={invitationStyles.locationRowBase}>
          <div className={invitationStyles.locationRow}>
            <div className={invitationStyles.locationIcon}>
              <img src={IMAGE_PATH + "calendar.svg"} />
            </div>
            <p>On Monday, June 06, 2022</p>
          </div>

          <div
            className={invitationStyles.locationRow}
            onClick={() => window.open(VENUE_LOCATION, "_blank")}
            style={{ cursor: "pointer" }}
          >
            <div className={invitationStyles.locationIcon}>
              <img src={IMAGE_PATH + "location.svg"} />
            </div>
            <p>At Sree Shanmukha Mandapam, Nayarangadi</p>
          </div>

          <div className={invitationStyles.locationRow}>
            <div className={invitationStyles.locationIcon}>
              <img src={IMAGE_PATH + "clock.svg"} />
            </div>
            <p>From 9:00 a.m. to 10:00 a.m.</p>
          </div>
        </div>
      </div>

      <RightBox />
    </div>
  );
}
