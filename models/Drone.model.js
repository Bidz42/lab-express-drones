// Iteration #1

const mongoose = require('mongoose')

const droneSchema = mongoose.Schema({
    name: String,
    propellers: Number, 
    maxSpeed: Number
})

const droneModel = mongoose.model('droneModel', droneSchema)

module.exports = droneModel