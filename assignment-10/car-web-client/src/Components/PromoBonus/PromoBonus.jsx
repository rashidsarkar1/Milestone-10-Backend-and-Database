function PromoBonus() {
  return (
    <div className="relative">
      {/* Image */}
      <img
        src="https://i.ibb.co/QvrHxpx/driving-a-car-PFWQUY7.jpg"
        alt="Driving a Car"
        className="w-full h-auto"
      />

      {/* Image Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />

      {/* Text Overlay */}
      <div className="absolute top-1/2 left-0 transform p-4 -translate-y-1/2 text-left text-white space-y-3">
        <h4 className="text-lg sm:text-xl md:text-2xl">
          Scan Here For{" "}
          <span className="block md:inline-block font-semibold text-[#d54242]">
            20% <span className="text-lg md:text-xl">Cashback</span>
          </span>
        </h4>
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold">
          Get Your <span className="text-[#d54242]">Promo Bonus</span> Now
        </h2>
      </div>

      {/* QR Code */}
      <img
        src="https://i.ibb.co/10C51bZ/frame.png"
        alt="QR Code"
        className="absolute top-1/2 right-0 transform p-4 md:h-[200px] h-[90px] -translate-y-1/2"
      />
    </div>
  );
}

export default PromoBonus;
