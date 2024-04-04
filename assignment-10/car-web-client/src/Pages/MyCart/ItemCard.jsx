import React, { useContext } from "react";
import { Rating } from "@mui/material";
import { ThemeContext } from "../../MainLayout/MainLayout";
import swal from "sweetalert";
import axios from "axios";

const ItemCard = ({ item, onDelete }) => {
  const {
    image,
    name,
    brand,
    type,
    price,
    shortDescription,
    _id,
    ratingvalue,
  } = item;

  const handleDelete = (itemId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Car!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((res) => {
      if (res) {
        axios
          .delete(`http://localhost:5000/itemOnCart/${itemId}`)
          .then(() => {
            onDelete(itemId); // Trigger a re-render in the parent component
            swal("Success", "Car deleted successfully!", "success");
          })
          .catch((err) => {
            console.log(err);
            swal("Error", "An error occurred while deleting the Car.", "error");
          });
      } else {
        swal("Car is safe!");
      }
    });
  };

  const { theme } = useContext(ThemeContext);
  const bgColorStyleCard = {
    backgroundColor: theme === "light" ? "#E5E6E6" : "#15191E",
  };
  const textColorStyle = {
    color: theme === "light" ? "#252d41" : "#f1f1f1",
  };

  return (
    <div className="p-4 my-4">
      <div
        style={bgColorStyleCard}
        className="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none lg:h-full"
      >
        <div className="max-w-md px-10 py-10 m-auto mt-20 mb-20 shadow-xl lg:col-span-2 rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 ">
          <img
            className="object-center h-64 mt-2 rounded-lg shadow-2xl sm:h-52 sm:w-full sm:object-cover lg:hidden"
            src={image}
            alt={name}
          />
          <h1 className="mt-5 text-3xl italic font-bold lg:mb-4 lg:mt-7">
            {name}
          </h1>
          <div>
            <p
              style={textColorStyle}
              className="text-xl font-semibold text-gray-600"
            >
              Brand: {brand} | Type: {type}
            </p>
            <p
              style={textColorStyle}
              className="text-xl font-semibold text-gray-600"
            >
              Price: ${price}
            </p>
            <div className="flex items-center gap-2">
              <p
                style={textColorStyle}
                className="text-xl font-medium text-gray-600"
              >
                Rating
              </p>
              <Rating name="simple-controlled" value={+item?.ratingvalue} />
            </div>
            <p
              style={textColorStyle}
              className="pt-2 text-lg text-justify text-gray-600"
            >
              {shortDescription?.length > 330
                ? shortDescription?.slice(0, 200)
                : shortDescription}
              ...
            </p>
          </div>
          <button
            onClick={() => handleDelete(_id)}
            className="mt-5 inline-block rounded bg-[#d54242] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-[#FF6347] hover:shadow-lg focus:bg-[#d54242] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#d54242] active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-md"
          >
            Delete
          </button>
        </div>
        <div className="relative hidden lg:block lg:col-span-3">
          <img
            className="absolute inset-0 object-cover object-center w-full h-full rounded-xl"
            src={image}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
