// JavaScript Document
var dataset=[5,10,15,20,25];
var dataset1=[];

var dataset2=[
[ 5, 20 ],
[ 480, 90 ],
[ 250, 50 ],
[ 100, 33 ],
[ 330, 95 ],
[ 410, 12 ],
[ 475, 44 ],
[ 25, 67 ],
[ 85, 21 ],
[ 220, 88 ],
];

var dataset3=[ 100, 200, 300, 400, 500 ];

for(var i=0;i<25;i++){
	var num=Math.random()*30;
	dataset1.push(num);
}
var maxValue=100;
function randomDataSet(obj,length){
	//随机定义maxValue,25~100.
	maxValue=25+Math.floor(Math.random()*75);
	for(var i=0;i<length;i++){
	    var num=Math.floor(Math.random() * maxValue);
	    obj[i]=num;
    };
	return obj;
};
var dataset4=[];
var numDataPoint=50;
var xRange=Math.random()*1000;
var yRange=Math.random()*1000;
for(var i=0;i<numDataPoint;i++){
	var newNumber1 = Math.floor(Math.random() * xRange);
    var newNumber2 = Math.floor(Math.random() * yRange);
	//console.log("("+newNumber1+","+newNumber2+")");
    dataset4.push([newNumber1, newNumber2]);
}
//d3.select("#d3").append("p").text("Now Paragraph");
//d3.select("#d3").selectAll("p").data(dataset).enter().append("p").text(function(d){return d}).style("color",function(d){return d>=15?"red":"black"});
/*
d3.select("#d3").selectAll("div")
    .data(dataset)
	.enter()
	.append("div")
	.attr("class","bar")
	.style("height",function(d){
		var barHeight=d*5;
		return barHeight+"px"
	});
*/
var h=250,w=1000;
var svg=d3.select("#d3").append("svg");
svg.attr("height",h);
svg.attr("width",w);

var circles=svg.selectAll("circle")
               .data(dataset)
			   .enter()
			   .append("circle");
			   
    circles.attr("cx",function(d,i){
            return (i*50)+25;})
		.attr("cy",h/2)
		.attr("r",function(d){return d;})
		.attr("fill","yellow")
		.attr("stroke","orange")
		.attr("stroke-width",2);
/************************************************************/
h=300;
var xScale1=d3.scale.ordinal()
             .domain(d3.range(dataset1.length))
			 .rangeRoundBands([0,w],0.05)
			 ;
var yScale1=d3.scale.linear()
             .domain([0,d3.max(dataset1)])
			 .range([0,h-20]);
var svg1=d3.select("#d3")
           .append("svg")
		   .attr("height",h)
		   .attr("width",w);
svg1.selectAll("rect")
    .data(dataset1)
	.enter()
	.append("rect")
	.attr({
		x:function(d,i){return xScale1(i);},
		y:function(d,i){
			return h-yScale1(d);
			},
		width:xScale1.rangeBand(),
		height:function(d,i){
			return yScale1(d);
			},
		fill:function(d,i){return "rgba(0,0,"+parseInt(yScale1(d))+",0.65)";}
	})
	;
			  
svg1.selectAll("text")
    .data(dataset1)
	.enter()
	.append("text")
	.text(function(d,i){return parseInt(d);})
	.attr({
		x:function(d,i){return xScale1(i)+xScale1.rangeBand()/2;},
		y:function(d,i){
			return h-yScale1(d)-3;
			},
	})
	.style({
		"font-family":"Microsoft YaHei",
		"font-size":"12px",
		"font-weight":"bold",
		"fill":"#000",
		"text-anchor":"middle",
	});

//设置一个监听按钮，响应动态更新数据，但是数据个数不发生改变
d3.select("#d3").append("div").append("button").attr({class:"btn btn-default"}).text("动态更新数据").on("click",function(){
	dataset1=randomDataSet(dataset1,25);
	yScale1.domain([0,d3.max(dataset1)]);
	svg1.selectAll("rect")
	    .data(dataset1)
		.transition()
		//.delay(1000)
		.delay(function(d,i){return i/dataset1.length*1000;})
		.duration(500)
		.attr({
			y:function(d,i){
			    return h-yScale1(d);
				},
		    width:xScale1.rangeBand(),
			height:function(d,i){
				return yScale1(d)
				},
			fill:function(d,i){return "rgba(0,0,"+parseInt(yScale1(d))+",0.65)";}
		});
    svg1.selectAll("text")
	    .data(dataset1)
		.transition()
		//.delay(1000)
		.delay(function(d,i){return i/dataset1.length*1000;})
		.duration(500)
		.text(function(d,i){return parseInt(d);})
		.attr({
		    y:function(d,i){
				return h-yScale1(d)-3;
				},
	    });
	});
//设置一个监听按钮，响应动态添加一个数据到条形码中
d3.select("#d3").append("div").append("button").attr({class:"btn btn-default"}).text("添加若干个数据数据").on("click",function(){
	var maxValue=100;
	for(var i=0;i<5;i++){
		maxValue=25+Math.floor(Math.random()*75);
		var newNumber=Math.floor(Math.random()*maxValue);
		dataset1.push(newNumber);
	}
	xScale1.domain(d3.range(dataset1.length));
	yScale1.domain([0,d3.max(dataset1)]);
	var bars=svg1.selectAll("rect")
	             .data(dataset1);
	    
	    bars.enter()
		    .append("rect")
			.attr({
				x:w,
				y:function(d){return h-yScale1(d);},
				width:xScale1.rangeBand(),
				height:function(d){return yScale1(d)},
				fill:function(d,i){return "rgba(0,0,"+parseInt(yScale1(d))+",0.65)";}
			});
			
		bars.transition()
		    .duration(500)
			.attr({
				x:function(d,i){return xScale1(i);},
				y:function(d,i){return h-yScale1(d);},
				width:xScale1.rangeBand(),
				height:function(d){return yScale1(d)},
				fill:function(d,i){return "rgba(0,0,"+parseInt(yScale1(d))+",0.65)";}
			});
			
		var text=svg1.selectAll("text")
		             .data(dataset1);
	   
			text.enter()
			    .append("text")
			    .text(function(d,i){return parseInt(d);})
			    .attr({
				    x:w,
				    y:function(d,i){return h-yScale1(d)-3;},
				    })
				.style({
		            "font-family":"Microsoft YaHei",
		            "font-size":"12px",
		            "font-weight":"bold",
		            "fill":"#000",
		            "text-anchor":"middle",
	            });
					
		    text.transition()
		        .duration(500)
		        .attr({
					x:function(d,i){return xScale1(i)+xScale1.rangeBand()/2;},
		            y:function(d,i){
				        return h-yScale1(d)-3;
				    },
	            })
				
		
	});
//删除一个元素
d3.select("#d3").append("div").append("button").attr({class:"btn btn-default"}).text("删除若干元素").on("click",function(){
	dataset1.shift();
	var bars=svg1.selectAll("rect").data(dataset1);
	    bars.exit()
		    .transition()
			.duration(500)
			.attr("x",w)
			.remove();
					
	})
/*************************************************************************/
var svg2=d3.select("#d3").append("svg");
svg2.attr({
	height:h,
	width:w,
	});
svg2.selectAll("circle")
    .data(dataset2)
	.enter()
	.append("circle")
	.attr({
		cx:function(d,i){return d[0]},
		cy:function(d,i){return d[1]},
		r:function(d,i){return Math.sqrt(h-d[1])},
		fill:"teal"
	});
svg2.selectAll("text")
    .data(dataset2)
	.enter()
	.append("text")
	.text(function(d,i){
		return "("+d[0]+","+d[1]+")";
	})
	.attr({
		x:function(d,i){return d[0];},
		y:function(d,i){return d[1];},
		"font-family":"Microsoft YaHei",
		"font-weight":"bold",
		"font-size":"11px",
		fill:"red",
	})

/*******************************************************************/
//比例尺
h=300; //svg会自动缩放里面的内容
var scale=d3.scale.linear();
scale.domain([100,500]);
//设置x轴比例尺
var padding=30;		//边距量
var xScale=d3.scale.linear()
             .domain([0,d3.max(dataset4,function(d){return d[0];})])
			 .range([padding,w-padding]);
//设置y轴比例尺
var yScale=d3.scale.linear()
             .domain([0,d3.max(dataset4,function(d){return d[1];})])
			 .range([h-padding,padding])

var rScale=d3.scale.linear()
             .domain([0,d3.max(dataset4,function(d){return d[1]})])
			 .range([2,5]);
var xAxis=d3.svg.axis()
            .scale(xScale)
			.orient("bottom")
			//.ticks(5)
			;
var yAxis=d3.svg.axis()
            .scale(yScale)
			.orient("left")
			; 
var svg3=d3.select("#d3").append("svg");
svg3.attr({
	height:h,
	width:w,
	});
svg3.selectAll("circle")
    .data(dataset4)
	.enter()
	.append("circle")
	.attr({
		cx:function(d,i){return xScale(d[0]);},
		cy:function(d,i){return yScale(d[1]);},
		r:function(d,i){return rScale(d[1]);},
		fill:"teal"
	});
/*
//添加标签
svg3.selectAll("text")
    .data(dataset4)
	.enter()
	.append("text")
	.text(function(d,i){
		return "("+d[0]+","+d[1]+")";
	})
	.attr({
		x:function(d,i){return xScale(d[0]);},
		y:function(d,i){return yScale(d[1]);},
		"font-family":"Microsoft YaHei",
		"font-weight":"bold",
		"font-size":"11px",
		fill:"red",
	})
*/
svg3.append("g").call(xAxis).attr({
	    class:"axis",
	    transform:"translate(0," + (h - padding) + ")",
    });
svg3.append("g").call(yAxis).attr({
	    class:"axis",
	    transform:"translate("+padding+",0)",
    });

/*****************************************************************************************************/
//通过键链接数据
function generateData(length,maxValue){
	var dataset=[];
	for(var i=0;i<length;i++){
		var tmp=new Object();
		tmp.key=i;
		tmp.value=Math.floor(Math.random()*maxValue);
		dataset.push(tmp);
	}
	return dataset;
}

function updataData(obj,length,maxValue){
	if(obj.length>=length){
		for(var i=0;i<length;i++){
			obj[i].value=Math.floor(Math.random()*maxValue);
		}
	}else{
		for(var i=0;i<obj.length;i++){
			obj[i].value=Math.floor(Math.random()*maxValue);
		}
		for(i=0;i<length-obj.length;i++){
			var tmp=new Object();
			tmp.key=obj.length;
			tmp.value=Math.floor(Math.random()*maxValue);
			obj.push(tmp);
		}
	}
	return obj;
}

function sortBars(){
	svg4.selectAll("rect")
	    .sort(function(a,b){
			/*
			console.log("a=")
			console.log(a);
			console.log("b=")
			console.log(b);
			console.log("***************************")
			*/
			//console.log("a="+a+"\t"+"b="+b+"\t"+"d3.ascending(a,b)="+d3.ascending(a,b))
		    return d3.ascending(a,b);
	    })
	    .transition()
	    .duration(1000)
	    .attr({
		    x:function(d,i){return xScale4(i);},
	    })  
}

function sortTexts(){
	svg4.selectAll("text")
	    .sort(function(a,b){
		    return d3.ascending(a,b);
	    })
	    .transition()
	    .duration(1000)
	    .attr({
		    x:function(d,i){return xScale4(i)+xScale4.rangeBand()/2;},
	    })  
}

var dataset4=generateData(25,100);
var xScale4=d3.scale.ordinal()
              .domain(d3.range(dataset4.length))
			  .rangeRoundBands([0,w],0.05)

var yScale4=d3.scale.linear()
              .domain([0,d3.max(dataset4,function(d){return d.value;})])
			  .range([0,h-20]);
var key=function(d){return d.key};
var svg4=d3.select("#d3").append("svg")
                         .attr({ width:w,height:h});
svg4.selectAll("rect")
	.data(dataset4,key)
	.enter()
	.append("rect")
	.attr({
		x:function(d,i){return xScale4(i);},
	    y:function(d,i){return h-yScale4(d.value);},
		width:xScale4.rangeBand(),
		height:function(d,i){return yScale4(d.value);},
		fill:function(d,i){return "rgba(0,0,"+parseInt(yScale4(d.value))+",0.65)";}
	})
	.on("click",function(d,i){
		//console.log("d="+d.value+"\t i="+(i+1));
		sortBars();
		sortTexts();
	})
	//为rect添加title
	//.append("title")
	//.text(function(d,i){return d.value;})
	;
	/*
	//悬停效果交给css处理，用d3处理过渡效果，容易被后来的过渡效果覆盖前面尚未完成的过渡效果
	.on("mouseover",function(d,i){
		d3.select(this).attr({
			fill:"orange",
		});
	})
	.on("mouseout",function(d,i){
		d3.select(this)
		  .transition()		//关于平滑过渡颜色这块，尚未实现，可能是教程的版本过于老旧
		  .duration(250)
		  .attr({
			fill:function(d,i){return "rgba(0,0,"+parseInt(yScale4(d.value))+",0.65)";},
		  });
	})
	*/

svg4.selectAll("text")
    .data(dataset4,key)
	.enter()
	.append("text")
	.text(function(d,i){return parseInt(d.value);})
	.attr({
		x:function(d,i){return xScale4(i)+xScale4.rangeBand()/2;},
		y:function(d,i){
			return h-yScale4(d.value)-3;
			},
	})
	.style({
		"font-family":"Microsoft YaHei",
		"font-size":"12px",
		"font-weight":"bold",
		"fill":"#000",
		"text-anchor":"middle",
		"pointer-events":"none"
	});

//设置一个监听按钮，响应动态更新数据，但是数据个数不发生改变
d3.select("#d3").append("div").append("button").attr({class:"btn btn-default"}).text("动态更新数据").on("click",function(){
	dataset4=updataData(dataset4,dataset4.length,100)
	yScale4.domain([0,d3.max(dataset4,function(d){return d.value})]);
	svg4.selectAll("rect")
	    .data(dataset4,key)
		.transition()
		//.delay(1000)
		.delay(function(d,i){return i/dataset4.length*1000;})
		.duration(500)
		.attr({
			y:function(d,i){
			    return h-yScale4(d.value);
				},
		    width:xScale4.rangeBand(),
			height:function(d,i){
				return yScale4(d.value)
				},
			fill:function(d,i){return "rgba(0,0,"+parseInt(yScale4(d.value))+",0.65)";}
		});
    svg4.selectAll("text")
	    .data(dataset4,key)
		.transition()
		//.delay(1000)
		.delay(function(d,i){return i/dataset4.length*1000;})
		.duration(500)
		.text(function(d,i){return parseInt(d.value);})
		.attr({
		    y:function(d,i){
				return h-yScale4(d.value)-3;
				},
	    });
	});
//设置一个监听按钮，响应动态添加一个数据到条形码中
d3.select("#d3").append("div").append("button").attr({class:"btn btn-default"}).text("添加若干个数据数据").on("click",function(){
	var maxValue=100;
	for(var i=0;i<5;i++){
		maxValue=25+Math.floor(Math.random()*75);
		var tmp=new Object();
		tmp.key=dataset4.length==0?1:dataset4[dataset4.length-1].key+1;
		tmp.value=Math.floor(Math.random()*maxValue);
		dataset4.push(tmp);
	}
	xScale4.domain(d3.range(dataset4.length));
	yScale4.domain([0,d3.max(dataset4,function(d){return d.value;})]);
	var bars=svg4.selectAll("rect")
	             .data(dataset4,key);
	    
	    bars.enter()
		    .append("rect")
			.attr({
				x:w,
				y:function(d){return h-yScale4(d.value);},
				width:xScale4.rangeBand(),
				height:function(d){return yScale4(d.value)},
				fill:function(d,i){return "rgba(0,0,"+parseInt(yScale4(d.value))+",0.65)";}
			});
			
		bars.transition()
		    .duration(500)
			.attr({
				x:function(d,i){return xScale4(i);},
				y:function(d,i){return h-yScale4(d.value);},
				width:xScale4.rangeBand(),
				height:function(d){return yScale4(d.value)},
				fill:function(d,i){return "rgba(0,0,"+parseInt(yScale4(d.value))+",0.65)";}
			});
			
		var text=svg4.selectAll("text")
		             .data(dataset4,key);
	   
			text.enter()
			    .append("text")
			    .text(function(d,i){return parseInt(d.value);})
			    .attr({
				    x:w,
				    y:function(d,i){return h-yScale4(d.value)-3;},
				    })
				.style({
		            "font-family":"Microsoft YaHei",
		            "font-size":"12px",
		            "font-weight":"bold",
		            "fill":"#000",
		            "text-anchor":"middle",
	            });
					
		    text.transition()
		        .duration(500)
		        .attr({
					x:function(d,i){return xScale4(i)+xScale4.rangeBand()/2;},
		            y:function(d,i){
				        return h-yScale4(d.value)-3;
				    },
	            });
				
		
	});
//删除一个元素
d3.select("#d3").append("div").append("button").attr({class:"btn btn-default"}).text("删除若干元素").on("click",function(){
	for(var i=0;i<5;i++){
		dataset4.shift();
	}
	xScale4.domain(d3.range(dataset4.length));
	yScale4.domain([0,d3.max(dataset4,function(d){return d.value;})]);
	var bars=svg4.selectAll("rect").data(dataset4,key);
	
	   
			
	    bars.exit()
		    .transition()
			.duration(500)
			.attr("x",-xScale4.rangeBand())
			.remove()
			;
	    bars.transition()
		    .duration(500)
			.attr({
				x:function(d,i){return xScale4(i);},
				y:function(d,i){return h-yScale4(d.value);},
				width:xScale4.rangeBand(),
				height:function(d){return yScale4(d.value)},
				fill:function(d,i){return "rgba(0,0,"+parseInt(yScale4(d.value))+",0.65)";}
			});
			
	var text=svg4.selectAll("text").data(dataset4,key);
	
		text.exit()
		    .transition()
			.duration(500)
			.attr("x",-xScale4.rangeBand())
			.remove();
			
		text.transition()
		    .duration(500)
		    .attr({
					x:function(d,i){return xScale4(i)+xScale4.rangeBand()/2;},
		            y:function(d,i){
				        return h-yScale4(d.value)-3;
				    },
	            });
					
	});
/*************************************************************************************************************************************************************************/
/*************************************************************************************************************************************************************************/

//力导向布局
h=500;
var dataset5 = {
		nodes: [
			{ name: "Adam" },
			{ name: "Bob" },
			{ name: "Carrie" },
			{ name: "Donovan" },
			{ name: "Edward" },
			{ name: "Felicity" },
			{ name: "George" },
			{ name: "Hannah" },
			{ name: "Iris" },
			{ name: "Jerry" }
		],
		edges: [
			{ source: 0, target: 1 },
			{ source: 0, target: 2 },
			{ source: 0, target: 3 },
			{ source: 0, target: 4 },
			{ source: 1, target: 5 },
			{ source: 2, target: 5 },
			{ source: 2, target: 5 },
			{ source: 3, target: 4 },
			{ source: 5, target: 8 },
			{ source: 5, target: 9 },
			{ source: 6, target: 7 },
			{ source: 7, target: 8 },
			{ source: 8, target: 9 }
		]
  };
var svg5=d3.select("#d3")
           .append("svg")
           .attr({
			   width:w,
			   height:h,
		   })
		   .style({
			   "background-color":"#336666",
		   });
var force=d3.layout.force()
                   .nodes(dataset5.nodes)
				   .links(dataset5.edges)
				   .size([w,h])
				   .linkDistance([150])
				   .charge([-500])
				   .start();

var edges = svg5.selectAll("line")
			   .data(dataset5.edges)
			   .enter()
			   .append("line")
			   .style("stroke", "#ccc")
			   .style("stroke-width", 1);

var nodes = svg5.selectAll("circle")
                .data(dataset5.nodes)
				.enter()
				.append("circle")
				.attr({
					r:20,
				})
				.style({
					fill:function(d,i){
						/*
						console.log("d=");
						console.log(d);
						console.log("i=");
						console.log(i);
						*/
						return "#003300";
					}
				})
				.call(force.drag);
var texts_nodes = svg5.selectAll("text")
               .data(dataset5.nodes)
			   .enter()
			   .append("text")
			   .text(function(d,i){return d.name+"("+i+")"});


force.on("tick", function() {
				   edges.attr("x1", function(d) { return d.source.x; })
						.attr("y1", function(d) { return d.source.y; })
						.attr("x2", function(d) { return d.target.x; })
						.attr("y2", function(d) { return d.target.y; });
				   nodes.attr("cx", function(d) { return d.x; })
						.attr("cy", function(d) { return d.y; });
				   texts_nodes.attr("x",function(d){return d.x-30})
				              .attr("y",function(d){return d.y})
						      .attr({
							       fill:"orange",
							       "font-weight":"bold",
						       });
			});







/**************************************************************************************************************************************/
/**************************************************************************************************************************************/

//路径
/*
  date:2015/07/12
  auth:hy
  description:关于d3.js中对地图路径的调研尚未完成，通过d3加载json文件无法获取文件路径，报错显示跨域显示出现问题
*/

var path=d3.geo.path();
var svg6=d3.select("#d3").append("svg").attr({width:w,height:h});

d3.json("demo_d3_path.json",function(json){
	    console.log("begin to excute d3.json="+json);
	    svg6.selectAll("path")
		    .data(json.featrues)
			.enter()
			.append("path")
			.attr("d",path)
	});































		