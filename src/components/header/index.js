import React, {Component,Fragment} from "react";
import { Menu } from 'antd';
import {Link} from 'react-router-dom';
import { MailOutlined} from '@ant-design/icons';
import logo from './logo.png'
import "./style.css"
import axios from 'axios';

class AppHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}
    getMenuItems() {

        return this.state.list.map(item => {
            return (
                <Menu.Item key={item.id} icon={< MailOutlined/>}>
                {/* <Link to={`/${item.id}`}> */}
                <Link to={{ pathname:`/${item.id}` }}>
                    {item.title}
                </Link>
                </Menu.Item>
            )
        })
    }
    
	componentDidMount() {
		axios.get('https://www.dell-lee.com/react/api/header.json')
			.then((res) => {
                this.setState({
                    list:res.data.data
                })
			})
	}
    render(){
        return (
            <Fragment>
            <Link to='/'>
                <img className="app-header-logo" src={logo} alt="logo"/>
            </Link>
            <Menu mode="horizontal">
                { this.getMenuItems() }
            </Menu>
            </Fragment>
        )
    }
}
export default AppHeader;