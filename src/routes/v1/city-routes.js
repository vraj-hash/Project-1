const express = require('express');
const router = express.Router();
const { CityController }=require('../../controllers');
const { CityMiddlewares}=require('../../middlewares');

// /api/v1/cities POST request
router.post('/',CityMiddlewares.validateCreateRequest,CityController.createCity);

// /api/v1/cities/:name DELETE request
router.delete('/:id', CityController.destroyCity);


module.exports=router; 