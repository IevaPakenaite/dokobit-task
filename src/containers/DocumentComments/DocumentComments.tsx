import { useEffect, useState } from "react";
import ContentView from "../../components/ContentView";
import CommentInputBox from "./components/CommentInputBox";
import EmptyList from "../../components/EmptyList";
import CommentsList from "./components/CommentsList";
import { DokobitDocumentComment } from "../../models/dokobitDocumentModel";
import Modal from "../../components/Modal";

interface DocumentCommentsProps {
  comments: DokobitDocumentComment[];
  onAddComment: (comment: DokobitDocumentComment) => void;
  onUpdateComment: (comment: DokobitDocumentComment) => void;
  onRemoveComment: () => void;
}

function DocumentComments({
  comments,
  onAddComment,
  onUpdateComment,
  onRemoveComment,
}: DocumentCommentsProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("dokobitDocumentComments", JSON.stringify(comments));
  }, [comments]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function handleRemoveComment() {
    onRemoveComment();
    closeModal();
  }

  return (
    <ContentView
      header="Comments"
      footer={
        <CommentInputBox
          onAddComment={(comment: DokobitDocumentComment) =>
            onAddComment(comment)
          }
        />
      }
    >
      {comments?.length ? (
        <CommentsList
          comments={comments}
          onDelete={openModal}
          onUpdate={onUpdateComment}
        />
      ) : (
        <EmptyList
          message="No comments yet"
          description="Be the first to add a comment"
        />
      )}

      <Modal
        header="Delete comment?"
        actionButtonTitle="Delete"
        isOpen={isModalOpen}
        onClose={closeModal}
        onAction={handleRemoveComment}
      >
        <p>This will delete last comment.</p>
      </Modal>
    </ContentView>
  );
}

export default DocumentComments;
