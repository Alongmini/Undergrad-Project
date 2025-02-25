import React, { Component } from 'react'
import * as Cesium from "cesium/Cesium";
import { notification } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { TimeClub } from '../JsonData/TimeCommunity.js';
let viewer = null;

const colorRGBa = [
  "rgba(255, 0, 0, 0.5)",
  "rgba(0, 255, 0, 0.5)",
  "rgba(255, 0, 255, 0.5)",
  "rgba(0, 0, 255, 0.5)",//3
  "rgba(255, 255, 0, 0.5)",
  "rgba(0, 255, 255, 0.5)",
  "rgba(0, 0, 0, 1)",
  "rgba(255, 255, 255, 0.8)",
]
class Homeview extends Component {
  state =
    {
      pickedObject: null,
      colorRGBa: 'rgba(0,154,158,.1)',
    }
  openNotificationForJson = (countryNameZh, sameCommuCounName) => {
    notification.open({
      message: '国家社团信息',
      description:
        '国家：' + countryNameZh + '\n' + '同社团国：' + sameCommuCounName,
      icon: <InfoCircleOutlined style={{ color: '#108ee9' }} />,
      style: { whiteSpace: 'pre-wrap', width: 600 },
      placement: 'top',
      onClick: () => {
        console.log('Notification Clicked!');
      },
      onClose: () => {
      }
    });
  };
  componentDidMount() {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMDQ5MTQwNS1kYjNjLTQyMGMtYTgwZC1lNTUzY2UxNjQ5MDUiLCJpZCI6MTM0NzUxLCJpYXQiOjE2ODIwNDQ1OTl9.XWqsvejMFynacxkGVS9-Ss_SCbh6SrcAODDuCJ2xcOU'
    viewer = new Cesium.Viewer("cesiumContainer", {
      geocoder: false,   // 位置查找工具
      homeButton: false,  // 视角返回初始位置
      sceneModePicker: true,   // 选择视角的模式（球体、平铺、斜视平铺）
      baseLayerPicker: false,    // 图层选择器（地形影像服务）
      navigationHelpButton: false,   // 导航帮助(手势，鼠标)
      animation: false,   // 左下角仪表盘（动画器件）
      // timeline: true,   // 底部时间线
      fullscreenButton: false,   // 全屏
      vrButton: false,  // VR
      infoBox: false,
      orderIndependentTranslucency: false,
      contextOptions: {
        webgl: {
          alpha: true,
        }
      },
    });
    //设置相机高度可以缩小地球
    viewer.scene.skyBox.show = false;
    viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0);
    viewer.scene.sun.show = false;
    viewer.scene.moon.show = false;
    //设置加载图片的方式
    viewer._cesiumWidget._creditContainer.style.display = "none";
    var annLayer = new Cesium.UrlTemplateImageryProvider({
      url: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
      minimumLevel: 3,
      maximumLevel: 18
    })
    viewer.imageryLayers.addImageryProvider(annLayer);
    viewer.camera.flyTo({
      destination: new Cesium.Cartesian3.fromDegrees(113.5, 30.84, 18000000),
    })
    viewer.clock.shouldAnimate = true;
    viewer.clock.startTime = Cesium.JulianDate.fromIso8601('2015-01T00:00:00Z');
    viewer.clock.stopTime = Cesium.JulianDate.fromIso8601('2019-12T00:00:00Z');
    viewer.clock.currentTime = Cesium.JulianDate.fromIso8601('2015-01T00:00:00Z');
    viewer.clock.multiplier = 30 * 24 * 60 * 60 * 4;// 3600时间流逝速度（每秒钟增加1小时）
    viewer.clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER;
    viewer.clock.clockRange = Cesium.ClockRange.CLAMPED;
    viewer.timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime); // 显示区域
    let previousYear = null; // 存储上一次输出的年份
    let promise = Cesium.GeoJsonDataSource.load('world.geojson', {
      stroke: Cesium.Color.WHITE,
      fill: Cesium.Color.BLUE.withAlpha(0.3), //注意：颜色必须大写，即不能为blue
      strokeWidth: 5,
    })
    viewer.clock.onTick.addEventListener((clock) => {
      const currentJulianDate = clock.currentTime;
      const currentYear = Cesium.JulianDate.toIso8601(currentJulianDate).substring(0, 4);
     
      if (currentYear !== previousYear) {
        //console.log(currentYear);
        viewer.dataSources.removeAll();
        
        viewer.dataSources.add(promise)
          .then((dataSources) => {
            let entities = dataSources.entities.values
            let selectedYearData = TimeClub[currentYear];
            for (let i = 0; i < entities.length; i++) {
              let entity = entities[i];
              let name = entity.properties.iso_a3._value.substring(0, 3);
              let onedata = selectedYearData.find((item) => item.Id === name)
              if (onedata != null) {
                entity.polygon.material = Cesium.Color.fromCssColorString(colorRGBa[onedata.modularity_class]);
              }
              else {
                entity.polygon.material = Cesium.Color.fromCssColorString(colorRGBa[7]);
              }
              entity.polygon.outline = true;
            }
          })
        viewer.screenSpaceEventHandler.setInputAction((click) => {
          const pickedObject = viewer.scene.pick(click.position);
          if (typeof pickedObject !== 'undefined') {
            if (typeof pickedObject.id === 'object' && pickedObject !== undefined) {
              let countryNameZh = pickedObject.id.name;
              let currentJulianDate = viewer.clock.currentTime;
              let currentYear = Cesium.JulianDate.toIso8601(currentJulianDate).substring(0, 4);

              // 获取当前时间对应的 TimeClub 数据
              let selectedYearData = TimeClub[currentYear];
              // console.log(currentYear)
              let commuCode = selectedYearData.find((item) => item.nameZh === countryNameZh);

              if (commuCode !== undefined) {
                commuCode = commuCode.modularity_class;
                let sameCommuCoun = selectedYearData.filter((item) => item.modularity_class === commuCode);
                let sameCommuCounName = '';
                sameCommuCoun.map((data) => {
                  sameCommuCounName = sameCommuCounName + data.nameZh + '  ';
                });
                this.openNotificationForJson(countryNameZh, sameCommuCounName);
              } else {
                this.openNotificationForJson(countryNameZh, '无数据');
              }
            }
          }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        previousYear = currentYear; // 更新上一次输出的年份

      }
      // 在这里可以根据需要更新地图上的多样性类别颜色或其他操作
    });
  }
  render() {
    return (
      <div id="cesiumContainer" style={{
        width: '100%',     // 设置宽度为100%
        height: '91vh'
      }} />
    );
  }
}
export default Homeview;
