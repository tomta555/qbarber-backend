const express = require('express');
const barberController = require('../controllers/barber');

const router = express.Router();

router.get('/:barberId', barberController.getBarberById);


module.exports = router;