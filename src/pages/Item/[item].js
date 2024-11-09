// import { baseUrl } from "@/utils/baseUrl";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// function Item({ data }) {
//   console.log();
//   return (
//     <div className="min-h-screen px-10">
//       <Link href={"/"}>
//         <div className="container max-w-md  flex my-6 cursor-pointer hover:scale-125  justify-center items-center mx-auto ">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-12 h-12"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//         </div>
//       </Link>

//       <div className="container border-gradient max-w-md p-6 md:p-8 mb-16 mx-auto  flex space-y-4 flex-col items-center justify-center">
//         <div className="relative w-full h-96 rounded-lg lg:w-96">
//           <Image
//             src={data.img}
//             className="rounded-lg"
//             layout="fill"
//             objectFit="cover"
//             alt="item image"
//           />
//         </div>

//         <div className="font-extrabold mb-2 text-base md:text-2xl uppercase ">
//           {data.name}
//         </div>
//         <div className=" max-w-sm text-base md:text-lg text-gray-700 dark:text-gray-400">
//           {data.description}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Item;

// export async function getServerSideProps(context) {
//   const { item } = context.query;
//   // Fetch data from external API
//   const res = await fetch(baseUrl + "api/getDataById", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ item: item }),
//   });
//   const data = await res.json();
//   // Pass data to the page via props
//   return { props: { data: data.data } };
// }

import { baseUrl } from "@/utils/baseUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Item({ data }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-10 py-10 flex items-center justify-center">
      <Link href="/">
        <div className="absolute top-8 left-8 flex items-center gap-2 text-gray-600 hover:text-indigo-500 transition-transform transform hover:scale-110 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-lg font-semibold">Back</span>
        </div>
      </Link>

      <div className="container max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col md:flex-row mx-auto transition-transform transform hover:scale-105 duration-300">
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={data.img}
            className="rounded-lg object-cover"
            width={400} // Set fixed width
            height={600} // Set fixed height
            alt="item image"
          />
        </div>

        <div className="flex flex-col justify-center p-6 md:w-1/2 text-center md:text-left">
          <div className="font-extrabold text-2xl md:text-3xl text-gray-800 uppercase tracking-wide">
            {data.name}
          </div>
          <div className="text-gray-600 text-sm md:text-base mt-4 mb-6 leading-relaxed">
            {data.description}
          </div>
          <Link href="/">
            <p className=" text-center px-8 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 transform transition-transform duration-200 hover:scale-105">
              View More
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;

export async function getServerSideProps(context) {
  const { item } = context.query;
  const res = await fetch(baseUrl + "api/getDataById", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item: item }),
  });
  const data = await res.json();
  return { props: { data: data.data } };
}
