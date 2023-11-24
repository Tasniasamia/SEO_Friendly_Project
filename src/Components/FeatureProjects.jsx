import Image from 'next/image';
import React from 'react';
const work = async () => {
    const response = await fetch(process.env.BASE_URL + `/api/FeaturedProject`);
    const data = await response.json();
    return data;
  };
const FeatureProjects = async() => {
    const data=await work();
    return (
        <div className='lg:mx-[149px] mx-4 lg:mt-[120px] mt-[20px] '>
        <h1 className='lg:text-[60px] text-[30px] font-bold text-start'>Featured Projects</h1>
        <div className='grid lg:grid-cols-3 grid-cols-1 lg:mt-[40px] mt-[20px] lg:mt-[120px] mt-[20px] justify-items-center  gap-6'>
        {data.map((item, index) => {
        // Add the return statement here
        return (
<div key={index}>

<Image src={item?.image} height={200} width={400} alt="img"/>


</div>

             )}) 
    
    }
        </div></div>
    );
};

export default FeatureProjects;