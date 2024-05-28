const express = require('express');
const cors = require('cors'); // Optional: if you need to handle CORS

const app = express();
const port = 5000; // You can choose any port you prefer

// Middleware
app.use(cors()); // Optional: if you need to handle CORS
app.use(express.json()); // To parse JSON bodies

// Example route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
