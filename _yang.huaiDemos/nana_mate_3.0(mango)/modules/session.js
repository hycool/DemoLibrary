/*
data:2015-01-22
author:yang.huai
description:
  session.js用于承载用户登陆相关、获取专辑卡片相关的数据和操作
*/
NanaMate.session = (function($) {
  //用于ajax请求的url
  var sessionURL = "http://api.zapyamobile.net/v2/sessions";
  var userURL = "http://api.zapyamobile.net/v2/users";
  var albumURL="http://210.73.213.245/v7/albums/summary";
  
  //http请求头文件
  var extraHeaders = {
    "Authorization": "0ff0ea0995234a6e8c2b550e2379f69d",
    "X-UserTag": 0,
    "X-DevId": 0
  };
  //定义user对象，存放登陆后user信息
  var user = undefined;
  //定义zid额外存放user登陆id
  var zid = undefined;
  
  //定义session初始化函数
  function init(f) {
    chrome.storage.local.get('user', function(object) {
      user = object.user;
      if (user !== undefined) {
        extraHeaders["X-CK"] = user.cookie;
      }

      if (f !== undefined) {
        f();  
      }
    });

  }
  
  //创建登陆用户的user object 
  function create(event) {
	//console.log("请求sessionURL create headers=");
	//console.log(extraHeaders);
    $.ajax({
      type: "POST",
      url: sessionURL,
      data: credential(),
      contentType: "application/json; charset=utf-8",
      headers: extraHeaders,
      success: onSessionCreated,
      error: onLoginFailed
    });
  }

  //登录失败调用
  function onLoginFailed(errMsg) {
    user = undefined;
    console.log("Login failed: " + JSON.stringify(errMsg));
  }

  //登陆成功调用
  function onSessionCreated(data, textStatus, jqXHR) {
	//用户登陆成功后生成的cookie应该在第一次请求sessionURL响应成功后就放入extraHeaders.
	extraHeaders["X-CK"] = jqXHR.getResponseHeader("X-SetCK");
	//console.log("SessionCreate cookie="+jqXHR.getResponseHeader("X-SetCK"));
	//console.log("on SessionCreate jqXHR=");
	//console.log(jqXHR);
	//console.log("请求 userURL onSessionCreated headers=");
	//console.log(extraHeaders);
    // TODO: Show user display name, base62 decode required
    $.ajax({
      type: "GET",
      url: userURL + "/" +zid + "/profile",
      contentType: "application/json; charset=utf-8",
      headers: extraHeaders,
      success: updateProfile,
	  error: onGetProfileFailed
	  
    });
  }
  
  //登陆失败返回信息
  function onGetProfileFailed(errMsg) {
	user = undefined;
	console.log("Login failed: " + JSON.stringify(errMsg));
  }
  
  //更新本地配置
  function updateProfile(data, textStatus, jqXHR) {
	//console.log("SessionCreate cookie="+jqXHR.getResponseHeader("X-SetCK"));
	//console.log("updataProfile jqXHR=");
	//console.log(jqXHR);
	saveCookie(data, jqXHR);
	NanaMate.updateUI("feed");
    showCurrentUser();
    NanaMate.feed.prepare();
	getAlbumlist();//读取专辑列表信息
  }

  //控制页面显示，登陆成功后显示用户ID+用户名
  function showCurrentUser() {
    $("#session p span").text("[" + user.id + "]" + user.name);
  }

  //2015-01-25 delete by hy
  /*
  function extraHeaders() {
	console.log("execute extraHeaders function");
	console.log(headers);
    return headers;
  }
  */

  //退出登陆
  function destroy(event) {
    chrome.storage.local.remove('user', function() {
      delete extraHeaders["X-CK"];
      user = undefined;
      NanaMate.updateUI("login");
    });
  }

  //当前登陆用户user object
  function currentSession() {
    return user;
  }
  //2015-01-25 fixed by hy
  //登陆成功后将user 信息放到谷歌浏览器local storage中
  function saveCookie(data, jqXHR) {
	//将用户第一次请求sessionURL成功响应的cookie放入本地chrome.storage.local
	var cookie=extraHeaders["X-CK"];
	var displayName = NanaMate.utils.decodeBase62(data.dn);
    user = { id: zid, name: displayName, cookie: cookie };
	//console.log("登陆成功后组织user放入chrome.storage.local");
	//console.log(user);
    chrome.storage.local.set({ 'user': user });
  }


  function credential() {
    zid = $("input#zid").val();
	//hy 2015-01-22 fix 
    // old:password = $("input#password").val();
	password = $("#password").val();
    var data = {
      id: zid,
      zp: password
    };
	//console.log("请求 sessionURL 组织data数据 data=");
    //console.log(JSON.stringify(data));
    return JSON.stringify(data);
  }

  function headers() {
    return extraHeaders;
  }

  /*
    date:2015-01-22
	author:yang.huai
	description:获取专辑列表数据(已发布+未发布)
  */
  //此请求调用快拿3.0运营平台API接口:1.3.8,返回所有专辑(st=2为发布专辑,st=1,st=3为未发布专辑)
  function getAlbumlist(){
	  //console.log("请求 albumURL headers=");
	  //console.log(extraHeaders);
	  $.ajax({
      type: "GET",
      url: albumURL,
	  data:{limit:1000,offset:0},
      contentType: "application/json; charset=utf-8",
      headers: extraHeaders,
      success: renderAlbumlist,
	  error: onGetProfileFailed
	  
    });
  }

  //ajax请求ablumlist成功后执行，用以完成专辑列表选择工作。
  function renderAlbumlist(data,textStatus,jqXHR){
	  //console.log("SessionCreate cookie="+jqXHR.getResponseHeader("X-SetCK"));
	  //console.log("renderAlbumlist jqXHR=");
	  //console.log(jqXHR);
	  data=JSON.parse(data);
	  var options="";
	  //生成select下拉框下的options的DOM元素
	  for(var index in data.data){
		  options+="<option value='"+data.data[index]._id+"' data-mark='"+data.data[index].st+"'>"+data.data[index].sn+"</option>";
	  }
	  $("#albumlist").append(options);
  }
  
  
  
  return {
    init: init,
    create: create,
    destroy: destroy,
    currentSession: currentSession,
    headers: headers,
    showCurrentUser: showCurrentUser,
	getAlbumlist:getAlbumlist
  };

})(jQuery);
