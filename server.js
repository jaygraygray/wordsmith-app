const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(
  port,
  () => console.log(`Wordsmith listening on port ${port}`)
);