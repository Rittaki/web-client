import React, { useEffect } from 'react'
import { useState } from 'react';

export default function Users(props) {
    const[inFind, setInFind] = useState(false);
    const userList = [
        {userName : "daniel" , nickName: "Daniel" , picture : " " , password: "123"},
        {userName : "eden" , nickName: "eden" , picture : " " , password: "456"},
        {userName : "rita" , nickName: "rita" , picture : " " , password: "789"},
    ]

    useEffect(()=>{
        console.log("hi");
        if(props.submit){
            userList.map((item)=>compare(item));
            if(inFind){
                
                props.setIsFound(true);
            }
            props.setIsSubmit(false);
        }
    },[])

    function compare(item){
        if(item.userName==props.checkName){
            if(item.password==props.checkPassword){
                setInFind(true);
            }
        }
    }
  return (
    <div>
    </div>
  )
}

