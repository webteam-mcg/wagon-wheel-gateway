const express = require("express");
const router = express.Router();
const playerController = require('../controllers/playerController');

router.post('/player', playerController.addPlayer);
router.get('/player/:team', playerController.playerList);

module.exports = router;