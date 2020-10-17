const express = require('express');
const authRoutes = require('./auth');
const insertdataRoutes = require('./insertdata');
const barbershopRoutes = require('./barbershop');
const barberRoutes = require('./barber');
const queueRoutes = require('./queue');
const userRoutes = require('./user');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/insertdata', insertdataRoutes);
router.use('/barbershops', barbershopRoutes);
router.use('/barbers', barberRoutes);
router.use('/queues', queueRoutes);
router.use('/users', userRoutes);

module.exports = router;