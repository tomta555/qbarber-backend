const express = require('express');
const barbershopController = require('../controllers/barbershop');

const router = express.Router();

router.get('/', barbershopController.getBarbershop);
router.get('/home', barbershopController.getBarbershopHome);
router.get('/:shopId', barbershopController.getBarbershopById);
router.get('/:shopId/reviews', barbershopController.getBarbershopReviews);
router.get('/:shopId/barbers', barbershopController.getBarbershopBarbers);
router.get('/:shopId/queues', barbershopController.getBarbershopQueues);

router.put('/queue/:queueId', barbershopController.addQueue);

module.exports = router;