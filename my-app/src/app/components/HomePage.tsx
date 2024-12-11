import React from 'react';
import HomePic from '@/Images/Homepic.jpg';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="image-container">
      <Image src={HomePic} alt="Home" layout="responsive" />
      <div className="image-text">
        <span>Summer 2020</span>
        <h1>NEW COLLECTION</h1>
        <p>We know how large objects act, <br />but things on a small scale</p>
        <button className='homepagebutton'>SHOP NOW!</button>
      </div>
      
    </div>
  );
}
