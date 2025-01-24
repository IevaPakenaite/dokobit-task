import { useState } from "react";
import ContentView from "../../components/ContentView";
import DataDisplayField from "../../components/DataDisplayField";
import EmptyList from "../../components/EmptyList";
import { DokobitDocumentMetadata } from "../../models/dokobitDocumentModel";

function DocumentOverview() {
  const [document] = useState<DokobitDocumentMetadata | null>(() => {
    const dokobitDocumentMetadata = localStorage.getItem(
      "dokobitDocumentMetadata"
    );
    return dokobitDocumentMetadata ? JSON.parse(dokobitDocumentMetadata) : null;
  });

  if (!document) {
    return <EmptyList message="Failed to load document" />;
  }
  return (
    <ContentView header="Overview">
      <DataDisplayField label="Document owner" value={document.createdBy} />
      <DataDisplayField label="Creation date" value={document.createdOn} />
      <DataDisplayField label="Deadline" value={document.deadline} />
    </ContentView>
  );
}

export default DocumentOverview;
