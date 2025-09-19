const express = require('express');
const router = express.Router();
const { AirportController }=require('../../controllers');
const { AirportMiddlewares}=require('../../middlewares');

// /api/v1/airports POST request
router.post('/',
    AirportMiddlewares.validateCreateRequest, 
    AirportController.createAirport);

// /api/v1/airports GET request
router.get('/', AirportController.getAirports);

// /api/v1/airports/:id GET request
router.get('/:id', AirportController.getAirport);

// /api/v1/airports/:id DELETE request
router.delete('/:id',AirportController.destroyAirport);





module.exports=router;