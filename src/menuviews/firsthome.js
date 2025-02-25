import React, { Component } from 'react';
import * as Cesium from "cesium/Cesium";
let viewer = null;
class firsthome extends Component {
    componentDidMount() {
        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMDQ5MTQwNS1kYjNjLTQyMGMtYTgwZC1lNTUzY2UxNjQ5MDUiLCJpZCI6MTM0NzUxLCJpYXQiOjE2ODIwNDQ1OTl9.XWqsvejMFynacxkGVS9-Ss_SCbh6SrcAODDuCJ2xcOU'
        viewer = new Cesium.Viewer("cesiumContainer", {
            geocoder: false,   // 位置查找工具
            homeButton: false,  // 视角返回初始位置
            sceneModePicker: false,   // 选择视角的模式（球体、平铺、斜视平铺）
            baseLayerPicker: false,    // 图层选择器（地形影像服务）
            navigationHelpButton: false,   // 导航帮助(手势，鼠标)
            animation: false,   // 左下角仪表盘（动画器件）
            timeline: false,   // 底部时间线
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
        viewer.scene.globe.enableLighting = true;// 开启全球光照
        viewer.shadows = true;//有明有暗
        viewer.scene.skyBox.show = false;
        viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0);//背景透明
        viewer._cesiumWidget._creditContainer.style.display = "none";//隐藏标志
        const Extent = new Cesium.Cartesian3.fromDegrees(0, 0, 300000000);
        const chinaExtent = new Cesium.Cartesian3.fromDegrees(113.5, 30.84, 10000000);
        viewer.camera.setView({
            destination: Extent,
            orientation: {
                heading: Cesium.Math.toRadians(20),
                pitch: Cesium.Math.toRadians(-60),
                roll: 0,
            },
        });
        viewer.camera.flyTo({
            duration: 5,
            destination: chinaExtent,
            orientation: {
                heading: Cesium.Math.toRadians(0),
                pitch: Cesium.Math.toRadians(-73),
                roll: 0,
            },
        }); 
        const blackColor = Cesium.Color.fromCssColorString('rgb(255,215,0)')
        const orangeColor = Cesium.Color.fromCssColorString('rgb(3, 23, 89 )')
        viewer.entities.add({
            label: {
                text: 'Geographical Multiple Flows',
                font: '70px sans-serif',
                pixelOffset: new Cesium.Cartesian2(0, -50), // 调整文本位置
                fillColor: blackColor, // 主标签文本颜色
                outlineColor: orangeColor, // 文本轮廓颜色
                outlineWidth: 10, // 文本轮廓宽度
                
                style: Cesium.LabelStyle.FILL, // 仅填充文本，不显示轮廓
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            },
            position: Cesium.Cartesian3.fromDegrees(0, 90, 300000), // 北极坐标
        });
        viewer.entities.add({
            label: {
                text: 'Geographical Multiple Flows',
                font: '70px sans-serif',
                pixelOffset: new Cesium.Cartesian2(3, -43), // 调整文本位置
                fontWeight: 'bold',
                fillColor: orangeColor, // 主标签文本颜色
               
                style: Cesium.LabelStyle.FILL_AND_OUTLINE, // 文本样式
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            },
            position: Cesium.Cartesian3.fromDegrees(0, 90, 300000), // 调整文本的位置
        });
       
        var annLayer = new Cesium.UrlTemplateImageryProvider({
            url: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
            minimumLevel: 3,
            maximumLevel: 18
        })
        viewer.imageryLayers.addImageryProvider(annLayer);
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
export default firsthome;
