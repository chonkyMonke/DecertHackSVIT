const { Schema, model } = require('mongoose');

// Business Schema for mongodb
const tokenId = new Schema({
    tokenNumber: {
        type: Number,
        required: true
    },
}, {
    collection: 'tokens',
    versionKey: false,
    timestamps: false
})

module.exports = model('tokens', tokenId);