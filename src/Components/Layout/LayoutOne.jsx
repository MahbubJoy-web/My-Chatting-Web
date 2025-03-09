import React, { useEffect } from 'react'
import Navber from '../Navber/Navber'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const LayoutOne = () => {
  const currentUser = useSelector((state)=> state. Data.value);
  const navigate = useNavigate();

useEffect(()=>{
  if(currentUser === null){
    navigate('/login')
  }
},[])


  return (
    <>
      <Navber/>
      <Outlet/>
    </>
  )
}

export default LayoutOne
