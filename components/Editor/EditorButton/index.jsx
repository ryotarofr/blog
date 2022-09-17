import { useState } from "react";
import styles from "./styles.module.scss";

export const EditorButton = ({ isActive, onClick, children }) => {
  const [active, setActive] = useState();

  const className = [styles.EditorButton];
  if (isActive) {
    className.push(styles["EditorButton--active"]);
  }

  return (
    <button onClick={onClick} className={className.join(" ")}>
      {children}
    </button>
  );
};
