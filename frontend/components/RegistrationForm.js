// frontend/components/RegistrationForm.js
import React, { useState, useEffect } from 'react';

const RegistrationForm = ({ onSubmit, registrationToEdit }) => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        DateOfBirth: '',
        PhoneNumber: '',
        Address: '',
    });

    useEffect(() => {
        if (registrationToEdit) setFormData(registrationToEdit);
    }, [registrationToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ Name: '', Email: '', DateOfBirth: '', PhoneNumber: '', Address: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="Name" value={formData.Name} onChange={handleChange} placeholder="Name" required />
            <input name="Email" value={formData.Email} onChange={handleChange} placeholder="Email" type="email" required />
            <input name="DateOfBirth" value={formData.DateOfBirth} onChange={handleChange} placeholder="Date of Birth" type="date" required />
            <input name="PhoneNumber" value={formData.PhoneNumber} onChange={handleChange} placeholder="Phone Number" />
            <input name="Address" value={formData.Address} onChange={handleChange} placeholder="Address" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;
