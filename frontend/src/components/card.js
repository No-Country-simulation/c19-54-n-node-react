"use Client";
import React from "react";
import { HeartIcon } from "lucide-react";

export default function Card({ props }) {
  const {_id, name, images, description, categories, originalPrice, salePrice, stock } = props;

  return (<>      
    <div className="bg-cream p-1" id={_id}>
        <div className="p-2 w-[185px] h-[327px] md:w-auto lg:w-auto md:h-auto lg:h-auto lg:m-2 bg-amber rounded-lg flex flex-col justify-between">
          <div className="flex flex-row flex-nowrap justify-between items-start text-gradient">
            <h2 className="text-sm text-dark-pink">
              {categories[0] ? categories[0] : "Categoría"}
            </h2>
            <HeartIcon strokeWidth={2} />
          </div>
          <div className="flex flex-col items-center">
            <img src={images[0]} alt="Producto sin imagen" className="bg-cream rounded-xl text-xs h-[114px]"></img>
          </div>
          <div className="bg-cream rounded-t-xl p-1 mt-2 h-[135px] flex flex-col justify-between items-center">
            <div className="flex flex-col items-center justify-between h-full">                
              <h2 className="font-bold text-sm text-brown text-center text-nowrap ">
                {name ? name : "Nombre del Producto"}
              </h2>
              <p className=" hidden text-[10px] text-brown text-center mt-1 md:block lg:block">
                {description ? description : "Lorem ipsum dolor sit amet, consectetur elit dui sociosqu, non sociis senectus."}
              </p>                  
              <div className="flex flex-row flex-nowrap gap-2 justify-start">
                <p className="text-xs text-light-brown line-through lg:text-xs lg:pl-2 md:text-lg">
                  {salePrice ? "$ " + salePrice : ""}
                </p>
                <span className="sm:text-md font-bold text-brown lg:text-xs md:text-lg">
                  {originalPrice ? "$ " + originalPrice : "CONSULTE"}
                </span>
              </div>           
              <p className="bg-dark-aqua text-xs text-brown rounded-full pl-1 pr-1 w-fit text-center">
                {"Disponibles: " + stock || "SIN STOCK"}
              </p>
            </div>
          </div>
          <div className="flex flex-row flex-nowrap justify-around items-center bg-cream rounded-b-xl p-1">
            <p className="bg-dark-aqua text-xs text-center text-brown rounded-full pl-1 pr-1">
              3 cuotas s/int
            </p>            
            <button className="bg-dark-aqua text-brown text-bold rounded-full pr-2 pl-2">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}