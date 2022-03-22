exports.new = (req, res)=>{
    res.render('./user/new');
};

exports.getUserLogin = (req, res, next) => {
    return res.render('./user/login');
}