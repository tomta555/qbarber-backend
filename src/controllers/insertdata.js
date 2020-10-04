const { sendSuccessResponse } = require('../helper/api-response');
const Barbershop = require('../models/barbershop');
const Barber = require('../models/barber');
const Booking = require('../models/booking');
const Service = require('../models/service');
const User = require('../models/user');
const Queue = require('../models/queue');

const bcrypt = require('bcryptjs');

exports.addBarbershop = async (req, res, next) => {
    const {
        username,
        password,
        shop_name,
        descriptions,
        phone,
        location,
        map,
        shop_pic,
        service_menu,
        business_day,
        haircuts,
        barbers,
        reviews,
        booking_time
    } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const barbershop = await Barbershop.create({
            username,
            password: hashedPassword,
            shop_name,
            descriptions,
            phone,
            location,
            map,
            shop_pic,
            service_menu,
            business_day,
            haircuts,
            barbers,
            reviews,
            booking_time
        });
    
        return sendSuccessResponse(res, barbershop);
      } catch (error) {
        next(error);
      }
};

exports.addBarber = async (req, res, next) => {
    const {
        fname,
        lname,
        bio,
        phone,
        certificate,
        profile_pic
    } = req.body;

    try {
    
        const barber = await Barber.create({
            fname,
            lname,
            bio,
            phone,
            certificate,
            profile_pic
        });
    
        return sendSuccessResponse(res, barber);
      } catch (error) {
        next(error);
      }
};

exports.addQueue = async (req, res, next) => {
  const {
    barbershopId,
    barber_name,
    customer_name
  } = req.body;

  try {
  
      const queue = await Queue.create({
          barbershopId,
          barber_name,
          customer_name
      });
  
      return sendSuccessResponse(res, queue);
    } catch (error) {
      next(error);
    }
};