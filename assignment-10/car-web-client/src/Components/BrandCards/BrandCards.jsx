import axios from "axios";
import { useEffect, useState } from "react";
import BrandCard from "../BrandCard/BrandCard";

function BrandCards() {
  const [cardOfBrand, setCardOfBrand] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cardofBrandFetch = async () => {
      try {
        const response = await axios.get("carBrands.json");
        setCardOfBrand(response.data.carBrands);
        setLoading(false); // Mark loading as complete
      } catch (err) {
        setLoading(false); // Mark loading as complete even in case of an error
      }
    };
    cardofBrandFetch();
  }, []);

  // console.log(cardOfBrand);

  if (loading) {
    return <p>Loading...</p>; // Return loading message
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-10  grid-cols-1">
      {/* Display your brand cards here */}
      {cardOfBrand.map((item, idx) => (
        <BrandCard item={item} key={idx} />
      ))}
    </div>
  );
}

export default BrandCards;
