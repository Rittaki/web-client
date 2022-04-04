import React from 'react'
import { useState } from 'react';
export default function Users(props) {
    const userList = [
        {userName : "daniel" , nickName: "Daniel" , picture : " " , password: "123"},
        {userName : "eden" , nickName: "eden" , picture : " " , password: "456"},
        {userName : "rita" , nickName: "rita" , picture : " " , password: "789"},
    ]

    function compare(item){
        if(item.userName==props.checkName){
            if(item.password==props.checkPassword){
                props.setIsFound(true);
            }
        }
    }

    function checkDatabase(){
        if(props.submit){
            userList.map((item)=>compare(item));
            props.setIsChecked
        }
    }
  return (
    <div>
        {checkDatabase()}
    
    </div>
  )
}

