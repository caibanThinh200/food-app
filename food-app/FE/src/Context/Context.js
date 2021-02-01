import React,{useEffect, useState} from "react";
import { Alert } from "antd";
import axios from "axios";
export const context = React.createContext();
export const ContextProvider = (props) =>{
    const API_URL = "http://localhost:3010/User";
    //Register
   
    const[fullname,setFullname] = useState("");
    const[birth,setBirth] = useState("");
    const[phoneNum,setPhoneNum] = useState("");
    const[address,setAddress] = useState("");
    const[mail,setMail] = useState("");
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const[errorFullname,setErrorFullname] = useState(true);
    const[errorBirth,setErrorFBirth] = useState(true);
    const[errorPhoneNum,setErrorPhoneNum] = useState(true);
    const[errorAddress,setErrorAddress] = useState(true);
    const[errorsMail,setErrorMail] = useState(true);
    const[errorUsername,setErrorUsername] = useState(true);
    const[errorPassword,setErrorPassword] = useState(true);
    const onChangeBirth = (date)=> {
      setBirth(date._d.toString().slice(0,15))
      if(date !== ""){
          setErrorFBirth(false);
      }
      else{
          setErrorFBirth(true);
      }
    }
    
    const onChangeFullName = (e) =>{
        const name = e.target.value;
        if(name !== ""){
            setErrorFullname(false);
            setFullname(name);
        }
        else{
            setErrorFullname(true);
        }
    }
    const onChangePhoneNum = (e) =>{
        
        const number = e.target.value;
        let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if(!vnf_regex.test(number)){
            setErrorPhoneNum(true);
        }
        else{
            setErrorPhoneNum(false);
        }
        setPhoneNum(number)
    }
    const onChangeAddress = (e) =>{
        const addr = e.target.value;
        if(addr !== ""){
            setErrorAddress(false);
            setAddress(addr);
        }
        else{
            setErrorAddress(true);
        }
    }
    const onChangeMail = (e) =>{
        const email = e.target.value;
       
        const re =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(re.test(email)){
            setErrorMail(false);
            setMail(email);
        }
        else{
            setErrorMail(true);
        }
      
    }
    const onChangeUsername = (e) =>{
        const username = e.target.value;
        if(username !== ""){
            setErrorUsername(false)
            setUsername(username);
        }
        else{
            setErrorAddress(true);
        }
        
    }
    const onChangePassword = (e) =>{
        const pass = e.target.value;
        if(username !== ""){
            setErrorPassword(false)
            setPassword(pass)
        }
        else{
            setErrorPassword(true);
        };
       
    }
    const submitData = (e) =>{
        
        e.preventDefault();
        switch(true){
            case errorFullname:
                alert("Invalid fullname");
                break;
            case errorBirth:
                alert("Invalid birth");
                break;
            case errorsMail:
                alert("Invalid mail");
                break;
            case errorAddress:
                alert("Invalid address");
                break;
            case errorPhoneNum:
                alert("Invalid phone number");
                break;
            case errorUsername:
                alert("Invalid username");
                break;
            case errorPassword:
                alert("Invalid password");
                break;
            default:
            let dataUser = {
                Fullname:fullname,
                UserAddress: address,
                Birth:birth,
                Gmail:mail,
                username:username,
                pass:password,
                PhoneNum:phoneNum
            }
           
            fetch(API_URL,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                   },
                body:JSON.stringify(dataUser)
                  
            }).then(()=>{
                alert("Register success");
                window.location="/login"
                });
            
        }
       
    };


    //Login
   
    const submitLogin = (e)=>{
        e.preventDefault();
        
        let dataUser = {
            username:username,
            pass:password
        }
        console.log(dataUser);
        axios.post(API_URL+"/login",dataUser)
        .then(res=>{
            console.log(res.data);
            localStorage.setItem("token",JSON.stringify(res.data));
        })
              
        
    }
    const store = {
        fullname,
        birth,
        username,
        password,
        phoneNum,
        address,
        mail,
        errorFullname,
        errorBirth,
        errorUsername,
        errorPhoneNum,
        errorPassword,
        errorAddress,
        errorsMail,
        onChangeFullName,
        onChangeBirth,
        onChangeUsername,
        onChangePassword,
        onChangePhoneNum,
        onChangeAddress,
        onChangeMail,
        submitData,
        submitLogin
    }
  
    return(
        <context.Provider value={store}>
            {props.children}
        </context.Provider>
    )
}
