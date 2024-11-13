const ProductStore= [
    {
      id: 13,
      image: "/p13.jpg",
      name: "Classic Red & Black Shirt",
      price: "$10",
      description: "Stylish and comfortable for any occasion.",
    },
    {
      id: 14,
      image: "/p14.jpg",
      name: "Casual Denim Jacket",
      price: "$25",
      description: "Perfect for a casual look with high-quality denim.",
    },
    {
      id: 15,
      image: "/p15.jpg",
      name: "Slim Fit Jeans",
      price: "$30",
      description: "Trendy jeans with a slim fit, ideal for modern styles.",
    },
    {
      id: 16,
      image: "/p16.jpg",
      name: "Formal Blazer",
      price: "$40",
      description: "Elegant blazer suitable for formal events.",
    },
    {
      id: 17,
      image: "/p17.jpg",
      name: "Graphic T-Shirt",
      price: "$15",
      description: "Bold graphic tee for everyday wear.",
    },
    {
      id: 18,
      image: "/p18.jpg",
      name: "Sports Hoodie",
      price: "$35",
      description: "Comfortable hoodie for sports and outdoor activities.",
    },
    {
      id: 19,
      image: "/p19.jpg",
      name: "Leather Jacket",
      price: "$50",
      description: "High-quality leather jacket for a rugged look.",
    },
    {
      id: 20,
      image: "/p20.jpg",
      name: "Summer Shorts",
      price: "$12",
      description: "Cool and comfy shorts for the summer.",
    },
    {
      id: 21,
      image: "/p21.jpg",
      name: "Elegant Silk Scarf",
      price: "$8",
      description: "Light and stylish, adds elegance to any outfit.",
    },
    {
      id: 22,
      image: "/p22.jpg",
      name: "Running Sneakers",
      price: "$45",
      description: "Durable and comfortable sneakers for running.",
    },
    {
      id: 23,
      image: "/p23.jpg",
      name: "Stylish Wristwatch",
      price: "$20",
      description: "Fashionable wristwatch that suits any attire.",
    },
    {
      id: 12,
      image: "/p23.jpg",
      name: "Stylish Wristwatch",
      price: "$20",
      description: "Fashionable wristwatch that suits any attire.",
    },
  ];
  

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10 py-8">
  {ProductStore.map((product) => (
    <div
      key={product.id}
      className="border border-gray-300 p-4 shadow-lg rounded-lg bg-white transform transition-transform duration-200 hover:scale-105 hover:shadow-xl"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className="w-full h-48 object-cover rounded-lg mb-3 transition-transform duration-200 hover:scale-110"
      />
      <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mt-1">{product.description}</p>
      <p className="text-gray-800 font-bold text-xl mt-2">{product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-600 transition-transform transform hover:scale-105 duration-150">
        Add to Cart
      </button>
    </div>
  ))}
</div>

import React from "react";
import Image from "next/image";
 export default function ProductPage(){
    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10 py-8">
  {ProductStore.map((product) => (
    <div
      key={product.id}
      className="border border-gray-300 p-4 shadow-lg rounded-lg bg-white transform transition-transform duration-200 hover:scale-105 hover:shadow-xl"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className=" object-cover rounded-lg mb-3 transition-transform duration-200 hover:scale-110"
      />
      <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mt-1">{product.description}</p>
      <p className="text-gray-800 font-bold text-xl mt-2">{product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-600 transition-transform transform hover:scale-105 duration-150">
        Add to Cart
      </button>
    </div>
  ))}
</div>
        </>
    )
}