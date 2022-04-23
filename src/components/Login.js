import './Login.css';
import { useState, useEffect } from 'react';
import Chat from './chat/Chat';
import {  Link } from "react-router-dom";


export default function Login() {
    const [userName , setUserName] =useState("");
    const [password , setPassword] =useState("");
    const[errors, setErrors ]=useState({})
    const[isFound, setIsFound] = useState(false);
    const[isSubmit, setIsSubmit]=useState(false);
    const[isRedirect, setIsRedirect]=useState(false);
    const[saveUser,setSaveUser]=useState({});

    const sunbmitFun = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        setErrors(checkErrors(userName,password))
        userList.map((item)=>compare(item));
    };

    const checkErrors=(userName,password)=>{
        const errors={}
        if(!userName){
            errors.userName = "Username is required";
        }
        if(!password){
            errors.password = "Password is required";
        }
        return errors;

    };

    function compare(item){
        if(item.userName===userName && item.password===password ){
                setIsFound(true);
                setSaveUser(item);
        }
    }
    useEffect(()=>{
        if(Object.keys(errors).length===0 && isFound){
            setIsRedirect(true);
        }
        else if(Object.keys(errors).length===0 && isSubmit && !isFound){
            errors.login = "Invalid username or password";
            setIsSubmit(false)
        }
    },[errors]);

    if(isRedirect){
        window.history.pushState(null, '', `/Chat`);
        return (<Chat user={saveUser}/> )
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-sm-4 col-xs-12"></div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="mt-20">
                        <form className="form-container" onSubmit={sunbmitFun}>
                            <h1>Login</h1>
                            <div className="form-group mt-3">
                                <label htmlFor="user" className="sr-only">Username</label>
                                <input type="text" id="user" className="form-control mt-1" placeholder="Username" onChange={(e)=>setUserName(e.target.value)}/>
                            </div>
                            <p className="error">{errors.userName}</p>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input type="password" id="password" className="form-control mt-1" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} />
                            <p className="error">{errors.password}</p>
                            <p className="error">{errors.login}</p>
                            <div className="mt-3">
                                <button className="btn btn-lg btn-primary btn-block"  >Log in</button>
                            </div>
                            <div className="mt-3 text-center">
                                Not Registered? <Link to="/Signup" className="text-dark fw-bold" > Create an Account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export const userList = [
    {userName : "Daniel" , nickName: "daniel" , picture : "./images/cat1.png" , password: "123"},,
    {userName : "Rita" , nickName: "rita" , picture : "./images/cat2.png" , password: "789"},
    {userName : "Moshe" , nickName: "moshe" , picture : "./images/cat3.png" , password: "789"},
    {userName : "Sara" , nickName: "sara" , picture : "./images/cat4.png" , password: "789"},
    {userName : "Alice" , nickName: "alice" , picture : "./images/cat5.png" , password: "789"},
    {userName : "Bob" , nickName: "bob" , picture : "./images/cat6.png" , password: "789"},
    {userName : "Eden" , nickName: "eden" , picture : "images/cat7.png" , password: "789"},
]
