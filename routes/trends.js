var express = require('express');
const controller = require('../controllers/trendController');
var router = express.Router();

router.get('/lineTrends', controller.line);
router.get('/stopTrends01/', controller.stop01);
router.get('/stopTrends02/', controller.stop02);
router.get('/stopTrends03/', controller.stop03);
router.get('/stopTrends04/', controller.stop04);
router.get('/stopTrends05/', controller.stop05);
router.get('/stopTrends06/', controller.stop06);
router.get('/stopTrends07/', controller.stop07);
router.get('/stopTrends08/', controller.stop08);
router.get('/stopTrends09/', controller.stop09);
router.get('/stopTrends10/', controller.stop10);
router.get('/stopTrends11/', controller.stop11);
router.get('/stopTrends12/', controller.stop12);
router.get('/interactiveMap', controller.mapstops, controller.mapstopsnumbers);

module.exports = router;


