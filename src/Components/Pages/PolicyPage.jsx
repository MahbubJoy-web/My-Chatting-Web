import React from 'react'
import Footer from '../Footer/Footer'

const PolicyPage = () => {
  return (
    <div>
      <div className="privacy">
        <div className="container">
            <h2 className='mt-[100px] w-full text-center text-3xl font-Big_Shoulders font-semibold mb-10'>Privacy Policy</h2>
            <div className="border-b border-1 border-[#000] pb-[50px]">
                <p className='mt-[20px] text-lg font-poppins font-medium'>✅<span className='font-bold text-xl'>Effective Date:</span> 10-03-2025</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>✅<span className='font-bold text-xl'>Last Update:</span> 10-03-2025</p>
                <p className='mt-10 text-lg font-poppins font-medium'>At <span className='font-bold'>Force Coder</span>, we believe in transforming digital communication with innovation, security, and efficiency. As part of our mission to redefine online chatting, we proudly introduce FC Chatting Web-a next-gen, ultra-secure, and high-performance messaging platform that brings you seamless conversations without compromising privacy.</p>
            </div>
            <div className="mt-[100px] border-b border-1 border-[#000] pb-[50px]">
                <h2 className='font-poppins font-semibold text-2xl'>1. Information We Collect</h2>
                <h3 className='mt-10 text-lg font-poppins font-medium mb-[80px]'>FC Chatting Web is designed to provide a secure and anonymous chat experience. We minimize the collection of personal data and do not require phone numbers or other sensitive information. However, we may collect:</h3>
                <p className='mt-[20px] text-lg font-poppins font-medium'>✅<span className='font-semibold text-xl'>Account Information: </span> When you register, we may collect a unique username and optional profile details (if provided by you).</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>✅<span className='font-semibold text-xl'>Chat Data:</span> Your messages are stored securely using Firebase, ensuring real-time delivery. We do not access, read, or share your private messages.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>✅<span className='font-semibold text-xl'>Chat Data:</span>  We may collect non-personal data such as browser type, device model, and IP address to improve the app’s functionality and security.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>✅<span className='font-semibold text-xl'>Cookies & Local Storage:</span> We may use cookies or local storage to enhance user experience and session management</p>
            </div>
            <div className="mt-[100px] border-b border-1 border-[#000] pb-[50px]">
                <h2 className='font-poppins font-semibold text-2xl mb-[50px]'>2. How We Use Your Information</h2>
                <h3 className='mt-10 text-lg font-poppins font-medium'>We use collected data for the following purposes:</h3>
                <p className='mt-[20px] text-lg font-poppins font-medium'>🔹To provide real-time messaging services.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>🔹To enhance security and prevent unauthorized access.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>🔹To improve app performance and optimize user experience.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>🔹To troubleshoot technical issues and maintain service stability.</p>
            </div>
            <div className="mt-[100px] border-b border-1 border-[#000] pb-[50px]">
                <h2 className='font-poppins font-semibold text-2xl'>3. Data Security</h2>
                <p className='mt-[20px] text-lg font-poppins font-medium'>We prioritize data security and privacy by implementing high-security plugins, encryption methods, and Firebase security rules. Your messages are securely stored and cannot be accessed by unauthorized users.
                <br /><br />
                We take all reasonable measures to protect your data; however, no system is completely foolproof. Users are advised to avoid sharing sensitive personal information through the chat.</p>
            </div>
            <div className="mt-[100px] border-b border-1 border-[#000] pb-[50px]">
                <h2 className='font-poppins font-semibold text-2xl mb-[50px]'>4. Data Sharing & Third-Party Services</h2>
                <p className='mt-[20px] text-lg font-poppins font-medium'>1. We do not sell, trade, or share your personal data with third parties.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>2. Firebase Services are used for secure authentication and real-time database functionalities.</p>
                <p className='mt-[20px] text-lg font-poppins font-medium'>3. We may disclose data if required by law enforcement or legal obligations.</p>
            </div>
            <div className="mt-[100px] border-b border-1 border-[#000] pb-[50px]">
                <h2 className='font-poppins font-semibold text-2xl mb-[50px]'>5. Contact Us</h2>
                <h3 className='mt-10 text-lg font-poppins font-medium mb-4'>If you have any questions or concerns regarding this Privacy Policy, feel free to contact us at:</h3>
                <a href='mailto:mahbubjoy.web@gmail.com' className='mt-[20px] text-lg font-poppins font-medium'>✉ Mahbubjoy.web@gmail.com</a>
                <p className='mt-[100px] text-lg font-poppins font-medium'>Thank you for trusting FC Chatting Web - a secure and innovative chat experience by Force Coder!.</p>
            </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default PolicyPage
