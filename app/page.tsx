const mainProductPage = [
  {
    id: 1,
    image: "/p1.jpg",
    name: "Classic Red & Black Shirt",
    price: "$10",
    description: "Stylish and comfortable for any occasion.",
  },
  {
    id: 2,
    image: "/p2.jpg",
    name: "Casual Denim Jacket",
    price: "$25",
    description: "Perfect for a casual look with high-quality denim.",
  },
  {
    id: 3,
    image: "/p3.jpg",
    name: "Slim Fit Jeans",
    price: "$30",
    description: "Trendy jeans with a slim fit, ideal for modern styles.",
  },
  {
    id: 4,
    image: "/p4.jpg",
    name: "Formal Blazer",
    price: "$40",
    description: "Elegant blazer suitable for formal events.",
  },
  {
    id: 5,
    image: "/p5.jpg",
    name: "Graphic T-Shirt",
    price: "$15",
    description: "Bold graphic tee for everyday wear.",
  },
  {
    id: 6,
    image: "/p6.jpg",
    name: "Sports Hoodie",
    price: "$35",
    description: "Comfortable hoodie for sports and outdoor activities.",
  },
  {
    id: 7,
    image: "/p7.jpg",
    name: "Leather Jacket",
    price: "$50",
    description: "High-quality leather jacket for a rugged look.",
  },
  {
    id: 8,
    image: "/p8.jpg",
    name: "Summer Shorts",
    price: "$12",
    description: "Cool and comfy shorts for the summer.",
  },
  {
    id: 9,
    image: "/p9.jpg",
    name: "Elegant Silk Scarf",
    price: "$8",
    description: "Light and stylish, adds elegance to any outfit.",
  },
  {
    id: 10,
    image: "/p10.jpg",
    name: "Running Sneakers",
    price: "$45",
    description: "Durable and comfortable sneakers for running.",
  },
  {
    id: 11,
    image: "/p11.jpg",
    name: "Stylish Wristwatch",
    price: "$20",
    description: "Fashionable wristwatch that suits any attire.",
  },
  {
    id: 12,
    image: "/p12.jpg",
    name: "Stylish Wristwatch",
    price: "$20",
    description: "Fashionable wristwatch that suits any attire.",
  },
];


// Animated product cards
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10 py-8">
  {mainProductPage.map((product) => (
    <div
      key={product.id}
      className="border border-gray-300 p-4 shadow-lg rounded-lg bg-white transform transition-transform duration-200 hover:scale-105 hover:shadow-xl"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={50}
        height={48}
        className="object-cover rounded-lg mb-3 transition-transform duration-200 hover:scale-110"
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



import React from "react"
import Image from "next/image";
export default function Home() {
  return(
    <>
 <section
      className="h-[80vh] bg-cover bg-center flex items-center text-white relative"
      style={{
        backgroundImage: "url('/herosection.jpg')", // Replace with your actual image path
        backgroundPosition: "center center",
      }}
    >
      {/* Welcome Section positioned towards the left */}
      <div className="bg-black bg-opacity-40 p-6 rounded-md max-w-2xl ml-8 lg:ml-12">
        {/* Welcome Text */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-widest uppercase">
          Welcome To
        </h2>

        {/* Brand Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2 mb-4">
          AW Outfits
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl italic">
          Fashion is more than just clothing
        </p>
      </div>
    </section>
     {/* <div className="bg-[url('/herosection.jpg')] bg-cover h-96">
     <div className="relative h-64">
      <h1 className=" text-4xl font-bold absolute bottom-10 left-0 pl-4 space-x-4 ">WELCOME TO</h1>
      <h1 className="text-4xl font-bold absolute bottom-0 left-0 pl-4 space-x-4 "> AW Outfits</h1>
      </div>
</div> */}
<div>
           
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10 py-8">
  {mainProductPage.map((product) => (
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
</div>
    </>
    )
    }

