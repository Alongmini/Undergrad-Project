import React, { Component } from 'react';
import * as Cesium from "cesium/Cesium";
import { Col, Drawer, Button, Row, Select, Divider, Radio, Typography, Space, Slider, notification, Popover, Spin, Layout, Image, Modal, Checkbox, Input } from 'antd';
import { InfoCircleOutlined, AlertTwoTone, LoginOutlined, DownloadOutlined, RightOutlined } from '@ant-design/icons';

import axios from 'axios';
import { parabola } from '../flyLines/parabola.js'
import { getFlylineMaterial1 } from '../flyLines/getFlylineMaterial1.js'
import CountryData from '../JsonData/CountryData.js';
import { normalization } from '../flyLines/normalization.js'
import CountryPosition from '../JsonData/CountryPosition.js';
import MigratiopnOption from '../EchartsView/MigrationRegression.js';
import TradeOption from '../EchartsView/TradeRegression.js';
import GdeltOption from '../EchartsView/GdeltRegression.js';
import GdeltBarOption from '../EchartsView/Gdeltbar.js';
import MigrationBarOption from '../EchartsView/MigrationBar.js';
import TradeBarOption from '../EchartsView/TradeBar.js';
import ReactECharts from 'echarts-for-react';
import { data, event } from 'jquery';
const { Header, Content, Sider } = Layout;
// import { round } from '../flyLines/round.js';
let viewer = null;
const Url = "http://127.0.0.1:8000/api/TradeDataModel/CHN/"
const Url_Globle = "http://127.0.0.1:8000/api/TradeDataModel/"
const { Title, Paragraph, Text, Link } = Typography;
const DataType =
  [
    {
      label: '人口迁移数据',
      value: 'MigrationDataModel',
    },
    {
      label: '贸易数据',
      value: 'TradeDataModel',
    },
    {
      label: '国际关系数据',
      value: 'GdeltDataModel',
    },
  ]
const Checkboxoptions = [
  {
    label: '蓝色',
    value: 'blue',
  },
  {
    label: '红色',
    value: 'red',
  },
  {
    label: '绿色',
    value: 'green',
  },
];
class Home extends Component {
  state =
    {
      DatabaseAPI: "http://127.0.0.1:8000/api/TradeDataModel/CHN/",
      TypeValue: null,
      DataRAWURL: "http://127.0.0.1:8000/api/",
      OriCountryName: "CHN",
      DesCountryName: "USA",
      Datayear: '2015',
      SlideNum: 20,
      isLinesSelected: false,
      pickedObject: null,
      EchartsData: null,
      EchartsDataBar: null,
      open: false,
      setOpen: false,
      setMapImg: null,
      isModalOpen: false,
      imageSrc: null,
      imageURL:'nophoto.png',
      linecolor:'blue',
    }
  onSeclect = (value) => {
    var url = Url_Globle + value;
    //console.log(url)
    viewer.scene.primitives.removeAll()
    // viewer.scene.mode = Cesium.SceneMode.SCENE2D
    // this.setState({ DatabaseAPI: url })
    this.setState({ OriCountryName: value })
    CountryPosition.map(data => {
      if (data.Name === value) {
        viewer.camera.flyTo({
          destination: new Cesium.Cartesian3.fromDegrees(data.lng, data.lat, 18000000),
        })

      }
    })
  }

// OnChangePhoto = ()

  OnScreenshot = () => {
    var canvas = viewer.scene.canvas;
    var imageData = canvas.toDataURL('img/png');
    // viewer.camera.zoomOut();
    // viewer.scene.mode = Cesium.SceneMode.COLUMBUS_VIEW;
    // this.setState({ setMapImg: imageData });
    // var link = document.createElement('a');
    return (
      <div>
        <Divider><div style={{ fontFamily: 'cursive', fontSize: '20px', fontWeight: 'bold' }}>预览地图</div></Divider>
        <Image
          width={500}
          height={500}
          src={imageData}
          fallback='../image/background.png'
        />
        <Button
          onClick={() => {
            var link = document.createElement('a');
            link.href = this.state.setMapImg;
            link.download = 'map.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          shape='circle'
          type='primary'
          style={{
            width: '10px',
            marginLeft: '5px'
          }}
          icon={<DownloadOutlined />}
        >
        </Button>
      </div>
    )

  }
  // handlePaste = (event) => {
  //   const items = (event.clipboardData || window.ClipboardData).items;
  //   for (const item of items) {
  //     // if (item.type.startsWith('image')) {
  //     const blob = item.getAsFile();
  //     const src = URL.createObjectURL(blob);
  //     this.setState(
  //       {
  //         imageSrc: src,
  //       }
  //     );
  //     // break;
  //     // }
  //   }

  // }
  OnOpenmodal = () => {
    this.setState({
      isModalOpen: true,
      // imageSrc:null,
    })
  }
  OnClosemodal = () => {
    this.setState({
      isModalOpen: false,
    })
  }
  OnChangeColor =(e)=>
  {
    this.setState({
      linecolor:e.target.value,
    })

  }

  // OnDownloadMap = () => {
  //   var link = document.createElement('a');
  //   link.href = this.state.setMapImg;
  //   link.download = 'map.png';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }

  OnReset = () => {
    viewer.scene.primitives.removeAll()
    viewer.camera.flyTo({
      destination: new Cesium.Cartesian3.fromDegrees(113.5, 30.84, 18000000),
    })
    this.setState({ TypeValue: null,Datayear:'2015',OriCountryName:'CHN' })
    this.setState({
      visible: false,
    });
  }
  OnChangeType = (e) => {

    viewer.scene.primitives.removeAll();


    // this.setState({ DatabaseAPI: this.state.DataRAWURL+e.target.value+'/'+this.state.OriCountryName })
    if (e.target.value === 'MigrationDataModel') { this.setState({ TypeValue: e.target.value, EchartsData: MigratiopnOption, EchartsDataBar: MigrationBarOption }) };
    if (e.target.value === 'TradeDataModel') { this.setState({ TypeValue: e.target.value, EchartsData: TradeOption, EchartsDataBar: TradeBarOption }) };
    if (e.target.value === 'GdeltDataModel') { this.setState({ TypeValue: e.target.value, EchartsData: GdeltOption, EchartsDataBar: GdeltBarOption }) };


  }
  OnSelcectYear = (value) => {
    viewer.scene.primitives.removeAll()
    this.setState({ Datayear: value })
  }
  OnSlider = (value) => {
    viewer.scene.primitives.removeAll()
    this.setState({ SlideNum: value })
  }
  openNotification = (onedata) => {
    notification.open({
      message: '边信息',
      description:
        // '<span>第一行<br/>第二行<br/>第三行</span>',
        //'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        '终点：' + onedata.actor1_ch + '\n' + '起点：' + onedata.actor2_ch + '\n' + '边强度：' + onedata.value + '\n' + '排名：' + onedata.rank + '\n' + '年份：' + onedata.year,
      icon: <InfoCircleOutlined style={{ color: '#108ee9' }} />,
      style: { whiteSpace: 'pre-wrap', width: 300 },
      placement: 'top',
      onClick: () => {
        console.log('Notification Clicked!');
      },
      onClose: () => {
        // console.log("关了");
        this.setState({ isLinesSelected: false })
        // console.log(this.state.pickedObject);
        this.state.pickedObject.primitive.appearance = getFlylineMaterial1()
        //console.log(this.state.startPointName);
      }
    });
  };
  PopoverContent = () => {
    if (!this.state.EchartsData) {
      return (
        <div>
          <Spin />
          <Text>
            请选择所需分析的数据集
          </Text>
        </div>
      )
    }
    else {
      return (
        <Row>
          <div><ReactECharts option={this.state.EchartsData} style={{ height: 500, width: 500 }} /></div>
          <div><ReactECharts option={this.state.EchartsDataBar} style={{ height: 500, width: 500 }} /></div>
        </Row>

      )
    }

  }
  showDrawer = () => {
    // viewer.camera.flyTo({
    //   destination: new Cesium.Cartesian3.fromDegrees(108.52, 34.48, 18000000),
    // })

    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
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
      timeline: false,   // 底部时间线
      fullscreenButton: false,   // 全屏
      vrButton: false,  // VR
      infoBox: false,
      orderIndependentTranslucency: false,
      // enableCompass:true,
      contextOptions: {
        webgl: {
          alpha: true,
          // antialias: true, // 设置是否启用抗锯齿
          // depth: true, // 设置是否启用深度缓冲
          // stencil: false, // 设置是否启用模板缓冲
          // premultipliedAlpha: true, // 设置是否预乘alpha通道
          // preserveDrawingBuffer: false, // 设置是否保留绘图缓冲区
          // failIfMajorPerformanceCaveat: false, // 设置是否在性能有重大问题时抛出错误
          // powerPreference: 'high-performance' // 设置优先使用的GPU类型
        }
      },
    });
    // viewer.scaleWidget.container.style.display='';
    viewer.scene.skyBox.show = false;
    viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0);
    viewer.scene.sun.show = false;
    viewer.scene.moon.show = false;
    viewer.camera.flyTo({
      destination: new Cesium.Cartesian3.fromDegrees(108.52, 34.48, 10000000),
    })

    viewer._cesiumWidget._creditContainer.style.display = "none";
    var annLayer = new Cesium.UrlTemplateImageryProvider({
      url: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
      minimumLevel: 3,
      maximumLevel: 18
    })
    viewer.imageryLayers.addImageryProvider(annLayer);
  }
  componentDidUpdate() {

    viewer.scene.skyBox.show = false;
    viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0);
    viewer.scene.sun.show = false;
    viewer.scene.moon.show = false;

    viewer._cesiumWidget._creditContainer.style.display = "none";
    var annLayer = new Cesium.UrlTemplateImageryProvider({
      url: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
      minimumLevel: 3,
      maximumLevel: 18
    })
    viewer.imageryLayers.addImageryProvider(annLayer);
    const res = axios.get(this.state.DataRAWURL + this.state.TypeValue + '//' +
      this.state.OriCountryName + '/' + this.state.Datayear + '/' + this.state.SlideNum.toString())
      .then(res => {
        //console.log(this.state.DataRAWURL + this.state.TypeValue + '//' + this.state.OriCountryName + '/' + this.state.Datayear + '/' + this.state.SlideNum.toString());
        res.data.map(DatabaseFrame => {
          let twoPoints = [DatabaseFrame.actor2_lng, DatabaseFrame.actor2_lat, DatabaseFrame.actor1_lng, DatabaseFrame.actor1_lat]
          // console.log("2");
          // console.log(twoPoints);
          let max = res.data[0].value;
          let min = res.data[res.data.length - 1].value;

          // let mm = parabola(firstPoints,endPoints,5000,50)
          let mm = parabola(twoPoints)
          // console.log(mm);
          const polyline = new Cesium.PolylineGeometry({
            positions: mm,
            width: 18 * normalization(DatabaseFrame.value, max, min)
          });
          const instance = new Cesium.GeometryInstance({
            geometry: polyline,
            id: DatabaseFrame.data_id,
          })
          viewer.scene.primitives.add(
            new Cesium.Primitive({
              geometryInstances: [instance],
              appearance: getFlylineMaterial1(),
              releaseGeometryInstances: false,
              compressVertices: false,
            })
          )
          viewer.screenSpaceEventHandler.setInputAction((click) => {
            // console.log(click.position)
            const pickedObject = viewer.scene.pick(click.position);
            // console.log(pickedObject==undefined);
            if (pickedObject != undefined && pickedObject.id != '') {
              let onedata = res.data.find((item) => item.data_id === pickedObject.id)
              onedata['rank'] = res.data.indexOf(onedata) + 1
              //console.log(onedata)
              if (this.state.isLinesSelected == false) {
                pickedObject.primitive.appearance.material.uniforms.color = Cesium.Color.YELLOW
                this.setState({
                  isLinesSelected: true,
                  pickedObject: pickedObject,


                })
                // console.log(this.state.startPointName);
                this.openNotification(onedata)
              }
              viewer.camera.flyTo(
                {
                  destination: new Cesium.Cartesian3.fromDegrees(onedata.actor1_lng, onedata.actor1_lat, 18000000),
                })
              // console.log(onedata)
              // openNotification2()
            }
          }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        })
      })

  }
  render() {
    return (
      <Layout style={{
        width: '100%',     // 设置宽度为100%
        height: '91vh'
      }} >
        {/* <Drawer title={<div style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'cursive', fontWeight: 'bold' }}>设置多元统计数据</div>} placement="left" closable={true} */}
        {/* onClose={this.onClose} visible={this.state.visible} style={{ width: '400px' }} > */}
        <Sider
          style={{
            background: 'white',
          }}
          width={350}
        >
          <Divider ><div style={{ fontFamily: 'cursive', fontSize: '20px', fontWeight: 'bold' }}>选择数据集</div></Divider>
          <Space direction="vertical">

            <Radio.Group onChange={this.OnChangeType} value={this.state.TypeValue} options={DataType} />
          </Space>
          <Divider><div style={{ fontFamily: 'cursive', fontSize: '20px', fontWeight: 'bold' }}>选择相关国家</div></Divider>

          <Select
            placeholder="选择一个国家"
            optionFilterProp="children"
            onChange={this.onSeclect}
            // onSearch={this.onSelectSearch}
            // filterOption={this.filterOption}
            value={this.state.OriCountryName}
            options={CountryData}
            style={{
              width: '100%',
            }}
          />

          <Divider><div style={{ fontFamily: 'cursive', fontSize: '20px', fontWeight: 'bold' }}>选择年份</div></Divider>

          <Select
            style={{
              width: '100%',
            }}
            defaultValue={''}
            onChange={this.OnSelcectYear}
            options={[{ value: "2015", label: "2015" },
            { value: "2016", label: "2016" },
            { value: "2017", label: "2017" },
            { value: "2018", label: "2018" },
            { value: "2019", label: "2019" },
            { value: '', label: '所有年份' }]}
            value={this.state.Datayear}
          />

          <Divider><div style={{ fontFamily: 'cursive', fontWeight: 'bold', fontSize: '20px' }}>选择节点数量</div></Divider>

          <Slider
            min={10}
            max={200}
            onChange={this.OnSlider}
            value={typeof this.state.SlideNum === 'number' ? this.state.SlideNum : 200}
          />
          <Divider><div style={{ fontFamily: 'cursive', fontSize: '20px', fontWeight: 'bold' }}>网络节点/边强度统计</div></Divider>

          <Popover placement="left" content={this.PopoverContent} trigger="click">
            <Button icon={<AlertTwoTone />} style={{ width: '100%' }}>展开统计结果</Button>
          </Popover>

          <Divider><div style={{ fontFamily: 'cursive', fontSize: '20px', fontWeight: 'bold' }}>导出专题地图</div></Divider>

          <Button style={{ width: '100%' }} type="primary" shape='round' onClick={this.OnOpenmodal} icon={<DownloadOutlined />}>导出</Button>
          <Modal title="专题地图导出选项" open={this.state.isModalOpen} onCancel={this.OnClosemodal} width={1000}
            footer={[
              <Button key="back" onClick={this.OnClosemodal}>
                关闭界面
              </Button>,
              <Button
                onClick={() => {
                  var link = document.createElement('a');
                  link.href = '../image/'+this.state.TypeValue+this.state.OriCountryName+this.state.Datayear+this.state.linecolor+'.png' ;
                  link.download = this.state.TypeValue+this.state.OriCountryName+this.state.Datayear+this.state.linecolor+'.png';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                shape='circle'
                type='primary'
                style={{
                  width: '10px',
                  marginLeft: '5px'
                }}
                icon={<DownloadOutlined />}
              >

              </Button>
            ]}>
            {/* <Divider><div style={{ fontFamily: 'cursive', fontSize: '20px', fontWeight: 'bold' }}>设置专题地图</div></Divider> */}
            <Row>
              <Col span={14}>
                <div style={{ fontFamily: 'cursive', fontSize: '18px', fontWeight: 'bold', marginLeft: '200px' }}>地图预览</div>
                <div onPaste={this.handlePaste} tabIndex="0">
                  <Image
                    width={500}
                    height={300}
                    src={'../image/'+this.state.TypeValue+this.state.OriCountryName+this.state.Datayear+this.state.linecolor+'.png'}
                    fallback='../image/erropic.png'
                    style={{
                      marginRight: '10px'
                    }}
                  />
                  {console.log(this.state.TypeValue+this.state.OriCountryName)}
                </div>

              </Col>

              <Col span={10}>
                {/* <div style={{ fontFamily: 'cursive', fontSize: '18px', fontWeight: 'bold', marginLeft: '100px' }}>专题地图参数选择</div> */}
                {/* <Divider><div style={{ fontFamily: 'cursive', fontSize: '18px', fontWeight: 'bold' }}>输入专题地图名称</div></Divider>
                <Input placeholder="例:中国2019年贸易数据专题地图" />
                <Divider><div style={{ fontFamily: 'cursive', fontSize: '18px', fontWeight: 'bold' }}>选择比例尺级别</div></Divider> */}
                <Divider ><div style={{ fontFamily: 'cursive', fontSize: '20px', fontWeight: 'bold' }}>选择数据集</div></Divider>
                <Space direction="vertical">

                  <Radio.Group onChange={this.OnChangeType} value={this.state.TypeValue} options={DataType} />
                </Space>
                <Divider><div style={{ fontFamily: 'cursive', fontSize: '20px', fontWeight: 'bold' }}>选择相关国家</div></Divider>

                <Select
                  placeholder="选择一个国家"
                  optionFilterProp="children"
                  onChange={this.onSeclect}
                  // onSearch={this.onSelectSearch}
                  // filterOption={this.filterOption}
                  value={this.state.OriCountryName}
                  options={CountryData}
                  style={{
                    width: '100%',
                  }}
                />

                <Divider><div style={{ fontFamily: 'cursive', fontSize: '20px', fontWeight: 'bold' }}>选择年份</div></Divider>

                <Select
                  style={{
                    width: '100%',
                  }}
                  defaultValue={''}
                  onChange={this.OnSelcectYear}
                  options={[{ value: "2015", label: "2015" },
                  { value: "2016", label: "2016" },
                  { value: "2017", label: "2017" },
                  { value: "2018", label: "2018" },
                  { value: "2019", label: "2019" },
                  { value: '', label: '所有年份' }]}
                  value={this.state.Datayear}
                />
                <Divider><div style={{ fontFamily: 'cursive', fontSize: '20px', fontWeight: 'bold' }}>选择颜色</div></Divider>
                <Radio.Group options={Checkboxoptions} defaultValue={['1']} onChange={this.OnChangeColor} />


              </Col>
            </Row>


          </Modal>

          <Divider></Divider>
          <Button onClick={this.OnReset} style={{ width: '100%' }} type="primary">清除界面数据</Button>
          {/* </Drawer> */}
        </Sider>
        <Content  >
          {/* <Divider
        style={{
          backgroundImage: 'url("../image/bg.png")',
            backgroundSize: 'cover',
            marginTop:'0px',
            marginBottom:'0px'
        }}><div style={{ fontFamily: 'cursive', fontSize: '20px', fontWeight: 'bold', color: 'white' }}>
          {this.state.OriCountryName+this.state.Datayear+'年'+this.state.TypeValue+'数据'}
          </div></Divider> */}

          <div id="cesiumContainer" style={{
            backgroundImage: 'url("../image/bg.png")',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            position: 'relative', // 添加这个属性，使容器相对定位
          }}>
            {/* <Button
              onClick={this.showDrawer}
              type="default"
              style={{
                position: 'absolute', // 添加这个属性，使按钮绝对定位
                left: '20px', // 调整按钮的左偏移
                top: '270px', // 调整按钮的上偏移
                border: 'none',
                fontSize: '35px',
                zIndex: 1, // 设置按钮的层级高于场景背景
              }}
              size="large"
              icon={<RightOutlined />}
              ghost
            >
            </Button> */}
          </div>
        </Content>
      </Layout>

    );
  }
}
export default Home;
