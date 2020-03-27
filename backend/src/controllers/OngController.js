const uniqueId = require('../utils/generateUniqueId');

const conn = require('../database/connection');

module.exports = {
  async select(req, res) {
    const ongs = await conn('ongs').select('*');

    return res.json(ongs);
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
  
    const id = uniqueId();
  
    await conn('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
  
    return res.json({ id });
  }
}