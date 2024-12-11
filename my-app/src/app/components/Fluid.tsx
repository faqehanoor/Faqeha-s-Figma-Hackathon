import React from 'react';
import Image from 'next/image';
import fluid from '@/Images/Fluid.png';

export default function Fluid() {
  return (
    <div className="fluid-container">
      <div className="fluid-image">
        <Image src={fluid} alt="fluid" />
      </div>
      <div className="text-container">
        <h1 className="text1">Summer 2020</h1>
        <h2 className="text2">Part of Neural Universe</h2>
        <span>We know how large will objects act, <br /> but things on a small circle</span>
        <button className="btn">Buy Now!</button>
        <button className="btn secondary">Read More</button>
      </div>
    </div>
  );
}
