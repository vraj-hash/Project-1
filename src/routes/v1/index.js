const express = require('express');

const router = express.Router();
const { InfoController,FlightController}=require('../../controllers');
const airplaneRoutes = require('./airplane-route');
const cityRoutes = require('./city-routes.js');
const airportRoutes = require('./airport-route.js');
const flightRoutes = require('./flight-routes.js');


router.use('/airplanes',airplaneRoutes);
router.use('/city',cityRoutes);
router.use('/airports',airportRoutes);
router.use('/flights',flightRoutes);
router.get('/info',InfoController.info);
router.patch('/flights/:id',FlightController.updateFlight)

module.exports = router;