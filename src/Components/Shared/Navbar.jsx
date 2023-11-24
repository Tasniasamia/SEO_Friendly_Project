"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
const Navbar = () => {
  const pathname=usePathname()
  const [condition,setCondition]=useState(false);
  
  return (
    <div className="font-Poppins">
      <h1 className=" my-3">
      {/* navbar-for-web */}
<div className="lg:flex md:flex hidden justify-between items-center mx-[151px]">
    {/* logo */}

<div className="">
<svg width="113" height="48" viewBox="0 0 113 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="19.1501" y="19.1667" width="13.5529" height="13.5529" transform="rotate(-135 19.1501 19.1667)" fill="#059669"/>
<rect x="9.56674" y="28.75" width="13.5529" height="13.5529" transform="rotate(-135 9.56674 28.75)" fill="#34D399"/>
<rect x="28.7335" y="47.9167" width="13.5529" height="13.5529" transform="rotate(-135 28.7335 47.9167)" fill="#34D399"/>
<rect x="9.56674" y="47.9167" width="13.5529" height="13.5529" transform="rotate(-135 9.56674 47.9167)" fill="#34D399"/>
<rect x="28.7335" y="28.75" width="13.5529" height="13.5529" transform="rotate(-135 28.7335 28.75)" fill="#34D399"/>
<path d="M38.3169 38.3333L28.7335 28.7499L38.3169 19.1666V29.5486V38.3333Z" fill="#059669"/>
<path d="M-0.0166321 19.1667L9.56675 28.75L-0.0166321 38.3334V27.9514V19.1667Z" fill="#059669"/>
<path d="M55.5589 35L63.7509 12.6H68.3589L76.5509 35H72.1989L70.4069 29.816H61.6709L59.8469 35H55.5589ZM62.7909 26.616H69.2869L66.0229 17.304L62.7909 26.616ZM84.8499 35C83.1859 35 81.8526 34.5947 80.8499 33.784C79.8473 32.9733 79.3459 31.5333 79.3459 29.464V22.552H76.6259V19.128H79.3459L79.8259 14.872H83.4419V19.128H87.7299V22.552H83.4419V29.496C83.4419 30.264 83.6019 30.7973 83.9219 31.096C84.2633 31.3733 84.8393 31.512 85.6499 31.512H87.6339V35H84.8499ZM93.4547 16.664C92.708 16.664 92.0893 16.44 91.5987 15.992C91.1293 15.544 90.8947 14.9787 90.8947 14.296C90.8947 13.6133 91.1293 13.0587 91.5987 12.632C92.0893 12.184 92.708 11.96 93.4547 11.96C94.2013 11.96 94.8093 12.184 95.2787 12.632C95.7693 13.0587 96.0147 13.6133 96.0147 14.296C96.0147 14.9787 95.7693 15.544 95.2787 15.992C94.8093 16.44 94.2013 16.664 93.4547 16.664ZM91.4067 35V19.128H95.5027V35H91.4067ZM106.338 35.384C104.93 35.384 103.693 35.16 102.626 34.712C101.559 34.2427 100.706 33.6027 100.066 32.792C99.4259 31.9813 99.0419 31.0427 98.9139 29.976H103.042C103.17 30.5947 103.511 31.128 104.066 31.576C104.642 32.0027 105.378 32.216 106.274 32.216C107.17 32.216 107.821 32.0347 108.226 31.672C108.653 31.3093 108.866 30.8933 108.866 30.424C108.866 29.7413 108.567 29.2827 107.97 29.048C107.373 28.792 106.541 28.5467 105.474 28.312C104.791 28.1627 104.098 27.9813 103.394 27.768C102.69 27.5547 102.039 27.288 101.442 26.968C100.866 26.6267 100.397 26.2 100.034 25.688C99.6713 25.1547 99.4899 24.504 99.4899 23.736C99.4899 22.328 100.045 21.144 101.154 20.184C102.285 19.224 103.863 18.744 105.89 18.744C107.767 18.744 109.261 19.1813 110.37 20.056C111.501 20.9307 112.173 22.136 112.386 23.672H108.514C108.279 22.4987 107.394 21.912 105.858 21.912C105.09 21.912 104.493 22.0613 104.066 22.36C103.661 22.6587 103.458 23.032 103.458 23.48C103.458 23.9493 103.767 24.3227 104.386 24.6C105.005 24.8773 105.826 25.1333 106.85 25.368C107.959 25.624 108.973 25.912 109.89 26.232C110.829 26.5307 111.575 26.9893 112.13 27.608C112.685 28.2053 112.962 29.0693 112.962 30.2C112.983 31.1813 112.727 32.0667 112.194 32.856C111.661 33.6453 110.893 34.264 109.89 34.712C108.887 35.16 107.703 35.384 106.338 35.384Z" fill="#111827"/>
</svg>
     
</div>
{/* menu */}
  <ul className="list-style-none flex">
    <li className={`text-[16px] mx-[30px] px-[10px] rounded-lg ${pathname == "/"?"text-[#059669]  py-[3px]":"secondary-color"} `}><Link href="/">Start</Link></li>
    <li className='text-gray-300 mt-2'>
                        <svg className='w-4 h-4 current-fill' xmlns='http://www.w3.org/2000/svg' fill='none'viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'/>
                        </svg>
                    </li>
    <li className={`text-[16px] mx-[30px] px-[10px]  rounded-lg ${pathname == "/Team"?"text-[#059669]  py-[3px]":"secondary-color"} `}><Link href="/Team">Team</Link></li>
    <li className='text-gray-300 mt-2'>
                        <svg className='w-4 h-4 current-fill' xmlns='http://www.w3.org/2000/svg' fill='none'viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'/>
                        </svg>
                    </li>
    <li className={`text-[16px] mx-[30px] px-[10px]  rounded-lg ${pathname == "/Services"?"text-[#059669]  py-[3px]":"secondary-color"} `}><Link href="/Services">Services</Link></li>
    <li className='text-gray-300 mt-2'>
                        <svg className='w-4 h-4 current-fill' xmlns='http://www.w3.org/2000/svg' fill='none'viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'/>
                        </svg>
                    </li>
    <li className={`text-[16px] mx-[30px] px-[10px]  rounded-lg ${pathname == "/Projects"?"text-[#059669]  py-[3px]":"secondary-color"} `}><Link href="/Projects">Projects</Link></li>
    <li className='text-gray-300 mt-2'>
                        <svg className='w-4 h-4 current-fill' xmlns='http://www.w3.org/2000/svg' fill='none'viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'/>
                        </svg>
                    </li>
    <li className={`text-[16px] mx-[30px] px-[10px]  rounded-lg ${pathname == "/Testimonial"?"text-[#059669]  py-[3px]":"secondary-color"} `}><Link href="/Testimonial">Testimonial</Link></li>

   
  </ul>
{/* favourite */}
<button className=" text-white px-[24px] py-[16px] bg-[#059669] rounded-xl text-[16px] rounded-xl">Contact Us</button>
</div>
{/* navbar-for-mobile */}
<div className="mx-[16px]">
  {/* logo and icon section */}
<div className="lg:hidden md:hidden flex justify-between items-center ">
<svg width="109" height="42" viewBox="0 0 113 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="19.1501" y="19.1667" width="13.5529" height="13.5529" transform="rotate(-135 19.1501 19.1667)" fill="#059669"/>
<rect x="9.56674" y="28.75" width="13.5529" height="13.5529" transform="rotate(-135 9.56674 28.75)" fill="#34D399"/>
<rect x="28.7335" y="47.9167" width="13.5529" height="13.5529" transform="rotate(-135 28.7335 47.9167)" fill="#34D399"/>
<rect x="9.56674" y="47.9167" width="13.5529" height="13.5529" transform="rotate(-135 9.56674 47.9167)" fill="#34D399"/>
<rect x="28.7335" y="28.75" width="13.5529" height="13.5529" transform="rotate(-135 28.7335 28.75)" fill="#34D399"/>
<path d="M38.3169 38.3333L28.7335 28.7499L38.3169 19.1666V29.5486V38.3333Z" fill="#059669"/>
<path d="M-0.0166321 19.1667L9.56675 28.75L-0.0166321 38.3334V27.9514V19.1667Z" fill="#059669"/>
<path d="M55.5589 35L63.7509 12.6H68.3589L76.5509 35H72.1989L70.4069 29.816H61.6709L59.8469 35H55.5589ZM62.7909 26.616H69.2869L66.0229 17.304L62.7909 26.616ZM84.8499 35C83.1859 35 81.8526 34.5947 80.8499 33.784C79.8473 32.9733 79.3459 31.5333 79.3459 29.464V22.552H76.6259V19.128H79.3459L79.8259 14.872H83.4419V19.128H87.7299V22.552H83.4419V29.496C83.4419 30.264 83.6019 30.7973 83.9219 31.096C84.2633 31.3733 84.8393 31.512 85.6499 31.512H87.6339V35H84.8499ZM93.4547 16.664C92.708 16.664 92.0893 16.44 91.5987 15.992C91.1293 15.544 90.8947 14.9787 90.8947 14.296C90.8947 13.6133 91.1293 13.0587 91.5987 12.632C92.0893 12.184 92.708 11.96 93.4547 11.96C94.2013 11.96 94.8093 12.184 95.2787 12.632C95.7693 13.0587 96.0147 13.6133 96.0147 14.296C96.0147 14.9787 95.7693 15.544 95.2787 15.992C94.8093 16.44 94.2013 16.664 93.4547 16.664ZM91.4067 35V19.128H95.5027V35H91.4067ZM106.338 35.384C104.93 35.384 103.693 35.16 102.626 34.712C101.559 34.2427 100.706 33.6027 100.066 32.792C99.4259 31.9813 99.0419 31.0427 98.9139 29.976H103.042C103.17 30.5947 103.511 31.128 104.066 31.576C104.642 32.0027 105.378 32.216 106.274 32.216C107.17 32.216 107.821 32.0347 108.226 31.672C108.653 31.3093 108.866 30.8933 108.866 30.424C108.866 29.7413 108.567 29.2827 107.97 29.048C107.373 28.792 106.541 28.5467 105.474 28.312C104.791 28.1627 104.098 27.9813 103.394 27.768C102.69 27.5547 102.039 27.288 101.442 26.968C100.866 26.6267 100.397 26.2 100.034 25.688C99.6713 25.1547 99.4899 24.504 99.4899 23.736C99.4899 22.328 100.045 21.144 101.154 20.184C102.285 19.224 103.863 18.744 105.89 18.744C107.767 18.744 109.261 19.1813 110.37 20.056C111.501 20.9307 112.173 22.136 112.386 23.672H108.514C108.279 22.4987 107.394 21.912 105.858 21.912C105.09 21.912 104.493 22.0613 104.066 22.36C103.661 22.6587 103.458 23.032 103.458 23.48C103.458 23.9493 103.767 24.3227 104.386 24.6C105.005 24.8773 105.826 25.1333 106.85 25.368C107.959 25.624 108.973 25.912 109.89 26.232C110.829 26.5307 111.575 26.9893 112.13 27.608C112.685 28.2053 112.962 29.0693 112.962 30.2C112.983 31.1813 112.727 32.0667 112.194 32.856C111.661 33.6453 110.893 34.264 109.89 34.712C108.887 35.16 107.703 35.384 106.338 35.384Z" fill="#111827"/>
</svg>
<div className="flex items-center">


{
  condition?<i className="fa-solid fa-xmark  text-[#059669] ms-[16px] text-[24px]"onClick={()=>{setCondition(false)}}></i>:<i className="fa-solid  fa-align-right text-[#059669] ms-[16px] text-[24px]"onClick={()=>{setCondition(true)}}></i>
}
</div>
  </div>

{/* menu section */}
<div>
  {
    condition && <ul className="list-style-none text-start text-[12px] mt-[20px]">
    <li><Link href="/" className={`py-2 m-4 text-[12px] font-medium mx-auto  px-2 block  ${pathname === "/"? "text-[#059669] ":"secondary-color"}`}>Start</Link></li>
    <li><Link href="/Team" className={`py-2 m-4 text-[12px] font-medium mx-auto  px-2 block  ${pathname === "/Team"? "text-[#059669] ":"secondary-color"}`}>Team</Link></li>
    <li><Link href="/Services" className={`py-2 m-4 text-[12px] font-medium mx-auto  px-2 block  ${pathname === "/Services"? "text-[#059669] ":"secondary-color"}`}>Services</Link></li>
    <li><Link href="/Projects" className={`py-2 m-4 text-[12px] font-medium mx-auto  px-2 block  ${pathname === "/Projects"? "text-[#059669] ":"secondary-color"}`}>Projects</Link></li>
    <li><Link href="/Testimonial" className={`py-2 m-4 text-[12px] font-medium mx-auto  px-2 block  ${pathname === "/Testimonial"? "text-[#059669] ":"secondary-color"}`}>Testimonial</Link></li>
    <li><Link href="/Contact" className={`py-2 m-4 text-[12px] font-medium mx-auto  px-2 block  ${pathname === "/Contact"? "text-[#059669] ":"secondary-color"}`}>Contact</Link></li>


  </ul>
  }
  
</div>

</div>
</h1>
    </div>
  );
};

export default Navbar;
