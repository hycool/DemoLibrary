// JavaScript Document
var demoDataSpline=[{
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
        }]
//spline chart
var splineObj={
	    chartType: "spline",	//设置图表类型
		titleText: "<span style='font-family:Microsoft YaHei;'>主标题：平滑无标记曲线演示</span>",
		subtitleText: "<span style='font-family:Microsoft YaHei;'>副标题：平滑无标记曲线演示</span>",
		//自定义X轴内容
		//xAxisCategories: ["一月", "二月", "三月", "四月", "五月", "六月","七月", "八月", "九月", "十月", "十一月", "十二月"],
		//当X轴为时间
		xAxisType: "datetime",
		yAxisTitle:{
			text: "访问量 ( 万 )"
		},
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
		series: demoDataSpline,
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
showChart($("#spline"),splineObj);
