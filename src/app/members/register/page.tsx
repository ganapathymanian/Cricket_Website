import React, { useState } from 'react';
import MemberForm from '../../../components/MemberForm';
import EmergencyContactForm from '../../../components/EmergencyContactForm';

const RegisterPage = () => {
    const [age, setAge] = useState(null);

    const handleAgeChange = (newAge) => {
        setAge(newAge);
    };

    return (
        <div className="register-page">
            <h1>Register as a Member</h1>
            <MemberForm onAgeChange={handleAgeChange} />
            {age && <EmergencyContactForm age={age} />}
        </div>
    );
};

export default RegisterPage;
