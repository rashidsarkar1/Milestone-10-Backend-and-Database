import { useState } from "react";
import AboutUs from "../Components/AboutUs/AboutUs";
import Banar from "../Components/Banar";
import BrandCards from "../Components/BrandCards/BrandCards";
import ProductRevew from "../Components/ProductRevew/ProductRevew";
import PromoBonus from "../Components/PromoBonus/PromoBonus";
import SectionTitle from "../Components/SectionTitle";

function Home() {
  return (
    <div className="min-h-screen">
      <Banar
        image={`https://i.ibb.co/MfHwY3H/pexels-lloyd-freeman-1429775-1.jpg`}
        title={`FIND YOUR DREAM CAR`}
        decpt={`Discover the perfect car for your needs.`}
      ></Banar>

      <SectionTitle title={"FEATURED CAR"}></SectionTitle>
      <BrandCards></BrandCards>
      <SectionTitle title={"Promo Bonus"} />
      <PromoBonus></PromoBonus>
      <SectionTitle title={"About Us"} />
      <AboutUs></AboutUs>
      <SectionTitle title={"Our Achievements"}></SectionTitle>

      <ProductRevew></ProductRevew>
    </div>
  );
}

export default Home;
