const express = require('express');
const router = express.Router();
const { AirplaneController }=require('../../controllers');
const { AirplaneMiddlewares}=require('../../middlewares');

// /api/v1/airplanes POST request
router.post('/',
    AirplaneMiddlewares.validateCreateRequest, 
    AirplaneController.createAirplane);

// /api/v1/airplanes GET request
router.get('/', AirplaneController.getAirplanes);

// /api/v1/airplanes/:id GET request
router.get('/:id', AirplaneController.getAirplane);

// /api/v1/airplanes/:id DELETE request
router.delete('/:id',AirplaneController.destroyAirplane);



module.exports=router;