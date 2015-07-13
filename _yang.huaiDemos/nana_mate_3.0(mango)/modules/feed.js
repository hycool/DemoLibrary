/*
data:2015-01-22
author:yang.huai
description:feed.js用于承载post卡片相关的数据和操作
*/
NanaMate.feed = (function($) {
  //var feedURL = "http://api.zapyamobile.net/v5/feeds";
  var feedURL = "http://210.73.213.245/v7/albums";
  var currentFeed = undefined;

  
  function post() {
    if (currentFeed === undefined||currentFeed.ch===undefined) {
	  onPostFeedDone("error: 获取资源信息异常!");
      return;
    }
	
	var param=new Object();
	chrome.storage.local.get("user",function(data){
		param.uid=data.user.id;
		organizeData(param);
	});
  }
  
  //此函数用于组织请求ablumURL的数据
  //此ajax请求调用快拿3.0运营平台API接口：1.4.9
  function organizeData(param){
	  //组织ajax传递参数param
	  var aid;//albumID(专辑ID)
	  if($("#albumlist").val()!=null){
		  aid=$("#albumlist").val();
	  }else{
		  $("#alertMsg").html("<span class='text-danger'><em>请选择专辑类型!</em></span>");
		  $("#alertMsg").show();
		  return;
	  }
	  //卡片发布状态
	  if($("input[data-mark=cardStatus]").data("st")!=undefined){
		  param.st=$("input[data-mark=cardStatus]").data("st");
	  }else{
		  $("#alertMsg").html("<span class='text-danger'><em>请选择卡片状态!</em></span>");
		  $("#alertMsg").show();
		  return;
	  }
	  param.vn=currentFeed.n;
	  param.url=currentFeed.bu;
	  param.th="";
	  param.ch=currentFeed.ch;
	  
      $.ajax({
        type: "POST",
        url: feedURL+"/"+aid+"/cards",
        data: JSON.stringify(param),
        dataType: 'text',
        contentType: "application/json; charset=utf-8",
        headers: NanaMate.session.headers(),
	    success: function(data,status) {
		  console.log(status); 
		  onPostFeedDone("success");
	    },
	    error: function(jqXHR, msg, exception) {
		  console.log(jqXHR); 
		  console.log(msg);console.log(exception);
		  onPostFeedDone("error, " + msg + ", " + exception);
	    }
        // complete: function(jqXHR, textStatus) { console.log(textStatus); window.close(); }
      });
  }
  
  //发布卡片后的页面响应
  function onPostFeedDone(status) {
	$(function(){
		$("#btnModal").click(function(){
			$("#Modal").modal("hide");
			window.close();
		});
	});
	if (status === "success") {
		$("#modalBody").html("<h5 class='text-success'><strong>SUCCESS!<strong></h5>");
		$("#Modal").modal("show");
		//当添执行成功后应该在页面disabled提交按钮，避免用户重复提交
		$("#btnPost").prop("disabled","true");
	} else {
		$("#modalBody").html("<h5 class='text-danger'><strong>发布失败,错误信息：["+status+"]<strong></h5>");
		$("#Modal").modal("show");
	}
  }
  
  //调用方法详参content.js文件
  function prepare() {
    chrome.tabs.getSelected(null, function(tab) {
	  //console.log("tab.id="+tab.id);
      chrome.tabs.sendMessage(tab.id, { action: "getFeed" }, preview);
    })
  }

  function preview(feed) {
	console.log("preview feed=");
	console.log(feed);
    post = $("#post");
    post.show();
    if (feed === undefined || feed === null||feed.ch===undefined) {
      post.find(".info").html("<span class='fontDanger'>资源提取异常,请刷新页面或者更换其他资源页!</span>");
    } else {
      post.find(".info").text(feed.n);
      currentFeed = feed;
    }
  }
  return {
    post: post,
    prepare: prepare
  };

})(jQuery);
