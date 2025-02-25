import React from 'react';
import { Col, Row, Divider} from 'antd';
const ConnectionAnalysis = () => {
    return (
        <Row style={{
            
            marginLeft: 40,
            textAlign: 'center',
            height: '90vh',
            marginTop: 20,
        }}>
            <Col span={11} >
                <div style={{
                    color: 'white', fontSize: '20px', textAlign: 'center', marginBottom: 10, marginTop: 20, fontFamily: 'Microsoft YaHei, sans-serif',
                    fontWeight: 'bold',
                }}>国际关系、人口迁移、国际贸易相关性分析</div>
                {/* <div style={{
                    color: 'white', fontSize: '15px', textAlign: 'left', marginBottom: 10, marginTop: 20, marginLeft: 40, fontFamily: 'Microsoft YaHei, sans-serif',
                    fontWeight: 'bold',
                }}>制图人：李泽宇</div> */}
                <img src="ConectionAnalysis.png" alt="Logo" style={{ height: 500, backgroundColor: 'black' }} />
            </Col>
            <Divider type='vertical' />
            <Col span={12}>
                <div style={{
                    color: 'white', fontSize: '20px', textAlign: 'center', marginBottom: 10, marginTop: 20, fontFamily: 'Microsoft YaHei, sans-serif',
                    fontWeight: 'bold',
                }}>数据分析</div>
                <div style={{
                    color: 'white', fontSize: '18px', textAlign: 'left', marginLeft: 20, marginBottom: 10, marginTop: 45, fontFamily: 'Microsoft YaHei, sans-serif',

                }}>相关性散点图可得
                    <ol>
                        <li>呈现强正相关的为：贸易值和人口移动值。数据点呈现从左下到右上的趋势，这意味着随着国家之间人口移动数目增加，贸易总量的随之增加。这种强正相关关系可能意味着两个国家之间的人口移动和贸易密切相关。但是相反，贸易值的大小对人口移动的大小存在的相关关系较弱，说明人口移动数据变化对贸易值变化有较弱的相关关系。</li>
                        <li>总的来说国际贸易与国际关系和人口移动都存在一定的正相关关系，但人口迁移与贸易和国际关系的数据存在的正相关关系较弱。</li>
                        <li>呈现次强正相关的为：贸易值和国际关系。这同样说明随着国家之间贸易往来的频繁，国际关系也逐渐增强。</li>
                    </ol>
                </div>
            </Col>

        </Row>
    )
};
export default ConnectionAnalysis;

