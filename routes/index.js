var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var list=[
        {num:1,name:"老大",age:18,gender:"male"},
        {num:2,name:"二妹",age:17,gender:"female"},
        {num:3,name:"张三",age:16,gender:"male"},
        {num:4,name:"小四",age:15,gender:"female"}
    ];
    res.render('index.html', { title: '兄弟姐妹' , list: list});
});

router.get('/index2.html',function (req, res, next) {
    res.render('index2', { title: "另一个页面", content: "成功跳转"})
});

router.post('/getpost', function (req, res, next) {
  var data = req.body;//获得请求主体
  console.log(data);
    res.send({
        firstName:data.firstName,
        lastName:data.lastName,
        home:"CQ"
    });
});

module.exports = router;
