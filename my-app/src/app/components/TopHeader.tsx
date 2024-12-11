import React from 'react';
import Image from 'next/image';
import phone from '@/Images/Phone.png'; 
import mail from '@/Images/Mail.png';
import Instagram from '@/Images/Insta.png';
import facebook from '@/Images/Facebook.png';
import twiter from '@/Images/Twiter.png';
import Youtube from '@/Images/Youtube.png';

export default function TopHeader() {
  return (
    <div className='custom-bg'>
      <div className='flex justify-between items-center w-full h-full px-6'>
        <div className='flex gap-4'>
          <button className='flex items-center gap-2 p-2 text-white'>
            <Image 
              src={phone} 
              alt="phone" 
              width={16} 
              height={16} 
            />
            <span className="font-Montserrat font-semibold text-[14px]">(225) 555-0118</span>
          </button>

          <button className='flex items-center gap-2 p-2 text-white'>
            <Image 
              src={mail} 
              alt="Mail" 
              width={16} 
              height={16} 
            />
            <span className="font-Montserrat font-semibold text-[14px]">michelle.rivera@example.com</span>
          </button>
        </div>

        <h6 className='font-semibold text-white'>Follow Us and get a chance to win 80% off</h6>

        <div className="flex gap-[10px] items-center">
          <h6 className="text-white text-[14px]">Follow Us:</h6>
          <div className="flex gap-4">
            <Image src={Instagram} alt="Instagram" width={16} height={16} />
            <Image src={Youtube} alt="YouTube" width={16} height={16} />
            <Image src={facebook} alt="Facebook" width={16} height={16} />
            <Image src={twiter} alt="Twitter" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
