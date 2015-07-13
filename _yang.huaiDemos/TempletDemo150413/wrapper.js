// JavaScript Document
$(function(){
	
	/*
	  data:2015-04-23
	  author:hy
	  description:以下js操作是对菜单导航的样式操作，不涉数据传递、页面跳转和信息交互
	*/
	$(".nav li[class!=nav-header]").click(function(){
		//点击一级菜单移除其他一级菜单的active状态,如果一级菜单含有二级菜单,则将二级菜单收缩。
		//1.移除同级li .active
		$(this).parent().find("li").removeClass("active");
		//2.抵消bootstrap collapse点击效果
		$(this).parent().find("li a[data-toggle=collapse]").css("background-color","#2f4050");
		//3.为当前点击元素添加 .active(如果当前点击的元素是user-profile中的li元素则无需添加active)
		$(this).hasClass("user-profile")?"":$(this).addClass("active");
		//处理一级菜单右侧箭头
		$(this).parent().find("i").each(function(index, element) {
            if($(element).hasClass("fa-angle-down")){
				$(element).removeClass("fa-angle-down");
				$(element).addClass("fa-angle-left");
			}
        });
		//控制点击标签的三角箭头的方向性，指向left或者指向down
		//这里存在一个执行顺序问题，所有判断处理的逻辑和正常的逻辑相反。
		if($(this).find("ul").hasClass("in")){
		 	$(this).find("i").eq(1).removeClass("fa-angle-down");
			$(this).find("i").eq(1).addClass("fa-angle-left");
		}else{
			$(this).find("i").eq(1).removeClass("fa-angle-left");
			$(this).find("i").eq(1).addClass("fa-angle-down");
		}
	});
	
	//选择二级菜单时，菜单项要颜色#fff,背景需要有shadow
	$(".nav-second-level li").click(function(){
		$("li a[class=active-second]").removeClass("active-second");
		$(this).find("a").addClass("active-second");
	});
	

})

$(function(){
	/*
	  date:2015-04-23
	  author:hy
	  description:以下js操作是对数据、信息交互，页面跳转等操作。
	*/
	
	/*charts based on morris.js*/
	//line-chart
	var e="#0D888B";
	var t="#00ACAC";
	var n="#3273B1";
	var r="#348FE2";
	var i="rgba(0,0,0,0.6)";
	var s="rgba(255,255,255,0.4)"
	new Morris.Line({
		element:"visitors-line-chart",
		data:[
		{time:"2015-06-11",a:60,b:30},
		{time:"2015-06-12",a:70,b:40},
		{time:"2015-06-13",a:40,b:10},
		{time:"2015-06-14",a:100,b:70},
		{time:"2015-06-15",a:40,b:10},
		{time:"2015-06-16",a:80,b:50},
		{time:"2015-06-17",a:70,b:40}],
		xkey:"time",
		ykeys:["a","b"],
		labels:["PageViews","UniqueVisitors"],
		//数据线颜色
		lineColors:[e,n],   
		//数据点填充色
		pointFillColors:[t,r], 
		lineWidth:"2px",
		//数据点外边框
		pointStrokeColors:[i,i],
		resize:true,
		gridTextFamily:"Microsoft YaHei",
		//坐标轴颜色
		gridTextColor:s,  
		gridTextWeight:"normal",
		gridTextSize:"11px",
		//刻度线颜色
		gridLineColor:"rgba(0,0,0,0.5)",
		hideHover:"auto"
	});
	
	//donut-chart
	new Morris.Donut({
		element:"visitors-donut-chart",
		data:[{label:"New Visitors",value:900},{label:"Return Visitors",value:1200}],
        colors:["#00acac","#348fe2"],
        labelColor:"rgba(255,255,255,0.4)",
        backgroundColor:"#242a30"
	});
	
	
	/*map based on jvectormap*/
	//模拟gdp数据，为地图着色
	var gdpData = {
        "AF": 16639834,
        "AL": 11582322,
        "DZ": 15897964,
		"CN": 25645654
    };
	$("#visitors-map").vectorMap({
		map:"world_mill_en",
		backgroundColor:"#2d353c",
		regionsSelectable:true,
		regionsSelectableOne:true,
		markersSelectable:true,
		regionStyle:{
	        initial: {
                fill: '#5d6b75',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            hover: {
                "fill-opacity": 0.8,
                cursor: 'pointer'
            },
            selected: {
                fill: "rgba(0,102,255,0.3)"
            },
            selectedHover: {
            }
        },
		series:{
			regions:[{
				values:gdpData,
				scale: ["#C8EEFF", "#0071A4"],
                normalizeFunction: "polynomial"
			}]
		},
		onRegionTipShow: function(e, tip, code){
            tip.html(tip.html()+' (Visitors - '+(gdpData[code]==undefined?"":gdpData[code])+')');
        },
	});
	
	//初始化表格显示
	$.extend( $.fn.dataTable.defaults, {
      searching: true,
      ordering:  true,
	  paging:true,//设置分页
		//scrollY:345,//设置表格固定高度，超出时垂直滚动。
		language: {
          emptyTable: "表中无记录",
		  info: "当前显示第 _START_ - _END_ 条记录（共 _TOTAL_ 条）",
		  infoEmpty: "当前显示 0 - 0 条记录",
		  infoFiltered: "(筛选于_MAX_条记录)",
		  zeroRecords: "没有找到匹配记录",
		  lengthMenu: "每页展示 _MENU_ 条记录",
		  search: "检索:",
		  thousands: ",",
		  paginate: {
			first: "首页",
		    last: "尾页",
		    next: "下一页",
		    previous: "上一页"
		  }
		}
    });
	var dataRecords=[
	    {userID:1001,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"},
		{userID:1002,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"},
		{userID:1003,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"},
		{userID:1004,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"},
		{userID:1005,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"},
		{userID:1006,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"},
		{userID:1007,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"},
		{userID:1008,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"},
		{userID:1009,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"},
		{userID:1010,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"},
		{userID:1011,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"},
		{userID:1012,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"},
		{userID:1013,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"},
		{userID:1014,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"},
		{userID:1015,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"},
		{userID:1016,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"},
		{userID:1017,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"},
		{userID:1018,userName:"牧羊人",country:"江苏",frequence:123321,datetime:"2015-06-18"}];
	$("datatable-wrapper").empty();
	$("#datatable-wrapper").append("<table id='t_1' class='table'></table>");
	$("#t_1").dataTable({
			autoWidth:false,
			data:dataRecords,
			columns:[
			{data:"userID",title:"用户ID"},
			{data:"userName",title:"昵称"},
			{data:"country",title:"地域"},
			{data:"frequence",title:"访问频次"},
			{data:"datetime",title:"日期"}
			
			]
		});
	
	
	
	
})



console.log($("#wrapper").outerHeight());
console.log($(".nav-static-size").outerHeight());
console.log($("#page-wrapper").outerHeight());





































































