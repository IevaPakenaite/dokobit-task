import { useEffect, useState } from "react";
import ContentView from "../../components/ContentView";
import DataDisplayField from "../../components/DataDisplayField";
import EmptyList from "../../components/EmptyList";
import { DokobitDocumentMetadata } from "../../models/dokobitDocumentModel";
import DocumentInfoWrapper from "./components/DocumentInfoWrapper";

function DocumentOverview() {
  const [document, setDocument] = useState<DokobitDocumentMetadata>();

  useEffect(() => {
    if (!!localStorage.getItem("dokobitDocumentMetadata")) {
      const dokobitDocumentMetadata = localStorage.getItem(
        "dokobitDocumentMetadata"
      );

      if (!!dokobitDocumentMetadata) {
        setDocument(JSON.parse(dokobitDocumentMetadata));
      }
    }
  }, []);

  if (!document) {
    return <EmptyList message="Failed to load document" />;
  }
  return (
    <ContentView header="Overview">
      <DocumentInfoWrapper>
        <DataDisplayField label="Document owner" value={document.createdBy} />
        <DataDisplayField label="Creation date" value={document.createdOn} />
        <DataDisplayField label="Deadline" value={document.deadline} />
      </DocumentInfoWrapper>
    </ContentView>
  );
}

export default DocumentOverview;
