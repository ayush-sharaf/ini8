const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

// Create a new registration
router.post('/register', registrationController.createRegistration);

// Get all registrations
router.get('/register', registrationController.getRegistrations);

// Update registration by ID
router.put('/register/:id', registrationController.updateRegistration);

// Delete registration by ID
router.delete('/register/:id', registrationController.deleteRegistration);

module.exports = router;
