const {CityService}=require('../services');
const { StatusCodes }=require('http-status-codes'); 
const { SuccessResponse,ErrorResponse }=require('../utils/common');

// POST /cities  
// req.body {name : 'London'}
async function createCity(req,res){
   try{
     const city=await CityService.createCity({
        name: req.body.name,
     });

     SuccessResponse.data = city;

     return res.status(StatusCodes.CREATED).json(SuccessResponse);

   } catch(error){

      ErrorResponse.error=error;
      console.log(error);
    return res.status(error.statusCode).json(ErrorResponse);
   }
} 


// delete  /city/:name
async function destroyCity(req, res) {
    try {
        // console.log("Request",req.params);
        const city = await CityService.destroyCity(req.params.name);
        SuccessResponse.data = city;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createCity,
    destroyCity
}