import axios from 'axios';
import React from 'react';
export const generateMetadata=async()=>{
    const response=await axios.get(process.env.BASE_URL+"/api/SiteMeta/team");
    const data=await response.data;
    console.log(data);
    return {
      title:data[0].title,
      description:data[0].description,
      keywords:data[0].keywords,
      openGraph:{
        images:data[0].image
      }
    }
  }
const page = () => {
    return (
        <div>
            team
        </div>
    );
};

export default page;