import Image from "next/image";
import HomePage from "./components/HomePage";
import Fluid from "./components/Fluid"
import Navbar from "./components/Navbar";
import TopHeader from "./components/TopHeader";
import Post from "./components/Post";
import './globals.css';
import EditiorPicK from "./components/EditiorPicK";
import Products from "./components/Products";
import ClassicProduct from "./components/ClassicProduct";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <HomePage />
      <EditiorPicK />
      <Products />
      <ClassicProduct />
      <Fluid />
      <Post />
      <Footer />
    </div>
  );
}
