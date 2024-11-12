// frontend/components/RegistrationList.js
import React from 'react';

const RegistrationList = ({ registrations, onEdit, onDelete }) => {
    return (
        <div>
            <h2>Registrations</h2>
            <ul>
                {registrations.map((registration) => (
                    <li key={registration.ID}>
                        <p>{registration.Name} - {registration.Email}</p>
                        <button onClick={() => onEdit(registration)}>Edit</button>
                        <button onClick={() => onDelete(registration.ID)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RegistrationList;
