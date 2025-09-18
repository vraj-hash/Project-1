const express = require('express');

const router = express.Router();
const { InfoController}=require('../../controllers');
const airplaneRoutes = require('./airplane-route');
const cityRoutes = require('./city-routes.js');

router.use('/airplanes',airplaneRoutes);
router.use('/city',cityRoutes);

router.get('/info',InfoController.info);


module.exports = router;