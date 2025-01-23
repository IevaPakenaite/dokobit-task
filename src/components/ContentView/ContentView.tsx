import styles from "./ContentView.module.scss";

interface ContentViewProps {
  header: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

function ContentView({ header, children, footer }: ContentViewProps) {
  return (
    <div data-cy="content-view" className={styles["content-view"]}>
      <div data-cy="content-view-header" className={styles.header}>
        <span>{header}</span>
      </div>
      <div data-cy="content-view-content" className={styles.children}>
        {children}
      </div>
      <div data-cy="content-view-footer" className={styles.footer}>
        {footer}
      </div>
    </div>
  );
}

export default ContentView;
