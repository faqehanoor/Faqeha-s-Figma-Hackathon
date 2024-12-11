import React from 'react';
import Image from 'next/image';  
import Picture from "@/Images/container.png"; 

export default function EditiorPicK() {
  return (
    <div>
      <h1 className="fonteditor">Editor's Pick</h1>
      <p className="textp">Problems trying to resolve the conflicts!</p>
      <Image 
        src={Picture}
        alt="picture"
        layout='responsive'
      />
    </div>
  );
}
