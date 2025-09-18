const { StatusCodes } = require('http-status-codes');
const {ErrorResponse}=require('../utils/common');

function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message = 'Something went wrong while creating airplane';
        ErrorResponse.error = {explanation : 'Model number not found in oncoming request'}; 
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponse});
    }
    next();
}

function validUpdateRequest(req,res,next){
    if (req.body.modelNumber) {
        const regex = /^[a-z0-9]+$/i;
        if (!regex.test(req.body.modelNumber)) {
            ErrorResponse.message = 'Something went wrong while updating airplane';
            ErrorResponse.error = { explanation: 'Model number should be alphanumeric' }; 
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
    }

    if (req.body.capacity) {
        if (req.body.capacity > 1000) {
            ErrorResponse.message = 'Something went wrong while updating airplane';
            ErrorResponse.error = { explanation: 'Capacity cannot exceed 1000' }; 
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
    }

    next();
}

module.exports = {
    validateCreateRequest,
    validUpdateRequest
}