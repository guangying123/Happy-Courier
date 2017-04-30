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
var PickPlace = req.query.PickPlace;
var SendPlace = req.query.SendPlace;
/*var result=[];

console.log("PickPlace:"+PickPlace+" "+"SendPlace"+":"+SendPlace);
//name thing money
// aim为要建立的用户订单信息数据库 至少包含PickPlace PickPlace name thing money属性
var aim=[{"PickPlace":"十号楼","SendPlace":"海棠公寓","name":"mochen","thing":"book","money":100},{"PickPlace":"十号楼","SendPlace":"海棠公寓","name":"maobian","thing":"book","money":100},{"PickPlace":"北门","SendPlace":"海棠公寓","name":"heibian","thing":"book","money":100}];
for(var i = 0;i<aim.length;i++)
{
    if(PickPlace==aim[i].PickPlace && SendPlace == aim[i].SendPlace)
    {
        result.push(aim[i]);
    }
}*/

var sql = "select id,customerId,payfor from courier where whereget =? and Destination = ?";
var par = [PickPlace,SendPlace];
client.query(sql,par,function (err,result)
{
    if(err)
    {
        console.log(err);
        res.end();
        return;
    }
    console.log(result);
    res.end(JSON.stringify(result));
});

})
module.exports = router;