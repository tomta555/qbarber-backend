const { sendSuccessResponse } = require('../helper/api-response');
const Barbershop = require('../models/barbershop');
const Barber = require('../models/barber');
const Queue = require('../models/queue');

exports.getBarbershop = async (req, res, next) => {
    const search = req.query.search;
    const tags = req.query.tags;

    try {
        const filter = {};
        if (tags) filter.tags = { $all: tags };
        if (search) filter.shop_name = { $regex: search, $options: 'i' };

        const query = Barbershop.find(filter)
        .select(`-username -password`)
        const barbershops = await query
    
        return sendSuccessResponse(res, barbershops);
      } catch (error) {
        next(error);
      }
};

exports.getBarbershopHome = async (req, res, next) => {
    const search = req.query.search;
    const tags = req.query.tags;

    try {
        const filter = {};
        if (tags) filter.tags = { $all: tags };
        if (search) filter.shop_name = { $regex: search, $options: 'i' };

        const query = Barbershop.find(filter)
        .select(`shop_name location reviews shop_pic tags`)
        const barbershops = await query
    
        return sendSuccessResponse(res, barbershops);
      } catch (error) {
        next(error);
      }
};

exports.getBarbershopById = async (req, res, next) => {
    const shopId = req.params.shopId;
    try {
        const barbershop = await Barbershop.findById(shopId)
        .select(`shop_name location reviews shop_pic tags haircuts map service_menu business_day descriptions`)

    
        return sendSuccessResponse(res, barbershop);
      } catch (error) {
        next(error);
      }
};

exports.getBarbershopReviews = async (req, res, next) => {
    const shopId = req.params.shopId;
    try {
        const barbershop = await Barbershop.findById(shopId)
        .select(`shop_name reviews shop_pic descriptions`)

    
        return sendSuccessResponse(res, barbershop);
      } catch (error) {
        next(error);
      }
};

exports.getBarbershopBarbers = async (req, res, next) => {
    const shopId = req.params.shopId;
    try {
        const barbershop = await Barbershop.findById(shopId)
        .select(`shop_name shop_pic descriptions barbers`)
        .populate('barbers')
        
        return sendSuccessResponse(res, barbershop);
      } catch (error) {
        next(error);
      }
};

exports.getBarbershopQueues = async (req, res, next) => {
  const shopId = req.params.shopId;
  try {
      const filter = { barbershopId:shopId }
      const queues = await Queue.find(filter)
      
      return sendSuccessResponse(res, queues);
    } catch (error) {
      next(error);
    }
};

exports.addQueue = async (req, res, next) => {
  const queueId = req.params.queueId;
  const customer_name = req.body.customer_name;
  try {
      const queue = await Queue.findByIdAndUpdate(queueId, 
        { $push: {"customer_name": customer_name} }, 
        { new: true })
      
      return sendSuccessResponse(res, queue);
    } catch (error) {
      next(error);
    }
};
