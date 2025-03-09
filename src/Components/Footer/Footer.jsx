import React from 'react'
 import logo from '../../assets/Image/web logo.png'
 import Fb from '../../assets/Image/facebook.png'
 import instra from '../../assets/Image/instagram.png'
 import linkdin from '../../assets/Image/linkedin.png'
 import git from '../../assets/Image/GitHub.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-6">
        <div className="container">
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            {/* Logo */}
            <div className=" items-center ml-5">
              <img src={logo} alt="Force Coder Logo" className="inline-block w-[100px] h-[80px] w-auto" />
              <span className="text-lg font-semibold mr-5">Force Coder</span>
          
            </div>

            {/* Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/" className="hover:text-gray-400">Home</Link>
              <Link to="/About" className="hover:text-gray-400">About</Link>
              <Link to="/privecy" className="hover:text-gray-400">Privacy Policy</Link>
            </div>

            {/* Social Media Icons */}
            <div className="text-center mt-4 md:mt-0">
              <h2 className=''> Contact :</h2>
              <div className=" flex gap-2 items-center">
              <a  href='https://www.facebook.com/force.coder' target='blank' className="hover:text-gray-400">
                <img src={Fb} alt='' className="fab fa-facebook-f"></img>
              </a>
              <a  href='https://www.instagram.com/chocolate__paglah/' target='blank' className="hover:text-gray-400">
                <img src={instra} alt='' className="fab fa-twitter"></img>
              </a>
              <a href='https://www.linkedin.com/in/mahbub-hasan-joy-a3ba51344/' target='blank' className="hover:text-gray-400">
                <img src={linkdin} alt='' className="fab fa-instagram"></img>
              </a>
              <a  href='https://github.com/MahbubJoy-web' target='black' className="hover:text-gray-400">
                <img src={git} alt='' className="fab fa-github w-[35px] h-[35px]"></img>
              </a>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="text-center text-gray-500 mt-4 text-sm">
            &copy; 2025 Force Coder. All rights reserved.
          </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
