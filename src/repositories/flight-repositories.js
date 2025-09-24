const CrudRepository = require("./crud-repositories");
const { Flight } = require("../models");
const db = require("../models");
const { Sequelize } = require("sequelize");
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
    const transaction = await db.sequelize.transaction();
    try {
      await db.sequelize.query(
        `select  * from Flights where Flights.id = ${flightId} for update;`
      ); //Rowlock on flights
      const flight = await Flight.findOne({
        where: { id: flightId },
        transaction,
        lock: transaction.LOCK.UPDATE, 
      });
      if (+dec) {
        await flight.decrement(
          "totalSeats",
          { by: seats },
          { transaction: transaction }
        );
      } else {
        await flight.increment(
          "totalSeats",
          { by: seats },
          { transaction: transaction }
        );
      }
      await transaction.commit();
      return flight;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = FlightRepository;
