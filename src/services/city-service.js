const { CityRepository }=require('../repositories');
const AppError = require('../utils/errors/app-error');
const {StatusCodes}=require('http-status-codes');

const cityRepository = new CityRepository();

async function createCity(data){
  try{
         const city = await cityRepository.create(data);
         return city;
    } catch(error){
        console.log(error);
       if(error.name == 'SequelizeUniqueConstraintError' || error.name == 'SequelizeValidationError'){
        let explanation = [];
        error.errors.forEach((err) => {
            explanation.push(err.message); 
        });
        
        throw new AppError(explanation,StatusCodes.BAD_REQUEST);
       }
        throw new AppError('Cannot Create a new city object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(name) {
    try {
        const response =  await cityRepository.destroy(name);
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError(
                'The city you requested to delete is not present',
                error.statusCode
            );
        }
        throw new AppError(
            'Cannot delete the city',
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}


module.exports = {
    createCity,
    destroyCity
}
