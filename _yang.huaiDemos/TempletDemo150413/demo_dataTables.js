// JavaScript Document
/*模拟数据*/
var dataRecords=[
	    {column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_12",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_13",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_14",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_15",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_16",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_17",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_18",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_19",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_10",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"},
		{column_1:"column_11",column_2:"column_2",column_3:"column_3",column_4:"column_4",column_5:"column_5",column_n:"colulmn_n"}];
	/*以下为对datatables的配置情况*/
    /*
	    在实际项目中，可能需要用到多个表格，你使用dom选项把所有的表格设置为相同的布局，这时你可以使用$.fn.dataTable.defaults 对象处理。
		以下配置为默认自定义的默认配置
	*/
	$.extend( $.fn.dataTable.defaults, {
      searching: true,	//允许检索
      ordering: true,	//允许排序
	  paging: true,		//设置分页
	  pagingType: "full_numbers", //设置是否显示首页和尾页按钮
	  lengthChange: true,	//是否允许改变每页显示的记录数
	  destroy: true,	//销毁现有表格，用新表格替代
	  autoWidth:true,
	  lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "全部"] ],
	  //processing: true,	//排序、检索等操作进行时，是否显示类似“请稍后...”的文案提示，文案配置在language.processing属性中
	  //scrollY:345,	//设置表格固定高度，超出时垂直滚动。
	  //scrollX:500,	//设置表格固定宽度，超出时水平滚动。
	  //语言配置
	  language:{
		  emptyTable: "表中无记录",
		  info: "当前显示第 _START_ - _END_ 条记录（共 _TOTAL_ 条）",
		  infoEmpty: "当前显示 0 - 0 条记录",
		  infoFiltered: "(筛选于_MAX_条记录)",
		  infoPostFix: "",
		  thousands: ",",
		  lengthMenu: "每页展示 _MENU_ 条记录",
		  loadingRecords: "加载中...",
		  processing: "请稍后...",
		  search: "检索: ",
		  zeroRecords: "未查找到匹配记录",
		  paginate: {
			first: "首页",
		    last: "尾页",
		    next: "下一页",
		    previous: "上一页"
		  },
		  aria: {
            sortAscending: ": 以升序排列此列",
            sortDescending: ": 以降序排列此列"
          },
		  
	  },
    });
	/*渲染表格数据到dom*/
	//$("datatable-wrapper").empty(); 
	$("#datatable-wrapper").append("<table id='t_1' class='table'></table>");
	var table=$("#t_1").dataTable({
		//displayStart:20,		//定义默认从哪个记录开始显示
		order: [[ 0, 'asc' ], [ 1, 'asc' ]],
		data:dataRecords,
		columns:[
		    {data:"column_1",title:"column_1"},
		    {data:"column_2",title:"column_2"},
		    {data:"column_3",title:"column_3"},
		    {data:"column_4",title:"column_4"},
		    {data:"column_5",title:"column_5"},
		    {data:"column_n",title:"column_n"}
		    ]
	});
	
	
	/*
	   date:2015/06/24
	   note:使用dreamweaver在chrome浏览器未能实现copy,csv,xls,pdf
	   部署到play后可以正常导出，但是csv和pdf中文导出是乱码，csv用记事本打开可以正常显示，另存为后编码方式显示uft8，中文乱码问题暂时无解
	*/
	
	//dataTables tabletools 配置
	$('#t_1').dataTable({
        dom: 'T<"clear">lrtifp', //设置按钮位置
		tableTools: {
            sSwfPath: "http://cdn.bootcss.com/datatables-tabletools/2.1.5/swf/copy_csv_xls_pdf.swf",
			aButtons:[{
				sExtends:"copy",
				sButtonText:"复制",
			},{
				sExtends:"xls",
				sButtonText:"另存为Excel",
			},{
				sExtends:"print",
				sButtonText:"打印",
			},],
        },
    });
	/*
	*/
	  
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		