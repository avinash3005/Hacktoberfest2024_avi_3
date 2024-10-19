import React from "react";
import CustomButton from "./reusableComponents/CustomButton";

// Reusable Component for Pricing Tier
const PricingTier = ({ title, price, details }) => (
  <div className="col-span-1 grid grid-rows-4 bg-white bg-opacity-20 border-2 border-transparent hover:border-[#8b969b] transition-colors duration-300">
    <div className="row-span-1 flex flex-col justify-center items-center text-white">
      <p className="text-[32px] font-cormorant uppercase mb-[-12px]">{title}</p>
      <p className="text-[36px] font-cormorant">{price}</p>
    </div>
    <div className="bg-green grid row-span-2 ">
      {details.map((detail, index) => (
        <div key={index} className="grid grid-cols-3 text-white md:p-4">
          <div className="col-span-2 pl-4">
            <p className="text-[22px] capitalize font-lato p-2">
              {detail.label}
            </p>
          </div>
          <div>
            <p className="text-[22px] font-lato p-2">{detail.value}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center items-center row-span-1  ">
      <CustomButton text="Photo Session Schedule" />
    </div>
  </div>
);

export default function Pricelist() {
  const pricingDetails = [
    {
      title: "Standard",
      price: "400$",
      details: [
        { label: "Duration", value: "3 hours" },
        { label: "lots of photos", value: "60 - 80" },
        { label: "detailed retouching", value: "25 items" },
        { label: "finishing", value: "10 days" },
      ],
    },
    {
      title: "premium",
      price: "550$",
      details: [
        { label: "duration", value: "4 hours" },
        { label: "lots of photos", value: "85 - 90" },
        { label: "detailed retouching", value: "40 items" },
        { label: "finishing", value: "7 days" },
      ],
    },
    {
      title: "bg-white bg-opacity-20",
      price: "600$",
      details: [
        { label: "duration", value: "6 hours" },
        { label: "lots of photos", value: "unlimited" },
        { label: "detailed retouching", value: "unlimited" },
        { label: "finishing", value: "3 days" },
      ],
    },
    // Add more pricing tiers as needed
  ];

  return (
    <section
      className="relative  bg-cover bg-center bg-no-repeat pt-10 pb-10 md:pt-20"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/19797381/pexels-photo-19797381/free-photo-of-beautiful-model-in-oregon-wearing-a-forest-green-linen-dress-portrait-taken-by-portland-photographer-lance-reis-on-my-sonya7iii-on-location.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <h1 className="text-white font-cormorant md:text-[70px] text-[50px] leading-tight uppercase md:text-left md:ml-20 text-center z-10 relative pb-10 md:pb-20">
        Pricelist
      </h1>
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative z-10 md:grid md:grid-cols-3 flex flex-col md:px-20 md:gap-6 gap-3 px-5">
        {pricingDetails.map((tier, index) => (
          <PricingTier
            key={index}
            title={tier.title}
            price={tier.price}
            details={tier.details}
          />
        ))}
      </div>
    </section>
  );
}
