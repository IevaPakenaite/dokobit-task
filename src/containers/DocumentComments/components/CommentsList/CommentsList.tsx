import { useEffect, useRef } from "react";
import Comment from "../Comment/Comment";

import styles from "./CommentsList.module.scss";

interface CommentsListProps {
  comments: string[];
}

function CommentsList({ comments }: CommentsListProps) {
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
          message={item}
          isLast={comments.length - 1 === index}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default CommentsList;
