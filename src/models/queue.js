const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const queueSchema = new mongoose.Schema({
    barbershopId: {
        type: ObjectId,
        ref: 'Barbershop'
    },
    barber_name: {
        type: ObjectId,
        ref: 'Barber'
    },
    customer_name:[String]
}, {
    timestamps: true,
});

module.exports = mongoose.model('Queue', queueSchema);
