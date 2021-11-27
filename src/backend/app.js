const setup = require('./setup')

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  })

  
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/setup', (req, res) => {
    setup.setupGame()
    res.send('Game is ready!')
  })

app.get('/players', (req, res) => {
    let players = setup.getPlayers()
    res.send(players)
})