const CrudRepository = require("./crud-repositories");
const { Flight } = require("../models");
const db = require('../models');
const {Sequelize} = require('sequelize');
class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter, sort) {
    const response = await Flight.findAll({
      where: filter,
      order: sort,
    });
    return response;
  }

  async getFlight(flightId) {
    const response = await Flight.findByPk(flightId);
    return response;
  }

  async updateFlights(flightId, seats, dec = true) {
     
    await db.sequelize.query(`select  * from Flights where Flights.id = ${flightId} for update;`);
    
    const flight = await Flight.findByPk(flightId);
   
    if (parseInt(dec)) {
      await flight.decrement("totalSeats", { by: seats });
    } else {
      await flight.increment("totalSeats", { by: seats });
    }
    return flight; 
  }
}

module.exports = FlightRepository;
