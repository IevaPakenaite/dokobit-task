import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import MessageInput from "../../../../components/MessageInput";
import IconButton from "../../../../components/IconButton";

import styles from "./CommentInputBox.module.scss";

interface CommentInputBoxProps {
  onAddComment: (comment: string) => void;
}

function CommentInputBox({ onAddComment }: CommentInputBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [newComment, setNewComment] = useState<string>("");

  function handleAddComment() {
    // if (inputRef.current !== null) {
    //   onAddComment(inputRef.current.value);
    //   inputRef.current.value = "";
    //   return;
    // }
    // return;

    if (!!newComment) {
      const trimmedComment = newComment.trim();
      if (!!trimmedComment) {
        onAddComment(newComment.trim());
      }
      setNewComment("");
      return;
    }
    return;
  }

  function handleEnterPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && e.shiftKey === false) {
      e.preventDefault();

      if (!!newComment) {
        // trimText(textareaRef.current.value);
        handleAddComment();
      }
    }
  }

  return (
    <div data-cy="comment-input-box" className={styles["comment-input-box"]}>
      <MessageInput
        // ref={inputRef}
        value={newComment}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewComment(e.target.value)
        }
        onEnterPress={handleEnterPress}
        placeholder="Type a comment"
      />
      <IconButton icon={faArrowUp} onClick={handleAddComment} />
    </div>
  );
}

export default CommentInputBox;
