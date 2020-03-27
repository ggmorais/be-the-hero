const req = require('supertest');
const app = require('../../src/app');

class Methods {
  async newTestOng() {
    const res = await req(app)
      .post('/ongs')
      .send({
        name: 'test',
        email: 'test@test.com',
        whatsapp: '999999999',
        city: 'City Name',
        uf: 'UF'
      });
    
    const body = await res.body

    return body;
  }
  
  async newTestIncident() {
    const res = await req(app)
      .post('/incidents')
      .set('Authorization', this.newTestOng().id)
      .send({
        title: 'incident test',
        description: 'incident test description incident test description',
        value: 100
      });
    
    const body = await res.body;

    return body;
  }
  
  async deleteTestIncident() {
    console.log(this.newTestOng());

    const res = await req(app)
      .delete('/incidents/' + this.newTestIncident())
      .set('Authorization', this.newTestOng().id)
      .send()
    
    const body = await res.body;

    return body;
  }
}

module.exports = new Methods();