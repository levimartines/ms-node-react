const express = require('express');
const cors = require('cors');
const axios = require('axios');
const {randomBytes} = require('crypto');

const app = express();
app.use(express.json());
app.use(cors());

const posts = [];

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const {title} = req.body;

  const newPost = {id, title};
  posts.push(newPost);

  await axios.post('http://localhost:4005/events',
    {type: 'PostCreated', data: newPost});

  res.status(201).send(newPost);
});

app.post('/events', (req, res) => {
  console.log('Event Received', req.body);
  res.sendStatus(200);
});


app.listen(4000, () => {
  console.log('### Listening on Port 4000 ###');
});