var express = require('express');
const controller = require('../controllers/trendController');
var router = express.Router();

//GET /users/new: send html form for creating a new user account
router.get('/lineTrends', controller.line);

//GET /users/login: send html for logging in
router.get('/stopTrends', controller.stop);

module.exports = router;
