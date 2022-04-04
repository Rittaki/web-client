import React, { useEffect } from 'react'
import { useState } from 'react';

export default function Users(props) {
    const[find, setFind] = useState(false);
    const userList = [
        {userName : "daniel" , nickName: "Daniel" , picture : " " , password: "123"},
        {userName : "eden" , nickName: "eden" , picture : " " , password: "456"},
        {userName : "rita" , nickName: "rita" , picture : " " , password: "789"},
    ]

    useEffect(()=>{
        if(props.checkSubmit){
            userList.map((item)=>compare(item));
            if(find){
                props.checkSetIsFound(true);
            }
            props.SetIsSubmit(false)
        }
    },[])
    function compare(item){
        if(item.userName==props.checkName){
            if(item.password==props.checkPassword){
                setFind(true);
            }
        }
    }
  return (
    <div>
    </div>
  )
}

