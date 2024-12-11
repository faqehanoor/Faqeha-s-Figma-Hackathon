import React from 'react';
import Image from 'next/image';
import Hero from "@/Images/shop-hero-2-png-picture-1.png";

export default function ClassicProduct() {
  return (
    <div className="classic-product-container">
      <div className="heropicture">
        <Image src={Hero} alt="pic" />
      </div>
      <div className="text-container">
        <h1 className="font">Summer 2020</h1>
        <h2 className="style">Vita Classic Product</h2>
        <p className="para">
          We know how large will objects act,<br />
          We know how objects act.
        </p>
        <div className="price-container">
          <p className="money">$16.48</p>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
