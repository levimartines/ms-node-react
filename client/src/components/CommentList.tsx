import React from "react";
import { Comment } from "../models/Comment";

const CommentList: React.FC<{ comments: Comment[] }> = ({ comments }) => {
  return <ul>
    {comments.map(comment => <li key={comment.id}>{comment.content}</li>)}
  </ul>
}

export default CommentList;