var mongoose = require('mongoose');

module.exports = mongoose.model('rating', {
    level: Number,
    xp: Number,
    name: String,
    update_time: Date,
    fraction: String,
    position: Number
}, 'rating');