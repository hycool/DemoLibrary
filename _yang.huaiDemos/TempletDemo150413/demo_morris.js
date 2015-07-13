// JavaScript Document
//lineChart
$(function(){
	//预定义颜色列表
	var e="#0D888B";
	var t="#00ACAC";
	var n="#3273B1";
	var r="#348FE2";
	var i="rgba(0,0,0,0.6)";
	var s="rgba(255,255,255,0.4)"
	//LineChart
	new Morris.Line({
		element: "lineChart",
		data: [
		{year:"2001",a:20,b:25,c:30},
		{year:"2002",a:25,b:30,c:35},
		{year:"2003",a:20,b:25,c:30},
		{year:"2004",a:15,b:20,c:25},
		{year:"2005",a:30,b:35,c:40},
		{year:"2006",a:20,b:25,c:30},
		{year:"2007",a:25,b:30,c:35},
		{year:"2008",a:15,b:20,c:25},
		{year:"2009",a:20,b:25,c:30},
		{year:"2010",a:30,b:35,c:40},
		],
		xkey: "year",
		ykeys: ["a","b","c"],
		labels:["PageViews","UniqueVisitors","VisitIPs"],
		resize:true,		//自动适应屏幕尺寸
		hideHover:"auto",	//鼠标悬浮时才显示labels
		gridTextFamily:"Microsoft YaHei",	//设置坐标轴字体
		gridTextWeight:"normal",
		gridTextSize:"11px",
		//lineWidth:"3px",
		
		/*******************附加配置*******************/
		/*
		lineColors:[e,n],  //数据线颜色 
		pointFillColors:[t,r], //数据点填充色
		pointStrokeColors:[i,i],	//数据点外边框
		gridTextColor:s,  	//坐标轴颜色
		gridLineColor:"rgba(0,0,0,0.5)",	//刻度线颜色
		*/
	});
	
	
	//AreaChart
	new Morris.Area({
		element: "areaChart",
		data: [
		{year:"2001",a:20,b:25,c:30},
		{year:"2002",a:25,b:30,c:35},
		{year:"2003",a:20,b:25,c:30},
		{year:"2004",a:15,b:20,c:25},
		{year:"2005",a:30,b:35,c:40},
		{year:"2006",a:20,b:25,c:30},
		{year:"2007",a:25,b:30,c:35},
		{year:"2008",a:15,b:20,c:25},
		{year:"2009",a:20,b:25,c:30},
		{year:"2010",a:30,b:35,c:40},
		],
		xkey: "year",
		ykeys: ["a","b","c"],
		labels:["PageViews","UniqueVisitors","VisitIPs"],
		resize:true,		//自动适应屏幕尺寸
		hideHover:"auto",	//鼠标悬浮时才显示labels
		gridTextFamily:"Microsoft YaHei",	//设置坐标轴字体
		gridTextWeight:"normal",
		gridTextSize:"11px",
		//lineWidth:"2px",
		//behaveLikeLine: true,		//设置为true,则区域颜色会被最高的值覆盖
		
		/*******************附加配置*******************/
		/*
		lineColors:[e,n],  //数据线颜色 
		pointFillColors:[t,r], //数据点填充色
		pointStrokeColors:[i,i],	//数据点外边框
		gridTextColor:s,  	//坐标轴颜色
		gridLineColor:"rgba(0,0,0,0.5)",	//刻度线颜色
		*/
	});
	
	//BarCharts
	new Morris.Bar({
		element: "barChart",
		data: [
		{year:"2001",a:20,b:25,c:30},
		{year:"2002",a:25,b:30,c:35},
		{year:"2003",a:20,b:25,c:30},
		{year:"2004",a:15,b:20,c:25},
		{year:"2005",a:30,b:35,c:40},
		{year:"2006",a:20,b:25,c:30},
		{year:"2007",a:25,b:30,c:35},
		{year:"2008",a:15,b:20,c:25},
		{year:"2009",a:20,b:25,c:30},
		{year:"2010",a:30,b:35,c:40},
		],
		xkey: "year",
		ykeys: ["a","b","c"],
		labels:["PageViews","UniqueVisitors","VisitIPs"],
		resize:true,		//自动适应屏幕尺寸
		hideHover:"auto",	//鼠标悬浮时才显示labels
		gridTextFamily:"Microsoft YaHei",	//设置坐标轴字体
		gridTextWeight:"normal",
		gridTextSize:"11px",
	});
	
	//DonutCharts
	new Morris.Donut({
		element:"donutChart",
		data:[
		{label:"新增访客",value:900},
		{label:"回访访客",value:1200}],
		resize:true,
        //colors:["#00acac","#348fe2"],
        //labelColor:"rgba(255,255,255,0.4)",
        //backgroundColor:"#242a30"
	});
})







































