import React from 'react';

const Statdata=async()=>{
    const response=await fetch(process.env.BASE_URL+`/api/StatList`);
    const data=await response.json();
    return data
}
const Stat = async() => {
    const data=await Statdata();
    return (
        <div className='grid lg:grid-cols-4 grid-cols-2 lg:mx-[149px] mx-4  lg:mt-[120px] mt-[20px]'>
            <div className='flex-column justify-center items-center text-center'>
            <i className="fa-solid fa-thumbs-up text-[#059669] text-[24px]"></i>
            <h1 className='text-[#059669] lg:text-[18px] text-[12px]'>{data.followers}</h1>
            <h1 className='text-gray-300 lg:text-[18px] text-[12px]'>Followers</h1>

            </div>

            <div className='flex-column  justify-center items-center text-center'>
            <i class="fa-solid fa-book-bookmark text-[#059669] text-[24px]"></i>            
            <h1 className='text-[#059669] lg:text-[18px] text-[12px]'>{data.solved}</h1>
            <h1 className='text-gray-300 lg:text-[18px] text-[12px]'>Solved Problems</h1>

            </div>


            <div className='flex-column  justify-center items-center text-center'>
            <i class="fa-solid fa-people-group text-[#059669] text-[24px]"></i>           
            <h1 className='text-[#059669] lg:text-[18px] text-[12px]'>{data.customers}</h1>
            <h1 className='text-gray-300 lg:text-[18px] text-[12px]'>customers</h1>

            </div>

            <div className='flex-column  justify-center items-center text-center'>
            <i class="fa-solid fa-briefcase text-[#059669] text-[24px]"></i>
            <h1 className='text-[#059669] lg:text-[18px] text-[12px]'>{data.projects}</h1>
            <h1 className='text-gray-300 lg:text-[18px] text-[12px]'>projects</h1>

            </div>
        </div>
    );
};

export default Stat;