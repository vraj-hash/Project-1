const {AirportService}=require('../services');
const { StatusCodes }=require('http-status-codes'); 
const { SuccessResponse,ErrorResponse }=require('../utils/common');

async function createAirport(req,res){
   try{
     const airport=await AirportService.createAirport({ 
        name: req.body.name,
        code: req.body.code,
        address: req.body.address,
        cityId: req.body.cityId
     });

     SuccessResponse.data = airport;

     return res.status(StatusCodes.CREATED).json(SuccessResponse);

   } catch(error){

      ErrorResponse.error=error;
      console.log(error);
    return res.status(error.statusCode).json(ErrorResponse);
   }
} 

//  /airports
async function getAirports(req,res){
   try{
       const airport = await AirportService.getAirports();
       SuccessResponse.data = airport;
      return res.status(StatusCodes.OK).json(SuccessResponse);

   } catch(error){

      ErrorResponse.error=error;
      console.log(error);
    return res.status(error.statusCode).json(ErrorResponse);
   }
}
 
// /airports/:id
async function getAirport(req,res){
   try{
       const airpot = await AirportService.getAirport(req.params.id);
       SuccessResponse.data = airport;
      return res.status(StatusCodes.OK).json(SuccessResponse);

   } catch(error){

      ErrorResponse.error=error;
      console.log(error);
    return res.status(error.statusCode).json(ErrorResponse);
   }
}

// delete  /airports/:id
async function destroyAirport(req,res){
   try{
       const airport = await AirportService.destroyAirport(req.params.id);
       SuccessResponse.data = airport;
      return res.status(StatusCodes.OK).json(SuccessResponse);

   } catch(error){

      ErrorResponse.error=error;
      console.log(error);
    return res.status(error.statusCode).json(ErrorResponse);
   }
}




module.exports={
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}
