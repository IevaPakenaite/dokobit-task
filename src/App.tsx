import { useEffect, useState } from "react";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import DocumentOverview from "./containers/DocumentOverview";
import DocumentComments from "./containers/DocumentComments";
import sidebarMenuButtons, {
  sidebarMenuButtonTypes,
} from "./constants/sidebarMenuButtons";
import TabButton from "./components/TabButton";
import { DokobitDocumentComment } from "./models/dokobitDocumentModel";

function App() {
  const [selectedView, setSelectedView] = useState<number>(
    sidebarMenuButtonTypes.OVERVIEW
  );

  const [comments, setComments] = useState<DokobitDocumentComment[] | []>(
    () => {
      const dokobitDocumentComments = localStorage.getItem(
        "dokobitDocumentComments"
      );
      return dokobitDocumentComments ? JSON.parse(dokobitDocumentComments) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("dokobitDocumentComments", JSON.stringify(comments));
  }, [comments]);

  function handleAddComment(newComment: DokobitDocumentComment) {
    setComments([...comments, newComment]);
  }

  function handleUpdateComment(updatedComment: DokobitDocumentComment) {
    const newList = comments.map((comment) =>
      comment.id === updatedComment.id
        ? { ...comment, text: updatedComment.text }
        : comment
    );

    setComments(newList);
  }

  function handleRemoveComment() {
    setComments(comments.slice(0, -1));
  }

  return (
    <Card>
      {selectedView === sidebarMenuButtonTypes.OVERVIEW ? (
        <DocumentOverview />
      ) : (
        <DocumentComments
          comments={comments}
          onAddComment={handleAddComment}
          onUpdateComment={handleUpdateComment}
          onRemoveComment={handleRemoveComment}
        />
      )}
      <Sidebar>
        {sidebarMenuButtons.map((item) => (
          <TabButton
            key={item.id}
            label={item.label}
            icon={item.icon}
            onClick={() => setSelectedView(item.id)}
            isSelected={selectedView === item.id}
            notification={
              item.id === sidebarMenuButtonTypes.COMMENTS ? comments.length : 0
            }
          />
        ))}
      </Sidebar>
    </Card>
  );
}

export default App;
