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
app.get('/img/humidity_icon.svg', (req, res) => {
    res.sendFile("./img/humidity_icon.svg", { root: __dirname });
});
app.get('/img/rain_1.gif', (req, res) => {
    res.sendFile("./img/rain_1.gif", { root: __dirname });
});
app.get('/img/rain_2.gif', (req, res) => {
    res.sendFile("./img/rain_2.gif", { root: __dirname });
});
app.get('/img/rain_3.gif', (req, res) => {
    res.sendFile("./img/rain_3.gif", { root: __dirname });
});
app.get('/img/rain_4.gif', (req, res) => {
    res.sendFile("./img/rain_4.gif", { root: __dirname });
});
app.get('/img/rain_5.gif', (req, res) => {
    res.sendFile("./img/rain_5.gif", { root: __dirname });
});
app.get('/img/rain_6.gif', (req, res) => {
    res.sendFile("./img/rain_6.gif", { root: __dirname });
});
app.get('/img/Search_icon.svg', (req, res) => {
    res.sendFile("./img/Search_icon.svg", { root: __dirname });
});
app.get('/img/tempreture_icon.svg', (req, res) => {
    res.sendFile("./img/tempreture_icon.svg", { root: __dirname });
});
app.get('/img/windspeed_icon.svg', (req, res) => {
    res.sendFile("./img/windspeed_icon.svg", { root: __dirname });
});

app.get('/api/apikey/WeatherAPI_KEY', (req, res) => {
    res.json({ key: process.env.WEATHER_API_KEY });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});