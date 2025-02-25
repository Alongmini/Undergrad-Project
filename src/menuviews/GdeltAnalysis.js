import React from 'react';
import { Col, Row, Divider, Image, Descriptions,Tabs } from 'antd';
import MigratiopnOption from '../EchartsView/MigrationRegression';
import ReactECharts from 'echarts-for-react';
import MigrationChange from '../EchartsView/TradeInputChange';
import GdeltNodeAnlysis from '../EchartsView/GdeltNodeAnlysis';
import GdeltSideAnlysis from '../EchartsView/GdeltSideAnlysis';
const items = [
    {
        key: '1',
        label: '度中心性分析',
        children: ( <>
            <Row style={{
              
                height:'80vh',
                marginLeft: 40,
                textAlign: 'center',
            }}>
        <Col span={11} >
                <div style={{
                    color: 'white', fontSize: '20px', textAlign: 'center', marginBottom: 10, marginTop: 20, fontFamily: 'Microsoft YaHei, sans-serif',
                    fontWeight: 'bold',
                }}>度中心性分析</div>
               
                <ReactECharts option={MigratiopnOption} style={{ height: 450, backgroundColor: 'transparent' }} />
            </Col>
            <Divider type='vertical'/>
            <Col span={12}>
                    <div style={{
                        color: 'white', fontSize: '20px', textAlign: 'center', marginBottom: 10, marginTop: 20, fontFamily: 'Microsoft YaHei, sans-serif',
                        fontWeight: 'bold',
                    }}>数据说明与分析</div>
                    <div style={{
                        color: 'white', fontSize: '17px', textAlign: 'left', marginLeft: 20, marginBottom: 10, marginTop: 45, fontFamily: 'Microsoft YaHei, sans-serif',

                    }}>
                        <ul>
                            <li>在复杂网络中，节点连接机制与规则网络和随机网络不同，节点与节点之间的连接不是随机的，而是偏向于和网络中重要的节点进行连接，这种机制导致了节点之间的连接状况具有不均匀分布特性，无标度性质就是描述这种分布的不均匀性。无标度性质通常通过统计网络中的资源分布是否符合幂律分布来衡量。</li>
                            <p></p>
                            <li>对构建的国际贸易网络、国际关系网络、人口迁移网络进行计算，统计节点强度的分布，对于这三个网络，节点强度即为加权度，代表某时间段内一个国家与其他国家交互的强度。可以看到，呈现幂律分布的特征，使用幂律函数曲线进行拟合，在图表中可以看到，整体拟合效果良好，并且利用Echarts可交互表格，我们能够看到理论值和实际值，通过对比这两个值的差距来评估拟合效果。在构建的三个网络中，提取出节点强度排名前20的国家，分析哪些国家参与交互最多，也反映着国家在网络中的重要性。强度最大的节点都是美国，这也侧面反映了美国在全球国家之间的高活跃度和高话语权。</li>
                            <p></p>
                            <li>此外，在双对数坐标下幂律分布将表现为一条斜率为幂指数的负数的直线，在双对数坐标系下，散点的分布基本符合直线，如果想要更好的拟合，则可以使用添加平移参数ρ的幂律分布作为拟合函数，即Zipf-Mandelbrot 定律:P(X≥x)=C(x+ρ)-a</li>
                        </ul>
                    </div>
                    
            </Col>
            </Row></>),
            
    },
    {
        key: '2',
        label: '节点强度演化分析',
        children: (<>
            <Row style={{
                
                height: '80vh',
                marginLeft: 40,
                textAlign: 'center',
            }}>
                <Col span={11} >
                    <div style={{
                        color: 'white', fontSize: '20px', textAlign: 'center', marginBottom: 10, marginTop: 20, fontFamily: 'Microsoft YaHei, sans-serif',
                        fontWeight: 'bold',
                    }}>节点强度分析</div>
                    
                    <ReactECharts option={GdeltNodeAnlysis} style={{ height: 450, backgroundColor: 'transparent' }} />
                </Col>
                <Divider type='vertical' />
                <Col span={12}>
                    <div style={{
                        color: 'white', fontSize: '20px', textAlign: 'center', marginBottom: 10, marginTop: 20, fontFamily: 'Microsoft YaHei, sans-serif',
                        fontWeight: 'bold',
                    }}>数据说明与分析</div>
                    <div style={{
                        color: 'white', fontSize: '15px', textAlign: 'left', marginLeft: 20, marginBottom: 10, marginTop: 45, fontFamily: 'Microsoft YaHei, sans-serif',

                    }}>数据说明
                        <ul>
                            <li>本数据涵盖2015年到2019年全球各国国际关系数据，以一个国家与其他国家的交互总次数作为一个节点强度</li>
                            <li>通过数据分析筛选2015年到2019年节点强度前五的国家，作为国际关系节点强度演化分析的数据源</li>
                            <li>分析每个节点国家节点强度随时间的演化趋势及原因</li>
                        </ul>
                    </div>
                    <div style={{
                        color: 'white', fontSize: '15px', textAlign: 'left', marginLeft: 20, marginBottom: 10, marginTop: 10, fontFamily: 'Microsoft YaHei, sans-serif',
                    }}>节点强度演化曲线可得
                        <ol>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>总体上：</strong> 美国的节点强度远高于其他几个国家，因其全球影响力、国际政治地位、经济实力、文化输出、外交政策以及科技创新在国际舞台上具有卓越的地位，吸引了广泛的国际交流。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>美国：</strong> 美国的节点强度在2015年到2019年之间呈下降趋势，从1213695降至1052807。这可能受到国际政治格局的变化、外交政策调整以及国际事件的影响。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>中国：</strong> 中国的节点强度在同一时期内也有所下降，从364565降至313846。这可能受到国际关系紧张、贸易争端和政治因素的影响。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>俄罗斯联邦：</strong> 俄罗斯联邦的节点强度在这段时间内经历了波动，总体上也呈下降趋势，从370464降至282989。这可能与国际制裁、地缘政治紧张局势以及国际事件有关。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>法国：</strong> 法国的节点强度在2015年到2019年之间下降，从291343降至189567。这可能受到国际政治局势不稳定、内部政治变化以及外交政策的调整影响。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>英国：</strong> 英国的节点强度也有下降趋势，从384054降至354446。这可能受到脱欧和国内政治动荡的影响，以及与欧洲国家的关系变化。
                            </li>
                        </ol>
                    </div>
                </Col>
            </Row></>),
    },
    {
        key: '3',
        label: '边强度演化分析',
        children: (<>
            <Row style={{
                
                height: '80vh',
                marginLeft: 40,
                textAlign: 'center',
            }}>
                <Col span={11} >
                    <div style={{
                        color: 'white', fontSize: '20px', textAlign: 'center', marginBottom: 10, marginTop: 20, fontFamily: 'Microsoft YaHei, sans-serif',
                        fontWeight: 'bold',
                    }}>边强度演化分析</div>
                    {/* */}
                    <ReactECharts option={GdeltSideAnlysis} style={{ height: 450, backgroundColor: 'transparent' }} />
                </Col>
                <Divider type='vertical' />
                <Col span={12}>
                    <div style={{
                        color: 'white', fontSize: '20px', textAlign: 'center', marginBottom: 10, marginTop: 20, fontFamily: 'Microsoft YaHei, sans-serif',
                        fontWeight: 'bold',
                    }}>数据说明与分析</div>
                    <div style={{
                        color: 'white', fontSize: '15px', textAlign: 'left', marginLeft: 20, marginBottom: 10, marginTop: 45, fontFamily: 'Microsoft YaHei, sans-serif',

                    }}>数据说明
                        <ul>
                            <li>本数据涵盖2015年到2019年全球各国国际关系数据，以两个国家之间的交互次数作为网络边的强度</li>
                            <li>通过叠加处理将国家之间的边改正为无向边，筛选2015年到2019年边强度前10的国家对，作为国际关系边强度演化分析的数据源</li>
                            <li>分析每个国家对边强度随时间的演化趋势及原因</li>
                        </ul>
                    </div>
                    <div style={{
                        color: 'white', fontSize: '15px', textAlign: 'left', marginLeft: 20, marginBottom: 10, marginTop: 10, fontFamily: 'Microsoft YaHei, sans-serif',
                    }}>边强度演化曲线可得
                        <ol>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>以色列-巴勒斯坦：</strong>
                                
                                    排名在这五年内保持不变，都在8附近。可能原因：中东地区的地缘政治紧张局势和长期冲突导致两国之间的关系相对稳定。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>美国-中国：</strong>
                                
                                    排名从2上升到1，表示关系在这段时间内变得更加紧密。可能原因：美中之间的经济互动增加，尽管也存在贸易争端，但总体上两国的关系有所改善。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>美国-以色列：</strong>
                                
                                    排名在这五年内有波动，但总体上保持在7-9之间。可能原因：外交政策和中东地区的动态局势可能导致排名的变化。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>美国-伊朗：</strong>
                                
                                    排名从3上升到7，显示两国之间的关系有所紧张。可能原因：伊朗核协议的变化、地缘政治紧张局势和外交政策的调整可能导致排名波动。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>美国-俄罗斯：</strong>
                                
                                    排名在这五年内有波动，但总体上保持在1-5之间。可能原因：外交关系、地缘政治紧张局势和国际事务的变化可能导致排名波动。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>美国-加拿大、墨西哥、日本、法国、英国：</strong>
                                
                                    这些国家与美国之间的边强度排名相对稳定，在这五年内波动较小。可能原因：稳定的外交关系、经济合作和盟友关系可能导致排名相对稳定。
                            </li>
                        </ol>
                    </div>
                </Col>
            </Row></>),
    },
];
const onChange = (key) => {
    console.log(key);
};
const Resource = () => {
    
    return (
       
        <Row style={{
            // backgroundImage: 'url("../image/background2.png")', // 设置背景图片
            // backgroundSize: 'cover',
            
            marginLeft: 40,
            textAlign: 'center',
        }}>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} style={{
                color: 'white', fontSize: '20px', marginBottom: 10, marginTop: 20, fontFamily: 'Microsoft YaHei, sans-serif',
                fontWeight: 'bold'
}} />
           
        </Row>

    )
};
export default Resource;

