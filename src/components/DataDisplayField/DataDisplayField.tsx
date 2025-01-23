import styles from "./DataDisplayField.module.scss";

interface DataDisplayFieldProps {
  label: string;
  value: string;
}

function DataDisplayField({ label, value }: DataDisplayFieldProps) {
  return (
    <div data-cy="data-field" className={styles["data-display-field"]}>
      <label data-cy="data-field-label" className={styles.label}>
        {label}
      </label>
      <p data-cy="data-field-value" className={styles.value}>
        {value}
      </p>
    </div>
  );
}

export default DataDisplayField;
