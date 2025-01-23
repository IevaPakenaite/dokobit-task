import { useState } from "react";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../../../../components/IconButton";
import Avatar from "../../../../components/Avatar";
import { DokobitDocumentComment } from "../../../../models/dokobitDocumentModel";
import MessageInput from "../../../../components/MessageInput";

import styles from "./CommentEdit.module.scss";

interface CommentProps {
  comment: DokobitDocumentComment;
  onSave: (updatedComment: DokobitDocumentComment) => void;
  onCancel: () => void;
}

function Comment({ comment, onSave, onCancel }: CommentProps) {
  const [editableText, setEditableText] = useState<string>(comment.text);

  function handleUpdateComment() {
    if (!!editableText) {
      const trimmedComment = editableText.trim();
      if (!!trimmedComment) {
        onSave({
          ...comment,
          text: editableText,
        });
      }
      return;
    }
    return;
  }

  function handleEnterPress(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && e.shiftKey === false) {
      e.preventDefault();

      if (!!editableText) {
        handleUpdateComment();
      }
    }
  }

  return (
    <div data-cy="comment" className={styles.comment}>
      <Avatar name="Vardenis" surname="Pavardenis" />
      <div className={`${styles.container} ${styles.edit}`}>
        <div className={styles.header}>
          <div className={styles.info}>
            <div data-cy="username" className={styles.username}>
              {comment.addedBy}
            </div>
            <div data-cy="timestamp" className={styles.timestamp}>
              {comment.addedOn}
            </div>
          </div>
          <div className={styles.menu}>
            <IconButton
              icon={faCheck}
              onClick={handleUpdateComment}
              variant="secondary"
              dataCy="edit-button"
            />
            <IconButton
              icon={faXmark}
              onClick={onCancel}
              variant="secondary"
              dataCy="delete-button"
            />
          </div>
        </div>
        <MessageInput
          value={editableText}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setEditableText(e.target.value)
          }
          onEnterPress={handleEnterPress}
          placeholder="Update your comment here"
          isSecondary
        />
      </div>
    </div>
  );
}

export default Comment;
