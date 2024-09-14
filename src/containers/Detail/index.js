import React,{ useState,useEffect } from "react";
import { useParams} from "react-router-dom";
import { Card } from 'antd';
import axios from "axios";
function Detail(){
    const params = useParams();
    const [state,setState] = useState({title:'title',content:'content'});
    let id = params.id
    useEffect(()=>{
        axios.get('https://www.dell-lee.com/react/api/detail.json?id=' + id)
        .then(res => {
            const data = res.data.data;
            setState(data)
        })
    },[id])
    return(
    <Card title={state.title} extra={<a href=" ">More</a>}>
      <div className='detail' dangerouslySetInnerHTML={{__html: state.content}}></div>
    </Card>
    )
}
// class Detail extends Component {
//     render() {
//         return <div>Detail</div>
//     }
//     componentDidMount() {
//         console.log(this.props)
//     }
// }

export default Detail