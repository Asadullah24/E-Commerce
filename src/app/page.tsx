import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";
import Promotion from "@/components/Promotion";
import Categories from "@/components/Categories";
import Bestselling from "@/components/Bestselling";
import Featuredproducts from "@/components/Featuredproducts";

export default function Home() {
  return (
    <main >
    <Hero/>
    <Featuredproducts />
    <Services />
    <Promotion />
    <Categories />
    <Bestselling />
    
    </main>
  )}