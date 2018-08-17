const express = require('express');

const timeRoutes = require('./timeRoutes');
const messageRoutes = require('./messageRoutes');
const absenceRoutes = require('./absenceRoutes');

const router = express.Router();

// Time
router.route('/time').get(timeRoutes.getTime);
router.route('/time').post(timeRoutes.postTime);
router.route('/time/:id').put(timeRoutes.updateTime);
router.route('/time/:id').delete(timeRoutes.deleteTime);

// Messages
router.route('/messages').get(messageRoutes.getMessage);
router.route('/messages/:id').delete(messageRoutes.deleteMessage);

// Absences
router.route('/absences').get(absenceRoutes.getAbsence);
router.route('/absences').post(absenceRoutes.postAbsence);
router.route('/absences/:id').delete(absenceRoutes.deleteAbsence);

module.exports = router;

