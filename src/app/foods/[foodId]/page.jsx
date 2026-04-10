import React from 'react';

const FoodDetailPage =async ({params}) => {
  const {foodId} = await params;
  return (
    <div className='w-10/12 mx-auto text-center my-10 py-10'>
      <h2>Show details of food: {foodId}</h2>
    </div>
  );
};

export default FoodDetailPage;