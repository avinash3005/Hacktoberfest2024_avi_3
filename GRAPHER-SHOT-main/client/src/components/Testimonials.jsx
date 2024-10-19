import React from "react";

// TestimonialCard Component to display individual testimonials
const TestimonialCard = ({ name, title, imgUrl, testimonial }) => {
  return (
    <div className="bg-[#233942] grid grid-rows-3">
      {/* Profile section: image and name */}
      <div className="row-span-1 grid grid-cols-3">
        <div className="col-span-1 flex justify-center items-center">
          <img
            src={imgUrl}
            alt={`${name} profile`}
            className="rounded-full w-24 h-24 object-cover p-4"
          />
        </div>
        <div className="col-span-2 flex flex-col justify-center text-white text-left">
          <p className="text-lg font-bold font-cormorant">{name}</p>
          <p className="text-sm font-lato">{title}</p>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="row-span-2 items-center">
        <div className="w-full px-4 mt-8">
          <hr className="border-t-2 border-[#b7cdf7] w-full" />
        </div>
        <p className="text-left text-white px-4 mt-4 font-lato pb-5">
          {testimonial}
        </p>
      </div>
    </div>
  );
};

// Testimonials Section Component
export default function Testimonials() {
  // Example testimonials data
  const testimonialsData = [
    {
      name: "John Doe",
      title: "Software Engineer",
      imgUrl:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque eget id quis arcu sem ac nulla interdum. Turpis sagittis blandit pharetra mauris quis nulla ornare amet. Enim placerat eu mauris aliquet viverra mi diam.",
    },
    {
      name: "Jane Doe",
      title: "Product Manager",
      imgUrl:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque eget id quis arcu sem ac nulla interdum. Turpis sagittis blandit pharetra mauris quis nulla ornare amet. Enim placerat eu mauris aliquet viverra mi diam.",
    },
    {
      name: "Alex Smith",
      title: "Designer",
      imgUrl:
        "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque eget id quis arcu sem ac nulla interdum. Turpis sagittis blandit pharetra mauris quis nulla ornare amet. Enim placerat eu mauris aliquet viverra mi diam.",
    },
  ];

  return (
    <section className="bg-[#141F24] mt-40 md:mt-8 pt-10 pb-20">
      {/* Section Title */}
      <h1 className="text-white font-cormorant md:text-[70px] text-[50px] leading-tight uppercase md:text-left md:ml-20 text-center">
        Testimonials
      </h1>

      {/* Testimonial Cards */}
      <div className="md:grid md:grid-cols-3 md:px-64 md:mt-16 flex flex-col px-8 mt-8 md:gap-8 gap-4">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            title={testimonial.title}
            imgUrl={testimonial.imgUrl}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>
    </section>
  );
}
