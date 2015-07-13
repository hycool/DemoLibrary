/**
 * date:2015-06-30
 * description:theme for Highcharts JS
 * author:hy
 */
Highcharts.normal = {
	colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
		"#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
	chart: {
		//背景色渐变色
		/*
		backgroundColor: {
			linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
			stops: [
				[0, '#fff'],	//渐变色起始颜色
				[1, '#fff']		//渐变色结束颜色
			]
		},
		*/
		//背景色纯色
		backgroundColor:"#fff",
		style: {
			fontFamily: "'Microsof YaHei','Unica One', sans-serif"
		},
		plotBorderColor: '#606063'
	},
	title: {
		style: {
			color: 'rgba(0,102,153,1)',
			textTransform: 'uppercase',
			fontSize: '20px'
		}
	},
	subtitle: {
		style: {
			color: 'rgba(0,102,153,1)',
			textTransform: 'uppercase'
		}
	},
	xAxis: {
		gridLineColor: '#c0d0e0',
		labels: {
			style: {
				color: '#888',
	            fontWeight: 'bold'
			}
		},
		lineColor: '#c0d0e0',
		minorGridLineColor: '#505053',
		tickColor: '#c0d0e0',
		title: {
			style: {
				color: '#A0A0A3'

			}
		}
	},
	yAxis: {
		gridLineColor: '#c0d0e0',
		labels: {
			style: {
				color: '#888',
	            fontWeight: 'bold'
			}
		},
		lineColor: '#c0d0e0',
		minorGridLineColor: '#505053',
		tickColor: '#c0d0e0',
		tickWidth: 1,
		title: {
			style: {
				color: '#A0A0A3'
			}
		}
	},
	tooltip: {
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		style: {
			color: '#ccc'
		},
		borderColor:'rgba(0, 0, 0, 0.4)',
		borderRadius:10,
	},
	plotOptions: {
		series: {
			dataLabels: {
				color: '#B0B0B3'
			},
			marker: {
				lineColor: '#333'
			}
		},
		column:{
			borderWidth:0,
			borderRadius:4,
		},
		columnrange:{
			borderWidth:0,
			borderRadius:4,
		},
		bar:{
			borderWidth:0,
			borderRadius:4,
		},
		boxplot: {
			fillColor: '#505053'
		},
		candlestick: {
			lineColor: 'white'
		},
		errorbar: {
			color: 'white'
		}
	},
	legend: {
		backgroundColor:'rgba(0,0,0,0.4)',
		itemStyle: {
			color: '#E0E0E3'
		},
		itemHoverStyle: {
			color: '#006699'
		},
		itemHiddenStyle: {
			color: '#606063'
		}
	},
	credits: {
		style: {
			color: '#666'
		}
	},
	labels: {
		style: {
			color: '#707073'
		}
	},
	drilldown: {
		activeAxisLabelStyle: {
			color: '#F0F0F3'
		},
		activeDataLabelStyle: {
			color: '#F0F0F3'
		}
	},

	navigation: {
		buttonOptions: {
			symbolStroke: '#DDDDDD',
			theme: {
				fill: '#505053'
			}
		}
	},
	// scroll charts
	rangeSelector: {
		buttonTheme: {
			fill: '#505053',
			stroke: '#000000',
			style: {
				color: '#CCC'
			},
			states: {
				hover: {
					fill: '#707073',
					stroke: '#000000',
					style: {
						color: 'white'
					}
				},
				select: {
					fill: '#000003',
					stroke: '#000000',
					style: {
						color: 'white'
					}
				}
			}
		},
		inputBoxBorderColor: '#505053',
		inputStyle: {
			backgroundColor: '#333',
			color: 'silver'
		},
		labelStyle: {
			color: 'silver'
		}
	},
	navigator: {
		handles: {
			backgroundColor: '#666',
			borderColor: '#AAA'
		},
		outlineColor: '#CCC',
		maskFill: 'rgba(255,255,255,0.1)',
		series: {
			color: '#7798BF',
			lineColor: '#A6C7ED'
		},
		xAxis: {
			gridLineColor: '#505053'
		}
	},
	scrollbar: {
		barBackgroundColor: '#808083',
		barBorderColor: '#808083',
		buttonArrowColor: '#CCC',
		buttonBackgroundColor: '#606063',
		buttonBorderColor: '#606063',
		rifleColor: '#FFF',
		trackBackgroundColor: '#404043',
		trackBorderColor: '#404043'
	},
	// special colors for some of the
	legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
	background2: '#505053',
	dataLabelsColor: '#B0B0B3',
	textColor: '#C0C0C0',
	contrastTextColor: '#F0F0F3',
	maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.normal);
