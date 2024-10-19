import React from "react";
import Carousel from "./reusableComponents/Carousel";

const images = [
  {
    src: "https://images.pexels.com/photos/19119918/pexels-photo-19119918/free-photo-of-portrait-of-man-wearing-white-shirt-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Drink 1",
  },
  {
    src: "https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Drink 2",
  },
  {
    src: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Drink 1",
  },
  {
    src: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Drink 2",
  },
  {
    src: "https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Drink 1",
  },
  {
    src: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Drink 2",
  },
  {
    src: "https://images.pexels.com/photos/36469/woman-person-flowers-wreaths.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Drink 1",
  },
 
];

export default function Slider() {
  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}
