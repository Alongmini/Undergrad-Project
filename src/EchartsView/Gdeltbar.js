const GdeltBarOption = {
    xAxis: {
        type: 'category',
        data: ['USA-CHN', 'GBR-USA', 'USA-RUS', 'MEX-USA', 'USA-CAN', 'USA-ISR', 'USA-FRA', 'IRN-USA', 'USA-AFG', 'TUR-SYR', 'ISR-PSE', 'USA-JPN', 'USA-UKR', 'GBR-IRL', 'AUS-USA', 'RUS-UKR', 'USA-SYR', 'USA-DEU', 'GBR-FRA', 'USA-TUR'],
        axisLabel: false

    },
    yAxis: {
        type: 'value'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {

        }
    },
    series:
    {
        data: [67909.0, 67796.0, 56847.0, 48420.0, 46622.0, 41189.0, 35916.0, 33754.0, 30277.0, 30201.0, 29727.0, 28452.0, 27816.0, 26234.0, 24797.0, 23617.0, 23481.0, 23432.0, 22176.0, 21495.0],
        type: 'bar',
        color: 'orange',

    },
    title: {
        text: '边强度排名前20(国际关系)',
        left: 'center'
    }


};
export default GdeltBarOption;