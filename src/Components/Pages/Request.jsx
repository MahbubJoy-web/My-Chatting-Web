import React, { useEffect, useState } from 'react'
import CommonUserProfile from '../Common/CommonUserProfile'
import ButtonV1 from '../Common/ButtonV1'
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database'
import { useSelector } from 'react-redux'

const Request = () => {
// ============Custom Hooks================//
const [AllRqst , SetAllRqst] = useState([])

 // ============Firebase Database================//
const db = getDatabase();
// ================redux====================//
 const currentUser = useSelector((state)=> state. Data.value);
//  =============handleAccept================//
const handleAccept = (rang)=>{
    set(push(ref(db, 'AllFriends/')), {
        currentUserID : currentUser.uid,
        currentUserName: currentUser.displayName,
        currentUserPhoto : currentUser.photoURL,
        currentUserEmail : currentUser.email,
        friendId : rang.SenderId,
        friendName : rang.SenderName,
        friendEmail : rang.SenderEmailv,
        friendPhoto : rang.SenderPhoto,
      });
      remove(ref(db, 'AllRequest/' + rang.Key))
}

// =============handleRemove================//
const handleRemove = (removeUser) => {
    remove(ref(db, 'AllRequest/' + removeUser.Key))
    console.log(removeUser);
}

// ==========Realtime Database================//
useEffect(()=>{
    onValue(ref(db, '/AllRequest'), (snapshot) => {
        let arr = []
        snapshot.forEach((item)=> {
            if(item.val().receiverID == currentUser.uid){
                arr.push({...item.val(), Key: item.key})
            }
        })
        SetAllRqst(arr)
    })
},[])



  return (
    <>
        <div className="main-users px-3">
        <div className="container">
            <h2 className='text-[28px] text-gray-600 font-poppins font-semibold'>All Request</h2>
            {
                AllRqst.map((data , k)=>(
            <div key={k} className="flex flex-wrap items-center justify-between border-b-2 border-[#D3D3D3] py-2">
                <div className="">
                <CommonUserProfile CommonUserPhoto={data.SenderPhoto} CommonUserName={data.SenderName} CommonUserEmail={data.SenderEmailv}/>
                </div>
                <div className=" flex items-center gap-4 mx-auto mt-2 sm:mt-0 sm:mx-0">
                <ButtonV1 ButtonV1Click={()=>handleAccept(data)} ButtonBG={'bg-[#578FCA] text-white active:scale-[0.6] duration-[.9s] cursor-pointer'} ButtonText={'Accept'}/>
                <ButtonV1 ButtonV1Click={()=>handleRemove(data)} ButtonBG={'bg-[#FF5B5B] text-white active:scale-[0.6] duration-[.9s] cursor-pointer'} ButtonText={'Reject'}/>
                </div>
            </div>
                ))
            }
        </div>
    </div> 
    </>
  )
}

export default Request
