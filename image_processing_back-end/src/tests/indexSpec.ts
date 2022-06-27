import app from '../index';
import supertest from 'supertest';
import resize from '../routes/api/resize-image';
import assist from '../routes/controllers/assist';
import path from 'node:path';

const req = supertest(app);

describe('Test Endpoint', () => {
  it('Response status should be 200', async () => {
    const response = await req.get('/');
    expect(response.status).toBe(200);
  });
});

describe('Resizing image endpint test', () => {
 
  it('Should resize the image', async () => {
    const image_name = 'santamonica.jpg';
    const o_img_path = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'images',
      'original-images'
    );
    const t_img_path = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'images',
      'thumbnail'
    );
    const n_img_h = 250;
    const n_img_w = 250;
    expect(async () => {
      await assist.resize_image(o_img_path, n_img_w, n_img_h, t_img_path);
    }).not.toThrow();
});

});
