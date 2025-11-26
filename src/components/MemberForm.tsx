import React, { useState } from 'react';

const MemberForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        emergencyContact: {
            name: '',
            phone: ''
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleEmergencyContactChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            emergencyContact: {
                ...formData.emergencyContact,
                [name]: value
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Member Registration</h2>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </div>
            {formData.age && formData.age < 18 && (
                <div>
                    <h3>Emergency Contact Information</h3>
                    <div>
                        <label>Emergency Contact Name:</label>
                        <input type="text" name="name" value={formData.emergencyContact.name} onChange={handleEmergencyContactChange} required />
                    </div>
                    <div>
                        <label>Emergency Contact Phone:</label>
                        <input type="tel" name="phone" value={formData.emergencyContact.phone} onChange={handleEmergencyContactChange} required />
                    </div>
                </div>
            )}
            <button type="submit">Register</button>
        </form>
    );
};

export default MemberForm;
