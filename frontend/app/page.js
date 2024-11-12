// frontend/app/page.js
"use client"
import React, { useState, useEffect } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import RegistrationList from '../components/RegistrationList';
import { createRegistration, getRegistrations, updateRegistration, deleteRegistration } from '../api';

const HomePage = () => {
    const [registrations, setRegistrations] = useState([]);
    const [registrationToEdit, setRegistrationToEdit] = useState(null);

    useEffect(() => {
        fetchRegistrations();
    }, []);

    const fetchRegistrations = async () => {
        try {
            const response = await getRegistrations();
            setRegistrations(response.data);
        } catch (error) {
            console.error('Error fetching registrations:', error);
        }
    };

    const handleCreateOrUpdate = async (formData) => {
        try {
            if (registrationToEdit) {
                await updateRegistration(registrationToEdit.ID, formData);
                setRegistrationToEdit(null);
            } else {
                await createRegistration(formData);
            }
            fetchRegistrations();
        } catch (error) {
            console.error('Error creating or updating registration:', error);
        }
    };

    const handleEdit = (registration) => setRegistrationToEdit(registration);

    const handleDelete = async (id) => {
        try {
            await deleteRegistration(id);
            fetchRegistrations();
        } catch (error) {
            console.error('Error deleting registration:', error);
        }
    };

    return (
        <div>
            <h1>Registration System</h1>
            <RegistrationForm onSubmit={handleCreateOrUpdate} registrationToEdit={registrationToEdit} />
            <RegistrationList registrations={registrations} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default HomePage;
