import React from "react";
import phone from "../assets/iphone13.jpeg";
import shoes from "../assets/nike.jpeg";
import bags from "../assets/bags.jpeg";
import clothes from "../assets/clothes.jpeg";
import suits from "../assets/suits.JPG";
import wristwatch from "../assets/ww.jpeg";



const TopProducts = () => {
  return (
    <div className="my-3">
      <h2 className="bg-[#CC5500] text-white text-center font-bold w-full p-3 mt-4 mb-5">
        Top Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 align-center mt-5">
      <div className="w-full">
          <img alt="products-img" className="h-48 rounded-md" src={clothes} />
          <p>Clothes</p>
        </div>

        <div className="w-full">
          <img alt="products-img" className="h-48 rounded-md" src={shoes} />
          <p>Shoes</p>
        </div>
        <div className="w-full">
          <img alt="products-img" className="h-48 rounded-md" src={wristwatch} />
          <p>Wristwatches</p>
        </div>
        <div className="w-full">
          <img alt="products-img" className="h-48 rounded-md" src={bags} />
          <p>Bags</p>
        </div>
       
        <div className="w-full">
          <img alt="products-img" className="h-48 rounded-md" src={phone} />
          <p>Phones</p>
        </div>
       
       
        <div className="w-full">
          <img alt="products-img" className="h-48 rounded-md" src={suits} />
          <p>Suits</p>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
