var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var client = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    database:'happycourier',
    password:'123456'
});



 router.get('/',function (req,res,next) {
    console.log(req.query);
    var customerId = req.query.mycustomerId;
    var thinghost = req.query.thinghost;
    var hosttel = req.query.hosttel;
    var thingcode = req.query.thingcode;
    var whereget = req.query.whereget;
    var Destination =req.query.Destination;
    var kinds = req.query.kinds;
    var payfor=req.query.payfor;
    var sql = "insert into courier(customerId,thinghost,hosttel,thingcode,whereget,Destination,kinds,flag,payfor) values(?,?,?,?,?,?,?,0,?)";
    var par =[customerId,thinghost,hosttel,thingcode,whereget,Destination,kinds,payfor];
    client.query(sql,par,function (err,result) {
        if(err)
        {
            console.log("err:"+err);
            res.end("false");
            return;
        }
        res.end("true");
    });
 });
 module.exports = router;