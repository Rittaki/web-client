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
        if(find){
            props.setIsFound(true)
        }
        props.setIsChecked(true);
    })
    function compare(item){
        if(item.userName==props.checkName){
            if(item.password==props.checkPassword){
                setFind(true);
            }
        }
    }

    function checkDatabase(){
        if(props.submit){
            userList.map((item)=>compare(item));
        }
    }
  return (
    <div>
    </div>
  )
}
ReactDOM.render(<checkDatabase />, document.getElementById('root'));

