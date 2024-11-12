import axios from 'axios';

// Base URL should include '/api/register' to match the backend route
const BASE_URL = 'http://localhost:3001/api/register/'; 

// Get all registrations
export const getRegistrations = () => axios.get(BASE_URL);

// Create a new registration
export const createRegistration = (data) => axios.post(BASE_URL, data);

// Update registration by ID
export const updateRegistration = (id, data) => axios.put(`${BASE_URL}${id}`, data);

// Delete registration by ID
export const deleteRegistration = (id) => axios.delete(`${BASE_URL}${id}`);
