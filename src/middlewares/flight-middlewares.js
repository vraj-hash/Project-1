const { StatusCodes } = require('http-status-codes');
const {ErrorResponse}=require('../utils/common');

function validateCreateRequest(req,res,next){
    if(!req.body.flightNumber){
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = {explanation : 'flightnumber not found in oncoming request'}; 
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponse});
    }
    if(!req.body.airplaneId){
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = {explanation : 'Airplaneid code not found in oncoming request'}; 
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponse});
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = {explanation : 'Departure Airport  not found in oncoming request'}; 
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponse});
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = {explanation : 'Arrival Airport not found in oncoming request'}; 
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponse});
    }
    if(!req.body.arrivalTime){
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = {explanation : 'Arrival time  not found in oncoming request'}; 
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponse});
    }
    if(!req.body.departureTime){
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = {explanation : 'Departure time  not found in oncoming request'}; 
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponse});
    }
    if(!req.body.price){
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = {explanation : 'Price  not found in oncoming request'}; 
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponse});
    }
    if(!req.body.totalSeats){
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = {explanation : 'Total seats  not found in oncoming request'}; 
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponse});
    }
    next();
}


module.exports = {
    validateCreateRequest
}