// Iteration #1

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

const db = require('../db')
const Drones = require ('../models/Drone.model.js')

const storeDrone = async () => {
   try{
      await Drones.insertMany(drones)
   }catch(err){
      console.log(err)
   }
}

storeDrone()

mongoose.connection.close()