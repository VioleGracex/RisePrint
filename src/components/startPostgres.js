require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const { Client } = require('pg');
const cors = require('cors');
const { exec } = require('child_process');
const app = express();
const port = 5000; // Or any port you prefer

// Use CORS and JSON middleware
app.use(cors());
app.use(express.json());

// Start PostgreSQL command (used from server, not from React)
const startPostgres = () => {
  return new Promise((resolve, reject) => {
    exec('pg_ctl start', (error, stdout, stderr) => {
      if (error) {
        reject(`Error starting PostgreSQL: ${error.message}`);
        return;
      }
      if (stderr) {
        reject(`stderr: ${stderr}`);
        return;
      }
      resolve(stdout);
    });
  });
};

// Endpoint to start PostgreSQL server
app.post('/start-postgres', async (req, res) => {
  try {
    const result = await startPostgres();
    res.json({ message: 'PostgreSQL server started', result });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Route to fetch data from PostgreSQL
app.get('/api/products', async (req, res) => {
  const client = new Client({
    user: 'postgres',      // Replace with your PostgreSQL username
    host: 'localhost',               // PostgreSQL host
    database: 'RisePrint',  // Replace with your database name
    password: 'szaq12345',       // Replace with your PostgreSQL password
    port: 5432,                      // Default PostgreSQL port
  });

  try {
    await client.connect();  // Connect to PostgreSQL
    const result = await client.query('SELECT * FROM products');  // Query the database
    res.json(result.rows);  // Send the query result as a response
  } catch (error) {
    res.status(500).json({ error: error.message });  // Handle any errors
  } finally {
    await client.end();  // Close the client connection
  }
});

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
