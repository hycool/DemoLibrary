// JavaScript Document
var demoDataColumn1=[{
            name: '南京',
            data: [25,30,35,38,35,30,26,30,35,38,35,30]
        }, {
            name: '北京',
            data: [30,35,40,43,40,35,31,35,40,43,40,35]
        }, {
            name: '上海',
            data: [35,40,45,48,45,40,36,40,45,48,45,40]
        }, {
            name: '广东',
            data: [40,45,50,53,50,45,41,45,50,53,50,45]
        }];
//用于分组柱状图
var demoDataColumn2=[{
            name: '南京',
            data: [25,30,35,38,35,30,26,30,35,38,35,30],
			stack:"stack1",
        }, {
            name: '北京',
            data: [30,35,40,43,40,35,31,35,40,43,40,35],
			stack:"stack1",
        }, {
            name: '上海',
            data: [35,40,45,48,45,40,36,40,45,48,45,40],
			stack:"stack2",
        }, {
            name: '广东',
            data: [40,45,50,53,50,45,41,45,50,53,50,45],
			stack:"stack2",
        }];
//column chart
var column1Obj={
	    chartType: "column",	//设置图表类型
		titleText: "<span style='font-family:Microsoft YaHei;'>主标题：普通柱状图</span>",
		subtitleText: "<span style='font-family:Microsoft YaHei;'>副标题：普通柱状图</span>",
		//自定义X轴内容
		//xAxisCategories: ["一月", "二月", "三月", "四月", "五月", "六月","七月", "八月", "九月", "十月", "十一月", "十二月"],
		//当X轴为时间
		xAxisType: "datetime",
		yAxisTitle:{
			text: "访问量 ( 万 )"
		},
		//设置数据序列各项通用配置属性
		plotOptionsSeries: {
			 pointStart: Date.UTC(2015, 6, 26),		//X轴坐标起始时间
             pointInterval: 3600 * 1000, 		//X轴每两点之间的间隔
	    },
		//自定义的tooptip的一种表现形式，后期可自定义为其他表现形式
		tooltipHeaderFormat: "<span style='font-size:10px'>{point.key}</span><br />",
        tooltipPointFormat: "<span style='color:{series.color}'>{series.name}: </span>" +"<span><b>{point.y:.1f} </b></span><br />",
		tooltipShared:true,
		tooltipUseHTML:true,
		//数据series
		series: demoDataColumn1,
		//yAxisGridLineWidth:0,		//设置y轴刻度线的宽度，默认为1
		//yAxisMinorTickInterval:"auto",	//次刻度线的间隔。在一个直线轴中，如果设置为"auto"，次刻度间隔计算为刻度线间隔的五分之一。如果设置为null，次刻度刻度线不显示。
		//yAxisMin: 0,		//y轴刻度线的最小值，不设置会自动计算
		//yAxisTickInterval: 10,		//y轴每条刻度线间隔的最小值，不设置会自动计算
		//设置版权说明
		/*
		credits: {
			enabled: true,
			href: "http://www.baidu.com",	//会在当前页面进行跳转
			text: "shepherd.com",
			position: {
				//所有可配置选项的默认值
				align: "right",
				verticalAlign: "bottom",
				x: -10,
				y: -5
			},
			style: {
				//所有可配置选项的默认值
				cursor: "pointer",
	            color: "#909090",
	            fontSize: "10px"
			},
		},	
		*/
	};

var column2Obj={
	    chartType: "column",	//设置图表类型
		titleText: "<span style='font-family:Microsoft YaHei;'>主标题：分组柱状图</span>",
		subtitleText: "<span style='font-family:Microsoft YaHei;'>副标题：分组柱状图</span>",
		//自定义X轴内容
		//xAxisCategories: ["一月", "二月", "三月", "四月", "五月", "六月","七月", "八月", "九月", "十月", "十一月", "十二月"],
		//当X轴为时间
		xAxisType: "datetime",
		yAxisTitle:{
			text: "访问量 ( 万 )"
		},
		//设置数据序列各项通用配置属性
		plotOptionsSeries: {
			 pointStart: Date.UTC(2015, 6, 26),		//X轴坐标起始时间
             pointInterval: 3600 * 1000, 		//X轴每两点之间的间隔
	    },
		//自定义的tooptip的一种表现形式，后期可自定义为其他表现形式
		tooltipHeaderFormat: "<span style='font-size:10px'>{point.key}</span><br />",
        tooltipPointFormat: "<span style='color:{series.color}'>{series.name}: </span>" +"<span><b>{point.y:.1f} </b></span><br />",
		tooltipShared:true,
		tooltipUseHTML:true,
		//数据series
		series: demoDataColumn2,
		//yAxisGridLineWidth:0,		//设置y轴刻度线的宽度，默认为1
		//yAxisMinorTickInterval:"auto",	//次刻度线的间隔。在一个直线轴中，如果设置为"auto"，次刻度间隔计算为刻度线间隔的五分之一。如果设置为null，次刻度刻度线不显示。
		//yAxisMin: 0,		//y轴刻度线的最小值，不设置会自动计算
		//yAxisTickInterval: 10,		//y轴每条刻度线间隔的最小值，不设置会自动计算
		//设置版权说明
		/*
		credits: {
			enabled: true,
			href: "http://www.baidu.com",	//会在当前页面进行跳转
			text: "shepherd.com",
			position: {
				//所有可配置选项的默认值
				align: "right",
				verticalAlign: "bottom",
				x: -10,
				y: -5
			},
			style: {
				//所有可配置选项的默认值
				cursor: "pointer",
	            color: "#909090",
	            fontSize: "10px"
			},
		},	
		*/
	};
//百分比柱状图
var column3Obj={
	    chartType: "column",	//设置图表类型
		titleText: "<span style='font-family:Microsoft YaHei;'>主标题：百分比柱状图</span>",
		subtitleText: "<span style='font-family:Microsoft YaHei;'>副标题：百分比柱状图</span>",
		//自定义X轴内容
		//xAxisCategories: ["一月", "二月", "三月", "四月", "五月", "六月","七月", "八月", "九月", "十月", "十一月", "十二月"],
		//当X轴为时间
		xAxisType: "datetime",
		yAxisTitle:{
			text: "访问量 ( 万 )"
		},
		//设置数据序列各项通用配置属性
		plotOptionsSeries: {
			 pointStart: Date.UTC(2015, 6, 26),		//X轴坐标起始时间
             pointInterval: 3600 * 1000, 		//X轴每两点之间的间隔
	    },
		plotOptionsColumn:{
			stacking:"percent",	//设置百分比柱状图，需要将stacking置为percent
			//设置分组柱状图的数据显示形式
			dataLabels:{
				enabled:true,
				formatter:function(){
					return this.percentage.toFixed(1)+'%';	//保留一位小数
				}
			}
		},
		//自定义的tooptip的一种表现形式，后期可自定义为其他表现形式
		tooltipHeaderFormat: "<span style='font-size:10px'>{point.key}</span><br />",
        tooltipPointFormat: "<span style='color:{series.color}'>{series.name}: </span>" +"<span><b>{point.y:.1f} </b></span><br />",
		tooltipShared:true,
		tooltipUseHTML:true,
		//数据series
		series: demoDataColumn1,
		//yAxisGridLineWidth:0,		//设置y轴刻度线的宽度，默认为1
		//yAxisMinorTickInterval:"auto",	//次刻度线的间隔。在一个直线轴中，如果设置为"auto"，次刻度间隔计算为刻度线间隔的五分之一。如果设置为null，次刻度刻度线不显示。
		//yAxisMin: 0,		//y轴刻度线的最小值，不设置会自动计算
		//yAxisTickInterval: 10,		//y轴每条刻度线间隔的最小值，不设置会自动计算
		//设置版权说明
		/*
		credits: {
			enabled: true,
			href: "http://www.baidu.com",	//会在当前页面进行跳转
			text: "shepherd.com",
			position: {
				//所有可配置选项的默认值
				align: "right",
				verticalAlign: "bottom",
				x: -10,
				y: -5
			},
			style: {
				//所有可配置选项的默认值
				cursor: "pointer",
	            color: "#909090",
	            fontSize: "10px"
			},
		},	
		*/
	};
	
//条形柱状图
var column4Obj={
	    chartType: "bar",	//设置图表类型
		titleText: "<span style='font-family:Microsoft YaHei;'>主标题：条形柱状图</span>",
		subtitleText: "<span style='font-family:Microsoft YaHei;'>副标题：条形柱状图</span>",
		//自定义X轴内容
		//xAxisCategories: ["一月", "二月", "三月", "四月", "五月", "六月","七月", "八月", "九月", "十月", "十一月", "十二月"],
		//当X轴为时间
		xAxisType: "datetime",
		yAxisTitle:{
			text: "访问量 ( 万 )"
		},
		//设置数据序列各项通用配置属性
		plotOptionsSeries: {
			 pointStart: Date.UTC(2015, 6, 26),		//X轴坐标起始时间
             pointInterval: 3600 * 1000, 		//X轴每两点之间的间隔,
	    },
		plotOptionsBar:{
			stacking:"percent",
			//设置分组柱状图的数据显示形式
			dataLabels:{
				enabled:true,
				formatter:function(){
					return this.percentage.toFixed(1)+'%';	//保留一位小数
				}
			}
		},
		//自定义的tooptip的一种表现形式，后期可自定义为其他表现形式
		tooltipHeaderFormat: "<span style='font-size:10px'>{point.key}</span><br />",
        tooltipPointFormat: "<span style='color:{series.color}'>{series.name}: </span>" +"<span><b>{point.y:.1f} </b></span><br />",
		tooltipShared:true,
		tooltipUseHTML:true,
		//数据series
		series: demoDataColumn1,
		//yAxisGridLineWidth:0,		//设置y轴刻度线的宽度，默认为1
		//yAxisMinorTickInterval:"auto",	//次刻度线的间隔。在一个直线轴中，如果设置为"auto"，次刻度间隔计算为刻度线间隔的五分之一。如果设置为null，次刻度刻度线不显示。
		//yAxisMin: 0,		//y轴刻度线的最小值，不设置会自动计算
		//yAxisTickInterval: 10,		//y轴每条刻度线间隔的最小值，不设置会自动计算
		//设置版权说明
		/*
		credits: {
			enabled: true,
			href: "http://www.baidu.com",	//会在当前页面进行跳转
			text: "shepherd.com",
			position: {
				//所有可配置选项的默认值
				align: "right",
				verticalAlign: "bottom",
				x: -10,
				y: -5
			},
			style: {
				//所有可配置选项的默认值
				cursor: "pointer",
	            color: "#909090",
	            fontSize: "10px"
			},
		},	
		*/
	};
showChart($("#column1"),column1Obj);
showChart($("#column2"),column2Obj);
showChart($("#column-percent"),column3Obj);
showChart($("#bar"),column4Obj);
