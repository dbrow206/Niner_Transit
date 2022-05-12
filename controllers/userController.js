const nodemailer = require('nodemailer');

//connect to email server
const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4a8bf90dbfee70",
      pass: "52bcc144ced9b8"
    }
})

exports.new = (req, res)=>{
    res.render('./user/new');
};

exports.getUserLogin = (req, res, next) => {
    return res.render('./user/login');
}

exports.suggestions = (req, res, next) => {
    return res.render('./user/suggestions');
}

//sends email based on suggestions page entry
exports.createSuggestion = (req, res, next) => {
    console.log('hello', req.body);
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let name = firstname + ' ' + lastname;
    let email = req.body.email;
    let suggestion = req.body.subject;
    console.log(suggestion);
    transporter.sendMail ({
        from: email ,
        to: 'NinerTransit@ninertransit.com',
        subject: name,
        text: suggestion
    }, (err, info) => {
        console.log(info.envelope);
        console.log(info.messageId);
    }
   );
   return res.render('./user/suggestions');
}



