const server = require('./serverController')

exports.line01 = (req, res)=>{
  server.getLines01()
  .then(result=>{
    var avgRiders = result;
    res.render('./trends/lineTrends01', {avgRiders});
  })
  .catch();
};
exports.line02 = (req, res)=>{
  server.getLines02()
  .then(result=>{
    var avgRiders = result;
    res.render('./trends/lineTrends02', {avgRiders});
  })
  .catch();
};
exports.line03 = (req, res)=>{
  server.getLines03()
  .then(result=>{
    var avgRiders = result;
    res.render('./trends/lineTrends03', {avgRiders});
  })
  .catch();
};

exports.line04 = (req, res)=>{
  server.getLines04()
  .then(result=>{
    var avgRiders = result;
    res.render('./trends/lineTrends04', {avgRiders});
  })
  .catch();
};
exports.line05 = (req, res)=>{
  server.getLines05()
  .then(result=>{
    var avgRiders = result;
    res.render('./trends/lineTrends05', {avgRiders});
  })
  .catch();
};
exports.line06 = (req, res)=>{
  server.getLines06()
  .then(result=>{
    var avgRiders = result;
    res.render('./trends/lineTrends06', {avgRiders});
  })
  .catch();
};
exports.line07 = (req, res)=>{
  server.getLines07()
  .then(result=>{
    var avgRiders = result;
    res.render('./trends/lineTrends07', {avgRiders});
  })
  .catch();
};
exports.line08 = (req, res)=>{
  server.getLines08()
  .then(result=>{
    var avgRiders = result;
    res.render('./trends/lineTrends08', {avgRiders});
  })
  .catch();
};
exports.line09 = (req, res)=>{
  server.getLines09()
  .then(result=>{
    var avgRiders = result;
    res.render('./trends/lineTrends09', {avgRiders});
  })
  .catch();
};
exports.line10 = (req, res)=>{
  server.getLines10()
  .then(result=>{
    var avgRiders = result;
    res.render('./trends/lineTrends10', {avgRiders});
  })
  .catch();
};
exports.line11 = (req, res)=>{
  server.getLines11()
  .then(result=>{
    var avgRiders = result;
    res.render('./trends/lineTrends11', {avgRiders});
  })
  .catch();
};
exports.line12 = (req, res)=>{
  server.getLines12()
  .then(result=>{
    var avgRiders = result;
    res.render('./trends/lineTrends12', {avgRiders});
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
    res.render('./trends/stopTrends06', {avgStopRiders});
  })
  .catch();
};
exports.stop07 = (req, res, next) => {
  server.getMonthStops07()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends07', {avgStopRiders});
  })
  .catch();
};
exports.stop08 = (req, res, next) => {
  server.getMonthStops08()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends08', {avgStopRiders});
  })
  .catch();
};
exports.stop09 = (req, res, next) => {
  server.getMonthStops09()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends09', {avgStopRiders});
  })
  .catch();
};
exports.stop10 = (req, res, next) => {
  server.getMonthStops10()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends10', {avgStopRiders});
  })
  .catch();
};
exports.stop11 = (req, res, next) => {
  server.getMonthStops10()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends11', {avgStopRiders});
  })
  .catch();
};
exports.stop12 = (req, res, next) => {
  server.getMonthStops10()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends12', {avgStopRiders});
  })
  .catch();
};


exports.mapstops = (req, res, next) => {
  server.getStops()
  .then(result=>{
    var avgStopRiders = result[0];
    var stopNumbers = result[1];
    var offAverages = result[2];
    res.render('./trends/interactiveMap', {avgStopRiders , stopNumbers, offAverages});
  })
  .catch();
};
