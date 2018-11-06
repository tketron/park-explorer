const express = require('express');
const router = express.Router();

const Themeparks = require('themeparks');

router.get('/all', (req, res) => {
  const parksNames = [];
  for (const park in Themeparks.Parks) {
    const currentPark = new Themeparks.Parks[park]();
    parksNames.push({
      park: park,
      name: currentPark.Name,
      timezone: currentPark.Timezone,
      location: currentPark.Location.toString(),
      timeNow: currentPark.TimeNow,
      dateNow: currentPark.DateNow
    });
  }
  res.json(parksNames);
});

router.get('/:park', (req, res) => {});

module.exports = router;
