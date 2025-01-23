import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { format } from "date-fns";
import IconButton from "../../../../components/IconButton";
import Avatar from "../../../../components/Avatar";

import styles from "./Comment.module.scss";

interface CommentProps {
  message: string;
  isLast: boolean;
}

function Comment({ message, isLast }: CommentProps) {
  const currentTime = format(new Date(), "yyyy-MM-dd HH:mm");

  return (
    <div data-cy="comment" className={styles.comment}>
      <Avatar name="Vardenis" surname="Pavardenis" />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.info}>
            <div data-cy="username" className={styles.username}>
              Vardenis Pavardenis
            </div>
            <div data-cy="timestamp" className={styles.timestamp}>
              {currentTime}
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
                onClick={() => console.log("Clicked to delete")}
                variant="secondary"
                dataCy="delete-button"
              />
            )}
          </div>
        </div>
        <p data-cy="comment-message" className={styles.message}>
          {message}
        </p>
      </div>
    </div>
  );
}

export default Comment;
