const MigrationBarOption = {
    xAxis: {
      type: 'category',
      data:  ['MEX-USA', 'PAK-AFG', 'BGD-IND', 'IRN-AFG', 'RWA-COD', 'KAZ-RUS', 'CHN-USA', 'IND-PAK', 'UKR-RUS', 'RUS-UKR', 'CHN-HKG', 'KOR-USA', 'USA-MEX', 'PHL-USA', 'SOM-ETH', 'PAK-IND', 'RWA-TZA', 'MWI-MOZ', 'RUS-KAZ', 'IND-BGD'],
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
        data:  [2238238.51, 2185592.78, 1419508.34, 1415768.75, 1369383.76, 1305400.74, 1231358.66, 1048389.21, 1024575.72, 913363.0, 771949.35, 732079.03, 607527.42, 589731.14, 532952.15, 502967.74, 499144.08, 478172.83, 462245.32, 448389.56],
        type: 'bar',
        color : 'violet',
        
    },
    title:{
      text:'边强度排名前20(人口迁徙)',
      left: 'center'
    }
    
  };
export default MigrationBarOption;