import React from 'react';

const work = async () => {
  const response = await fetch(process.env.BASE_URL + `/api/WorkList`);
  const data = await response.json();
  return data;
};

const WorkList = async () => {
  const data = await work();
  console.log(data);
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 lg:mt-[120px] mt-[20px] justify-items-center lg:mx-[149px] mx-4 gap-6'>
      {data.map((item, index) => {
        // Add the return statement here
        return (
          <div key={index} className='flex-column space-y-3 text-center'>
            <h1 className='lg:text-[24px] text-[18px]'>{item?.title}</h1>
            <p className='lg:text-[18px] text-[14px]'>{item?.des}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WorkList;
