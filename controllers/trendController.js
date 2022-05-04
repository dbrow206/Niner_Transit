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

exports.stop = (req, res, next) => {
  server.getStops()
  .then(result=>{
    var avgStopRiders = result;
    res.render('./trends/stopTrends', {avgStopRiders});
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

  

