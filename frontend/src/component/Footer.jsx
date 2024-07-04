import React from 'react'
import {socialMedia} from "../constant/index";
const Footer = () => {
    const footerLink =[
        {
            id:0,
            name:"About"
        },
        {
            id:1,
            name:"Contact Us"
        },
        {
            id:2,
            name:"Jobs"
        },
        {
            id:3,
            name:"Press Kit"
        }
    ];
  return (
    <div className='max-w-screen-2xl mx-auto dark:bg-black  bg-gray-700 md:py-10 py:20'>
       <div>
        <ul className='flex justify-center gap-10 py-10 md:py-0'>
            {footerLink.map((items)=>(
                <li key={items.id}>
                    <a href="">{items.name}</a>
                </li>
            ))}
        </ul>
       </div>
       <div className='py-8'>
          <ul className='flex justify-center gap-10'>
            {
                socialMedia.map((items,index)=>(
                  <items.icon key={index} className='w-8 h-8' />
                ))
            }
          </ul>
       </div>
       <div className="copyright-section flex justify-center text-[12px] py-5 ">
        <p>Copyright @2024 - All right reserved by ACME Industries Ltd</p>
       </div>
    </div>
  )
}

export default Footer
