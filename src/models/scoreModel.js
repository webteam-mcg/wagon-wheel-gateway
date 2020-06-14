const mongoose = require('mongoose');

const ScoreSchema = mongoose.Schema({
    player: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true,
        enum: ["mcg", "rcg"]
    },
    session: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Score', ScoreSchema);