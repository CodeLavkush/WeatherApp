const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Add cors for cross-origin requests

dotenv.config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 10000;

app.use(cors()); // Enable CORS


// Use the sendFile function for all file requests
app.get('/', sendFileToEndPoint.bind(null, './index.html'));
app.get('/style.css', sendFileToEndPoint.bind(null, './style.css'));
app.get('/script.js', sendFileToEndPoint.bind(null, './script.js'));
app.get('/background.js', sendFileToEndPoint.bind(null, './background.js'));

// Use a loop to handle image requests more concisely
const imageFiles = [
    'github.svg',
    'humidity_icon.svg',
    'rain_1.gif',
    'rain_2.gif',
    'rain_3.gif',
    'rain_4.gif',
    'rain_5.gif',
    'rain_6.gif',
    'Search_icon.svg',
    'tempreture_icon.svg',
    'windspeed_icon.svg'
];
imageFiles.forEach((file) => {
    app.get(`/img/${file}`, sendFileToEndPoint.bind(null, `./img/${file}`));
});
// Define a function to handle file requests efficiently
function sendFileToEndPoint(req, res, filename) {
    res.sendFile(filename, { root: __dirname });
}


app.get('/api/apikey/WeatherAPI_KEY', (req, res) => {
    res.json({ key: process.env.WEATHER_API_KEY });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});