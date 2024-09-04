const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Add cors for cross-origin requests
const path = require('path');

dotenv.config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 10000;

app.use(cors()); // Enable CORS

app.use(express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, path, stat) => {
      if (path.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');   
  
      } else if (path.endsWith('.js')) {
        res.setHeader('Content-Type', 'text/javascript');   
  
      }
    }
}));

app.get('/', (req, res) => {
    res.sendFile("./index.html", { root: __dirname });
});

app.get('/api/apikey/WeatherAPI_KEY', (req, res) => {
    res.json({ key: process.env.WEATHER_API_KEY });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});