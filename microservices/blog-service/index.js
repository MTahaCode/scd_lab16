const express = require('express');
const app = express();
app.use(express.json());

let events = [];

app.post('/track', (req, res) => {
  events.push({ timestamp: Date.now(), ...req.body });
  res.status(201).json({ status: 'event tracked' });
});

app.get('/events', (req, res) => res.json(events));

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Analytics service running on port ${PORT}`));
