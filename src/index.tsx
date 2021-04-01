import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.less';
import './assets/antd-variables.less';
import './assets/index.less';
import App from './App';

ReactDOM.render(
  <React.StrictMode><App/></React.StrictMode>,
  document.getElementById('root')
);
