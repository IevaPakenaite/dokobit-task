import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import TabButton from "../TabButton";

import styles from "./Sidebar.module.scss";

interface SidebarProps {
  menuOptions: { label: string; icon: IconDefinition; id: number }[];
  selectedMenu: number;
  onMenuSelect: (view: number) => void;
}

function Sidebar({ menuOptions, selectedMenu, onMenuSelect }: SidebarProps) {
  return (
    <div data-cy="sidebar" className={styles.sidebar}>
      {menuOptions.map((item) => (
        <TabButton
          key={item.id}
          label={item.label}
          icon={item.icon}
          onClick={() => onMenuSelect(item.id)}
          isSelected={selectedMenu === item.id}
        />
      ))}
    </div>
  );
}

export default Sidebar;
