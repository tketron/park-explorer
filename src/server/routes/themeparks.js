const express = require('express');
const router = express.Router();

const Themeparks = require('themeparks');

router.get('/names', (req, res) => {
  const parksNames = [];
  for (const park in Themeparks.Parks) {
    parksNames.push({ park: park, name: new Themeparks.Parks[park]().Name });
  }
  res.json(parksNames);
});

module.exports = router;
