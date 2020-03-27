const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const validation = require('./validations');

const router = express.Router();

router.get('/ongs', OngController.select);
router.post('/ongs', validation.ong.create, OngController.create);

router.post('/incidents', validation.incident.create, IncidentController.create);
router.get('/incidents', validation.incident.select, IncidentController.select);
router.delete('/incidents/:id', validation.incident.delete, IncidentController.delete);

router.get('/profile', validation.profile.select, ProfileController.select);

router.post('/sessions', validation.session.create, SessionController.create);

module.exports = router;