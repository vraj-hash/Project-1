const { StatusCodes } = require('http-status-codes');
const {ErrorResponse}=require('../utils/common');

function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.message = 'Something went wrong while creating airport';
        ErrorResponse.error = {explanation : 'name not found in oncoming request'}; 
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponse});
    }
    if(!req.body.code){
        ErrorResponse.message = 'Something went wrong while creating airport';
        ErrorResponse.error = {explanation : 'Airport code not found in oncoming request'}; 
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponse});
    }
    if(!req.body.cityId){
        ErrorResponse.message = 'Something went wrong while creating airport';
        ErrorResponse.error = {explanation : 'cityId  not found in oncoming request'}; 
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponse});
    }
    next();
}


module.exports = {
    validateCreateRequest
}