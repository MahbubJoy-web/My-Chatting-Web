import React, { useEffect, useState } from 'react'
import CommonUserProfile from '../Common/CommonUserProfile'
import ButtonV1 from '../Common/ButtonV1'
import { useDispatch, useSelector } from 'react-redux'
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database'
import { useNavigate } from 'react-router-dom'
import { MsgUser } from '../../Slice/MsgFrnd'

const AllFriends = () => {
    // ============Custom Hooks================//
const [AllFirnd , setAllFriend] = useState([])
// ================redux================//
const dispatch = useDispatch()
// ================Navigation================//
const navigate = useNavigate()
// ============Firebase Database================//
const db = getDatabase();
// ================redux====================//
const currentUser = useSelector((state)=> state. Data.value);
//  =============block Fun================//
const handleBlock = (remote) => {
        set(push(ref(db, 'BlockList/')), {
            BlockfriendName : remote.friendName,
            BlockfriendEmail : remote.friendEmail,
            BlockfriendPhoto : remote.friendPhoto,
            currentUserID : currentUser.uid,
            currentUserEmail : currentUser.email,
          });
          remove(ref(db, 'AllFriends/' + remote.key))
          console.log(remote.key);
          
}

// =====================Navigate Button================//
const handleMassege = (dfsss) => {
        localStorage.setItem('MsgUser',JSON.stringify(dfsss))
        dispatch(MsgUser(dfsss))
        navigate('/massege')
}


// =============Unfriend Fun================//
const handleUnFriend = (liner) => {
    remove(ref(db, 'AllFriends/' + liner.key))
}

// ==========Realtime Database================//
useEffect(()=>{
   onValue(ref(db, 'AllFriends/'), (snapshot) => {
    let arr = []
    snapshot.forEach((item) =>{
        if (item.val().currentUserEmail == currentUser.email){
            arr.push({friendName: item.val().friendName , friendEmail: item.val().friendEmail , friendPhoto: item.val().friendPhoto, key: item.key})
        }else if(item.val().friendEmail == currentUser.email){
            arr.push({friendName: item.val().currentUserName , friendEmail: item.val().currentUserEmail , friendPhoto: item.val().currentUserPhoto, key: item.key})
        }
    })
    setAllFriend(arr)
   
   })
},[])


  return (
    <>
    <div className="main-users px-3">
        <div className="container">
            <h2 className='text-[28px] text-gray-600 font-poppins font-semibold'>All Friends</h2>
            {
                AllFirnd.map((data)=>(
                <div key={data.key} className="flex-wrap flex items-center justify-between border-b-2 border-[#D3D3D3] py-2">
                    <CommonUserProfile CommonUserPhoto={data.friendPhoto} CommonUserName={data.friendName} CommonUserEmail={data.friendEmail}/>
                    <div className="mx-auto sm:mx-0">
                        <div className="flex items-center gap-3">
                            <ButtonV1 ButtonV1Click={()=>handleMassege(data)} ButtonBG={'lg:hidden bg-[#D91656] text-white active:scale-[0.6] duration-[.9s] cursor-pointer'} ButtonText={'Massege'}/>
                            <ButtonV1 ButtonV1Click={()=>handleUnFriend(data)} ButtonBG={'bg-[#B2A5FF] text-white active:scale-[0.6] duration-[.9s] cursor-pointer'} ButtonText={'UnFriend'}/>
                            <ButtonV1 ButtonV1Click={()=>handleBlock(data)} ButtonBG={'bg-[#D91656] text-white active:scale-[0.6] duration-[.9s] cursor-pointer'} ButtonText={'Block'}/>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    </div> 
    </>
  )
}

export default AllFriends
