var express = require('express');
var router = express.Router();


 router.get('/',function (req,res,next) {
     var customerId=req.query.customerId;
     res.render('helpme',{mycustomerId:customerId});
 });

 module.exports = router;