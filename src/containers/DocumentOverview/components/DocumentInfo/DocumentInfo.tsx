import DataDisplayField from "../../../../components/DataDisplayField";

import styles from "./DocumentInfo.module.scss";

function DocumentInfo() {
  return (
    <div data-cy="document-info" className={styles["document-info"]}>
      <DataDisplayField label="Document owner" value="Vardenis Pavardenis" />
      <DataDisplayField label="Creation date" value="2020.03.10 12:00" />
      <DataDisplayField label="Deadline" value="2020.03.21 14:00" />
    </div>
  );
}

export default DocumentInfo;
