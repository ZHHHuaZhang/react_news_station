import React, { Component } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ReactDom from 'react-dom';
import 'antd/dist/antd.min.css'
import './style.css'
import AppHeader from './components/header';
import List from './containers/List/';
import Detail from './containers/Detail/';
import Login from './components/Login';
import Vip from './containers/Vip';
import { Layout } from 'antd';


const { Header, Footer, Content } = Layout;
class App extends Component {
	render() {
		return (
    <BrowserRouter>
      <Layout style={{minWidth:1000}}>
          <Header className="header"><AppHeader/></Header>
          <Content className="content">
            <Login/>
            <Routes>
              <Route path='/vip'  element={<Vip/>}/>  
              <Route path='/detail/:id'  element={<Detail/>}/>
              <Route path='/:id' element={<List/>}/>
              <Route path='' element={<List/>}/>
            </Routes>
          </Content>
          <Footer className="footer">@2021</Footer>
      </Layout>
    </BrowserRouter>
		)
	}
}
ReactDom.render(<App />, document.getElementById('root'));