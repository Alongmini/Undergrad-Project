const TradeBarOption = {
    xAxis: {
      type: 'category',
      data: ['USA-MEX', 'USA-JPN', 'RUS-TUR', 'IND-IRN', 'ARG-BRA', 'UKR-EGY', 'ARG-VNM', 'RUS-EGY', 'IND-SAU', 'VNM-PHL', 'USA-COL', 'UKR-CHN', 'USA-KOR', 'USA-CAN', 'UKR-ESP', 'USA-PHL', 'UKR-TUR', 'CAN-CHN', 'BRA-VNM', 'ARG-DZA'],
      axisLabel:false
      
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
        data:   [4029059416.0, 2950998163.0, 1538059017.4, 1444581761.24, 1394839094.66, 1310266535.89, 1289475240.87, 1275306352.24, 1077719331.133, 923460210.53, 872623127.0, 858653270.66, 810251253.0, 779633407.0, 764824862.91, 723553815.0, 718406940.37, 717980689.289, 686454582.0, 663090487.71],
        type: 'bar',
        color : 'gray',
        
    },
    title:{
      text:'边强度排名前20(贸易数据)',
      left: 'center'
    }
    
  };
export default TradeBarOption;