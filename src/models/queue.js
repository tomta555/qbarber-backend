const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const queueSchema = new mongoose.Schema({
    barbershopId: ObjectId,
    barber_name: String,
    customer_name:[String]
}, {
    timestamps: true,
});

module.exports = mongoose.model('Queue', queueSchema);
