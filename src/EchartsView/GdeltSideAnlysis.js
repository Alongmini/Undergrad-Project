const GdeltSideAnlysis = {
    title: {
        text: 'Top10边强度演化',
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
            color:'white',
        },
        boundaryGap: false,
        data: ['2015', '2016', '2017', '2018', '2019']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            margin: 30,
            fontSize: 16,
            formatter: '{value}',
            color:'white',
        },
        inverse: true,
        interval: 1,
        min: 1,
        max: 10  // 1-7 的排名
    },
    series: [
        {
            name: '以色列-巴勒斯坦',
            type: 'line',
            data: [8, 8, 8, 6, 9],
            lineStyle: {
                width: 2 // 设置折线宽度为4
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
        {
            name: '美国-中国',
            type: 'line',
            data: [2, 2, 3, 2, 1],
            lineStyle: {
                width: 2 // 设置折线宽度为4
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
        {
            name: '美国-以色列',
            type: 'line',
            data: [7, 9, 7, 8, 6],
            lineStyle: {
                width: 2 // 设置折线宽度为4
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
        }, {
            name: '美国-伊朗',
            type: 'line',
            data: [3, 10, 10, 9, 7],
            lineStyle: {
                width: 2 // 设置折线宽度为4
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
        }, {
            name: '美国-俄罗斯',
            type: 'line',
            data: [5, 3, 1, 1, 3],
            lineStyle: {
                width: 2 // 设置折线宽度为4
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
        }, {
            name: '美国-加拿大',
            type: 'line',
            data: [6, 4, 4, 4, 4],
            lineStyle: {
                width: 2 // 设置折线宽度为4
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
        }, {
            name: '美国-墨西哥',
            type: 'line',
            data: [10, 5, 5, 5, 5],
            lineStyle: {
                width: 2 // 设置折线宽度为4
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
        }, {
            name: '美国-日本',
            type: 'line',
            data: [9, 6, 9, 10, 10],
            lineStyle: {
                width: 2 // 设置折线宽度为4
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
        }, {
            name: '美国-法国',
            type: 'line',
            data: [4, 7, 6, 7, 8],
            lineStyle: {
                width: 2 // 设置折线宽度为4
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
        }, {
            name: '美国-英国',
            type: 'line',
            data: [1, 1, 2, 3, 2],
            lineStyle: {
                width: 2 // 设置折线宽度为4
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
        ]
};

export default GdeltSideAnlysis;
