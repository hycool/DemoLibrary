// JavaScript Document
var demoDataArea=[{
            name: '南京',
            data: [null, null, null, null, null, 6 , 11, 32, 110, 235, 369, 640,1005, 1436,
            		2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,27387, 29459, 31056, 31982,
            		32040, 31233, 29224, 27342, 26662,26956, 27912, 28999, 28965, 27826, 25579,
            		25722, 24826, 24605,24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344,
            		23586,22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104 
            ]
        }, {
            name: '北京/上海',
            data: [null, null, null, null, null, null, null , null , null ,null,5, 25, 50,
            	120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,4238, 5221, 6129,
            	7089, 8339, 9399, 10538, 11643, 13092, 14478,15915, 17385, 19055, 21205,
            	23044, 25393, 27935, 30062, 32049,33952, 35804, 37431, 39197, 45000, 43000,
            	41000, 39000, 37000,35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000,
            	22000,21000, 20000, 19000, 18000, 18000, 17000, 16000
            ]
        }]

//spline chart
var areaObj={
	    chartType: "areaspline",	//设置图表类型
		titleText: "<span style='font-family:Microsoft YaHei;'>主标题：区域面积图</span>",
		subtitleText: "<span style='font-family:Microsoft YaHei;'>副标题：区域面积图</span>",
		//自定义X轴内容
		//xAxisCategories: ["一月", "二月", "三月", "四月", "五月", "六月","七月", "八月", "九月", "十月", "十一月", "十二月"],
		//当X轴为时间
		xAxisType: "datetime",
		yAxisTitle:{
			text: "访问量"
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
		series: demoDataArea,
		//yAxisGridLineWidth:0,		//设置y轴刻度线的宽度，默认为1
		//yAxisMinorTickInterval:"auto",	//次刻度线的间隔。在一个直线轴中，如果设置为"auto"，次刻度间隔计算为刻度线间隔的五分之一。如果设置为null，次刻度刻度线不显示。
		//yAxisMin: 0,		//y轴刻度线的最小值，不设置会自动计算
		//yAxisTickInterval: 10,		//y轴每条刻度线间隔的最小值，不设置会自动计算
		//在Y轴上的由数组对象定义成的区域带
		
		yAxisPlotBands:[{
			from: 0,
            to: 10000,
            color: "rgba(68, 170, 213, 0.1)",
            label: {
                text: "第一级别",
                style: {
                    color: "#606060"
                }
            }
		},{
			from: 10000,
            to: 20000,
            color: "rgba(0, 0, 0, 0)",
            label: {
                text: "第二级别",
                style: {
                    color: "#606060"
                }
            }
		},{
			from: 20000,
            to: 30000,
            color: "rgba(68, 170, 213, 0.1)",
            label: {
                text: "第三级别",
                style: {
                    color: "#606060"
                }
            }
		},{
			from: 30000,
            to: 45000,
            color: "rgba(0, 0, 0, 0)",
            label: {
                text: "第四级别",
                style: {
                    color: "#606060"
                }
            }
		}],
		
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
showChart($("#area"),areaObj);
