const mongoose = require('mongoose');

const TimeRegister = mongoose.model('TimeRegister', {
    description: String,
    startTime: Date,
    endTime: Date,
    duration: Date,
}); 

module.exports = TimeRegister; 