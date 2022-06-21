import app from '../index';
import supertest from 'supertest'

const req = supertest(app);

describe('Test Endpoint', ()=>{
    it('Response status should be 200', async()=>{
        const response = await req.get('/');
        expect(response.status).toBe(200);
    });
}) ;

describe("Resizing image endpint test", () => {

    it('Should resize the image', async () => {
        const result = await req
            .get(`/api/resize?image_name=santamonica.jpg&width=300&hight=250`)            
        expect(result.status).toBe(200);
        
    });
});