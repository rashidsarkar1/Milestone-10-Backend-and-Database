import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Rating, Typography } from "@mui/material";
import axios from "axios";
import { ThemeContext } from "../../MainLayout/MainLayout";
import { AuthContext } from "../../FireBase/AuthProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import CustomLoading from "../../Components/CustomLoading/CustomLoading";
import axiosInstance from "../../Uitily/axiosInstance";
import Swal from "sweetalert2";

function CarDetails() {
  const { carID } = useParams();
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  const fetchSingleCarData = async () => {
    const response = await axiosInstance.get(`/cars/${carID}`);
    return response.data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["SingleCarData"],
    queryFn: () => fetchSingleCarData(),
  });

  const itemToCart = {
    brand: data?.brand,
    image: data?.image,
    name: data?.name,
    price: data?.price,
    ratingvalue: data?.ratingvalue,
    shortDescription: data?.shortDescription,
    type: data?.type,
    userUID: user?.uid,
  };
  console.log(user?.uid);
  const { mutate, mutateAsync } = useMutation({
    mutationFn: async (newData) => {
      const response = await axiosInstance.post("/itemOnCartUser", newData);

      console.log(response);
      return response.data;
    },
    mutationKey: ["myCartData"],
  });
  const addToCart = async () => {
    try {
      await mutateAsync(itemToCart);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Car added to the cart successfully!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add the car to the cart.",
      });
    }
  };

  const bgColorStyleCard = {
    backgroundColor: theme === "light" ? "#E5E6E6" : "#15191E",
  };

  const textColorStyle = {
    color: theme === "light" ? "#252d41" : "#f1f1f1",
  };
  if (isLoading) {
    return <CustomLoading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="py-10 pt-[50px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <img
              src={data.image}
              alt="Product Image"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full p-8 md:w-1/2">
            <h2 className="text-3xl italic font-semibold">{data?.name}</h2>
            <p className="text-xl font-bold text-[#d54242]">
              Price: $ {data.price}
            </p>
            <p className="mt-4">
              <strong>Brand Name:</strong> {data.brand}
            </p>
            <p className="">
              <strong>Type Name:</strong> {data.type}
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold">Product Details</h3>
              <p className="mt-4">
                {data.shortDescription?.length > 330
                  ? data.shortDescription?.slice(0, 330)
                  : data.shortDescription}
                ...
              </p>
            </div>
            <div className="mt-8">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography component="legend" className="">
                  <p className="text-xl font-medium">Rating</p>
                </Typography>
                <Rating name="simple-controlled" value={+data.ratingvalue} />
              </Box>
            </div>
            <button
              className="mt-8 bg-[#d54242] text-white font-semibold hover-bg-[#FF6347]  py-2 px-4 rounded-lg"
              // onClick={() => {
              //   mutate(); // Call the `addToCart` function when the button is clicked.
              // }}
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
