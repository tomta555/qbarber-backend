const { sendSuccessResponse } = require('../helper/api-response');
const Barber = require('../models/barber');

exports.getBarberById = async (req, res, next) => {
    const barberId = req.params.barberId;
    try {
        const barber = await Barber.findById(barberId)

        return sendSuccessResponse(res, barber);
      } catch (error) {
        next(error);
      }
};