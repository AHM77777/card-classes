const http = require('http')
const express = require('express')
const app = express();
const { Deck, Cards } = require('./src/Entities/Deck')

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const deck = new Deck();
  const hand = new Cards(deck, 5);

  res.send({ deck, hand })
});

app.listen(port)
