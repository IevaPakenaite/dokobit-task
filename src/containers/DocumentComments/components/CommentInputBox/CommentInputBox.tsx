import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import MessageInput from "../../../../components/MessageInput";
import IconButton from "../../../../components/IconButton";

import styles from "./CommentInputBox.module.scss";
import { DokobitDocumentComment } from "../../../../models/dokobitDocumentModel";
import { format } from "date-fns";

interface CommentInputBoxProps {
  onAddComment: (comment: DokobitDocumentComment) => void;
}

function CommentInputBox({ onAddComment }: CommentInputBoxProps) {
  const [newComment, setNewComment] = useState<string>("");

  function handleAddComment() {
    if (!!newComment) {
      const trimmedComment = newComment.trim();

      if (!!trimmedComment) {
        onAddComment({
          id: uuidv4(),
          addedBy: "Vardenis Pavardenis",
          addedOn: format(new Date(), "yyyy-MM-dd HH:mm"),
          text: trimmedComment,
        });
      }
      setNewComment("");
      return;
    }
    return;
  }

  function handleEnterPress(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && e.shiftKey === false) {
      e.preventDefault();

      if (!!newComment) {
        handleAddComment();
      }
    }
  }

  return (
    <div data-cy="comment-input-box" className={styles["comment-input-box"]}>
      <MessageInput
        value={newComment}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setNewComment(e.target.value)
        }
        onEnterPress={handleEnterPress}
        maxRows={5}
        placeholder="Type a comment"
      />
      <IconButton icon={faArrowUp} onClick={handleAddComment} />
    </div>
  );
}

export default CommentInputBox;
