import React, { useEffect, useState } from 'react'
import CommonUserProfile from '../Common/CommonUserProfile'
import ButtonV1 from '../Common/ButtonV1'
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database'
import { useSelector } from 'react-redux'

const Blocklist = () => {
// ============Custom Hooks================
const [Allblock , setAllblock] = useState([])
// ============Firebase Database================//
 const db = getDatabase();
// ================redux====================//
const currentUser = useSelector((state)=> state. Data.value);
//  =============Unblock Fun================//
const handleUnBlock = (remote) => {
    set(push(ref(db, 'AllFriends/')), {
        currentUserID : currentUser.uid,
        currentUserName: currentUser.displayName,
        currentUserPhoto : currentUser.photoURL,
        currentUserEmail : currentUser.email,
        friendName : remote.BlockfriendName,
        friendEmail : remote.BlockfriendEmail,
        friendPhoto : remote.BlockfriendPhoto,
      })
      
      remove(ref(db, `BlockList/${remote.key}`));
      console.log(remote.key);
             
}

 // ==========Realtime Database================//
 useEffect(()=>{
    onValue(ref(db, 'BlockList/'), (snapshot) => {
        let wox = []
        snapshot.forEach((item) =>{
            if (item.val(). currentUserEmail == currentUser.email){
                wox.push({... item.val(), key: item.key}) 
            }
        });
        setAllblock(wox)
       
    })
},[])
console.log();

  return (
    <>
    <div className="main-users">
        <div className="container">
            <h2 className='text-[28px] text-gray-600 font-poppins font-semibold'>Block List</h2>
            {
                Allblock.map((remo)=>(
                <div key={remo.key} className=" flex items-center justify-between">
                    <CommonUserProfile CommonUserPhoto={remo.BlockfriendPhoto} CommonUserName={remo.BlockfriendName} CommonUserEmail={remo.BlockfriendEmail}/>
                    <div className=" flex items-center gap-3">
                        <ButtonV1 ButtonV1Click={()=>handleUnBlock(remo)} ButtonBG={'bg-[#B2A5FF] text-white active:scale-[0.6] duration-[.9s] cursor-pointer'} ButtonText={'UnBlock'}/>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Blocklist
