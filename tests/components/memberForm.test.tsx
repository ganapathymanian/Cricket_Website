import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MemberForm from '../../src/components/MemberForm';

describe('MemberForm', () => {
    test('renders the member registration form', () => {
        render(<MemberForm />);
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/age/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/emergency contact name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/emergency contact phone/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
    });

    test('submits the form with valid data', () => {
        render(<MemberForm />);
        
        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/age/i), { target: { value: '25' } });
        fireEvent.change(screen.getByLabelText(/emergency contact name/i), { target: { value: 'Jane Doe' } });
        fireEvent.change(screen.getByLabelText(/emergency contact phone/i), { target: { value: '1234567890' } });
        
        fireEvent.click(screen.getByRole('button', { name: /register/i }));
        
        // Add assertions to verify form submission
    });

    test('shows error messages for invalid data', () => {
        render(<MemberForm />);
        
        fireEvent.click(screen.getByRole('button', { name: /register/i }));
        
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/age is required/i)).toBeInTheDocument();
    });
});
