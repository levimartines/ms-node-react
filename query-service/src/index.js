const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const posts = [];

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const {type, data} = req.body;
  if (type === 'PostCreated') {
    const newPost = {id: data.id, title: data.title, comments: []};
    posts.push(newPost);
  } else if (type === 'CommentCreated') {
    const newComment = {id: data.id, content: data.content};
    const {postId} = data;
    const index = posts.findIndex(p => p.id === postId);
    if (index !== -1) {
      posts[index].comments.push(newComment);
    }
  }
  res.sendStatus(200);
});

app.listen(4002, () => {
  console.log('### Listening on Port 4002 ###');
});