const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:8080' // Permet l’accès uniquement de mon localhost
}));

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];
app.get('/home', (req, res) => {
  res.json(items);
});

// ROUTES

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});