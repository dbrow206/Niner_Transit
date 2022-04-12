var express = require('express');
const controller = require('../controllers/trendController');
var router = express.Router();

router.get('/lineTrends', controller.line);

router.get('/stopTrends', controller.stop);

router.get('/interactiveMap', controller.mapstops);

module.exports = router;
