import React, { Component } from 'react';
import { Image, Row, Col, Typography, Divider } from 'antd';
const { Text } = Typography;
class ThemeMap extends Component {
    render() {
        return (
            <>
                <Row style={{
                    height: '60vh',
                    marginLeft: 40,
                    textAlign: 'center',
                }}>
                    <Col span={11}>
                        <Image src='Migration.png'
                            style={{
                                height: 350,
                                margin: 40,
                                width: 600
                            }}></Image>
                    </Col>
                    <Divider type='vertical' />
                    <Col span={12}>
                        <div style={{
                            color: 'white', fontSize: '20px', textAlign: 'center', marginTop: 60, fontFamily: 'Microsoft YaHei, sans-serif',
                            fontWeight: 'bold',
                        }}>人口迁移网络社区划分专题地图</div>
                        <div style={{
                            color: 'white', fontSize: '20px', textAlign: 'left', marginLeft: 20, marginBottom: 10, marginTop: 60, fontFamily: 'Microsoft YaHei, sans-serif',
                        }}>
                            <ul>
                                <li>这张地图为我们提供了一个独特的视角，揭示了全球范围内的人口社区划分模式。
                                    通过分析这个专题地图，我们可以识别出社区的形成方式，这些社区可能基于文化、民族、经济或其他因素。
                                    这有助于政策制定者、学者和社会观察家更好地理解不同地区的需求和挑战，为社会发展和资源分配提供更准确的信息。</li>
                            </ul>
                        </div>
                    </Col>

                </Row>
                <Row style={{
                    height: '60vh',
                    marginLeft: 40,
                    textAlign: 'center',
                }}>
                    <Col span={11}>
                        <Image src='Trade2017.png'
                            style={{
                                height: 350,
                                margin: 40,
                                width: 600
                            }}></Image>
                    </Col>
                    <Divider type='vertical' />
                    <Col span={12}>
                    <div style={{
                            color: 'white', fontSize: '20px', textAlign: 'center', marginTop: 60, fontFamily: 'Microsoft YaHei, sans-serif',
                            fontWeight: 'bold',
                        }}>贸易网络网络社区划分专题地图</div>
                        <div style={{
                            color: 'white', fontSize: '20px', textAlign: 'left', marginLeft: 20, marginBottom: 10, marginTop: 60, fontFamily: 'Microsoft YaHei, sans-serif',
                        }}>
                            <li>这张地图呈现了国际贸易的精彩图景，揭示了世界各地的商品和服务如何互相联系，以及它们如何构成各种经济社区。
                            通过分析这个专题地图，我们可以更好地理解贸易社区的形成方式，可能是基于共同的市场兴趣、地理位置或文化联系。
                            这些社区的发现对于国际贸易政策、商业战略和全球经济预测都具有重要意义。</li>
                        </div>
                    </Col>

                </Row>
            </>
        )
    }


}
export default ThemeMap;