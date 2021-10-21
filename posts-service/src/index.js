const express = require('express');
const cors = require('cors');
const {randomBytes} = require('crypto');

const app = express();
app.use(express.json());
app.use(cors());

const posts = [];

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const {title} = req.body;

  const newPost = {id, title};
  posts.push(newPost);
  res.status(201).send(newPost);
});

app.listen(4000, () => {
  console.log('### Listening on Port 4000 ###');
});