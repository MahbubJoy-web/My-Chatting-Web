import React, { useState } from 'react'
import './Navber.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineUserDelete } from "react-icons/ai";
import { LuUserRoundCheck } from "react-icons/lu";
import { Link } from 'react-router-dom';


const Navber = () => {
    const [ show, setShow ] = useState(false)
  return (
  <>
  <nav className='w-full h-[100px] bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center px-4'> 
    <div className={`main_nav ${show ? 'openManu' : 'CloseManu'}`} >
      <div className={`Icon icon1 ${show ? 'ShowIcon' : 'HideIcon'}`} >
          <ul>
            <li> <Link to={'/'}><FaRegCircleUser/></Link>
            <p>Profile</p></li>
            <li> <Link to={'/Users'}><GoPeople/></Link>
            <p>Users</p></li>
            <li> <Link to={'/massege'}><BiMessageSquareDetail/></Link>
            <p>Message</p></li>
          </ul>
      </div>
      <button onClick={()=> setShow(!show)} className=' Main_icon text-gray-500'>
        {
          show?
      <AiOutlineHome className='w-[25px] h-[25px]'/>
      :
      <AiFillHome className='w-[25px] h-[25px]'/>
        }
      </button>
      <div className={`Icon icon2 ${show ? 'ShowIcon' : 'HideIcon'}`}>
          <ul>
            <li> <Link to={'/request'}><AiOutlineUserAdd/></Link>
            <p>Request</p></li>
            <li> <Link to={'/friends'}><LuUserRoundCheck/></Link>
            <p>Friends</p></li>
            <li> <Link to={'/blocklist'}><AiOutlineUserDelete/></Link>
            <p>Block</p></li>
          </ul>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Navber
