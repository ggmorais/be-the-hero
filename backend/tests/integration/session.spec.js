const req = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/database/connection');

describe('SESSION', () => {
  beforeEach(async () =>{
    await conn.migrate.rollback();
    await conn.migrate.latest();
  });

  afterAll(async () => {
    await conn.destroy();
  });

  it('should verify if the ong exists', async () => {
    const ong_data = await req(app)
      .post('/ongs')
      .send({
        name: 'test',
        email: 'test@test.com',
        whatsapp: '999999999',
        city: 'City Name',
        uf: 'UF'
      });

    const res = await req(app)
      .post('/sessions')
      .send({ id: ong_data.body.id })
    
    expect(res.status).toBe(200);
    expect(typeof res.body).toBe(object);
  });
});