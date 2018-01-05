/*
* @Author: Ye
* @Date:   2017-11-22 10:38:07
* @Last Modified by:   Ye
* @Last Modified time: 2018-01-05 17:41:43
*/


// 路径配置
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

// 使用，地图
require(
    [
        'echarts',
        'echarts/chart/map' // 使用柱状图就加载map模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('canves_chart_one'));                 
        var option = {
            title : {
               
            },
            tooltip : {
                trigger: 'item',
                formatter: function(a){
                    //return a[2];
                    return a[1]+" ( "+a[2]+" ) ";
                }
            },
            legend: {
                orient: 'vertical',
                x:'left',
                y:'top',
                data:[
                    {name: "1、广州市 ( 9952 ) ",value:"./img/echarts-logo.png"},
                    {name: "2、深圳市 ( 8555 ) ",value:"./img/echarts-logo.png"}
                ],  
                selectedMode: 'multiple',
                selected : {
                    '1、广州市 ( 9952 ) ' : true,
                    '2、深圳市 ( 8555 ) ' : true

                },
                textStyle:{
                    color: "#7df5fc",
                    fontFamily:"SimSun,Microsoft YaHei",
                    fontSize: 14,
                    fontWeight: "lighter"
                    }
            },
            dataRange: {
                min: 0,
                max: 10000,
                x: 'right',
                y: 'bottom',
                color:['#02b7e1','#1280f0','#6536bc','#044587'],
                textStyle:{
                    color: "#7df5fc",
                    fontFamily:"SimSun,Microsoft YaHei",
                    fontSize: 12,
                    fontWeight: "lighter"
                    }
            },
            series : [      
                {
                    name: 'iphone5',
                    type: 'map',
                    mapType: '广东',
                    itemStyle:{
                        normal:{
                            label:{
                                show:true,
                                textStyle:{
                                    color: "#7df5fc",
                                    fontFamily:"SimSun,Microsoft YaHei",
                                    fontSize: 12,
                                    fontWeight: "lighter"
                                }
                            },
                            borderColor:"#7df5fc",
                            borderWidth:0.1
                        },
                        emphasis:{label:{show:true}}
                    },

                    data:[
                        {name: '广州市', value: 9952},
                        {name: '深圳市', value: 8555},
                        {name: '东莞市', value: 4459},
                        {name: '佛山市', value: 3405},
                        {name: '惠州市', value: 839},
                        {name: '珠海市', value: 407},
                        {name: '中山市', value: 2626},
                        {name: '江门市', value: 630},
                        {name: '汕头市', value: 737},
                        {name: '湛江市', value: 570},
                        {name: '揭阳市', value: 772},
                        {name: '肇庆市', value: 417},
                        {name: '清远市', value: 274},
                        {name: '韶关市', value: 246},
                        {name: '潮州市', value: 269},
                        {name: '茂名市', value: 229},
                        {name: '河源市', value: 307},
                        {name: '汕尾市', value: 147},
                        {name: '阳江市', value: 54},
                        {name: '梅州市', value: 198},
                        {name: '云浮市', value: 674}
                    ]
                }
            ]
        };

        // 为echarts对象加载数据 
        myChart.setOption(option); 
    }
);


// 使用，折线图
require(
    [
        'echarts',
        'echarts/chart/line' // 使用柱状图就加载line模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('canves_chart_two')); 

        var option = {
            title : {
                text: '当月和上月写卡量走势图',
                x:'center',
                y:10,
                textStyle: {
                            color: "#7df5fc",
                            fontFamily:"SimSun,Microsoft YaHei",
                            fontSize: 14,
                            fontWeight: "lighter"
                        },
            },
            tooltip: {
                show: true
            },
            color:['#4bc79d','#8956dc'],
            legend: {
                data:['当月','上月'],
                textStyle: {
                            color: "#7df5fc",
                            fontFamily:"SimSun,Microsoft YaHei"
                        },
                x:'right',
                y:'top'
            },
            grid : {
                x : 50,
                y : 32,
                x2 : 50,
                y2 : 40,
                borderColor : '#7df5fc'
            },
            xAxis : [
                {
                    type : 'category',
                    name : "时间/日",
                    nameTextStyle : {
                        color: "#7df5fc",
                        fontFamily:"SimSun,Microsoft YaHei"
                    },
                    data : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
                    axisLabel: {
                        textStyle: {
                            color: "#7df5fc",
                            fontFamily:"SimSun,Microsoft YaHei"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#7df5fc"
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : "写卡量/张",
                    nameTextStyle : {
                        color: "#7df5fc",
                        fontFamily:"SimSun,Microsoft YaHei"
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#7df5fc",
                            fontFamily:"SimSun,Microsoft YaHei"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#7df5fc"
                        }
                    }
                }
            ],
            series : [
                {
                    "name":"当月",
                    "type":"line",
                    "data":[3976,3592,4911,2935,2706,2751,2374,2601,3112,4248,2561],
                    itemStyle: {
                        normal: {
                            label : {
                                show: false,
                                textStyle : {
                                    fontFamily : 'SimSun,Microsoft YaHei',
                                    fontWeight : 'bold'
                                }
                            },
                            areaStyle: {
                                type: 'default'
                                // color : (function (){
                                // var zrColor = require('zrender/tool/color');
                                // return zrColor.getLinearGradient(                             
                                //     0, 200, 0, 400,
                                //     [[0, 'rgba(75,199,157,0.8)'],[0.7, 'rgba(255,255,255,0.1)']]
                                //     )
                                // })()
                            }
                        }
                    }
                },
                {
                    "name":"上月",
                    "type":"line",
                    "data":[4104,3057,3168,3511,4948,2925,2622,2834,2469,3467,3942,5316,2638,2682,3119,3238,3325,3582,4997,2985,2986,3068,2714,2456,3657,5140,3058,3232,3601,5191],
                    itemStyle: {
                        normal: {
                            label : {
                                show: false,
                                textStyle : {
                                    fontFamily : 'SimSun,Microsoft YaHei',
                                    fontWeight : 'bold'
                                }
                            },
                            areaStyle: {
                                type: 'default'
                                // color : (function (){
                                // var zrColor = require('zrender/tool/color');
                                // return zrColor.getLinearGradient(                             
                                //     0, 200, 0, 400,
                                //     [[0, 'rgba(137,86,220,0.8)'],[0.7, 'rgba(255,255,255,0.1)']]
                                //     )
                                // })()
                            }
                        }
                    }
                }
            ]
        };

        // 为echarts对象加载数据 
        myChart.setOption(option); 
    }
);


// 使用，柱状图
require(
    [
        'echarts',
        'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('canves_chart_three')); 
                
        var option = {
            title : {
                text: '当月和上月写卡量走势图',
                x:'center',
                y:10,
                textStyle: {
                            color: "#7df5fc",
                            fontFamily:"SimSun,Microsoft YaHei",
                            fontSize: 14,
                            fontWeight: "lighter"
                        },
            },
            tooltip: {
                show: true
            },
            color:['#4bc79d','#8956dc'],
            legend: {
                data:['当月','上月'],
                textStyle: {
                            color: "#7df5fc",
                            fontFamily:"SimSun,Microsoft YaHei"
                        },
                x:'right',
                y:'top'
            },
            grid : {
                x : 50,
                y : 32,
                x2 : 50,
                y2 : 40,
                borderColor : '#7df5fc'
            },
            xAxis : [
                {
                    type : 'category',
                    name : "地市/市",
                    nameTextStyle : {
                        color: "#7df5fc",
                        fontFamily:"SimSun,Microsoft YaHei"
                    },
                    data : ["广州","深圳","东莞","佛山","惠州","珠海","中山","江门","汕头","湛江","揭阳","肇庆",
                    "清远","韶关","潮州","茂名","河源","汕尾","阳江","梅州","云浮"],
                    axisLabel: {
                        textStyle: {
                            color: "#7df5fc",
                            fontFamily:"SimSun,Microsoft YaHei"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#7df5fc"
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : "写卡量/张",
                    nameTextStyle : {
                        color: "#7df5fc",
                        fontFamily:"SimSun,Microsoft YaHei"
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#7df5fc",
                            fontFamily:"SimSun,Microsoft YaHei"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#7df5fc"
                        }
                    }
                }
            ],
            series : [
                {
                    "name":"当月",
                    "type":"bar",
                    "data":[9952,8555,4459,3405,839,407,2626,630,737,570,772,417,274,246,269,229,307,147,54,198,674],
                    itemStyle: {
                        normal: {
                            label : {
                                show: false,
                                textStyle : {
                                    fontFamily : 'SimSun,Microsoft YaHei',
                                    fontWeight : 'bold'
                                }
                            }
                        }
                    }
                },
                {
                    "name":"上月",
                    "type":"bar",
                    "data":[10111,8148,4466,4031,1041,474,2823,593,659,560,1264,411,297,231,239,223,229,178,81,194,794],
                    itemStyle: {
                        normal: {
                            label : {
                                show: false,
                                textStyle : {
                                    fontFamily : 'SimSun,Microsoft YaHei',
                                    fontWeight : 'bold'
                                }
                            }
                        }
                    }
                }
            ]
        };

        // 为echarts对象加载数据 
        myChart.setOption(option); 
    }
);


