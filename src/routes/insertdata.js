const express = require('express');
const insertdataController = require('../controllers/insertdata');

const router = express.Router();

router.post('/add-barbershop', insertdataController.addBarbershop);
router.post('/add-barber', insertdataController.addBarber);
router.post('/add-queue/', insertdataController.addQueue)

module.exports = router;