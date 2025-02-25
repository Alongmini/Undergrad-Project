import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import 'cesium/Widgets/widgets.css';//解决cesium页面混乱问题
ReactDOM.render(<Router/>,document.getElementById("root"));

