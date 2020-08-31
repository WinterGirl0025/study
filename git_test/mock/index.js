const fs = require('fs');
const path = require('path');
const Mock = require('mockjs');//mock引入
const JSON5 = require('json5');

//读取json文件
function getJsonFile(filePath) {
    //读取指定json文件
    var json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
    return JSON5.parse(json);
}


//返回函数
module.exports = function (app) {
    if (process.env.MOCK == 'true') {
        //监听请求
        app.get('/user/userinfo', function (req, res) {
            //响应时读取mock data 的json文件
            var json = getJsonFile('./userData.json5');
            res.json(Mock.mock(json))
        })
        app.post('/user/message',function(req,res){
            console.log(req)
            res.json(req.params)
        })
    }
}