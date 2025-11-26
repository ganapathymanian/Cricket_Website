import React, { useState } from 'react';

const EmergencyContactForm = ({ age }) => {
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [relationship, setRelationship] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Emergency Contact Information</h2>
            <div>
                <label htmlFor="contactName">Contact Name:</label>
                <input
                    type="text"
                    id="contactName"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="contactNumber">Contact Number:</label>
                <input
                    type="tel"
                    id="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="relationship">Relationship:</label>
                <input
                    type="text"
                    id="relationship"
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default EmergencyContactForm;
