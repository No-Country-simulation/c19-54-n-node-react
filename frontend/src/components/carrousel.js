"use client";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carrousel(props) {
  const { categoryName } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://api-react-node.vercel.app/products",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const getData = await response.json();
      setData(
        getData.data.products.filter(
          (product) => product.categories == categoryName
        )
      );
    } catch (error) {
      console.log(`Error fetching data:`, error);
    }
  }
  var settings = {
    dots: true,
    infinite: true,
    pauseOnHover: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container bg-cream">
      <div className="bg-amber p-5 text-2xl text-brown text-bold text-center border-4 m-2 border-brown">
        {categoryName}
      </div>
      <div className="text-center min-h-[369px] m-2">
        {data.length === 0 ? (
          "Proximamente nuevos productos artesanales..."
        ) : (
          <Slider {...settings}>
            {data.map((product, index) => {
              return <Card key={index} props={product} />;
            })}
          </Slider>
        )}
      </div>
    </div>
  );
}