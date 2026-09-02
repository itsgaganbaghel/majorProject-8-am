import React from "react";
import NewArrivalsData from "./NewArrivalsData";

const NewArrivals = () => {
  return (
    <section className="relative w-full bg-white px-[80px] py-[40px]">
      <h2 className="text-[45px] text-center font-bold">New Arrivals</h2>
      <p className="mt-[15px] mb-[20px] text-[16px] opacity-75 font-semibold text-center">
        Summer Collection New Modern Design
      </p>
      <div className="flex flex-wrap justify-center md:justify-between">
        <NewArrivalsData />
      </div>
    </section>
  );
};

export default NewArrivals;