// JavaScript Document
var demoDataPie=[{
	name: '访问浏览器',
    data: [ 
	        /*默认选中的配置*/
            {
                name: 'Chrome',
                y: 12.8,
                sliced: true,
                selected: true
            },
            ['Firefox',   26.0],
            ['IE',       45.8],
            ['Safari',    8.5],
            ['Opera',     6.2],
            ['Others',   0.7]
        ]
	}];


//spline pie
var pie1Obj={
	    chartType: "pie",	//设置图表类型
		titleText: "<span style='font-family:Microsoft YaHei;'>主标题：普通3D饼图</span>",
		subtitleText: "<span style='font-family:Microsoft YaHei;'>副标题：普通3D饼图</span>",
		//设置数据序列各项配置属性
		series: demoDataPie,
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
var pie2Obj={
	    chartType: "pie",	//设置图表类型
		titleText: "<span style='font-family:Microsoft YaHei;'>主标题：3D圆环饼图</span>",
		subtitleText: "<span style='font-family:Microsoft YaHei;'>副标题：3D圆环饼图</span>",
		//以双饼图形式展示，数值可以是一个整数例如400，也可是一个字符串百分比，例如“50%”
		plotOptionsPieInnersize:"50%",
		//设置数据序列各项配置属性
		series: demoDataPie,
		
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
showChart($("#pie1"),pie1Obj);
showChart($("#pie2"),pie2Obj);
