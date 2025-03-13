import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import InputEmoji from "react-input-emoji";
import { FaRegPaperPlane } from "react-icons/fa";
import { getDatabase, onValue, push, ref } from 'firebase/database';

const MsgMobile = () => {
        // ===============redux=============
        const currentUser = useSelector((state) => state.Data.value);
        const ChatUser = useSelector((state) => state.ChatData.value);
    
        // ==========custom state==========
        const [Msgtext, setText] = useState("");
        const [AllMsg, setAllMsg] = useState([]);
    
        // ==========Firebase========//
        const db = getDatabase();
    
        // ===========Handle Message Send=============
        function handleOnEnter() {
            if (Msgtext.trim() === "") return; // Prevent empty messages
    
            push(ref(db, 'AllMsg/'), {
                SenderEmail: currentUser.email,
                SenderId: currentUser.uid,
                ReceiverEmail: ChatUser.friendEmail,
                Msg: Msgtext,
            });
            setText('')
    
        }
    //   =========Real-time Database========//
    useEffect(() => {
        onValue(ref(db, 'AllMsg/'), (snapshot) => {
            let Boxxer = [];
            snapshot.forEach((item) => {
                let message = item.val();

                // **Fix: Correct conditions for fetching messages**
                if (
                    (message.SenderEmail === currentUser.email && message.ReceiverEmail === ChatUser.friendEmail) ||
                    (message.ReceiverEmail === currentUser.email && message.SenderEmail === ChatUser.friendEmail)
                ) {
                    Boxxer.push({ ...message, key: item.key });
                }
            });
            setAllMsg(Boxxer);
        });
    }, [ChatUser]);
  return (
    <>
         <div className="w-full sm:hidden">
                {/* ====== User Info ====== */}
                <div className="userinfo px-4 w-full h-[80px] bg-[#F8FAFC] border-b-2 shadow-md flex gap-4 items-center">
                    <div className="w-[50px] h-[50px] rounded-full bg-gray-200 overflow-hidden">
                        <img src={ChatUser?.friendPhoto} alt="User" />
                    </div>
                    <div>
                        <h2 className='text-md font-bold text-gray-800'>{ChatUser?.friendName}</h2>
                        <p className='text-[14px]'>{ChatUser?.friendEmail}</p>
                    </div>
                </div>


                <div className="p-6 h-[650px] bg-[#F8FAFC] flex flex-col overflow-y-scroll">
                    {AllMsg.map((item, index) => (
                        item.SenderEmail === currentUser.email ? (
                            // ===========Sender's Message==============
                            <div key={index} className="max-w-[170px] py-2 px-3 my-1 bg-gray-200 ml-auto rounded-md font-poppins text-[16px]">
                                <p className="w-full break-words">{item.Msg}</p> {/* Ensures text breaks inside the container */}
                            </div>
                        ) : (
                            // ===========Receiver's Message==============
                            <div key={index} className="max-w-[170px] w-fit py-2 px-3 bg-[#A1E3F9] my-1 rounded-md font-poppins text-[16px]"> 
                                <p className="break-words">{item.Msg}</p> {/* Ensures text breaks inside the container */}
                            </div>
                        )
                    ))}
                </div>

                {/* ====== Message Input ====== */}
                <div className="flex gap-2 items-center px-3">
                    <InputEmoji
                        value={Msgtext}
                        onChange={setText}
                        cleanOnEnter
                        onEnter={handleOnEnter}
                        placeholder="Type a message"
                    />
                    <div className="text-[25px] text-gray-500 cursor-pointer">
                        <FaRegPaperPlane onClick={handleOnEnter} />
                    </div>
                </div>
            </div> 
    </>
  )
}

export default MsgMobile
