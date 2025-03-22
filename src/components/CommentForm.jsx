import React, { useState } from "react";
import { addComment } from "../utils/api";

const CommentForm = ({ tweetId }) => {
  const [commentText, setCommentText] = useState("");
  const userId = localStorage.getItem("userId");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addComment(userId, tweetId, commentText);
      setCommentText("");
    } catch (error) {
      console.error("Failed to add comment", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button type="submit">Comment</button>
    </form>
  );
};

export default CommentForm;
