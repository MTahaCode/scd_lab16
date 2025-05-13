const express = require('express');
const app = express();
app.use(express.json());

let posts = [{ id: 1, title: 'Hello World', content: 'First post' }];

app.get('/posts', (req, res) => res.json(posts));
app.post('/posts', (req, res) => {
  const newPost = { id: posts.length + 1, ...req.body };
  posts.push(newPost);
  res.status(201).json(newPost);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Blog service running on port ${PORT}`));
