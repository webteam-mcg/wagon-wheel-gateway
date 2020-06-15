const express = require("express");
const router = express.Router();
const scoreController = require('../controllers/scoreController');

router.post('/score', scoreController.addScore);
router.get('/score/team/:team', scoreController.filterTeam);
router.get('/score/inning/:team/:session', scoreController.filterInning);
router.get('/score/boundary/:team', scoreController.filterBoundary);
router.get('/score/player/:player/:session', scoreController.filterPlayer);

module.exports = router;