// JavaScript Document
var demoDataRange=[
    {
	name:"Visitor Age",
	data:[
      [15,27],[17,23],[16,24],[14,20],[19,28],[15,22],[12,20],[13,21],[15,27],[17,23],[16,24],[14,20],[19,28],[15,22],[12,20],[13,21],
	  [15,27],[17,23],[16,24],[14,20],[19,28],[15,22],[12,20],[13,21],[15,27],[17,23],[16,24],[14,20],[19,28],[15,22],[12,20],[13,21],
	  [15,27],[17,23],[16,24],[14,20],[19,28],[15,22],[12,20],[13,21],[15,27],[17,23],[16,24],[14,20],[19,28],[15,22],[12,20],[13,21],
	  [15,27],[17,23],[16,24],[14,20],[19,28],[15,22],[12,20],[13,21],[15,27],[17,23],[16,24],[14,20],[19,28],[15,22],[12,20],[13,21],
	  [15,27],[17,23],[16,24],[14,20],[19,28],[15,22],[12,20],[13,21],[15,27],[17,23],[16,24],[14,20],[19,28],[15,22],[12,20],[13,21],
	  [15,27],[17,23],[16,24],[14,20],[19,28],[15,22],[12,20],[13,21],[15,27],[17,23],[16,24],[14,20],[19,28],[15,22],[12,20],[13,21],
	  [15,27],[17,23],[16,24],[14,20],[19,28],[15,22],[12,20],[13,21],[15,27],[17,23],[16,24],[14,20],[19,28],[15,22],[12,20],[13,21],
	  [15,27],[17,23],[16,24],[14,20],[19,28],[15,22],[12,20],[13,21],[15,27],[17,23],[16,24],[14,20],[19,28],[15,22],[12,20],[13,21],
	]
	}
];
var demoDataRange2=[
    {
	name:"Visitor Age",
	data:[
      [15,27],[10,23],[13,24],[14,20],[17,28],[15,22],[12,20],[13,21],
	]
	}
];

//arearange chart
var arearangeObj={
	    chartType: "arearange",	//设置图表类型
		chartZoomType:"x",
		titleText: "<span style='font-family:Microsoft YaHei;'>主标题：区域区间范围图</span>",
		subtitleText: "<span style='font-family:Microsoft YaHei;'>副标题：区域区间范围图</span>",
		//自定义X轴内容
		//xAxisCategories: ["一月", "二月", "三月", "四月", "五月", "六月","七月", "八月", "九月", "十月", "十一月", "十二月"],
		//当X轴为时间
		xAxisType: "datetime",
		yAxisTitle:{
			text: "访问者年龄"
		},
		tooltipCrosshairs:true,
		tooltipShared:true,
		tooltipValueSuffix:"(岁)",
		//当使用arearange时，pointFormat应该按照如下配置，或者其他自定义样式，默认样式详见highcharts-more.js
		tooltipPointFormat:"<span style='color:{series.color}'>\u25CF</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>",
		//设置数据序列各项配置属性
		plotOptionsSeries: {
			 //为了美观效果，可以自定义以下lineWidth 和states
			 //lineWidth: 2,	//数据曲线条宽度
			 states: {
				 hover: {
					 enabled:true,
					 //halo:{},
					 //lineWidth:2,		//设置hover时的曲线宽度
					 //lineWidthPlus:1,		//设置hover时，曲线宽度在原lineWidth的基础上增加的宽度，如果设置了lineWidth，则lineWidthPlus会失效
					 //marker:{},
				 }
			 },
			 pointStart: Date.UTC(2015, 6, 26),		//X轴坐标起始时间
             pointInterval: 3600 * 1000, 		//X轴每两点之间的间隔
			 marker:{
				 enabled: false,	//设置曲线上的marker标记是否可见
			 }
	    },
		series: demoDataRange,
		//yAxisGridLineWidth:0,		//设置y轴刻度线的宽度，默认为1
		//yAxisMinorTickInterval:"auto",	//次刻度线的间隔。在一个直线轴中，如果设置为"auto"，次刻度间隔计算为刻度线间隔的五分之一。如果设置为null，次刻度刻度线不显示。
		//yAxisMin: 0,		//y轴刻度线的最小值，不设置会自动计算
		//yAxisTickInterval: 10,		//y轴每条刻度线间隔的最小值，不设置会自动计算
		//在Y轴上的由数组对象定义成的区域带
		/*
		yAxisPlotBands:[{
			from: 25,
            to: 30,
            color: "rgba(68, 170, 213, 0.1)",
            label: {
                text: "第一级别",
                style: {
                    color: "#606060"
                }
            }
		},{
			from: 30,
            to: 35,
            color: "rgba(0, 0, 0, 0)",
            label: {
                text: "第二级别",
                style: {
                    color: "#606060"
                }
            }
		},{
			from: 35,
            to: 40,
            color: "rgba(68, 170, 213, 0.1)",
            label: {
                text: "第三级别",
                style: {
                    color: "#606060"
                }
            }
		},{
			from: 40,
            to: 50,
            color: "rgba(0, 0, 0, 0)",
            label: {
                text: "第四级别",
                style: {
                    color: "#606060"
                }
            }
		}],
		*/
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
	
//column chart
var columnrangeObj={
	    chartType: "columnrange",	//设置图表类型
		chartInverted:true,
		titleText: "<span style='font-family:Microsoft YaHei;'>主标题：柱状范围图</span>",
		subtitleText: "<span style='font-family:Microsoft YaHei;'>副标题：柱状范围图</span>",
		//自定义X轴内容
		//xAxisCategories: ["一月", "二月", "三月", "四月", "五月", "六月","七月", "八月", "九月", "十月", "十一月", "十二月"],
		//当X轴为时间
		xAxisType: "datetime",
		yAxisTitle:{
			text: "访问者年龄"
		},
		tooltipShared:true,
		tooltipValueSuffix:"(岁)",
		//当使用arearange时，pointFormat应该按照如下配置，或者其他自定义样式，默认样式详见highcharts-more.js
		tooltipPointFormat:"<span style='color:{series.color}'>\u25CF</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>",
		//设置数据序列各项配置属性
		plotOptionsSeries: {
			 //为了美观效果，可以自定义以下lineWidth 和states
			 //lineWidth: 2,	//数据曲线条宽度
			 states: {
				 hover: {
					 enabled:true,
					 //halo:{},
					 //lineWidth:2,		//设置hover时的曲线宽度
					 //lineWidthPlus:1,		//设置hover时，曲线宽度在原lineWidth的基础上增加的宽度，如果设置了lineWidth，则lineWidthPlus会失效
					 //marker:{},
				 }
			 },
			 pointStart: Date.UTC(2015, 6, 26),		//X轴坐标起始时间
             pointInterval: 3600 * 1000, 		//X轴每两点之间的间隔
			 marker:{
				 enabled: false,	//设置曲线上的marker标记是否可见
			 }
	    },
		series: demoDataRange2,
		//yAxisGridLineWidth:0,		//设置y轴刻度线的宽度，默认为1
		//yAxisMinorTickInterval:"auto",	//次刻度线的间隔。在一个直线轴中，如果设置为"auto"，次刻度间隔计算为刻度线间隔的五分之一。如果设置为null，次刻度刻度线不显示。
		//yAxisMin: 0,		//y轴刻度线的最小值，不设置会自动计算
		//yAxisTickInterval: 10,		//y轴每条刻度线间隔的最小值，不设置会自动计算
		//在Y轴上的由数组对象定义成的区域带
		/*
		yAxisPlotBands:[{
			from: 25,
            to: 30,
            color: "rgba(68, 170, 213, 0.1)",
            label: {
                text: "第一级别",
                style: {
                    color: "#606060"
                }
            }
		},{
			from: 30,
            to: 35,
            color: "rgba(0, 0, 0, 0)",
            label: {
                text: "第二级别",
                style: {
                    color: "#606060"
                }
            }
		},{
			from: 35,
            to: 40,
            color: "rgba(68, 170, 213, 0.1)",
            label: {
                text: "第三级别",
                style: {
                    color: "#606060"
                }
            }
		},{
			from: 40,
            to: 50,
            color: "rgba(0, 0, 0, 0)",
            label: {
                text: "第四级别",
                style: {
                    color: "#606060"
                }
            }
		}],
		*/
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

showChart($("#arearange"),arearangeObj);
showChart($("#columnrange"),columnrangeObj);







