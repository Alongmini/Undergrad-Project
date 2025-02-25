// See https://github.com/ecomfe/echarts-stat
const TradeOutputChange = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['中国', '日本', '埃及', '沙特阿拉伯', '墨西哥'],
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
            name: '中国',
            type: 'line',

            data: [10372707604.6, 6664863634.7, 10046882685.8, 9632552634.5, 6767956154.5]
        },
        {
            name: '日本',
            type: 'line',

            data: [5885109670.9, 5670712143.1, 6612179440.6, 6431398856.3, 7561000465.7]
        },
        {
            name: '埃及',
            type: 'line',

            data: [3873831343.6, 3605980544.8, 4588285065.8, 6742230351.7, 5839141467.3]
        },
        {
            name: '墨西哥',
            type: 'line',

            data: [4206550363.1, 4370975429.5, 4901483019.0, 5383289476.3, 5338492329.5]
        },
        {
            name: '沙特阿拉伯',
            type: 'line',

            data: [5025274940.1, 4283207527.5, 4906685443.8, 5936076910.0, 4287666608.5]
        }
    ]
};

export default TradeOutputChange;