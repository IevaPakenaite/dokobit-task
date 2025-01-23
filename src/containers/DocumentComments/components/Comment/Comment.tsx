import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import IconButton from "../../../../components/IconButton";
import Avatar from "../../../../components/Avatar";
import { DokobitDocumentComment } from "../../../../models/dokobitDocumentModel";

import styles from "./Comment.module.scss";

interface CommentProps {
  comment: DokobitDocumentComment;
  isLast: boolean;
  onDelete: () => void;
}

function Comment({ comment, isLast, onDelete }: CommentProps) {
  return (
    <div data-cy="comment" className={styles.comment}>
      <Avatar name="Vardenis" surname="Pavardenis" />
      <div className={styles.container}>
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
              icon={faPen}
              onClick={() => console.log("Clicked to edit")}
              variant="secondary"
              dataCy="edit-button"
            />
            {isLast && (
              <IconButton
                icon={faTrashCan}
                onClick={onDelete}
                variant="secondary"
                dataCy="delete-button"
              />
            )}
          </div>
        </div>
        <p data-cy="comment-message" className={styles.message}>
          {comment.text}
        </p>
      </div>
    </div>
  );
}

export default Comment;
