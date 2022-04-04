import React from 'react'
import { useState } from 'react';
export default function Users(props) {
    const[isFound, setIsFound] = useState(false);
    const userList = [
        {userName : "daniel" , nickName: "Daniel" , picture : " " , password: "123"},
        {userName : "eden" , nickName: "eden" , picture : " " , password: "456"},
        {userName : "rita" , nickName: "rita" , picture : " " , password: "789"},
    ]

    function compare(item){
        if(item.userName==props.checkName){
            if(item.password==props.checkPassword){
                setIsFound(true);
            }
        }
    }

    function checkDatabase(){
        if(props.submit){
            userList.map((item)=>compare(item));
            return isFound
        }
    }
  return (
    <div>
        {checkDatabase()}
        <login isFound={isFound} isChecked={true/>
    </div>
  )
}

