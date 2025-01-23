import styles from "./EmptyList.module.scss";

interface EmptyListProps {
  message: string;
  description?: string;
}

function EmptyList({ message, description }: EmptyListProps) {
  return (
    <div data-cy="empty-list" className={styles["empty-list"]}>
      <p className={styles.icon}>🎈</p>
      <p data-cy="empty-list-message" className={styles.message}>
        {message}
      </p>
      {!!description && (
        <p data-cy="empty-list-description" className={styles.description}>
          {description}
        </p>
      )}
    </div>
  );
}

export default EmptyList;
