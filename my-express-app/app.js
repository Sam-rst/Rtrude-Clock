const express = require('express');
const cors = require('cors');
const app = express();
const setupRoutes = require('./routes');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(cors({
  origin: 'http://localhost:8080' // Permet l’accès uniquement de mon localhost
}));

//Ou alors utiliser pour avoir accès de n'importe où
// app.use(cors());

// ROUTES
setupRoutes(app);