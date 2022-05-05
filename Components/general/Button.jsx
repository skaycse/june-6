import React from "react";
import styles from "./Css/Button.module.css";

export default function Button({ loading, text, background, onClick }) {
  let className = styles.button;
  if (loading) className = styles.buttonLoading;
  return (
    <button
      className={loading ? styles["button button--loading"] : styles.button}
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
    >
      <span className={styles.button__text}>{text}</span>
    </button>
  );
}
