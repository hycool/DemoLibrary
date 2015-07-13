/*
data:2015-01-22
fix author:yang.huai
description:
    Develop for nanaMate 3.0 that enable us post cards to albums freely.
	
*/
var NanaMate = (function($) {
  function start() {
    $(function() {
	  //为DOM元素绑定事件
	  //登陆验证
	  $('#btnLogin').on('click', NanaMate.session.create);
	  //提交视频资源
      $('#btnPost').on('click', NanaMate.feed.post);
	  //退出登陆
      $('#btnLogout').on('click', NanaMate.session.destroy);
	  //执行session初始化设置
      NanaMate.session.init(function() {
        if (NanaMate.session.currentSession() === undefined) {
          updateUI("login");
        } else {
          NanaMate.session.showCurrentUser();
          updateUI("feed");
          NanaMate.feed.prepare();
		  NanaMate.session.getAlbumlist();//读取专辑列表信息
        }
      });
    })
  }
  
  //切换登陆前/后页面显示内容
  function updateUI(phase) {
    if (phase === "login") {
      $('#post').hide();
      $('#login').show();
      $('#session').hide();
    }
    if (phase === "feed") {
      $('#post').show();
      $('#login').hide();
      $('#session').show();
    }
  }
  
  /*
    date:2015-01-22
	author:yang.huai
	description:以下定义选择专辑类型和卡片状态后触发的DOM绑定事件
  */
  $(function(){
	  $(".albumType").click(function(){
	    $("input[data-mark=albumType]").val($(this).find("a").text());
		//切换已发布专辑/未发布专辑的select下拉显示
		$("#albumlist").prop("disabled",false);
		if($(this).attr("data-mark")=="publish"){
			$("#albumlist").find("option[data-mark=2]").show()
			$("#albumlist").find("option[data-mark=1]").hide();
			$("#albumlist").find("option[data-mark=3]").hide();
			$("#albumlist").find("option[data-mark=5]").hide();
		}else if($(this).attr("data-mark")=="pend"){
			$("#albumlist").find("option[data-mark=2]").hide()
			$("#albumlist").find("option[data-mark=1]").show();
			$("#albumlist").find("option[data-mark=3]").show();
			$("#albumlist").find("option[data-mark=5]").hide();
		}else if($(this).attr("data-mark")=="ax"){
			$("#albumlist").find("option[data-mark=2]").hide()
			$("#albumlist").find("option[data-mark=1]").hide();
			$("#albumlist").find("option[data-mark=3]").hide();
			$("#albumlist").find("option[data-mark=5]").show();
		}
		
      })
      $(".cardStatus").click(function(){
		$("#alertMsg").hide();
	    $("input[data-mark=cardStatus]").val($(this).find("a").text());
		$("input[data-mark=cardStatus]").data("st",$(this).attr("data-st"));
      })
  })
 
  
  return {
    start: start,
    updateUI: updateUI
  };

})(jQuery)
