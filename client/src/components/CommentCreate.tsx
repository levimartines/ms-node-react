import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

const CommentCreate: React.FC<{ postId: string }> = ({ postId }) => {
  const [content, setContent] = useState('');

  const handleCommentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content });
    setContent('');
  }

  return <div>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="comment">New Comment</label>
        <input type="text" className="form-control" id="comment" value={content}
               onChange={handleCommentChange}/>
        <br/>
        <button className="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>
  </div>
};

export default CommentCreate;