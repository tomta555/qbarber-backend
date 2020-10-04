const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookingSchema = new mongoose.Schema({
    customer: ObjectId,
    barbershop: ObjectId,
    customer_phone: String,
    period: String,
    date: Date,
    status: String
}, {
    timestamps: true,
});

module.exports = mongoose.model('Booking', bookingSchema);