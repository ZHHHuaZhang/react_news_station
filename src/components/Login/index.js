import React,{ useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { Button ,Modal,Input,message} from 'antd';
import './style.css'
function Login(){
    const navigate = useNavigate()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [state,setState] = useState({login:false,user:'',password:''});
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
		const url = `https://www.dell-lee.com/react/api/login.json?user=${state.user}&password=${state.password}`;
        // const url = `http://www.dell-lee.com/react/api/login.json?user=admin&password=admin`;
		axios.get(url,{
			withCredentials: true
		}).then(res => {
			const islogin = res.data.data.login;
			if (islogin) {
				message.success('登陆成功');
                setState({...state,login: true})
			}else {
				message.error('登陆失败');
			}
		})
        setIsModalVisible(false);
    };
    
    const logout=()=> {
		axios.get('https://www.dell-lee.com/react/api/logout.json', {
			withCredentials: true
		})
			.then(res => {
				const data = res.data.data;
				if(data.logout) {
					setState({
                        ...state,login: false
					});
				}
                navigate('/');
				// this.props.history.push('/');
			})
	}
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const changePassword=(e)=> {

        setState({ ...state,password: e.target.value})
	}
    // useEffect(() => {
    //     console.log("useeffectp:"+state.password) 
    //   },[state.password])


    const changeUser=(e)=> {
        setState({...state,user: e.target.value})
	}
    // useEffect(() => {
    //     console.log("useeffect:"+state.user) 
    //   },[state.user])
    return(
        <div className="login" >

            {
                state.login?
                <Button  type="primary" onClick={logout}>退出</Button>                  
                :
                <Button  type="primary" onClick={showModal}>登陆</Button>
            }
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Input 
                placeholder='请输入用户名' 
                style={{ marginBottom: 10 }}
                onChange={changeUser}
          />
            <Input.Password
                placeholder='请输入密码'
                onChange={changePassword}
            />
            </Modal>           
        </div>
    )
    }


export default Login