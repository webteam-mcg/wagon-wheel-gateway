const express = require("express");
const router = express.Router();
const scoreController = require('../controllers/scoreController');

router.post('/score', scoreController.addScore);

module.exports = router;