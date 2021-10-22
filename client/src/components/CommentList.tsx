import React, { useEffect, useState } from "react";
import axios from "axios";
import { Comment } from "../models/Comment";

const CommentList: React.FC<{ postId: string }> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get<Comment[]>(`http://localhost:4001/posts/${postId}/comments`);
      setComments(res.data);
    };
    fetchData();
  }, [postId]);

  return <ul>
    {comments.map(comment => <li key={comment.id}>{comment.content}</li>)}
  </ul>
}

export default CommentList;