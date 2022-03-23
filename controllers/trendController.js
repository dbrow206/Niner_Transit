

exports.line = (req, res)=>{

    res.render('./trends/lineTrends');
};

exports.stop = (req, res, next) => {
    return res.render('./trends/stopTrends');
}   

