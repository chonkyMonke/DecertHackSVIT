const { Schema, model } = require('mongoose');

// Business Schema for mongodb
const businessSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    collection: 'business',
    versionKey: false,
    timestamps: false
})

module.exports = model('business', businessSchema);