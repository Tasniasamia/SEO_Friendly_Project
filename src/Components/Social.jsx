import Image from 'next/image';
import React from 'react';

const social = async () => {
  const response = await fetch(process.env.BASE_URL + `/api/BrandList`);
  const data = await response.json();
  console.log(data);
  return data;
};

const Social = async () => {
  const data = await social();

  return (
    <div  className='grid lg:grid-cols-4 grid-cols-2 justify-items-center  lg:my-[120px] my-[40px]'>
      {data.map((item, index) => {
        return (
          <div key={index}>
            {/* Use item.image instead of data.image */}
            <Image src={item.image} height={150} width={150} alt="brand" />
          </div>
        );
      })}
    </div>
  );
};

export default Social;
