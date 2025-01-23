import styles from "./ContentView.module.scss";

interface ContentViewProps {
  header: string;
  children: React.ReactNode;
}

function ContentView({ header, children }: ContentViewProps) {
  return (
    <div data-cy="content-view" className={styles["content-view"]}>
      <div data-cy="content-view-header" className={styles.header}>
        {header}
      </div>
      {children}
    </div>
  );
}

export default ContentView;
