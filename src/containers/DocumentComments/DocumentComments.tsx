import { useState } from "react";
import ContentView from "../../components/ContentView";
import CommentInputBox from "./components/CommentInputBox";
import EmptyList from "../../components/EmptyList";
import CommentsList from "./components/CommentsList";

import styles from "./DocumentComments.module.scss";

function DocumentComments() {
  const [comments, setComments] = useState<string[]>([]);

  return (
    <ContentView header="Comments">
      <div className={styles["document-comments"]}>
        {comments.length ? (
          <CommentsList comments={comments} />
        ) : (
          <EmptyList
            message="No comments yet"
            description="Be the first to add a comment"
          />
        )}
        <CommentInputBox
          onAddComment={(comment: string) =>
            setComments([...comments, comment])
          }
        />
      </div>
    </ContentView>
  );
}

export default DocumentComments;
