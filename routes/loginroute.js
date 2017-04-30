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


 router.get('/',function (req,res,next)
 {
     var jsonteltrue = JSON.stringify('{"flag":"tel"}');
     var jsonStuIdtrue = JSON.stringify('{"flag":"StuId"}');
     var jsonfalse = JSON.stringify('{"flag":"false"}')
     var loginname = req.query.loginname;//手机号||学号
     var logincode = req.query.logincode;
    console.log(loginname+" "+logincode);
    var sql1='select * from customers where StuId=? and code=?';//学号验证
    var StuIdpar = [loginname,logincode];
client.query(sql1,StuIdpar,function (err,result) {
    if(err)
    {
        console.log("err:"+err);
        res.end(jsonfalse);
    }
    else
    {
        console.log(result);
        if(result.length)
        {
            //重定向
           // res.redirect('http://locahost:3000/Homepage');
            // res.location('http://localhost:3000/Homepage');
            // res.statusCode = 302;
           res.end(jsonStuIdtrue);
        }
        else
        {
           // res.send();
        }
    }
});
     // client.connect();
var sql2='select * from customers where tel=? and code=?';//学号验证
var telpar = [loginname,logincode];
client.query(sql2,telpar,function (err,result) {
    if(err)
    {
        console.log("err:"+err);
        res.end(jsonfalse);
    }
    else
    {
        console.log(result);
        if(result.length)
        {
            //重定向
            // res.location('http://localhost:3000/Homepage');
            // res.statusCode = 302;
            res.end(jsonteltrue);
        }
        else
        {
            res.end(jsonfalse);
        }
    }
});
});

 module.exports=router;