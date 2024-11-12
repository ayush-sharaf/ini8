const db = require('../config/db');

// Create a new registration
const createRegistration = (req, res) => {
    const { Name, Email, DateOfBirth, PhoneNumber, Address } = req.body;
    const query = `INSERT INTO Registration (Name, Email, DateOfBirth, PhoneNumber, Address)
                   VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [Name, Email, DateOfBirth, PhoneNumber, Address], (err, result) => {
        if (err) {
            return res.status(500).send({ error: 'Error creating registration', details: err });
        }
        res.status(201).send('Registration created successfully.');
    });
};

// Get all registrations
const getRegistrations = (req, res) => {
    db.query('SELECT * FROM Registration', (err, results) => {
        if (err) {
            return res.status(500).send({ error: 'Error fetching registrations', details: err });
        }
        res.status(200).json(results);
    });
};

// Update registration by ID
const updateRegistration = (req, res) => {
    const { id } = req.params;
    const { Name, Email, DateOfBirth, PhoneNumber, Address } = req.body;
    const query = `UPDATE Registration SET Name=?, Email=?, DateOfBirth=?, PhoneNumber=?, Address=?
                   WHERE ID=?`;
    db.query(query, [Name, Email, DateOfBirth, PhoneNumber, Address, id], (err, result) => {
        if (err) {
            return res.status(500).send({ error: 'Error updating registration', details: err });
        }
        res.status(200).send('Registration updated successfully.');
    });
};

// Delete registration by ID
const deleteRegistration = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Registration WHERE ID = ?', [id], (err, result) => {
        if (err) {
            return res.status(500).send({ error: 'Error deleting registration', details: err });
        }
        res.status(200).send('Registration deleted successfully.');
    });
};

module.exports = { createRegistration, getRegistrations, updateRegistration, deleteRegistration };
