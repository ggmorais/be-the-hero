const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const router = express.Router();

router.get('/ongs', OngController.select);
router.post('/ongs', OngController.create);

router.post('/incidents', IncidentController.create);
router.get('/incidents', IncidentController.select);
router.delete('/incidents/:id', IncidentController.delete);

router.get('/profile', ProfileController.select);

router.post('/sessions', SessionController.create);

module.exports = router;