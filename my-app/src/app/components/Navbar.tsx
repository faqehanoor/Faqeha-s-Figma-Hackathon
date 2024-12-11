"use client";
import Image from "next/image";
import Link from "next/link";  
import user from "@/Images/Like.png";
import search from "@/Images/Search.png";
import cart from "@/Images/Trolly.png";
import Login from "@/Images/navbar-nav.png"
import { useState } from "react"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div className="navbar">
      <div className="logo">Bandage</div>

      {/* Desktop Menu */}
      <div className="desktop-menu">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/pages">Pages</Link></li>
        </ul>
        <div className="icons-section">
          <span className="login">Login/Register</span>
          <Image src={user} alt="user" width={16} height={16} />
          <Image src={search} alt="search" width={16} height={16} />
          <Image src={cart} alt="cart" width={16} height={16} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/pages">Pages</Link></li>
        </ul>
  
        <button className="login">Login/Register</button>
  
      </div>
    </div>
  );
}
