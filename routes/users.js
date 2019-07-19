var express = require('express');
var router = express.Router();
var URL = require('url');
var MongoClient = require('mongodb').MongoClient,
    DB_CONN_STR = 'mongodb://localhost:27017/test-db-0605'; // 数据库为 test-db-0605
var User = require('./user');

var selectData = function(db, callback) {  
  const mydb = db.db('DB_CONN_STR');
  //连接到user表  
  var collection = mydb.collection('user');
  //查询数据
  var whereStr = {"name":'xiaoming'};
  // TODO:查询不到
  collection.find(whereStr).toArray(function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}

MongoClient.connect(DB_CONN_STR, { useNewUrlParser: true }, function(err, db) {
  console.log("连接成功！");
  selectData(db, function(result) {
    console.log(result);
    db.close();
  });
});

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
