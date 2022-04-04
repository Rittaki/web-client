import React from 'react'

export default function Users(props) {
    const userList = [
        {userName : "daniel" , nickName: " Daniel" , picture : " " , password: " 123"},
        {userName : "eden" , nickName: "eden" , picture : " " , password: "456"},
        {userName : "rita" , nickName: "rita" , picture : " " , password: "789"},

    ]

    function checkDatabase(){
        if(props.submit){
            userList.map((item)=>if())
        }
    }
  return (
    <div>
    </div>
  )
}

