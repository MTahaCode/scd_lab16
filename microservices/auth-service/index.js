const express = require('express');
const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Dummy login
  if (username === 'admin' && password === 'admin') {
    return res.json({ token: 'fake-jwt-token' });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));
