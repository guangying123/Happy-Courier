var express = require('express');
var router = express.Router();

router.get('/',function (req,res,next) {
     var loginname = req.query.loginname;
     var logincode = req.query.logincode;
     var flag = req.query.flag;
     //console.log(flag);
    if(logincode==undefined||loginname==undefined)
    {
        res.redirect(302,"/");
    }
    else
    {
        res.render('Homepage',{myloginname:loginname,mylogincode:logincode,myflag:flag});
    }
});

module.exports = router;
