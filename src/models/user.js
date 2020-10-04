const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    fname: String,
    lname: String,
    phone: String,
    profile_picture: String,
    reviews: [{rating: Number}]
    // ,favorites: [ObjectId]
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);