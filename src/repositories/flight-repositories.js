const CrudRepository = require("./crud-repositories");
const { Flight } = require("../models");

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

  async updateFlights(flightId, data) {
    try {
      await Flight.update(data, {
        where: {
          id: flightId,
        },
      });
      return true;
    } catch (error) {
      throw new AppError(
        "Repository Error",
        "Cannot update Booking",
        "There was some issue update the booking, please try again",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = FlightRepository;
