// import React, { useEffect, useState } from 'react'
// import CommonUserProfile from '../Common/CommonUserProfile'
// import ButtonV1 from '../Common/ButtonV1'
// import { getDatabase, ref, onValue, set, push } from "firebase/database";
// import { use } from 'react';
// import { data } from 'react-router-dom';
// import { useSelector } from 'react-redux';


// const AllUsers = () => {
//     // ============Custom Hooks================//
//     const [Alluser , SetAlluser] = useState([])
    

//     // ============Firebase Database================//
//     const db = getDatabase();
//     // ================redux====================//
//     const currentUser = useSelector((state)=> state. Data.value);

//     // =============handleRequest================//
//     const handleRequest = (udss) => {
//         set(push(ref(db, 'AllRequest/')), {
//             SenderId : currentUser.uid,
//             SenderName : currentUser.displayName,
//             SenderEmailv : currentUser.email,
//             SenderPhoto : currentUser.photoURL,
//             receiverID : udss.key,
            
           
//           });
          
//     }

//     // ==========Realtime Database================//
//     useEffect(()=>{
//         onValue(ref(db, 'AllUsers'), (snapshot) => {
//            let hhg = []
//            snapshot.forEach((Alpa)=> {
//             if(Alpa.key != currentUser.uid){
//                 hhg.push({...Alpa.val(),key: Alpa.key})
//             }
//            })
//               SetAlluser(hhg)
//         });
//     },[])

//   return (
//     <>
//     <div className="main-users">
//         <div className="container">
//             <h2 className='text-[28px] text-gray-600 font-poppins font-semibold'>All Users</h2>
//             {
//                 Alluser.map((data, j)=>(
//                     <div key={j} className=" flex items-center justify-between">
//                     <CommonUserProfile CommonUserPhoto={data.UserPhoto} CommonUserName={data.UserName} CommonUserEmail={data.userEmail}/>
//                     <ButtonV1 ButtonV1Click={()=>handleRequest(data)} ButtonBG={'bg-[#B2A5FF] text-white active:scale-[0.6] duration-[.9s] cursor-pointer'} ButtonText={'Add'}/>
//                     </div>
//                 ))
//             }
//         </div>
//     </div> 
//     </>
//   )
// }

// export default AllUsers
// import React, { useEffect, useState } from 'react'
// import CommonUserProfile from '../Common/CommonUserProfile'
// import ButtonV1 from '../Common/ButtonV1'
// import { getDatabase, ref, onValue, set, push } from "firebase/database";
// import { useSelector } from 'react-redux';

// const AllUsers = () => {
//     // ============Custom Hooks================//
//     const [Alluser, SetAlluser] = useState([])
//     const [requestedUsers, setRequestedUsers] = useState([]);  // Track requested users

//     // ============Firebase Database================//
//     const db = getDatabase();
//     // ================redux====================//
//     const currentUser = useSelector((state)=> state.Data.value);

    
//     // =============handleRequest================//
//     const handleRequest = (udss) => {
//         if (!requestedUsers.includes(udss.key)) { // Check if the user is already requested
//             set(push(ref(db, 'AllRequest/')), {
//                 SenderId: currentUser.uid,
//                 SenderName: currentUser.displayName,
//                 SenderEmailv: currentUser.email,
//                 SenderPhoto: currentUser.photoURL,
//                 receiverID: udss.key,
//             });
//             setRequestedUsers([...requestedUsers, udss.key]); // Update local state
//         }
//     };
    
//     // ==========Realtime Database================//
//     useEffect(() => {
//         onValue(ref(db, 'AllUsers'), (snapshot) => {
//             let hhg = [];
//             snapshot.forEach((Alpa) => {
//                 if (Alpa.key !== currentUser.uid) {
//                     hhg.push({ ...Alpa.val(), key: Alpa.key });
//                 }
//             });
//             SetAlluser(hhg);
//         });
//     }, []);

//     // ========== Fetch Friend Requests to Check Existing Requests ==========//
//     useEffect(() => {
//         const requestRef = ref(db, 'AllRequest/');
//         onValue(requestRef, (snapshot) => {
//             let requests = [];
//             snapshot.forEach((item) => {
//                 if (item.val().SenderEmailv === currentUser.email) {
//                     requests.push(item.val().receiverID); // Store IDs of users requested by the current user
//                 }
//             });
//             setRequestedUsers(requests);
//         });
//     }, [currentUser.uid]);
    
//     return (
//         <>
//             <div className="main-users">
//                 <div className="container">
//                     <h2 className='text-[28px] text-gray-600 font-poppins font-semibold'>All Users</h2>
//                     {
//                         Alluser.map((data, j) => (
//                             <div key={j} className=" flex items-center justify-between">
//                                 <CommonUserProfile 
//                                     CommonUserPhoto={data.UserPhoto} 
//                                     CommonUserName={data.UserName} 
//                                     CommonUserEmail={data.userEmail}
//                                 />
//                                 <ButtonV1 
//                                     ButtonV1Click={() => handleRequest(data)} 
//                                     ButtonBG={requestedUsers.includes(data.key) 
//                                         ? 'bg-gray-400 text-white cursor-not-allowed' 
//                                         : 'bg-[#B2A5FF] text-white active:scale-[0.6] duration-[.9s] cursor-pointer'} 
//                                     ButtonText={requestedUsers.includes(data.key) ? 'Requested' : 'Add'}
//                                 />
//                             </div>
//                         ))
//                     }
//                 </div>
//             </div> 
//         </>
//     )
// }

// export default AllUsers;


// ================Updated Code============
import React, { useEffect, useState } from 'react'
import CommonUserProfile from '../Common/CommonUserProfile'
import ButtonV1 from '../Common/ButtonV1'
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useSelector } from 'react-redux';

const AllUsers = () => {
    const [Alluser, SetAlluser] = useState([]);
    const [requestedUsers, setRequestedUsers] = useState([]);  

    const db = getDatabase();
    const currentUser = useSelector((state) => state.Data.value);

    // =============handleRequest================//
    const handleRequest = (udss) => {
        const requestRef = ref(db, 'AllRequest/');
        
        if (requestedUsers.includes(udss.key)) {
            // Cancel Request
            onValue(requestRef, (snapshot) => {
                snapshot.forEach((item) => {
                    if (item.val().SenderId === currentUser.uid && item.val().receiverID === udss.key) {
                        remove(ref(db, `AllRequest/${item.key}`)); // Remove request from Firebase
                    }
                });
            });
            setRequestedUsers(requestedUsers.filter(id => id !== udss.key)); // Update local state
        } else {
            // Send Request
            set(push(requestRef), {
                SenderId: currentUser.uid,
                SenderName: currentUser.displayName,
                SenderEmailv: currentUser.email,
                SenderPhoto: currentUser.photoURL,
                receiverID: udss.key,
            });
            setRequestedUsers([...requestedUsers, udss.key]); // Update local state
        }
    };
    
    // ========== Real time database ==========//
    useEffect(() => {
        onValue(ref(db, '/AllUsers'), (snapshot) => {
            let hhg = [];
            snapshot.forEach((Alpa) => {
                if (Alpa.key !== currentUser.uid) {
                    hhg.push({ ...Alpa.val(), key: Alpa.key });
                }
            });
            SetAlluser(hhg);
        });
    }, []);

    // ========== Fetch Sent Requests from Firebase ==========//
    useEffect(() => {
        const requestRef = ref(db, 'AllRequest/');
        onValue(requestRef, (snapshot) => {
            let requests = [];
            snapshot.forEach((item) => {
                if (item.val().SenderId === currentUser.uid) {
                    requests.push(item.val().receiverID);
                }
            });
            setRequestedUsers(requests);
        });
    }, [currentUser.uid]);

    return (
        <div className="main-users">
            <div className="container">
                <h2 className='px-3 text-[28px] text-gray-600 font-poppins font-semibold'>All Users</h2>
                {
                    Alluser.map((data, j) => (
                        <div key={j} className="px-6 flex items-center justify-between">
                            <CommonUserProfile 
                                CommonUserPhoto={data.UserPhoto} 
                                CommonUserName={data.UserName} 
                                CommonUserEmail={data.userEmail}
                            />
                            <ButtonV1 
                                ButtonV1Click={() => handleRequest(data)} 
                                ButtonBG={requestedUsers.includes(data.key) 
                                    ? 'bg-red-500 text-white active:scale-[0.6] duration-[.9s] cursor-pointer' 
                                    : 'bg-[#B2A5FF] text-white active:scale-[0.6] duration-[.9s] cursor-pointer'} 
                                ButtonText={requestedUsers.includes(data.key) ? 'Cancel' : 'Add'}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllUsers;
