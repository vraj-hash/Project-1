const express = require('express');
const router = express.Router();
const { CityController }=require('../../controllers');
// const { AirplaneMiddlewares}=require('../../middlewares');

// /api/v1/cities POST request
router.post('/',CityController.createCity);


module.exports=router;