import React,{ useState,useEffect } from "react";
import { useParams} from "react-router-dom";
import { Card } from 'antd';
import axios from "axios";
import './style.css'
function Vip(){
    return(
        <div className='vip'>vip</div>
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

export default Vip