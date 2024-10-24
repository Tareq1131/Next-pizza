import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="text-white-100 bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 body-font">
      <div className="container flex flex-col flex-wrap items-center p-3 mx-auto text-white  md:flex-row">
        <Link
          href={"/"}
          className="flex items-center font-extrabold text-gray-100 uppercase title-font"
        >
          <Image alt="Navbar Logo" src={"/Pizza.svg"} width={60} height={60} />
          <p className="mx-2 text-xl leading-5">Pizza Wizza</p>
        </Link>
        <p className="mt-4 text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
          Copyright © 2024 Pizza Wizza
        </p>
      </div>
    </footer>
  );
}

export default Footer;
