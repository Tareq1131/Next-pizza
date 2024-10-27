import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";

function Card(props) {
  const data = props.foodData;

  const priceOptions = Object.keys(data.price);
  const [size, setSize] = useState(priceOptions[0]);
  const [qty, setQty] = useState(1);

  const handleQty = (e) => {
    setQty(e.target.value);
  };
  const handleSize = (e) => {
    setSize(e.target.value);
  };

  let finalPrice = qty * parseInt(data.price[size]);
  return (
    <div className="box">
      <div className="overflow-hidden bg-white rounded-lg w-80 dark:bg-black border-gradient">
        {/* <Link href={{ pathname: "/Item/[item]" }} as={`Item/${data["_id"]}`}> */}
        <div className="relative w-full h-80">
          <Image src={data.img} layout="fill" objectFit="cover" alt="pizza" />
          <Image src="" layout="fill" objectFit="cover" alt="pizza" />
        </div>
        <div className="p-4">
          <div lassName="font-bold mb-2 text-xl uppercase ">{data.name}</div>
          <p className="text-base text-gray-700 short_description dark:text-gray-400">
            {data.description}
          </p>
        </div>
        {/* </Link> */}
        <div className="flex justify-between px-4">
          <select
            className="p-1 font-semibold text-black border border-black rounded cursor-pointer h-100 hover:font-bold dark:text-gray-300 dark:border-gray-400"
            onChange={handleQty}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            className="p-1 font-semibold text-black border border-black rounded cursor-pointer h-100 hover:font-bold dark:text-gray-300 dark:border-gray-400"
            onChange={handleSize}
          >
            {priceOptions.map((options) => {
              return (
                <option className="uppercase" key={options} value={options}>
                  {options}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex justify-between p-4 font-bold">
          <button
            // onClick={handleAddToCart}
            className="p-2 border border-gray-900 rounded dark:border-gray-400 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 hover:text-gray-100 "
          >
            Add to cart
          </button>
          <p className="p-2 text-xl">₹{finalPrice}/-</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
