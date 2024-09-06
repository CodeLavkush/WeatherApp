const express = require('express')
const path = require('path')
const app = express()
const port = 10000
const dotenv = require('dotenv');
dotenv.config();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', require(path.join(__dirname, "routes/home")))

app.get('/api/getApiKey', (req, res) => {
  res.json(process.env.APIKEY);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
