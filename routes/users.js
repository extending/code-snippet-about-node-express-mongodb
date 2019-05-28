var express = require('express');
var router = express.Router();
var URL = require('url');
var User = require('./user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let data = {
    status: 0,
    data: [
      123, 456, 789
    ]
  }
  res.send(data);
});

router.post('/getUserInfo', function(req, res, next) {
  var user = new User();
  //客户端 post 请求参数通过 req.body 获取，url query 参数通过 req.query 获取
  let _url = URL.parse(req.url, true).path;
  console.log(req.body, req.query, _url)
  if(req.body.id == '1') {

    user.name = "ligh";
    user.age = "1";
    user.city = "北京市";

}else{  
    user.name = "SPTING";
    user.age = "1";
    user.city = "杭州市";
}

  var response = {status:1,data:user};
  res.send(JSON.stringify(response));
})

module.exports = router;
