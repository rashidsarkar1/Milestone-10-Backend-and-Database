import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Banar from "../../Components/Banar";
import { CarsContext } from "../../MainLayout/MainLayout";
import ItemCard from "./ItemCard";
import SectionTitle from "../../Components/SectionTitle";
import axios from "axios";
import { AuthContext } from "../../FireBase/AuthProvider";
import axiosInstance from "../../Uitily/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import CustomLoading from "../../Components/CustomLoading/CustomLoading";

function MyCart() {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const { data, isLoading, error, refetch } = useQuery({
    queryFn: async () => await axiosInstance.get(`itemOnCartUser/${user?.uid}`),
    queryKey: ["myCartData"],
  });
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      // const response = await axiosInstance
      //   .delete(`/itemOnCart/${id}`)
      //   .then(() => {
      //     queryClient.invalidateQueries("myCartData");
      //   });

      // return response.data;
      const response = await axiosInstance.delete(`/itemOnCart/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myCartData"]);
    },
  });
  const handleDeleteItem = async (itemId) => {
    await mutateAsync(itemId);
    // refetch();
  };
  if (isLoading) {
    return <CustomLoading></CustomLoading>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Banar
        image={`https://i.ibb.co/QfLbhW7/pexels-hyundai-motor-group-11194874.jpg`}
        title={`Your Dream Car Awaits`}
        decpt={`Explore and find the perfect car for your needs.`}
      ></Banar>

      <div>
        <SectionTitle title={"Browse Your Selection"}></SectionTitle>

        {data.data.length === 0 ? (
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold">Your cart is empty</h2>
            <p className="text-gray-600">Add some cars to your cart</p>
          </div>
        ) : (
          data.data.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onDelete={() => handleDeleteItem(item._id)}
            ></ItemCard>
          ))
        )}
      </div>
    </div>
  );
}

export default MyCart;
