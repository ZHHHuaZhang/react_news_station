import React,{ useState,useEffect } from "react";
import { List } from 'antd';
import axios from "axios";
import { useParams ,Link} from "react-router-dom";

function PageList(){
    const params = useParams();
    const [state, setState] = useState([]);
    // axios.get('http://www.dell-lee.com/react/api/list.json')
    //     .then(res=>{
    //         setState(res.data.data)
    // })
    useEffect(() => {
        let url = 'http://www.dell-lee.com/react/api/list.json';
        let id = params.id
        if (id) {
			url = url + '?id=' + id;
		}
        axios.get(url)
        .then(res => {
            setState(res.data.data)
        })
      },[params.id]);
    // console.log(params.id)
    // componentDidMount() {
    //     axios.get('http://www.dell-lee.com/react/api/list.json')
    //     .then(res=>{
    //         this.setState({
    //             data: res.data.data
    //         })
    //     })
    // }
    return (<List
        style={{background: 'white'}}
        size="small"
        bordered
        dataSource={state}
        renderItem={item =>
        <List.Item>
            <Link  to={{ pathname:`/detail/${item.id}` }}>
                {item.title}
            </Link>
        </List.Item>}
      />)

}

export default PageList;