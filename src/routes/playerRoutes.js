const express = require("express");
const router = express.Router();
const playerController = require('../controllers/playerController');

router.post('/player', playerController.addPlayer);

module.exports = router;