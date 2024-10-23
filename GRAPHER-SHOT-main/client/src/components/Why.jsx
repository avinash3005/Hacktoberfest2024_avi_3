import React from "react";

const GridItem = ({ icon, title, description }) => (
  <div className="h-[150px] md:h-full flex md:px-12 md:py-10 justify-center md:justify-start md:pt-20 items-center md:items-start border border-transparent hover:border-[#8b969b] transition-colors duration-300 flex-col">
    <div className="text-white">
      <span className={`material-icons text-white md:text-[16px] text-[10px]`}>
        {icon}
      </span>
    </div>
    <div className="text-white">
      <h2 className="text-white font-lato md:text-[28px] text-[18px]">
        {title}
      </h2>
    </div>
    <div className="md:mt-4">
      <p className="text-white font-lato md:text-[22px] text-[12px] font-light px-5 md:p-0">
        {description}
      </p>
    </div>
  </div>
);

export default function Why() {
  return (
    <section className="h-screen md:grid md:grid-cols-3 md:grid-rows-2 gap-2 md:px-40 md:pt-20 pt-8 px-8 flex flex-col">
      <div className="h-[150px] md:h-full flex justify-center items-center border border-transparent hover:border-[#8b969b] transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-white font-cormorant md:text-[60px] text-[20px] uppercase">
            Why Me
          </h1>
          <p className="font-lato text-[12px] md:text-[20px] text-white px-4 md:p-7 text-left">
            Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec. Urna quisque blandit turpis ultrices arcu ut sed.
          </p>
        </div>
      </div>

      <GridItem
        icon="edit"
        title="Agency"
        description="Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et."
      />
      <GridItem
        icon="lightbulb"
        title="Choose Idea"
        description="Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et."
      />
      <GridItem
        icon="grade"
        title="Satisfaction"
        description="Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et."
      />
      <GridItem
        icon="settings"
        title="Quality"
        description="Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et."
      />
      <GridItem
        icon="bolt"
        title="Creativity"
        description="Sagittis enim nullam pulvinar tellus sit egestas semper. Vestibulum sed libero sed at sed nisl sodales phasellus et."
      />
    </section>
  );
}
