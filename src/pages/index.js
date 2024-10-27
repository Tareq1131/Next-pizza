import Card from "@/components/home/Card";
import CarouselComponent from "@/components/home/Carousel";
import cardData from "../store/cardData.json";
import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  let categories = new Set();
  let categoryArray;
  const foodData = [];

  const handleData = () => {
    cardData.map((data) => {
      return foodData.push(data), categories.add(data.category);
    });
  };

  handleData();
  categoryArray = [...categories];

  return (
    <>
      <Head>
        <title>PizzaWizza</title>
      </Head>
      <CarouselComponent />
      <div className="container mx-auto">
        {categoryArray.map((category) => {
          return (
            <>
              <div
                key={category}
                className="mt-10 mb-3 text-4xl font-bold uppercase "
              >
                {category}
              </div>
              <hr />
              <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3">
                  {foodData
                    .filter((foodData) => category === foodData.category)
                    .map((data) => {
                      return <Card key={data.name} foodData={data} />;
                    })}
                </div>
              </div>
            </>
          );
        })}
      </div>

      {/* <Card /> */}
    </>
  );
}
