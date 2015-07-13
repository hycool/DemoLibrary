// JavaScript Document
    //模拟gdp数据，为地图着色
	var worldData = {
        "AF": 22639834,
        "AL": 23582322,
        "DZ": 24654768,
		"CN": 25645654,
		"RU": 27124651,
		"US": 28614613,
		
    };
	var chinaData={
		"CN-46": 22639834,
        "CN-50": 23582322,
        "CN-44": 24654768,
		"CN-11": 25645654,
		"CN-31": 27124651,
		"CN-32": 28614613,
	};
	//渲染世界地图
	$("#world").vectorMap({
		map:"world_mill_en",
		backgroundColor:"#2d353c",	//地图背景色
		regionsSelectable:true,		//是否可用鼠标选择区域
		regionsSelectableOne:true,	//同时只能激活一个区域
		markersSelectable:true,		//标签可选择
		regionStyle:{
	        initial: {
                fill: '#5d6b75',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            hover: {
                "fill-opacity": 0.8,
                cursor: 'pointer'
            },
            selected: {
                fill: "rgba(0,102,255,0.3)"
            },
            selectedHover: {
            }
        },
		series:{
			regions:[{
				values:worldData,
				scale: ["#C8EEFF", "#0071A4"],	//根据worldData的数据差异，定义着色区间
                normalizeFunction: "polynomial"
			}]
		},
		onRegionTipShow: function(e, tip, code){
            tip.html(tip.html()+' (访客数 - '+(worldData[code]==undefined?"":worldData[code])+')');
        },

	    
	});
	
	//渲染中国地图
	$("#china").vectorMap({
		map:"cn_merc_en",
		backgroundColor:"#2d353c",	//地图背景色
		regionsSelectable:true,		//是否可用鼠标选择区域
		regionsSelectableOne:true,	//同时只能激活一个区域
		markersSelectable:true,		//标签可选择
		regionStyle:{
	        initial: {
                fill: '#5d6b75',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            hover: {
                "fill-opacity": 0.8,
                cursor: 'pointer'
            },
            selected: {
                fill: "rgba(0,102,255,0.3)"
            },
            selectedHover: {
            }
        },
		series:{
			regions:[{
				values:chinaData,
				scale: ["#C8EEFF", "#0071A4"],	//根据worldData的数据差异，定义着色区间
                normalizeFunction: "polynomial"
			}]
		},
		onRegionTipShow: function(e, tip, code){
            tip.html(tip.html()+' (访客数 - '+(chinaData[code]==undefined?"":chinaData[code])+')');
        },

	    
	});

/*
Codes of World Map

1 BD Bangladesh 
2 BE Belgium 
3 BF Burkina Faso 
4 BG Bulgaria 
5 BA Bosnia and Herz. 
6 BN Brunei 
7 BO Bolivia 
8 JP Japan 
9 BI Burundi 
10 BJ Benin 
11 BT Bhutan 
12 JM Jamaica 
13 BW Botswana 
14 BR Brazil 
15 BS Bahamas 
16 BY Belarus 
17 BZ Belize 
18 RU Russia 
19 RW Rwanda 
20 RS Serbia 
21 LT Lithuania 
22 LU Luxembourg 
23 LR Liberia 
24 RO Romania 
25 GW Guinea-Bissau 
26 GT Guatemala 
27 GR Greece 
28 GQ Eq. Guinea 
29 GY Guyana 
30 GE Georgia 
31 GB United Kingdom 
32 GA Gabon 
33 GN Guinea 
34 GM Gambia 
35 GL Greenland 
36 KW Kuwait 
37 GH Ghana 
38 OM Oman 
39 _1 Somaliland 
40 _0 Kosovo 
41 JO Jordan 
42 HR Croatia 
43 HT Haiti 
44 HU Hungary 
45 HN Honduras 
46 PR Puerto Rico 
47 PS Palestine 
48 PT Portugal 
49 PY Paraguay 
50 PA Panama 
51 PG Papua New Guinea 
52 PE Peru 
53 PK Pakistan 
54 PH Philippines 
55 PL Poland 
56 -99 N. Cyprus 
57 ZM Zambia 
58 EH W. Sahara 
59 EE Estonia 
60 EG Egypt 
61 ZA South Africa 
62 EC Ecuador 
63 AL Albania 
64 AO Angola 
65 KZ Kazakhstan 
66 ET Ethiopia 
67 ZW Zimbabwe 
68 ES Spain 
69 ER Eritrea 
70 ME Montenegro 
71 MD Moldova 
72 MG Madagascar 
73 MA Morocco 
74 UZ Uzbekistan 
75 MM Myanmar 
76 ML Mali 
77 MN Mongolia 
78 MK Macedonia 
79 MW Malawi 
80 MR Mauritania 
81 UG Uganda 
82 MY Malaysia 
83 MX Mexico 
84 VU Vanuatu 
85 FR France 
86 FI Finland 
87 FJ Fiji 
88 FK Falkland Is. 
89 NI Nicaragua 
90 NL Netherlands 
91 NO Norway 
92 NA Namibia 
93 NC New Caledonia 
94 NE Niger 
95 NG Nigeria 
96 NZ New Zealand 
97 NP Nepal 
98 CI Côte d'Ivoire 
99 CH Switzerland 
100 CO Colombia 
101 CN China 
102 CM Cameroon 
103 CL Chile 
104 CA Canada 
105 CG Congo 
106 CF Central African Rep. 
107 CD Dem. Rep. Congo 
108 CZ Czech Rep. 
109 CY Cyprus 
110 CR Costa Rica 
111 CU Cuba 
112 SZ Swaziland 
113 SY Syria 
114 KG Kyrgyzstan 
115 KE Kenya 
116 SS S. Sudan 
117 SR Suriname 
118 KH Cambodia 
119 SV El Salvador 
120 SK Slovakia 
121 KR Korea 
122 SI Slovenia 
123 KP Dem. Rep. Korea 
124 SO Somalia 
125 SN Senegal 
126 SL Sierra Leone 
127 SB Solomon Is. 
128 SA Saudi Arabia 
129 SE Sweden 
130 SD Sudan 
131 DO Dominican Rep. 
132 DJ Djibouti 
133 DK Denmark 
134 DE Germany 
135 YE Yemen 
136 AT Austria 
137 DZ Algeria 
138 US United States 
139 LV Latvia 
140 UY Uruguay 
141 LB Lebanon 
142 LA Lao PDR 
143 TW Taiwan 
144 TT Trinidad and Tobago 
145 TR Turkey 
146 LK Sri Lanka 
147 TN Tunisia 
148 TL Timor-Leste 
149 TM Turkmenistan 
150 TJ Tajikistan 
151 LS Lesotho 
152 TH Thailand 
153 TF Fr. S. Antarctic Lands 
154 TG Togo 
155 TD Chad 
156 LY Libya 
157 AE United Arab Emirates 
158 VE Venezuela 
159 AF Afghanistan 
160 IQ Iraq 
161 IS Iceland 
162 IR Iran 
163 AM Armenia 
164 IT Italy 
165 VN Vietnam 
166 AR Argentina 
167 AU Australia 
168 IL Israel 
169 IN India 
170 TZ Tanzania 
171 AZ Azerbaijan 
172 IE Ireland 
173 ID Indonesia 
174 UA Ukraine 
175 QA Qatar 
176 MZ Mozambique 
*/
/*
Codes of China Map 

1 CN-54 Xizang 
2 CN-52 Guizhou 
3 CN-35 Fujian 
4 CN-50  
5 CN-51 Sichuan 
6 CN-31 Shanghai 
7 CN-32 Jiangsu 
8 CN-33 Zhejiang 
9 CN-14 Shanxi 
10 CN-15 Inner Mongol 
11 CN-12 Tianjin 
12 CN-13 Hebei 
13 CN-11 Beijing 
14 CN-34 Anhui 
15 CN-53 Yunnan 
16 CN-36 Jiangxi 
17 CN-37 Shandong 
18 CN-41 Henan 
19 CN-43 Hunan 
20 CN-42 Hubei 
21 CN-45 Guangxi 
22 CN-44 Guangdong 
23 CN-46 Hainan 
24 CN-65 Xinjiang 
25 CN-64 Ningxia 
26 CN-63 Qinghai 
27 CN-62 Gansu 
28 CN-61 Shaanxi 
29 CN-23 Heilongjiang 
30 CN-22 Jilin 
31 CN-21 Liaoning 
*/