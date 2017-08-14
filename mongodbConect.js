var mongoClient =require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/new';

var insertData = function (db, callback) {

    var collection = db.collection('site');//连接到表

    var data = [{"name":"菜鸟教程", "url":"www.runoob.com"},{"name":"菜鸟工具", "url":"c.runoob.com"}];

    collection.insert(data, function (err, result) {
        if (err){
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
};

mongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("连接成功！");
    insertData(db, function (result) {
        console.log(result);
        db.close();
    });
});