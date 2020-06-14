const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true,
        enum: ["mcg", "rcg"]
    }
});

module.exports = mongoose.model('Player', PlayerSchema);