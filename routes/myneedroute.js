var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var client = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    database:'happycourier',
    password:'123456',
    useConnectionPooling: true
});



 router.get('/',function (req,res,next) {
var myneedkw = req.query.myneedkw;
var myneeddesc = req.query.myneeddesc;
var myneedkind = req.query.myneedkind;
var payfor = req.query.payfor;
var custId = req.query.custId;
var sql = "insert into infotable(custId,myneedkw,myneeddesc,payfor,myneedkind,flag) values(?,?,?,?,?,0)";
var par = [custId,myneedkw,myneeddesc,payfor,myneedkind];
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