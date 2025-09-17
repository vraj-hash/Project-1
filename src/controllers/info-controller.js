const {StatusCodes}=require('http-status-codes');
const { getStatusCode } = require('http-status-codes');


const info = (req,res)=>{
    return res.status(StatusCodes.NOT_FOUND).json({
        success:true,
        message:"Api is live",
        error:{},
        data:{}
    })
};

module.exports = {
    info
};