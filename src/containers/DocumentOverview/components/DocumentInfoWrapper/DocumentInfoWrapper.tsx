import styles from "./DocumentInfoWrapper.module.scss";

interface DocumentInfoWrapperProps {
  children: React.ReactNode;
}

function DocumentInfoWrapper({ children }: DocumentInfoWrapperProps) {
  return (
    <div data-cy="document-info" className={styles["document-info"]}>
      {children}
    </div>
  );
}

export default DocumentInfoWrapper;
