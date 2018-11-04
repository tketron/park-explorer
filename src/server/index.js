const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../../build')));

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

// Anything that doesn't match the above, send back index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
