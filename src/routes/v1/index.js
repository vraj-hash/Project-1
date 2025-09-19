const express = require('express');

const router = express.Router();
const { InfoController}=require('../../controllers');
const airplaneRoutes = require('./airplane-route');
const cityRoutes = require('./city-routes.js');
const airportRoutes = require('./airport-route.js');

router.use('/airplanes',airplaneRoutes);
router.use('/city',cityRoutes);
router.use('/airports',airportRoutes);

router.get('/info',InfoController.info);


module.exports = router;