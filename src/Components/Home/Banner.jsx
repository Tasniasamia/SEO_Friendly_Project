import Image from 'next/image';
import React from 'react';


const BannerData=async()=>{
    const response=await fetch(process.env.BASE_URL+`/api/HeroList`);
    const data=await response.json();
    return data
}

const Banner = async() => {
    const data=await BannerData();
    return (
        <div className='flex items-center justify-center gap-10 lg:mx-[149px] py-5'>
         <div>  <h1 className='lg:text-[60px] font-bold text-[30px]'><span className='text-black'>{data?.title.slice(0,14)}</span><br/><span className='text-[#059669]'>{data?.title.slice(14,31)}</span></h1>
            <p>{data[`description`]}</p>

            <div className='flex gap-6 lg:mt-10 mt-[10px]'><button className="btn btn-success text-white">Get Started</button> <button className='btn btn-success  btn-outline'>How It Works</button></div>
            </div> 
      <div>  
        <div className='flex gap-3 mb-3'>
            <Image src={data?.image1} alt="data" width={200} height={20} className='rounded-lg'/>
            <Image src={data?.image2} alt="data" width={300} height={20} className='rounded-lg'/>
            </div>
            <div className='flex gap-3'>
            <Image src={data?.image3} alt="data" width={300} height={20} className='rounded-lg'/>
            <Image src={data?.image4} alt="data" width={200} height={20} className='rounded-lg'/>
            </div>
        </div>
            
        </div>
    );
};

export default Banner;