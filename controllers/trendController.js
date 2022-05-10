const server = require('./serverController')

exports.line = (req, res)=>{
  server.getLines()
  .then(result=>{
    var avgRiders = result[0]
    var peakTime = result[1];
    res.render('./trends/lineTrends', {avgRiders, peakTime});
  })
  .catch();
};

exports.stop01 = (req, res, next) => {
  server.getMonthStops01()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends01', {avgStopRiders});
  })
  .catch();
};
exports.stop02 = (req, res, next) => {
  server.getMonthStops02()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends02', {avgStopRiders});
  })
  .catch();
};
exports.stop03 = (req, res, next) => {
  server.getMonthStops03()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends03', {avgStopRiders});
  })
  .catch();
};
exports.stop04 = (req, res, next) => {
  server.getMonthStops04()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends04', {avgStopRiders});
  })
  .catch();
};
exports.stop05 = (req, res, next) => {
  server.getMonthStops05()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends05', {avgStopRiders});
  })
  .catch();
};
exports.stop06 = (req, res, next) => {
  server.getMonthStops06()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends05', {avgStopRiders});
  })
  .catch();
};
exports.stop07 = (req, res, next) => {
  server.getMonthStops07()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends05', {avgStopRiders});
  })
  .catch();
};
exports.stop08 = (req, res, next) => {
  server.getMonthStops08()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends05', {avgStopRiders});
  })
  .catch();
};
exports.stop09 = (req, res, next) => {
  server.getMonthStops09()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends05', {avgStopRiders});
  })
  .catch();
};
exports.stop10 = (req, res, next) => {
  server.getMonthStops10()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends05', {avgStopRiders});
  })
  .catch();
};
exports.stop11 = (req, res, next) => {
  server.getMonthStops10()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends05', {avgStopRiders});
  })
  .catch();
};
exports.stop12 = (req, res, next) => {
  server.getMonthStops10()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends05', {avgStopRiders});
  })
  .catch();
};


exports.mapstops = (req, res, next) => {
  server.getStops()
  .then(result=>{
    var avgStopRiders = result[0];
    res.render('./trends/interactiveMap', {avgStopRiders});
  })
  .catch();
};

exports.mapstopsnumbers = (req, res, next) => {
  server.getStopNumbers()
  .then(result=>{
    var avgStops = result[0];
    res.render('./trends/interactiveMap', {avgStops});
  })
  .catch();
};