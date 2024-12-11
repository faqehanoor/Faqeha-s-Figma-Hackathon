import React from 'react';
import Image from 'next/image';
import Picture from "@/Images/desktop-blog-3 (1).png"

export default function () {
  return (
    <div>
<h1 className='practice'>Practice Advice</h1>
<h2 className='post1'>Featured Posts</h2>
<p className='p2'>Problems trying to resolve the confilcts between the <br />two major realms of Classical Physics: Newtonian mechanics</p>
    <Image src={Picture}  alt='pic'/>
    </div>
  )
}
