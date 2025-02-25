const TradeSideChange = {
    title: {
        text: 'Top7边强度演化',
        textStyle: {
            color: 'white' // 设置标题文字颜色为紫色
          },
    },
    tooltip: {
        trigger: 'item'
    },
    grid: {
        left: 30,
        right: 110,
        bottom: 30,
        containLabel: true
    },
    toolbox: {
        show: true,
        feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: true
        },
        axisLabel: {
            margin: 30,
            fontSize: 16,
            formatter: function (value) {
                // 将数据值（例如 '2015'）转换为年份格式
                return value;
            },
            color:'white'
        },
        boundaryGap: false,
        data: ['2015', '2016', '2017', '2018', '2019']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            margin: 30,
            fontSize: 16,
            formatter: '{value}'
        },
        inverse: true,
        interval: 1,
        min: 1,
        max: 7,  // 1-7 的排名
        color:'white',
    },
    series: [
        {
            name: '美国-日本',
            type: 'line',
            data: [1, 1, 1, 1, 1],
            lineStyle: {
                width: 4 // 设置折线宽度为4
            },
            symbolSize: 10, 
            smooth: true, 
            emphasis: {
                focus: 'series' // 在鼠标触摸时高亮整个系列
            }, 
            endLabel: {
                show: true,
                formatter: '{a}',
                distance: 20
            }// 设置数据点的大小为10
        },
        // 美国-哥伦比亚的数据
        {
            name: '美国-哥伦比亚',
            type: 'line',
            data: [2, 3, 4, 6, 7],
            lineStyle: {
                width: 4 // 设置折线宽度为4
            },
            symbolSize: 10, 
            smooth: true, 
            emphasis: {
                focus: 'series' // 在鼠标触摸时高亮整个系列
            }, 
            endLabel: {
                show: true,
                formatter: '{a}',
                distance: 20
            }
        },
        // 阿根廷-巴西的数据
        {
            name: '阿根廷-巴西',
            type: 'line',
            data: [3, 2, 3, 3, 4],
            lineStyle: {
                width: 4 // 设置折线宽度为4
            },
            symbolSize: 10, 
            smooth: true, 
            emphasis: {
                focus: 'series' // 在鼠标触摸时高亮整个系列
            }, 
            endLabel: {
                show: true,
                formatter: '{a}',
                distance: 20
            }
        },
        // 法国-比利时的数据
        {
            name: '法国-比利时',
            type: 'line',
            data: [4, 5, 5, 7, 6],
            lineStyle: {
                width: 4 // 设置折线宽度为4
            },
            symbolSize: 10, 
            smooth: true, 
            emphasis: {
                focus: 'series' // 在鼠标触摸时高亮整个系列
            }, 
            endLabel: {
                show: true,
                formatter: '{a}',
                distance: 20
            }
        },
        // 俄罗斯联邦-埃及的数据
        {
            name: '俄罗斯联邦-埃及',
            type: 'line',
            data: [5, 4, 2, 2, 5],
            lineStyle: {
                width: 4 // 设置折线宽度为4
            },
            symbolSize: 10, 
            smooth: true, 
            emphasis: {
                focus: 'series' // 在鼠标触摸时高亮整个系列
            }, 
            endLabel: {
                show: true,
                formatter: '{a}',
                distance: 20
            }
        },
        // 俄罗斯联邦-土耳其的数据
        {
            name: '俄罗斯联邦-土耳其',
            type: 'line',
            data: [6, 6, 7, 4, 2],
            lineStyle: {
                width: 4 // 设置折线宽度为4
            },
            symbolSize: 10, 
            smooth: true, 
            emphasis: {
                focus: 'series' // 在鼠标触摸时高亮整个系列
            }, 
            endLabel: {
                show: true,
                formatter: '{a}',
                distance: 20
            }
        },
        // 印度-伊朗的数据
        {
            name: '印度-伊朗',
            type: 'line',
            data: [7, 7, 6, 5, 3],
            lineStyle: {
                width: 4 // 设置折线宽度为4
            },
            symbolSize: 10, 
            smooth: true, 
            emphasis: {
                focus: 'series' // 在鼠标触摸时高亮整个系列
            }, 
            endLabel: {
                show: true,
                formatter: '{a}',
                distance: 20
            }
        },]
};

export default TradeSideChange;
