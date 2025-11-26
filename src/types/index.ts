export interface Member {
    id: string;
    name: string;
    email: string;
    age: number;
    emergencyContact: EmergencyContact;
}

export interface EmergencyContact {
    name: string;
    relationship: string;
    phone: string;
}

export interface RegistrationFormData {
    name: string;
    email: string;
    age: number;
    emergencyContact: EmergencyContact;
}

export interface LoginFormData {
    email: string;
    password: string;
}
