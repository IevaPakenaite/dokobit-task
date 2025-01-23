import styles from "./Sidebar.module.scss";

interface SidebarProps {
  children: React.ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  return (
    <div data-cy="sidebar" className={styles.sidebar}>
      {children}
    </div>
  );
}

export default Sidebar;
