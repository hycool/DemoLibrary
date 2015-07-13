/*
date:2015-02-15
author:hy
description:使用highcharts定义图形报表
*/
/*
@param $obj:向$objDom内插入图表
@param chartObj:和图表相关的配置
description:以下封装仅仅定义了常用的图表展示形式，如果有特殊需要，需要增加下表配置项中的内容。
*/
//全局配置
Highcharts.setOptions({
	lang:{
		shortMonths:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
		months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
		weekdays:["周日","周一","周二","周三","周四","周五","周六"],
		downloadJPEG:"导出为JPEG",
		downloadPDF:"导出为PDF",
		downloadPNG:"导出为PNG",
		downloadSVG:"导出为SVG",
		printChart:"打印图表",
	},
});

//绘图选项
function showChart($obj,chartObj){
	/*定义options对象*/
	var options={};
	/*具体配置*/
	/*configuration：配置图表基本配置项*/
	options.chart={
		inverted:chartObj.chartInverted==undefined?false:chartObj.chartInverted,	//是否将x和y轴反转显示
		polar:chartObj.chartPolar==undefined?false:chartObj.chartPolar,
		type:chartObj.chartType==undefined?"spline":chartObj.chartType, 	//图表类型
		options3d:chartObj.chartOptions3d==undefined?{enabled:true,alpha:45,beta:0}:chartObj.chartOptions3d, 	//3d配置选项
		width:chartObj.chartWidth==undefined?undefined:chartObj.chartWidth, 	//图表宽度
		zoomType:chartObj.chartZoomType==undefined?undefined:chartObj.chartZoomType, 	//指定图表沿着某个轴进行放大
		resetZoomButton:chartObj.chartResetZoomButton==undefined?undefined:chartObj.chartResetZoomButton	//此按钮出现在缩放之后，允许用户进行缩放重置
	};
	
	/*configuration：配置图表版权信息。默认情况下，highcharts图表的右下方会放置一个包含链接的版权信息。*/
	options.credits=(chartObj.credits==undefined?{enabled:false}:chartObj.credits);
	
	/*configuration:配置图表图例容器项。*/
	options.legend={
		enabled:chartObj.legendEnabled==undefined?true:false,
		title:chartObj.legendTitle==undefined?{text:'<span style="font-size:11px; color: #666; font-weight: normal;text-align:center">(点击可隐藏)</span>',style:{fontStyle:"italic"}}:chartObj.legendTitle,
		rtl:chartObj.legendRtl==undefined?false:true,
		borderWidth:chartObj.legendBorderWidth==undefined?undefined:chartObj.legendBorderWidth,		//图例容器边框宽度
		borderColor:chartObj.legendBorderColor==undefined?undefined:chartObj.legendBorderColor,		//图例容器边框颜色
		borderRadius:chartObj.legendBorderRadius==undefined?5:chartObj.legendBorderRadius,		//图例容器边框圆角
		//这里如果定义背景色，那么在主题文件中就无法定义legendBackgroundColor
		//backgroundColor:chartObj.legendBackgroundColor==undefined?"":chartObj.legendBackgroundColor,//图例背景色
		shadow:chartObj.legendShadow==undefined?false:chartObj.legendShadow,
		align:chartObj.legendAlign==undefined?"right":chartObj.legendAlign,		//水平对齐
		verticalAlign:chartObj.legendVerticalAlign==undefined?"middle":chartObj.legendVerticalAlign,		//垂直对齐
		layout:chartObj.legendLayout==undefined?"vertical":chartObj.legendLayout,		//图例数据项的布局
		floating:chartObj.legendFloating==undefined?false:chartObj.legendFloating
		
	};
	
	/*configuration：配置每个数据列的包裹对象*/
	options.plotOptions={
		series:chartObj.plotOptionsSeries==undefined?{marker:{enabled:false},borderRadius:5}:chartObj.plotOptionsSeries,
		//当不指明柱状图展示类型的时候，默认置为stracking=normal,为柱状叠堆图
		column:chartObj.plotOptionsColumn==undefined?{stacking:"normal",borderRadius:4}:chartObj.plotOptionsColumn,
		bar:chartObj.plotOptionsBar==undefined?{stacking:"normal",borderRadius:4}:chartObj.plotOptionsBar,
		pie:chartObj.plotOptionsPie==undefined?{
			    innerSize:chartObj.plotOptionsPieInnersize==undefined?0:chartObj.plotOptionsPieInnersize,		//双饼图的配置
				allowPointSelect:true,
			    cursor:"pointer",
				depth:45,
				dataLabels:{
					useHTML:true,
					enabled:true,
					//format:"{point.name}",	//format和formatter只能同时使用一个
					formatter:function(){
					    if(Highcharts.normal){//theme:noraml
							return "<div style='font-family:Microsoft YaHei;letter-space:3px;text-align:center;cursor:pointer;text-shadow:rgb(0,0,0) 0px 0px 6px, rgb(0,0,0) 0px 0px 3px;'>"+
						       this.point.name+
							   "<br/>"+
							   " ( "+this.percentage.toFixed(2)+" % )"+
							   "</div>";
						}else{//theme:inverse
							return "<div style='font-family:Microsoft YaHei;letter-space:3px;text-align:center;cursor:pointer;text-shadow:rgb(255,255,255) 0px 0px 6px, rgb(0,0,0) 0px 0px 3px;'>"+
						       this.point.name+
							   "<br/>"+
							   " ( "+this.percentage.toFixed(2)+" % )"+
							   "</div>";
						}
					},
					
				},
				showInLegend:true,
			}:chartObj.plotOptionsPie
	};
	
	/*configuration：配置展示数据*/
	options.series=chartObj.series==undefined?null:chartObj.series;
	
	/*configuration：配置副标题*/
	options.subtitle={
		useHTML:chartObj.subtitleUseHTML==undefined?true:chartObj.subtitleUseHTML,
		text:chartObj.subtitleText==undefined?"":chartObj.subtitleText, 	//副标题内容
		align:chartObj.subtitleAlign==undefined?"center":chartObj.subtitleAlign
	};
	
	/*configuration：配置主标题*/
	options.title={
		useHTML:chartObj.titleUseHTML==undefined?true:chartObj.titleUseHTML,
		text:chartObj.titleText==undefined?"":chartObj.titleText,
		align:chartObj.titleAlign==undefined?"center":chartObj.titleAlign
	};
	
	/*configuration：配置提示信息*/
	options.tooltip={
		headerFormat:chartObj.tooltipHeaderFormat==undefined?"<span style='font-size: 10px'>{point.key}</span><br/>":chartObj.tooltipHeaderFormat,
		pointFormat:chartObj.tooltipPointFormat==undefined?"<span style='color:{series.color}'>\u25CF</span> {series.name}: <b>{point.y}</b><br/>":chartObj.tooltipPointFormat,
		footerFormat:chartObj.tooltipFooterFormat==undefined?"":chartObj.tooltipFooterFormat,
		valueSuffix:chartObj.tooltipValueSuffix==undefined?"":chartObj.tooltipValueSuffix,		//y轴值的后缀
		valuePrefix:chartObj.tooltipValuePrefix==undefined?"":chartObj.tooltipValuePrefix,		//y轴值的前缀
		valueDecimals:chartObj.tooltipValueDecimals==undefined?0:chartObj.tooltipValueDecimals,		//y轴值保留几位小数
		formatter:chartObj.tooltipFormatter==undefined?null:chartObj.tooltipFormatter,
		//当提示框被共享时，整个绘图区都将捕捉鼠标指针的移动。提示框文本显示有序数据(不包括饼图，散点图和标志图(flag)等)的系列类型将被显示在单一的气泡中。推荐在单一系列的图表和平板/手机优化的图表中使用。
		shared:chartObj.tooltipShared==undefined?false:chartObj.tooltipShared,
		crosshairs:chartObj.tooltipCrosshairs==undefined?null:chartObj.tooltipCrosshairs,
		useHTML:chartObj.tooltipUseHTML==undefined?false:chartObj.tooltipUseHTML,
	};
	
	/*configuration：配置坐标轴x轴*/
	options.xAxis={
		type:chartObj.xAxisType==undefined?"linear":chartObj.xAxisType,
		categories:chartObj.xAxisCategories==undefined?null:chartObj.xAxisCategories,
		minTickInterval:chartObj.xAxisMinTickInterval==undefined?undefined:chartObj.xAxisMinTickInterval,
		tickmarkPlacement:chartObj.xAxisTickmarkPlacement==undefined?"on":chartObj.xAxisTickmarkPlacement,
		labels:chartObj.xAxisLabels==undefined?new Object():chartObj.xAxisLabels
	};
	
	/*configuration：配置坐标轴y轴*/
	options.yAxis={
		title:chartObj.yAxisTitle==undefined?"":chartObj.yAxisTitle,
		min:chartObj.yAxisMin==undefined?undefined:chartObj.yAxisMin,
		tickInterval:chartObj.yAxisTickInterval==undefined?undefined:chartObj.yAxisTickInterval,
		alternateGridColor:chartObj.yAxisAlternateGridColor==undefined?undefined:chartObj.yAxisAlternateGridColor,	//相间的网格行颜色。当设置了此属性，网格中会隔行显示该颜色；
		gridLineWidth:chartObj.yAxisGridLineWidth==undefined?1:chartObj.yAxisGridLineWidth,		//y轴刻度线宽度
		minorGridLineWidth:chartObj.yAxisMinorGridLineWidth==undefined?1:chartObj.yAxisMinorGridLineWidth,		//y轴次级刻度线宽度
		minorGridLineColor:chartObj.yAxisMinorGridLineColor==undefined?"#C5EEFA":chartObj.yAxisMinorGridLineColor,		//y轴次级刻度线颜色定义
        minorTickInterval:chartObj.yAxisMinorTickInterval==undefined?undefined:chartObj.yAxisMinorTickInterval,		//次刻度线的间隔。在一个直线轴中，如果设置为"auto"，次刻度间隔计算为刻度线间隔的五分之一。如果设置为null，次刻度刻度线不显示。
		plotBands:chartObj.yAxisPlotBands==undefined?undefined:chartObj.yAxisPlotBands,		//在Y轴上的由数组对象定义成的区域带
		labels:chartObj.yAxisLabels==undefined?new Object():chartObj.yAxisLabels
	};
	
	/*configuration:配置多个Y坐标轴,一般指两个时,需要自定义yAxis*/
	chartObj.yAxis==undefined?"":options.yAxis=chartObj.yAxis;
	/*configuration:*/
	//options.colors=chartObj.colors;
	/*configuration:*/
	//options.drilldown=chartObj.drilldown;
	/*configuration:*/
	//options.exporting=chartObj.exporting;
	/*configuration:*/
	//options.labels=chartObj.labels;
	/*configuration:*/
	//options.loading=chartObj.loading;
	/*configuration:*/
	//options.navigation=chartObj.navigation;
	/*configuration:*/
	//options.noDate=chartObj.noDate;
	/*configuration:*/
	//options.pane=chartObj.pane;

    //判断如何不是饼图，将options3d置为空
	if(options.chart.type!="pie"&&chartObj.chartOptions3d==undefined){options.chart.options3d={};};
	//生成图表
	$($obj).highcharts(options);
}

