const express = require('express');
const router = express.Router();

// require the Drone model here
const Drones = require ('../models/Drone.model.js')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drones.find()
    .then((drones) => {res.render('drones/list', {drones})
     })   
     .catch((err) => {
        console.log(err)
    }) 
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
    res.render('drones/create-form');
  });

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;
  if (!name || !propellers || !maxSpeed) {
		res.render('drones/create-form', { errorMessage: 'Missing fields' });
	}
  Drones.create({ name, propellers, maxSpeed })
		.then(() => {
			res.redirect('/drones');
		})
		.catch((err) => {
			res.render('drones/create-form', { errorMessage: err });
		});
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;

	Drones.findById(id)
		.then((drone) => {
			res.render('drones/update-form', drone);
		})
		.catch((err) => console.log(err));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;
	const { id } = req.params;

	Drones.findByIdAndUpdate(id, { name, propellers, maxSpeed })
		.then(() => {
			res.redirect('/drones');
		})
		.catch((err) => {
			res.render('drones/update-form', { errorMessage: err });
		});
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drones.findByIdAndRemove(req.params.id)
  .then(() => { res.redirect('/drones');
  })
  .catch((err) => console.log(err));
});

module.exports = router;
