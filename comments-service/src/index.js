const express = require('express');
const cors = require('cors');
const {randomBytes} = require('crypto');

const app = express();
app.use(express.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  const postId = req.params.id;

  res.send(commentsByPostId[postId] || []);
});

app.post('/posts/:id/comments', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const {content} = req.body;
  const postId = req.params.id;

  const comments = commentsByPostId[postId] || [];
  comments.push({id, content});
  commentsByPostId[postId] = comments;

  res.status(201).send({id, content});
});

app.listen(4001, () => {
  console.log('### Listening on Port 4001 ###');
});