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

router.get('/:park/waittimes', (req, res) => {
  const park = new Themeparks.Parks[req.params.park]();

  park
    .GetWaitTimes()
    .then(rides => {
      // print each wait time
      res.json(rides);
      // for (var i = 0, ride; (ride = rides[i++]); ) {
      //   console.log(ride.name + ': ' + ride.waitTime + ' minutes wait');
      // }
    })
    .catch(err => console.error(err));
});

module.exports = router;
