const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  
  ong: {
    create: celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().min(3),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(9).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
      })
    })
  },

  profile: {
    select: celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown()
    })
  },

  session: {
    create: celebrate({
      [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
      })
      // [Segments.HEADERS]: Joi.object({
      //   authorization: Joi.string().required(),
      // }).unknown()
    })
  },

  incident: {
    create: celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required().min(4),
        description: Joi.string().required().min(8),
        value: Joi.number().required()
      }),
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown()
    }),

    select: celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
      })
    }),
    
    delete: celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
      })
    }),
  }

}