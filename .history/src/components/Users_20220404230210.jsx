import React from 'react'

export default function Users(props) {
    if(props.submit){
        console.log(props.checkName)
    }
    console.log(props.checkName)
    const userList = [
        {userName : "daniel" , nickName: " Danieli" , picture : " " , password: " 123"},
        {userName : "eden" , nickName: "lala" , picture : " " , password: " "},

    ]
  return (
    <div>
    </div>
  )
}

