const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Product Routes', () => {
  it('should get all products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should create a product', async () => {
    const newProduct = {
      name: 'Test Product',
      category: 'Test Category',
      price: 100,
      sku: 'TESTSKU123',
    };

    const res = await request(app).post('/api/products').send(newProduct);
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test Product');
  });
});
