import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Rating, Typography } from "@mui/material";
import SectionTitle from "../../Components/SectionTitle";
import { ThemeContext } from "../../MainLayout/MainLayout";

function CarCard({ car }) {
  // console.log(car, brandName);
  const { brand, name } = car;
  // console.log(name);
  return (
    <div>
      <div className="card card-compact my-10 lg:w-96 w-[300px] mx-auto bg-base-300 shadow-xl md:h-[474px]">
        <figure className="h-[215px]">
          <img src={car?.image} alt={car?.name} className=" rounded-t-lg" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-xl font-semibold italic">
            {car?.name}
          </h2>
          <p className=" text-xl">
            Brand: {car?.brand} || <span>Type: {car?.type}</span>{" "}
          </p>
          <p className=" text-xl">Price: {`$${car?.price}`}</p>
          <div className="text-left">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography component="legend" className="">
                <p className=" text-xl">Rating</p>
              </Typography>
              <Rating name="simple-controlled" value={car?.ratingvalue} />
            </Box>
          </div>
          <div className="card-actions justify-around my-4">
            <Link to={`/brand/${car?.brand}/${car?._id}`}>
              <button className="btn btn-primary bg-[#d54242] hover:bg-[#FF6347] text-white border-0 px-4 py-2 rounded-lg">
                Details
              </button>
            </Link>
            <Link to={`/upDateProduct/${car?._id}`}>
              <button className="btn btn-primary bg-[#d54242] hover:bg-[#FF6347] text-white border-0 px-4 py-2 rounded-lg">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
