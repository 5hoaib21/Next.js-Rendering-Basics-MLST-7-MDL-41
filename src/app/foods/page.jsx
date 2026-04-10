import FoodCard from "@/components/FoodCard";
import React from "react";

const FoodsPage = async () => {
  // const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
  // const foods = await res.json();

  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const data = await res.json();
  const foods = data.data;
  console.log(foods);

  return (
    <div className="w-10/12 mx-auto">
      <h2>foods: {foods.length}</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
