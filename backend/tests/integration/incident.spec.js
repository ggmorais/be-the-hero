const req = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/database/connection');

describe('INCIDENT', () => {
  beforeEach(async () =>{
    await conn.migrate.rollback();
    await conn.migrate.latest();
  });

  afterAll(async () => {
    await conn.destroy();
  });

  it('should create a new ong and new incident', async () => {
    const ong_data = await req(app)
      .post('/ongs')
      .send({
        name: 'test',
        email: 'test@test.com',
        whatsapp: '999999999',
        city: 'City Name',
        uf: 'UF'
      });
    
    const ong_id = ong_data.body.id;

    const res = await req(app)
      .post('/incidents')
      .set('Authorization', ong_id)
      .send({
        title: 'incident test',
        description: 'incident test description incident test description',
        value: 100
      });

    expect(typeof res.body).toBe('number');
  });

  it('should create a new ong and new incident, then delete the incident', async () => {
    const ong_data = await req(app)
      .post('/ongs')
      .send({
        name: 'test',
        email: 'test@test.com',
        whatsapp: '999999999',
        city: 'City Name',
        uf: 'UF'
      });
    
    const incident_data = await req(app)
      .post('/incidents')
      .set('Authorization', ong_data.body.id)
      .send({
        title: 'incident test',
        description: 'incident test description incident test description',
        value: 100
      });

    const res = await req(app)
      .delete('/incidents/' + incident_data.body)
      .set('Authorization', ong_data.body.id)
      .send({
        title: 'incident test',
        description: 'incident test description incident test description',
        value: 100
      });

    expect(typeof res.body).toBe('object');
  });
});