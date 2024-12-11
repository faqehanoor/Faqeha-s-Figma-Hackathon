import React from 'react';
import Image from 'next/image';  // Import Image from next/image
import picture from "@/Images/desktop-product-cards-10 (1).png"; // Import the image

export default function Products() {
  return (
    <div>
        <span className='products'>Featured Products</span>
        <h2 className='h2'>BESTSELLER PRODUCTS</h2>
        <p className='problems'>Problems trying to resolve the conflicts!</p>
        <Image src={picture} alt="Featured Product" />
    </div>
  );
}
