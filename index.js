const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Add cors for cross-origin requests

dotenv.config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 10000;

app.use(cors()); // Enable CORS

app.get('/', (req, res) => {
    res.sendFile("./index.html", { root: __dirname });
});
app.get('/style.css', (req, res) => {
    res.sendFile("./style.css", { root: __dirname });
});
app.get('/script.js', (req, res) => {
    res.sendFile("./script.js", { root: __dirname });
});
app.get('/background.js', (req, res) => {
    res.sendFile("./background.js", { root: __dirname });
});
app.get('/img/github.svg', (req, res) => {
    res.sendFile("./img/github.svg", { root: __dirname });
});


app.get('/api/apikey/WeatherAPI_KEY', (req, res) => {
    res.json({ key: process.env.WEATHER_API_KEY });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});