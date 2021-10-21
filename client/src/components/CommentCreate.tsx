import React, { ChangeEvent, useState } from "react";

const CommentCreate: React.FC<{ postId: string }> = ({ postId }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event: ChangeEvent<HTMLInputElement>) => {

  }

  return <div>
    <form action="">
      <div className="form-group">
        <label htmlFor="comment">New Comment</label>
        <input type="text" className="form-control" id="comment" value={comment}/>
      </div>
    </form>
  </div>
};

export default CommentCreate;