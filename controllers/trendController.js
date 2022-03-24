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
  return res.render('./trends/stopTrends');
}   

