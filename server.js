const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Add cors for cross-origin requests

dotenv.config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS

app.get('/api/apikey', (req, res) => {
    res.json({ key: process.env.WEATHER_API_KEY });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});