import React from 'react'
import { Link } from 'react-router-dom'
import upwork from '../../assets/Image/UpworkLogo.png'
import Fiverr from '../../assets/Image/FiverrLogo.png'
import gmail from '../../assets/Image/Gmail_icon_(2020).svg.png'
import facebook from '../../assets/Image/facebook-logo-facebook-icon-free-free-vector.png'
import Footer from '../Footer/Footer'


const AboutPage = () => {
  return (
    <>
    <div className="About mt-[150px]">
        <div className="container">
            <div className="border-b border-1 border-[#000]">
                <h2 className='text-4xl font-bold font-Big_Shoulders'>FC Chatting Web A Creation of Force Coder</h2>
                <p className='mt-10 text-lg font-poppins font-medium'>At Force Coder, we believe in transforming digital communication with innovation, security, and efficiency. As part of our mission to redefine online chatting, we proudly introduce FC Chatting Web-a next-gen, ultra-secure, and high-performance messaging platform that brings you seamless conversations without compromising privacy.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>
                Unlike conventional messaging apps, FC Chatting Web eliminates the need for phone numbers, allowing users to chat freely, securely, and anonymously. Built with state-of-the-art technologies like React.js, Tailwind CSS, Firebase, and Redux, this platform ensures a lightning-fast, smooth, and real-time chatting experience—without any interruptions.
                </p>
                <p className='mt-[20px] text-lg font-poppins font-medium pb-[50px] '>
                This is not just another chat application—it's a game-changer in the world of digital communication, meticulously crafted by Force Coder, a brand committed to technological excellence and online security.</p>
            </div>
            <div className="mt-[80px] border-b border-1 border-[#000]">
                <h2 className='text-5xl font-bold font-Big_Shoulders'>🚀 What is FC Chatting Web?</h2>
                <p className='mt-10 text-lg font-poppins font-medium'>🔹<span className='font-bold text-xl'>A Force Coder Innovation</span> - Developed by a team dedicated to cutting-edge software solutions.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>🔹<span className='font-bold text-xl '>No Phone Number Required</span>- Enjoy complete anonymity and privacy while chatting.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>🔹<span className='font-bold text-xl'>Real-Time, Lag-Free Messaging </span>- Firebase ensures instant delivery of messages with zero delay.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>🔹<span className='font-bold text-xl'>Optimized for Performance</span>- Redux ensures lightweight, smooth, and ultra-fast navigation.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>🔹<span className='font-bold text-xl'>Modern & Elegant UI </span>- Designed with React.js & Tailwind CSS, offering a visually stunning and highly intuitive interface.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium pb-[56px]'>🔹<span className='font-bold text-xl'>Web-Based & Hassle-Free</span>- No downloads required! Access FC Chatting Web from any device, anywhere, anytime.</p>
            </div>
            <div className="mt-[80px] border-b border-1 border-[#000]">
                <h2 className='text-5xl font-bold font-Big_Shoulders'>The Force Coder Vision – Innovation Meets Privacy & Performance</h2>
                <p className='mt-10 text-lg font-poppins font-medium mb-8'>At Force Coder, we don't just build websites—we create cutting-edge digital experiences. Our mission is to deliver high-performance, secure, and visually stunning web solutions while ensuring complete privacy and efficiency for users.
                <br /><br />
                As a Front-end React JS Developer, I specialize in bringing ideas to life with sleek, responsive, and high-performing websites. But Force Coder is more than just frontend development—it's a complete web development powerhouse offering a range of premium services, including:</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>✅<span className='font-bold text-xl'> Figma to Website</span>- Pixel-perfect designs converted into high-quality websites.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>✅<span className='font-bold text-xl'>Web Development & Web Design</span>- Creating modern, responsive, and visually striking web experiences.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>✅<span className='font-bold text-xl'> Website Management</span>- Ensuring smooth performance, security, and regular updates.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>✅<span className='font-bold text-xl'> New Website Creation</span>- From concept to deployment, building robust and scalable web solutions.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>✅<span className='font-bold text-xl'> Fast Delivery & 24/7 Active Support </span>- Quick turnaround times with round-the-clock assistance.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>✅<span className='font-bold text-xl'>Problem Solutions & Lifetime Support</span>- Addressing issues efficiently while offering lifetime technical support.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium mb-[40px]'>✅<span className='font-bold text-xl'>Full-Stack Developmen</span>-Building complete web applications using React JS as the font-end language Firebase as the back-end language.</p>
                <p className='text-lg font-poppins font-medium pb-[50px] '>At Force Coder, we merge speed, security, and innovation to craft web solutions that stand out in the digital world. Whether it's a simple landing page or a complex full-stack web application, we guarantee a flawless user experience and long-term reliability.</p>
            </div>
            <div className="mt-[80px] pb-[150px]">
                <h2 className='text-5xl font-bold font-Big_Shoulders'>🚀Let's build something extraordinary together! 🚀</h2>
                <p className='mt-[20px] text-lg font-poppins font-medium pb-[50px] '>This version highlights both <span className='font-bold'>Force Coder's</span> vision and your personal expertise & services. Let me know if you need any modifications! 😊</p>
                <div className="flex gap-8 items-center">
                <a href='https://www.upwork.com/nx/find-work/best-matches' target='blank' ><img src={upwork} alt=''className='w-[50px] h-[50px]'/></a>
                <a href='https://www.fiverr.com/joy__web/buying?source=avatar_menu_profile'><img src={Fiverr} alt=''className='w-[90px] h-[50px]'/></a>
                <a href='https://www.facebook.com/force.coder'><img src={facebook} alt=''className='w-[50px] h-[50px]'/></a>
                <a href='mailto:mahbubjoy.web@gmail.com'><img src={gmail} alt=''className='w-[50px] h-[40px]'/></a>
                </div>
            </div>
        </div>
            <Footer/>
    </div> 
    </>
  )
}

export default AboutPage
