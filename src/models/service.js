const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const serviceSchema = new mongoose.Schema({
    shop_name: String,
    user: {
        type: ObjectId,
        ref: 'User'
    },
    service: [String],
    total_payment: Number,
    date: Date
}, {
    timestamps: true,
});

module.exports = mongoose.model('Service', serviceSchema);