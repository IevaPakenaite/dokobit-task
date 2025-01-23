import { useEffect, useRef, useState } from "react";
import Comment from "../Comment";
import CommentEdit from "../CommentEdit";
import { DokobitDocumentComment } from "../../../../models/dokobitDocumentModel";

import styles from "./CommentsList.module.scss";

interface CommentsListProps {
  comments: DokobitDocumentComment[];
  onDelete: () => void;
  onUpdate: (updatedComment: DokobitDocumentComment) => void;
}

function CommentsList({ comments, onDelete, onUpdate }: CommentsListProps) {
  const [editableComment, setEditableComment] = useState<string>("");

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [comments]);

  function handleCommentEdit(updatedComment: DokobitDocumentComment) {
    onUpdate(updatedComment);
    setEditableComment("");
  }

  function handleCommentEditCancel() {
    setEditableComment("");
  }

  return (
    <div data-cy="comments-list" className={styles["comments-list"]}>
      {comments.map((item, index) =>
        item.id === editableComment ? (
          <CommentEdit
            key={index}
            comment={item}
            onSave={handleCommentEdit}
            onCancel={handleCommentEditCancel}
          />
        ) : (
          <Comment
            key={index}
            comment={item}
            isLast={comments.length - 1 === index}
            onDelete={onDelete}
            onEdit={(commentId) => setEditableComment(commentId)}
          />
        )
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default CommentsList;
