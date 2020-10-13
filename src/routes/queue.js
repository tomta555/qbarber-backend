const express = require('express');
const queueController = require('../controllers/queue');

const router = express.Router();

router.get('/',  queueController.getQueues)
router.get('/:queueId', queueController.getQueueById);


module.exports = router;