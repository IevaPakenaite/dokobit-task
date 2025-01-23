import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./TabButton.module.scss";

interface TabButtonProps {
  label: string;
  icon: IconDefinition;
  isSelected: boolean;
  onClick: () => void;
}

function TabButton({ label, icon, isSelected, onClick }: TabButtonProps) {
  return (
    <button
      data-cy="tab-button"
      onClick={onClick}
      className={`${styles["tab-button"]} ${isSelected && styles.selected}`}
    >
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      <span data-cy="tab-button-label" className={styles.label}>
        {label}
      </span>
    </button>
  );
}

export default TabButton;
