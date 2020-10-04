const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const barbershopSchema = new mongoose.Schema({
    username: String,
    password: String,
    shop_name: String,
    descriptions: String,
    phone: [String],
    location: String,
    map: String,
    shop_pic: String,
    service_menu: String,
    business_day: {
        mon: String,
        tue: String,
        wed: String,
        thu: String,
        fri: String,
        sat: String,
        sun: String
    },
    haircuts: [{
        name: String,
        img: String
    }],
    barbers: [{
        type: ObjectId,
        ref: 'Barber'
    }],
    reviews: [{
        user: {
          type: ObjectId,
          ref: 'User'
        },
        rating: Number,
        comment: String
    }],
    booking_time: {
        enable: Boolean,
        mon : [String],
        tue : [String],
        wed : [String],
        thu : [String],
        fri : [String],
        sat : [String],
        sun : [String]
    },
    tags:[String]
}, {
    timestamps: true,
});

module.exports = mongoose.model('Barbershop', barbershopSchema);