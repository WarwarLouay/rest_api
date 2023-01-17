const mongoose = require('mongoose');

const order = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', order);