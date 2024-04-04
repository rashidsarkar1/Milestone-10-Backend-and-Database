import React, { useContext, useEffect, useState } from "react";
import { Box, Rating, Typography } from "@mui/material";
import axios from "axios";
import swal from "sweetalert";
import { CarsContext, ThemeContext } from "../../MainLayout/MainLayout";
import { useParams } from "react-router-dom";

function UpdateProduct() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  // State to hold the form data
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    brand: "",
    type: "",
    price: "",
    shortDescription: "",
    ratingvalue: 0,
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/cars/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductData(); // Fetch the specific product data
  }, [id]);

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle rating value change
  const handleRatingChange = (event, newValue) => {
    setFormData({
      ...formData,
      ratingvalue: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .put(`http://localhost:5000/cars/${id}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.modifiedCount) {
          swal("Success", "Product updated successfully!", "success");
        }
      })
      .catch((error) => {
        console.log(error);
        swal("Error", "Failed to update the product.", "error");
      });
  };

  const { theme } = useContext(ThemeContext);
  const bgColorStyle = {
    backgroundColor: theme === "light" ? "#cbd5e1" : "#2c2929",
  };
  return (
    <div>
      <div
        style={bgColorStyle}
        className="max-w-lg p-6 mx-auto my-6 rounded-lg shadow-md"
      >
        <h1 className="mb-4 text-2xl font-bold ">Update Product</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block ">Name:</label>
            <input
              required
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.name}
              onChange={handleSelectChange}
            />
          </div>
          <div className="mb-4">
            <label className="block ">Image:</label>
            <input
              required
              type="text"
              name="image"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.image}
              onChange={handleSelectChange}
            />
          </div>

          <div className="mb-4">
            <label className="block ">Brand Name:</label>
            <select
              name="brand"
              className="w-full p-2 border border-gray-300 rounded select select-bordered"
              value={formData.brand}
              onChange={handleSelectChange}
            >
              <option value="Toyota">Toyota</option>
              <option value="Ford">Ford</option>
              <option value="Honda">Honda</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="Nissan">Nissan</option>
              {/* Add more brand options here */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block ">Type Name:</label>
            <select
              name="type"
              className="w-full p-2 border border-gray-300 rounded select select-bordered"
              value={formData.type}
              onChange={handleSelectChange}
            >
              <option value="Hybrid">Hybrid</option>
              <option value="SportsCar">Sports Car</option>
              <option value="OffRoad">Off-Road</option>
              <option value="Sedan">Sedan</option>
              {/* Add more type options here */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block ">Price:</label>
            <input
              required
              type="text"
              name="price"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.price}
              onChange={handleSelectChange}
            />
          </div>

          <div className="mx-auto mb-4 text-center">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Typography
                component="legend"
                fontWeight={600}
                className="font-semibold"
              >
                Rating
              </Typography>
              <Rating
                name="simple-controlled"
                value={formData.ratingvalue}
                onChange={handleRatingChange}
              />
            </Box>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-block rounded bg-[#d54242] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-[#FF6347] hover:shadow-lg focus:bg-[#d54242] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#d54242] active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-md"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
