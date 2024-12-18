const Product = require('../../src/models/Product');

describe('Product Model', () => {
  it('should create a new product', async () => {
    const product = new Product({
      name: 'Test Product',
      category: 'Test Category',
      price: 100,
      sku: 'TESTSKU123',
    });

    expect(product.name).toBe('Test Product');
    expect(product.category).toBe('Test Category');
    expect(product.price).toBe(100);
    expect(product.sku).toBe('TESTSKU123');
  });
});
