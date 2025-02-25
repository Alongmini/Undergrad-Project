// See https://github.com/ecomfe/echarts-stat
const TradeInputChange = {

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['美国', '加拿大', '法国', '巴西', '泰国'],
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
            name: '加拿大',
            type: 'line',
            data: [14664142580.8, 11237792630.6, 12548018235.3, 14368418919.2, 13441911197.6]
        },
        {
            name: '巴西',
            type: 'line',
            data: [10699903582.5, 7755110857.0, 9418930301.0, 8812857816.0, 14624013684.0]
        },
        {
            name: '法国',
            type: 'line',
            data: [7992188676.2, 6206119354.0, 11184668701.7, 14568026530.0, 14811401702.3]
        },
        {
            name: '泰国',
            type: 'line',
            data: [9380506852.0, 9182626557.1, 10712323695.7, 11463443288.5, 8534908096.5]
        },
        {
            name: '美国',
            type: 'line',
            data: [18126334829.2, 18175825582.0, 17857787990.0, 20104498845.0, 16272226003.0]
        }
    ]
};

export default TradeInputChange;