const { StatusCodes } = require('http-status-codes');
const {ErrorResponse}=require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body){
        ErrorResponse.message = 'Something went wrong while creating City';
        ErrorResponse.error = new AppError([ 'City name not found in incoming request']); 
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponse});
    }
    next();
}

module.exports = {
    validateCreateRequest
}


