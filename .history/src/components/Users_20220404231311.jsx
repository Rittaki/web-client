import React from 'react'

export default function Users(props) {
    const userList = [
        {userName : "daniel" , nickName: " Daniel" , picture : " " , password: " 123"},
        {userName : "eden" , nickName: "eden" , picture : " " , password: "456"},
        {userName : "rita" , nickName: "rita" , picture : " " , password: "789"},

    ]

    function compare(){
        
    }

    function checkDatabase(){
        if(props.submit){
            userList.map((item)=>{if(item.userName==props.checkName && item.password==props.checkPassword)})
        }
    }
  return (
    <div>
    </div>
  )
}

