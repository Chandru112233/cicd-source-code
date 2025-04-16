// Load the Express library
const express = require('express');

// Create an Express app
const app = express();

// Define a port for the server to listen on
const port = 3000;

// Set up a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello World! 🎉');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
