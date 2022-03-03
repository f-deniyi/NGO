// import Home from "../assets/h1.jpeg";
import h1 from "../assets/c4.jpeg";
import h2 from "../assets/c2.jpeg";
import h3 from "../assets/td3.jpeg";
// import h4 from "../assets/h4.jpeg";
// import h5 from "../assets/h5.jpeg";
import h6 from '../assets/nike.jpeg'
import h7 from '../assets/td1.jpeg'
import h11 from '../assets/shoe1.jpeg'
import h8 from '../assets/td4.jpeg'
import h9 from '../assets/s3.jpeg'
import h0 from '../assets/s5.jpeg'





const TopDeals = () => {
  return (
    <div>
      <div className="my-3">
        <h2 className="bg-[#CC5500] text-white text-center font-bold w-full p-3 mt-4 mb-5" >
          Top Deals
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 align-center mt-5">
          <div className="w-full relative ">
            <img alt="products-img" className="h-48 w-full rounded-md" src={h1} />
            <p className="mt-1 text-sm">Clothes</p>
            <p className="product-price font-bold">$380</p>
            <p className='text-gray-400 line-through text-sm'>$500</p>
           
            <p className="text-red-800 absolute right-2 top-1">-18%</p>
          </div>

          <div className="w-full relative ">
            <img alt="products-img" className="h-48 w-full rounded-md" src={h2} />
            <p className="mt-1 text-sm">Shoes</p>
            <p className="product-price font-bold">$380</p>
            <p className='text-gray-400 line-through text-sm'>$500</p>
            <p className="text-red-800 absolute right-2 top-1">-18%</p>
          </div>
          <div className="w-full relative ">
            <img
              alt="products-img"
              className="h-48 w-full rounded-md"
              src={h6}
            />
            <p className="mt-1 text-sm">Wristwatches</p>
            <p className="product-price font-bold">$380</p>

            <p className='text-gray-400 line-through text-sm'>$500</p>
            <p className="text-red-800 absolute right-2 top-1">-18%</p>
          </div>
          <div className="w-full relative ">
            <img alt="products-img" className="h-48 w-full rounded-md" src={h3} />
            <p className="mt-1 text-sm">Bags</p>
            <p className="product-price font-bold">$380</p>

            <p className='text-gray-400 line-through text-sm'>$500</p>
            <p className="text-red-800 absolute right-2 top-1">-18%</p>
          </div>

          <div className="w-full relative ">
            <img alt="products-img" className="h-48 w-full rounded-md" src={h7} />
            <p className="mt-1 text-sm">Phones</p>
            <p className="product-price font-bold">$380</p>

            <p className='text-gray-400 line-through text-sm'>$500</p>
            <p className="text-red-800 absolute right-2 top-1">-18%</p>
          </div>

          <div className="w-full relative ">
            <img alt="products-img" className="h-48 w-full rounded-md" src={h8} />
            <p className="mt-1 text-sm">Suits</p>
            <p className="product-price font-bold">$380</p>

            <p className='text-gray-400 line-through text-sm'>$500</p>
            <p className="text-red-800 absolute right-2 top-1">-18%</p>
          </div>
          <div className="w-full relative ">
            <img alt="products-img" className="h-48 w-full rounded-md" src={h9} />
            <p className="mt-1 text-sm">Suits</p>
            <p className="product-price font-bold">$380</p>

            <p className='text-gray-400 line-through text-sm'>$500</p>
            <p className="text-red-800 absolute right-2 top-1">-18%</p>
          </div>
          <div className="w-full relative ">
            <img alt="products-img" className="h-48 w-full rounded-md" src={h0} />
            <p className="mt-1 text-sm">Suits</p>
            <p className="product-price font-bold">$380</p>

            <p className='text-gray-400 line-through text-sm'>$500</p>
            <p className="text-red-800 absolute right-2 top-1">-18%</p>
          </div>
          <div className="w-full relative ">
            <img alt="products-img" className="h-48 w-full rounded-md" src={h11} />
            <p className="mt-1 text-sm">Suits</p>
            <p className="product-price font-bold">$380</p>

            <p className='text-gray-400 line-through text-sm'>$500</p>
            <p className="text-red-800 absolute right-2 top-1">-18%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopDeals;
