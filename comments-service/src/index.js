const express = require('express');
const cors = require('cors');
const axios = require('axios');
const {randomBytes} = require('crypto');

const app = express();
app.use(express.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  const postId = req.params.id;

  res.send(commentsByPostId[postId] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const {content} = req.body;
  const postId = req.params.id;

  const comments = commentsByPostId[postId] || [];
  const newComment = {id, content};
  comments.push(newComment);
  commentsByPostId[postId] = comments;

  await axios.post('http://localhost:4005/events',
    {type: 'CommentCreated', data: {postId, ...newComment}});

  res.status(201).send(newComment);
});

app.post('/events', (req, res) => {
  console.log('Event Received', req.body);
  res.sendStatus(200);
});


app.listen(4001, () => {
  console.log('### Listening on Port 4001 ###');
});