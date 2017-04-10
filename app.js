var OAuth = require('wechat-oauth');

var config = {
  appid : 'wx75d7ac8440564066',
  appsecret : 'd6e650fa8c9f2765c1028542258d6945'
}

var auth = new OAuth(config.appid,config.appsecret);


var url = auth.getAuthorizeURL('http://diveintonode.org/', 'hehe');

console.log(url);


