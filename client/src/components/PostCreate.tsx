import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await axios.post('http://localhost:4000/posts', { title });
    setTitle('');
  }

  const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  return <div>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" className="form-control"
               onChange={onChangeHandle} value={title}/>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  </div>
}

export default PostCreate;