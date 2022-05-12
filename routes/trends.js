var express = require('express');
const controller = require('../controllers/trendController');
var router = express.Router();

router.get('/lineTrends01', controller.line01);
router.get('/lineTrends02', controller.line02);
router.get('/lineTrends03', controller.line03);
router.get('/lineTrends04', controller.line04);
router.get('/lineTrends05', controller.line05);
router.get('/lineTrends06', controller.line06);
router.get('/lineTrends07', controller.line07);
router.get('/lineTrends08', controller.line08);
router.get('/lineTrends09', controller.line09);
router.get('/lineTrends10', controller.line10);
router.get('/lineTrends11', controller.line11);
router.get('/lineTrends12', controller.line12);

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
router.get('/interactiveMap', controller.mapstops);

module.exports = router;


