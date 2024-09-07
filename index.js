const express = require('express')
const path = require('path')
const app = express()
const port = 10000
const dotenv = require('dotenv');
dotenv.config();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require(path.join(__dirname, "routes/home")))


app.get('/api/getWeatherData/:slug', async (req, res) => {
  try {
    const cityName = req.params.slug.toLowerCase();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.APIKEY}`;

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Failed to fetch weather data for ${cityName} (status: ${response.statusCode})`);
    }

    const data = await response.json();

    res.json(data);

  } catch (error) {

    console.error(error);

  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
