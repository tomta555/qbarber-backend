const { sendSuccessResponse } = require('../helper/api-response');
const Queue = require('../models/queue');

exports.getQueues = async (req, res, next) => {
  const name = req.query.name;
  try {
      const filter = {customer_name: { $all: name}};
      const queue = await Queue.find(filter)
      .populate('barber_name')
      .populate('barbershopId')

      return sendSuccessResponse(res, queue);
    } catch (error) {
      next(error);
    }
};

exports.getQueueById = async (req, res, next) => {
    const queueId = req.params.queueId;
    try {
        const queue = await Queue.findById(queueId)
        .populate('barber_name')
        .populate('barbershopId')

        return sendSuccessResponse(res, queue);
      } catch (error) {
        next(error);
      }
};

exports.removeQueue = async (req, res, next) => {
  const queueId = req.params.queueId;
  const name = req.query.name;
  let filter = {};
  try {
    if(name){
      filter = { $pull: {"customer_name": name}};
    }else{
      filter = { $pop: {"customer_name": -1} };
    }
    const queue = await Queue.findByIdAndUpdate(queueId, 
      filter, 
      { new: true })
    
    return sendSuccessResponse(res, queue);
  } catch (error) {
    next(error);
  }
}