import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CommonUserProfile from '../Common/CommonUserProfile';
import {MsgUser } from '../../Slice/MsgFrnd';

const MsgList = () => {
    const [AllFirnd , setAllFriend] = useState([])

// ============Firebase Database================//
const db = getDatabase();
// ================redux====================//
const currentUser = useSelector((state)=> state. Data.value);
const dispatch = useDispatch()
// =============Unfriend Fun================//
const handleChatFrnd = (liner) => {
    localStorage.setItem('MsgUser',JSON.stringify(liner))
    dispatch(MsgUser(liner))
    console.log(liner)
}

// ==========Realtime Database================//
useEffect(()=>{
   onValue(ref(db, 'AllFriends/'), (snapshot) => {
    let arr = []
    snapshot.forEach((item) =>{
        if (item.val().currentUserEmail == currentUser.email){
            arr.push({friendid: item.val().friendId, friendName: item.val().friendName , friendEmail: item.val().friendEmail , friendPhoto: item.val().friendPhoto, key: item.key})
        }else if(item.val().friendEmail == currentUser.email){
            arr.push({friendId:item.val().friendId, friendName: item.val().currentUserName , friendEmail: item.val().currentUserEmail , friendPhoto: item.val().currentUserPhoto, key: item.key})
        }
    })
    setAllFriend(arr)
   
   })
},[])
  return (
    <>
    <div className="mainList w-[20%] border-r-2 border-[#000] p-3 overflow-y-scroll">
        <h2 className='text-[28px] text-gray-600 font-poppins font-semibold'>Friends</h2>
        {
            AllFirnd.map((item)=>(
        <div onClick={()=>handleChatFrnd(item)} key={item.key} className="pb-3 cursor-pointer border-b-[1px] border-[#000]">
            <CommonUserProfile CommonUserPhoto={item.friendPhoto} CommonUserEmail={item.friendEmail} CommonUserName={item.friendName}/>
        </div>
            ))
        }
    </div> 
    </>
  )
}

export default MsgList
