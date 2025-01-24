import { useEffect, useRef, useState } from "react";
import Comment from "../Comment";
import CommentEdit from "../CommentEdit";
import { DokobitDocumentComment } from "../../../../models/dokobitDocumentModel";

interface CommentsListProps {
  comments: DokobitDocumentComment[];
  onDelete: () => void;
  onUpdate: (updatedComment: DokobitDocumentComment) => void;
}

function CommentsList({ comments, onDelete, onUpdate }: CommentsListProps) {
  const [editableComment, setEditableComment] = useState<string>("");

  const commentsEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
    <>
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
      <div ref={commentsEndRef} />
    </>
  );
}

export default CommentsList;
