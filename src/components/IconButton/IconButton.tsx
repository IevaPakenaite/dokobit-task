import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./IconButton.module.scss";

type Variant = "primary" | "secondary";

interface IconButtonProps {
  icon: IconDefinition;
  variant?: Variant;
  dataCy?: string;
  onClick: () => void;
}

function IconButton({
  icon,
  variant = "primary",
  dataCy = "icon-button",
  onClick,
}: IconButtonProps) {
  return (
    <button
      data-cy={dataCy}
      className={`${styles["icon-button"]} ${
        variant === "primary" ? styles.primary : styles.secondary
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default IconButton;
