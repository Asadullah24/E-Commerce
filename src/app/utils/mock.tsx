import {Product} from "./types";


const products: Product[] = [
    {
      id: 1,
      title: "Black Women Printed Tee",
      image: ['/Images/black t-shirt.jpg', "/Images/t-shirt1.jpg"], // Replace with actual image paths or StaticImageData objects
      slug: "Blackshirt-100",
      price: 24.99,
      category: "tops",
      description: "Elevate your everyday style with our classic black printed T-shirt. Soft fabric and a timeless design make it a wardrobe must-have.",
      size: ["S", "M", "L","XL"],
      color: ["#ffffff", "#000000", "#e60000"],
      qty: 1,
      discount:0
    },
    {
      id: 2,
      title: "White Sneakers",
      image: ["/Images/Sneaker-1"], // Replace with actual image path or StaticImageData object
      slug: "Sneaker-101",
      price: 99.99,
      category: "Shoes",
      description: "Fresh kicks for every outfit. Our classic white sneakers offer timeless style and ultimate comfort. Pairs perfectly with jeans, dresses, or anything in between.",
      size: ["S", "M", "L","XL"],
      color: ["#ffffff", "#000000", "#e60000"],
      qty: 1,
      discount: 0, 
    },
    {
      id: 3,
      title: "Blue Pants",
      image: ['/Images/pants-1.webp','/Images/pants2.jpeg'], // Replace with actual image path or StaticImageData object
      slug: "pants-101",
      price: 14.95,
      category: "pants",
      description: "Look sharp and feel confident in our timeless blue pants, available in a variety of fits.",
      size: ["S", "M", "L","XL"],
      color: ["#ffffff", "#000000", "#e60000"],
      qty: 1,
      discount:0
    },
    {
      id: 4,
      title: "Black Sneakers",
      image: ["/Images/Sneaker-2.jpg", "/Images/BlackSneakers.jpg"], // Replace with actual image paths or StaticImageData objects
      slug: "running-shoes",
      price: 79.99,
      category: "Shoes",
      description: "Lightweight and comfortable running shoes for your workouts.",
      size: ["S", "M", "L","XL"],
      color: ["#ffffff", "#000000", "#e60000"],
      qty: 1,
      discount: 0
    },
    {
      id: 5,
      title: "Overcoat",
      image: ['/Images/Tops.jpg'], // Replace with actual image path or StaticImageData object
      slug: "Tops-101",
      price: 49.99,
      category: "Tops",
      description: "Embrace the chill in style. Our premium overcoat offers warmth and sophistication, crafted with high-quality materials for lasting comfort.  Elevate your winter wardrobe - shop now!",
      size: ["S", "M", "L","XL"],
      color: ["#ffffff", "#000000", "#e60000"],
      qty: 1,
      discount: 0
    },
  ];
  
  export default products;