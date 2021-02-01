import React,{useContext} from 'react';
import {Input,Button} from "antd"
import { context } from "../Context/Context";
import axios  from "axios";
import 'antd/dist/antd.css';
function SignIn(props){
    const {username,password,onChangeUsername,onChangePassword,submitLogin} =useContext(context);
    
    return(
        <div class="wrapper hw100 flexBox">
        <div class="body-left floatLeft ">
            <h1 className="title mgTop20">Đăng nhập người dùng</h1>
            <div className="register-form">
              
                
                <Input onChange={(e)=>{onChangeUsername(e)}} placeholder="Nhập tên người dùng ..."/><br/>
               
                <Input onChange={(e)=>{onChangePassword(e)}} type="password" placeholder="Nhập mật khẩu ..."/><br/>
                <Button onClick={(e)=>{submitLogin(e)}} type="primary">Đăng nhập</Button>
            </div>

        </div> 
        <div class="body-right floatLeft ">
        <i className="fa fa-biking"></i>
        <div className="intro">
            <h1 style={{color:"white",fontSize:"50px"}}>Giao đồ ăn tận miệng</h1>
        </div>
        </div>
       
    </div>
    )
}
export default SignIn