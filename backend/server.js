const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const quotes = JSON.parse(fs.readFileSync(path.join(__dirname, 'quotes.json'), 'utf-8'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow frontend to fetch
  next();
});

app.get('/quote', (req, res) => {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const hash = today.split('-').reduce((sum, part) => sum + parseInt(part), 0);
  const quote = quotes[hash % quotes.length];
  res.json(quote);
});

app.listen(PORT, () => {
  console.log(`Quote server running at http://localhost:${PORT}`);
});
