import request from 'supertest';
import app from '../../src/app'; // Adjust the import based on your app's entry point

describe('Members Integration Tests', () => {
    it('should register a new member', async () => {
        const response = await request(app)
            .post('/api/members/register')
            .send({
                name: 'John Doe',
                email: 'john.doe@example.com',
                age: 25,
                emergencyContact: {
                    name: 'Jane Doe',
                    phone: '123-456-7890'
                }
            });
        
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('should login an existing member', async () => {
        const response = await request(app)
            .post('/api/members/login')
            .send({
                email: 'john.doe@example.com',
                password: 'password123'
            });
        
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should return 400 for invalid registration data', async () => {
        const response = await request(app)
            .post('/api/members/register')
            .send({
                name: '',
                email: 'invalid-email',
                age: 15,
                emergencyContact: {}
            });
        
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
    });

    it('should return 401 for invalid login credentials', async () => {
        const response = await request(app)
            .post('/api/members/login')
            .send({
                email: 'nonexistent@example.com',
                password: 'wrongpassword'
            });
        
        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('error');
    });
});
