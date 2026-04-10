import Image from "next/image";
import React from "react";

const FoodDetailPage = async ({ params }) => {
  const { foodId } = await params;
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const data = await res.json();
  const food = data.data;
  const { id, dish_name, image_link, main_ingredients } = food;
  //  console.log('food in food detail page',food);

  return (
    <div className="w-10/12 mx-auto text-center my-10 py-10">
      <h2>Show details of food: {foodId}</h2>
      <div className="border flex flex-col justify-center items-center">
        <h3 className="text-3xl">{dish_name}</h3>
        <Image
          src={image_link}
          alt={dish_name}
          width={200}
          height={200}
        ></Image>
        <h3>Ingredients: </h3>
        <ol className="list-decimal text-left">
          {main_ingredients.map((m_i, idx) => (
            <li key={idx}>{m_i}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default FoodDetailPage;
