import './Login.css';
import { useState, useEffect } from 'react';
import Users from './Users';

function Login() {


    const userList = [
        {userName : "daniel" , nickName: "Daniel" , picture : " " , password: "123"},,
        {userName : "rita" , nickName: "rita" , picture : " " , password: "789"},
    ]
    const [userName , setUserName] =useState("")
    const [password , setPassword] =useState("")
    const[isSubmit, setIsSubmit] = useState(false);
    const[isFound, setIsFound] = useState(false);


    const sunbmitFun = (e) => {
        e.preventDefault();
        setIsSubmit(true);
    }

    useEffect(()=>{
        if(isSubmit){
            userList.map((item)=>compare(item));
            if(isFound){
                props.setIsFound(true);
            }
            else{
                props.setIsSubmit(false);
            }
        }
    })
    function compare(item){
        if(item.userName===props.checkName){
            if(item.password===props.checkPassword){
                setIsFound(true);
            }
        }
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12"></div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="mt-20">
                        <form className="form-container" onSubmit={sunbmitFun}>
                            <h1>Login</h1>
                            <div className="form-group mt-3">
                                <label htmlFor="user" className="sr-only">Username</label>
                                <input type="text" id="user" className="form-control mt-1 mb-3" placeholder="Username" required autoFocus onChange={(e)=>setUserName(e.target.value)}/>
                            </div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input type="password" id="password" className="form-control mt-1" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} />
                            <div className="mt-3">
                                <button className="btn btn-lg btn-primary btn-block"  >Sign in</button>
                            </div>
                            <div className="mt-3 text-center">
                                Not Registered? <a href="/Signup" className="text-dark fw-bold" > Create an Account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login