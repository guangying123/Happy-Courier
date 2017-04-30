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
    var myneedkind = req.query.myneedkind;
    console.log(req.query);
    var sql = myneedkw ==""?"select infoId,custId,myneeddesc,payfor from infotable where myneedkind=?":"select infoId,custId,myneeddesc,payfor from infotable where myneedkind=? and myneedkw like ?"
   var par =myneedkw ==""?[myneedkind]:[myneedkind,'%'+myneedkw+'%'];
    client.query(sql,par,function (err,result) {
        if(err)
        {
            console.log("err:"+err);
            res.end("false");
            return;
        }
        else
        {
            res.end(JSON.stringify(result));
        }
    });
});

module.exports = router;