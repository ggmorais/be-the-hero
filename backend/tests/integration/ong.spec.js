const request = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await conn.migrate.rollback();
    await conn.migrate.latest();
  });

  afterAll(async () => {
    await conn.destroy();
  });

  it('should be able to create a new ong', async () => {
    const res = await request(app)
      .post('/ongs')
      .send({
        name: 'test',
        email: 'test@test.com',
        whatsapp: '999999999',
        city: 'City Name',
        uf: 'UF'
      });

    expect(res.body).toHaveProperty('id');
    expect(res.body.id).toHaveLength(8);
  });
});