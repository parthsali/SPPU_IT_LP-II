const mongoose = require('mongoose');

const songDetailsSchema = new mongoose.Schema({
    songName: {
        type: String,
        required: true
    },
    film: {
        type: String,
        required: true
    },
    musicDirector: {
        type: String,
        required: true
    },
    singer: {
        type: String,
        required: true
    },
    actor: {
        type: String,
        default: 'N/A'
    },
    actress: {
        type: String,
        default: 'N/A'
    },
})


module.exports = mongoose.model('songDetail', songDetailsSchema)