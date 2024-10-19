import React, { useState } from "react";
import Carousel from "./reusableComponents/Carousel";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");

  const galleryItems = [
    {
      id: 1,
      category: "Wedding",
      content:
        "https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      category: "Wedding",
      content:
        "https://images.pexels.com/photos/758898/pexels-photo-758898.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      category: "Product",
      content:
        "https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      category: "Food",
      content:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 8,
      category: "Fashion",
      content:
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 9,
      category: "Wedding",
      content:
        "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 10,
      category: "Wedding",
      content:
        "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 11,
      category: "Wedding",
      content:
        "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 12,
      category: "Wedding",
      content:
        "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 13,
      category: "Wedding",
      content:
        "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 14,
      category: "Wedding",
      content:
        "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    // Add more images as needed
  ];

  const tabs = ["All", "Wedding", "Product", "Food", "Fashion"];

  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section className="w-full  p-4 mt-20">
      <h1 className="text-white font-cormorant md:text-[80px] text-[50px] leading-tight uppercase md:text-right md:mr-20 text-center">
        portfolio
      </h1>
      {/* Tabs */}
      <div className="flex space-x-0 md:space-x-4 mb-4 md:mt-8 md:mb-20 md:justify-end md:mr-40 justify-center  ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 ${
              activeTab === tab ? "text-[#bfd6df]" : "text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Gallery content */}
      <div
        className={`h-full ${
          activeTab === "All"
            ? "grid grid-cols-1 gap-4 md:grid-cols-5" // Mobile view shows 1 column, desktop view shows 5 columns
            : "grid grid-cols-1 gap-4 md:grid-cols-8"
        }`}
      >
        {activeTab === "All" ? (
          <>
            <div className="  grid-cols-span-2 grid grid-cols-1  gap-4 md:col-span-2 h-screen">
              <div className=" md:row-span-3 grid grid-cols-1 md:grid-cols-3 ">
                <div
                  className="col-span-1  g-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.pexels.com/photos/371985/pexels-photo-371985.jpeg?auto=compress&cs=tinysrgb&w=600)",
                  }}
                ></div>
                <div className="col-span-2 pl-3 md:grid md:grid-rows-2  hidden gap-4  ">
                  <div
                    className="row-span-1 bg-cover  bg-center"
                    style={{
                      backgroundImage:
                        "url(https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                    }}
                  ></div>
                  <div
                    className="row-span-1 bg-cover bg-center "
                    style={{
                      backgroundImage:
                        "url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    }}
                  ></div>
                </div>
              </div>

              <div
                className="md:row-span-1  flex bg-cover bg-center items-center justify-center"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/6266674/pexels-photo-6266674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              >
                <button className="text-white py-1 px-10 rounded bg-white bg-opacity-20 border-none flex flex-col items-center justify-center">
                See More
                  <span className="material-icons text-white text-[16px] ">
                    arrow_forward
                  </span>
                </button>
              </div>






            </div>
            <div
              className=" p-2  hidden md:block md:col-span-1 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/27947208/pexels-photo-27947208/free-photo-of-vietcombank-tower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            >
              <img src="" alt="" />
            </div>
            <div className=" h-full hidden md:grid grid-cols-1 gap-4 md:col-span-1">
              <div
                className="md:row-span-1 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              ></div>
              <div
                className="md:row-span-1 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              >
                <img src="" alt="" />
              </div>
            </div>
            <div className="  h-full hidden md:grid grid-cols-1 gap-4 md:col-span-1">
              <div
                className=" md:row-span-1 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              ></div>
              <div
                className=" md:row-span-3 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              ></div>
            </div>
          </>
        ) : (
          filteredItems.map((item) => (
            <div className="grid  h-[200px] md:h-[400px] ">
              <div
                key={item.id}
                className="h-full bg-cover bg-center  "
                style={{
                  backgroundImage: `url(${item.content})`,
                }}
              ></div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
