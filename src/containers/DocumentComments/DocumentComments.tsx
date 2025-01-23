import { useEffect, useState } from "react";
import ContentView from "../../components/ContentView";
import CommentInputBox from "./components/CommentInputBox";
import EmptyList from "../../components/EmptyList";
import CommentsList from "./components/CommentsList";

import styles from "./DocumentComments.module.scss";
import { DokobitDocumentComment } from "../../models/dokobitDocumentModel";
import Modal from "../../components/Modal";

function DocumentComments() {
  const [comments, setComments] = useState<DokobitDocumentComment[] | []>(
    () => {
      const dokobitDocumentComments = localStorage.getItem(
        "dokobitDocumentComments"
      );
      return dokobitDocumentComments ? JSON.parse(dokobitDocumentComments) : [];
    }
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("dokobitDocumentComments", JSON.stringify(comments));
  }, [comments]);

  function handleAddComment(newComment: DokobitDocumentComment) {
    setComments([...comments, newComment]);
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function handleRemoveComment() {
    setComments(comments.slice(0, -1));
    closeModal();
  }

  return (
    <ContentView header="Comments">
      <div className={styles["document-comments"]}>
        {comments?.length ? (
          <CommentsList comments={comments} onDelete={openModal} />
        ) : (
          <EmptyList
            message="No comments yet"
            description="Be the first to add a comment"
          />
        )}
        <CommentInputBox
          onAddComment={(comment: DokobitDocumentComment) =>
            handleAddComment(comment)
          }
        />
      </div>

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
