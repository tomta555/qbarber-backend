const mongoose = require('mongoose');

const barberSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    bio: String,
    phone: [String],
    certificate: String,
    profile_pic: String,
    reviews: [{rating: Number}]
}, {
    timestamps: true,
});

module.exports = mongoose.model('Barber', barberSchema);