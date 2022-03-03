// import Home from "../assets/h1.jpeg";
import h1 from "../assets/h1.jpeg";
import h2 from "../assets/h2.jpeg";
import h3 from "../assets/h3.jpeg";
// import h4 from "../assets/h4.jpeg";
import h5 from "../assets/h5.jpeg";
import h6 from "../assets/6.jpeg";
import h7 from "../assets/7.jpeg";

const HomeFurniture = () => {
  return (
    <div id='home'>
      <div className="my-3">
        <div className="flex flex-row justify-between align-center px-3 bg-[#CC5500] text-white w-full p-3 mb-3 mt-4">
          <h2 className=" font-bold ">
            Home and Office
          </h2>
          <p className="text-sm">See More {`>`}</p>
        </div>

        <div className="grid grid grid-cols-2 md:grid-cols-4 gap-3 align-center mt-5">
          <div className="w-full">
            <img
              alt="products-img"
              className="h-48 w-full rounded-md"
              src={h1}
            />
            <p className='text-sm'>Clothes</p>
            <p className="product-price font-bold">$380</p>

          </div>

          <div className="w-full">
            <img
              alt="products-img"
              className="h-48 w-full rounded-md"
              src={h2}
            />
            <p className='text-sm'>Shoes</p>
            <p className="product-price font-bold">$380</p>

          </div>
          <div className="w-full">
            <img
              alt="products-img"
              className="h-48 w-full rounded-md"
              src={h6}
            />
            <p className='text-sm'>Wristwatches</p>
            <p className="product-price font-bold">$380</p>

          </div>
          <div className="w-full">
            <img
              alt="products-img"
              className="h-48 w-full rounded-md"
              src={h3}
            />
            <p className='text-sm'>Bags</p>
            <p className="product-price font-bold">$380</p>

          </div>

          <div className="w-full">
            <img
              alt="products-img"
              className="h-48 w-full rounded-md"
              src={h7}
            />
            <p className='text-sm'>Phones</p>
            <p className="product-price font-bold">$380</p>

          </div>

          <div className="w-full">
            <img
              alt="products-img"
              className="h-48 w-full rounded-md"
              src={h5}
            />
            <p className='text-sm'>Suits</p>
            <p className="product-price font-bold">$380</p>

          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeFurniture;
