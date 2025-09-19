const AirportRepository = require('./airport-repositories');
const CityRepository = require('./city-repositories');
const FlightRepository = require('./flight-repositories');

module.exports = {
    AirplaneRepository : require('./airplane-repositories'),
    CityRepository : require('./city-repositories'),
    AirportRepository : require('./airport-repositories'),
    FlightRepository : require('./flight-repositories')
}