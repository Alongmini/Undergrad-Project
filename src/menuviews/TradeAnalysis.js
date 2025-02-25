import React from 'react';
import { Col, Row, Divider, Image, Descriptions, Tabs } from 'antd';
import ReactECharts from 'echarts-for-react';
// import MigrationChange from '../AnalysisData/MigrationInputChange';
import TradeOutputChange from '../EchartsView/TradeOutputChange';
import TradeInputChange from '../EchartsView/TradeInputChange';
import TradeSideChange from '../EchartsView/TradeSideChange';

const items = [
    {
        key: '1',
        label: 'TOP5国家出度演化曲线',
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
                    }}>出度演化曲线</div>
              
                    <ReactECharts option={TradeOutputChange} style={{ height: 450, backgroundColor: 'transparent' }} />
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
                            <li>本数据涵盖2015年到2019年全球商品贸易数据，以出口国作为节点分析每一年节点强度的变化</li>
                            <li>通过总体数据分析出相对出口大国为中国，日本，埃及，沙特阿拉伯，墨西哥，固对上述top5国家按照时间进行数据演化分析</li>
                        </ul>
                    </div>
                    <div style={{
                        color: 'white', fontSize: '15px', textAlign: 'left', marginLeft: 20, marginBottom: 10, marginTop: 10, fontFamily: 'Microsoft YaHei, sans-serif',
                    }}>入度演化曲线可得
                        <ol>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>中国</strong>：中国的出口量在2015年到2019年之间有所下降，尤其在2016年和2019年之间下降明显。这可能受到国际贸易政策、全球需求变化以及国内生产因素的影响。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>日本</strong>：日本的出口量在这段时间内也有所波动，但总体上呈上升趋势。这可能受到日本国内经济政策、外部需求以及汇率波动的影响。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>埃及</strong>：埃及的出口量在这段时间内呈稳步增长的趋势，特别是在2017年和2018年之间。这可能受到外部需求增加以及国内经济改革的影响。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>墨西哥</strong>：墨西哥的出口量在2015年到2017年之间有所增长，然后在2018年和2019年之间下降。这可能受到与美国之间的贸易关系、制造业和全球需求的关联。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>沙特阿拉伯</strong>：沙特阿拉伯的出口量在这段时间内也有波动，但总体上有增长趋势。这可能与国际原油价格、石油产量和需求有关。
                            </li>
                        </ol>
                    </div>
                </Col>
            </Row></>),

    },
    {
        key: '2',
        label: 'TOP5国家入度演化曲线',
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
                    }}>入度演化曲线</div>
            
                    <ReactECharts option={TradeInputChange} style={{ height: 450, backgroundColor: 'transparent' }} />
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
                            <li>本数据涵盖2015年到2019年全球商品贸易数据，以进口国作为节点分析每一年节点强度的变化</li>
                            <li>通过总体数据分析出相对进口大国为美国，加拿大，法国，巴西，泰国,对上述top5国家按照时间进行数据演化分析</li>
                        </ul>
                    </div>
                    <div style={{
                        color: 'white', fontSize: '15px', textAlign: 'left', marginLeft: 20, marginBottom: 10, marginTop: 10, fontFamily: 'Microsoft YaHei, sans-serif',
                    }}>入度演化曲线可得
                        <ol>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>美国：</strong> 美国的进口量在2015年到2019年之间有所波动，但总体呈现出上升趋势，尤其在2018年达到高峰。这可能受到美国国内经济的增长、全球贸易政策以及消费者需求的影响。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>加拿大：</strong> 加拿大的进口量在这段时间内有所下降，尤其在2016年和2019年之间下降明显。这可能受到加拿大国内经济因素、贸易伙伴变化以及资源行业的波动影响。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>法国：</strong> 法国的进口量在这段时间内呈现波动，但总体上呈现上升趋势。这可能受到法国国内消费、外部贸易政策以及欧洲经济因素的影响。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>巴西：</strong> 巴西的进口量在这段时间内有较大的波动，特别是在2019年有明显的增长。这可能受到巴西国内政策、全球大宗商品价格以及贸易伙伴的变化影响。
                            </li>
                            <li>
                                <strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>泰国：</strong> 泰国的进口量在2015年到2019年之间也有波动，总体上呈现下降趋势。这可能受到泰国国内经济、贸易政策以及全球供应链的变化影响。
                            </li>
                        </ol>
                    </div>
                </Col>
            </Row></>),
    },
    {
        key: '3',
        label: '边强度演化曲线',
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
                    }}>边强度演化曲线</div>
                
                    <ReactECharts option={TradeSideChange} style={{ height: 450, backgroundColor: 'transparent' }} />
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
                            <li>本数据涵盖2015年到2019年全球商品贸易数据，以两个国家的贸易往来的值作为有向边强度，分析5年间的边强度变化</li>
                            <li>通过数据分析筛选2015年到2019年各年边强度排名前50的国家，将每年都属于边强度前50的排名靠前的7个国家组合作为边强度演变曲线的主要数据源</li>
                            <li>分析每个国家组之间的贸易随以年为单位的演变趋势</li>
                        </ul>
                    </div>
                    <div style={{
                        color: 'white', fontSize: '15px', textAlign: 'left', marginLeft: 20, marginBottom: 10, marginTop: 10, fontFamily: 'Microsoft YaHei, sans-serif',
                    }}>边强度演化曲线可得
                        <ol>
                            <li><strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>美国-日本：</strong> 在这两个国家之间，排名始终保持在第一位，表明它们之间的合作强度在所观察的年份内始终是最高的</li>
                            <li><strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>美国-哥伦比亚：</strong> 这两个国家之间的排名在过去几年中有所波动，但总体趋势是上升的。它们的合作强度在过去几年内有所增强</li>
                            <li><strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>阿根廷-巴西：</strong> 排名在不同年份之间有轻微波动，但总体趋势是保持在中等水平，没有显著的上升或下降</li>
                            <li><strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>法国-比利时：</strong> 排名在过去几年中有一些波动，但总体趋势是在中等水平保持稳定。</li>
                            <li><strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>俄罗斯联邦-埃及：</strong> 这两个国家之间的合作强度排名在过去几年中有一些波动，但总体趋势是下降的，表明它们的合作强度在减弱</li>
                            <li><strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>俄罗斯联邦-土耳其：</strong> 排名在过去几年中有显著的波动，但总体趋势是下降的，表明这两个国家之间的合作强度在减弱</li>
                            <li><strong style={{
                                    color:'rgb(250, 239, 177)'
                                }}>印度-伊朗：</strong> 这两个国家之间的排名在过去几年中也有一些波动，但总体趋势是下降的，表明它们之间的合作强度在减弱</li>

                        </ol>
                    </div>
                </Col>
            </Row></>),
    },
];
const onChange = (key) => {
    console.log(key);
};
const TradeAnalysis = () => {

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
export default TradeAnalysis;

