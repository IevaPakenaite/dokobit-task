import { useEffect, useRef } from "react";
import Comment from "../Comment/Comment";

import styles from "./CommentsList.module.scss";
import { DokobitDocumentComment } from "../../../../models/dokobitDocumentModel";

interface CommentsListProps {
  comments: DokobitDocumentComment[];
  onDelete: () => void;
}

function CommentsList({ comments, onDelete }: CommentsListProps) {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [comments]);

  return (
    <div data-cy="comments-list" className={styles["comments-list"]}>
      {comments.map((item, index) => (
        <Comment
          key={index}
          comment={item}
          isLast={comments.length - 1 === index}
          onDelete={onDelete}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default CommentsList;
