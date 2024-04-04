import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Link, useParams } from "react-router-dom";
import "./SingleBrand.css";
import { Box, Rating, Typography } from "@mui/material";
import SectionTitle from "../../Components/SectionTitle";
import axios from "axios";
import CarCard from "../CarCard/CarCard";
import { CarsContext } from "../../MainLayout/MainLayout";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../Uitily/axiosInstance";
import CustomLoading from "../../Components/CustomLoading/CustomLoading";

function SingleBrand() {
  const [carsData, setCarsData] = useState([]);

  const { brandName } = useParams();

  const fetchCarFromBrandName = async () => {
    const response = await axiosInstance.get(`brandName/${brandName}`);

    return response.data;
  };
  const { isLoading, error, data } = useQuery({
    queryKey: ["carFromBrandNameData"],
    queryFn: () => fetchCarFromBrandName(),
  });

  if (isLoading) {
    return <CustomLoading></CustomLoading>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="z-[-11]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://i.ibb.co/mNSypLZ/summer.jpg"
              className="md:h-[600px] mx-auto"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/yBBWnTw/offer3.jpg"
              className="md:h-[600px] mx-auto"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/RSNZZhn/preorder2.webp"
              className="md:h-[600px] mx-auto"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <SectionTitle title={`${brandName} Collection`} />

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {data.map((car) => (
            <CarCard car={car} key={car._id}></CarCard>
          ))}
        </div>
        {data.length === 0 && (
          <div className="text-xl text-center  min-h-[60vh]">
            No products available for this brand at the moment.
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleBrand;
