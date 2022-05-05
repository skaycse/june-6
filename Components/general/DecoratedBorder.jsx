import Image from "next/image";
import styles from "./Css/DecoratedBorder.module.css";
import { IMAGE_PATH } from "../utils/Constants";

export default function DecoratedBorder() {
  return (
    <div className={styles.decoratedBorderBase}>
      <div className={styles.decoratedBorder} style={{ top: 0, left: 0 }}>
        <Image
          src={IMAGE_PATH + "decorated-border.svg"}
          layout={"fill"}
          priority
        />
      </div>
      <div
        className={styles.decoratedBorder}
        style={{ top: 0, right: 0, transform: "rotate(90deg)" }}
      >
        <Image
          src={IMAGE_PATH + "decorated-border.svg"}
          layout={"fill"}
          priority
        />
      </div>
      <div
        className={styles.decoratedBorder}
        style={{ bottom: 0, left: 0, transform: "rotate(-90deg)" }}
      >
        <Image
          src={IMAGE_PATH + "decorated-border.svg"}
          layout={"fill"}
          priority
        />
      </div>
      <div
        className={styles.decoratedBorder}
        style={{ bottom: 0, right: 0, transform: "rotate(180deg)" }}
      >
        <Image
          src={IMAGE_PATH + "decorated-border.svg"}
          layout={"fill"}
          priority
        />
      </div>
    </div>
  );
}
