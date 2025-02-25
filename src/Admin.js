import React, { Component } from 'react';
import {
    BarChartOutlined, HomeOutlined, HeatMapOutlined, BranchesOutlined ,RadarChartOutlined,AccountBookOutlined, DeploymentUnitOutlined,DotChartOutlined,GlobalOutlined 
} from '@ant-design/icons'
import { Layout, Menu, } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content } = Layout;

const items = [
    // {
    //     key: '1',
    //     icon: <HomeOutlined style={{ fontSize: '27px' }} />,
    //     label: <Link to="/firsthome">首页</Link>,

    // },
    {
        key: '2',
        // icon: <BranchesOutlined style={{ fontSize: '27px' }} />,
        label: <Link to="/flow">地理多元流数据可视化与分析面板</Link>,
     
    },
    {
        key: '3',
        icon: <BarChartOutlined style={{ fontSize: '27px',color: 'rgb(250, 250, 250)' ,marginLeft:'150px'}} />,
        children: [
            {
                label: <Link to="/ThemeMap">网络社团划分专题地图</Link>,
                icon: <GlobalOutlined  style={{ fontSize: '23px' }} />,
                key: 'setting:4',
            },
            {
                label: <Link to="/analysis">国际关系数据说明</Link>,
                icon: <DeploymentUnitOutlined style={{ fontSize: '23px' }} />,
                key: 'setting:7',
            },
            {
                label: <Link to="/TradeAnalysis">国际贸易数据说明</Link>,
                icon: <AccountBookOutlined style={{ fontSize: '23px' }} />,
                key: 'setting:5',
            },
            
        ],
    },
];
class Admin extends Component {
    renderMenuItem(item) {
        if (item.children) {
            return (
                <Menu.SubMenu key={item.key} icon={item.icon} title={item.label} style={{ fontFamily: 'cursive', fontWeight: 'bold', fontSize: '25px', textAlign: 'center', color: 'rgb(250, 239, 177)', margin: '0 110px' }}>
                    {item.children.map((child) => (
                        <Menu.Item key={child.key} icon={child.icon} style={{
                            color: 'rgb(250, 239, 177)', backgroundImage: 'url("../image/bg.png")', // 设置背景图片
                            backgroundSize: 'cover', fontSize: '20px', fontFamily: 'cursive', fontWeight: 'bold',}}>{child.label}</Menu.Item>
                    ))}
                </Menu.SubMenu>
            );
        } else {
            return (
                <Menu.Item key={item.key} icon={item.icon} style={{ fontFamily: 'cursive', fontWeight: 'bold', fontSize: '25px', textAlign: 'center', color: 'rgb(250, 250, 250)', margin: '0 100px' }}>
                    {item.label}
                </Menu.Item>
            );
        }
    }
    render() {
        return (
            <Layout style={{
                backgroundImage: 'url("../image/bg.png")', // 设置背景图片
                backgroundSize: 'cover',
                width: '100%',
                height:'100%',
                margintop:'0px',
                marginbottom:'0px',
                marginleft:'0px',
                marginright:'0px',
                padding:0,
                minHeight: '100vh'
              
            }} >
                <Header
                    mode="horizontal"
                    style={{
                        display: 'flex',
                        backgroundColor: 'transparent',
                        marginLeft:'500px',
                        color: 'red', // 设置字体颜色为红色
                        alignItems: 'center',
                        
                    }}
                >
                    {/* <img src="../image/icon.png" alt="Logo" width="55" height="55" style={{ marginTop: '5px', display: 'flex', }} /> */}
                    <Menu
                        style={{ backgroundColor: 'transparent', display: 'flex', marginTop: '5px'}}
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    
                    > {items.map((item) => this.renderMenuItem(item))}
                    </Menu>
                    
                </Header>
                <Content>
                    {this.props.children}
                </Content>
            </Layout >
        );
    }
};
export default Admin;
//Python manage.py runserver
//npm start

