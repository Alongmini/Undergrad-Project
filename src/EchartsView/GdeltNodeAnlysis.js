// See https://github.com/ecomfe/echarts-stat
const GdeltNodeAnlysis = {

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['美国', '中国', '法国', '英国', '俄罗斯联邦'],
         left: 'left', 
         textStyle: {
            color: 'white' // 设置标题文字颜色为紫色
          },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        show: true,
        feature: {
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2015', '2016', '2017', '2018', '2019'],
        axisLabel: {
            // 设置 X 轴标签的颜色为蓝色
            textStyle: {
              color: 'white'
            }
          },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            // 设置 X 轴标签的颜色为蓝色
            textStyle: {
              color: 'white'
            }
          },
    },
    series: [
        {
            name: '美国',
            type: 'line',
            data: [1213695, 1280244, 1239141, 1140697, 1052807]
        },
        {
            name: '中国',
            type: 'line',
            data: [364565, 407337, 377283, 352640, 313846]
        },
        {
            name: '俄罗斯联邦',
            type: 'line',
            data: [370464, 393164, 398080, 356972, 282989]
        },
        {
            name: '法国',
            type: 'line',
            data: [291343, 243062, 211160, 207650, 189567]
        },
        {
            name: '英国',
            type: 'line',
            data: [384054, 413836, 391397, 371086, 354446]
        }
    ]
};

export default GdeltNodeAnlysis;