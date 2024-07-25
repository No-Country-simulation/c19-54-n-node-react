"use Client";
import React from "react";
import { HeartIcon } from "lucide-react";

export default function Card({ props }) {
  const {
    _id,
    name,
    images,
    description,
    categories,
    original_price,
    sale_price,
    stock,
  } = props;

  return (
    <div
      className="p-5 bg-cream flex flex-rap flex-nowrap justify-center gap-2"
      id={_id}
    >
      <div className="p-2 w-[185px] h-[327px] bg-amber rounded-lg">
        <div className="flex flex-row flex-nowrap justify-between items-start">
          <h2 className="text-sm text-dark-pink">
            {categories[0] ? categories[0] : "Categoría"}
          </h2>
          <HeartIcon strokeWidth={2} className="text-gradient"/>
        </div>
        <div>
          <div className="flex flex-col items-center">
            <img
              src={images[0]}
              alt="Producto sin imagen"
              className="bg-cream rounded-xl text-xs h-[114px] "
            />

            <div className="bg-cream rounded-xl p-1 mt-2 h-[160px]">
              <div className="">
                <h2 className="font-bold text-sm text-brown text-center text-nowrap pt-3">
                  {name ? name : "Nombre del Producto"}
                </h2>
                <p className=" text-xs text-brown text-center mt-1 md:block lg:block">
                  {description
                    ? description
                    : "Lorem ipsum dolor sit amet, consectetur elit dui sociosqu, non sociis senectus."}
                </p>
                <div className="flex flex-col gap-2 items-center">
                  <div className="flex flex-row flex-nowrap gap-2 justify-start">
                    <p className="text-xs text-light-brown line-through lg:text-xs lg:pl-2 md:text-lg">
                      {" "}
                      {original_price ? "$ " + original_price : "$ ORIG"}
                    </p>
                    <span className="text-md font-bold grow text-brown lg:text-xs lg:pl-2 md:text-lg">
                      {sale_price ? "$ " + sale_price : "$ SALE"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-center">
                  <p className="bg-dark-aqua text-xs text-brown rounded-full pl-1 pr-1 w-fit text-center">
                    {"Disponibles: " + stock || "SIN STOCK"}
                  </p>
                  <div className="flex flex-row flex-nowrap gap-1 items-center">
                    <p className="bg-dark-aqua text-xs text-center text-brown rounded-full pl-1 pr-1">
                      3 ctas. sin interés
                    </p>
                    <button className="bg-dark-aqua text-brown rounded-full shadow-gradient shadow-sm pr-2 pl-2">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}