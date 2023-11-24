import Contact from '@/Components/Contact';
import FeatureProjects from '@/Components/FeatureProjects';
import Social from '@/Components/Social';
import Stat from '@/Components/Stat';
import WorkList from '@/Components/WorkList';
import axios from 'axios';
import dynamic from 'next/dynamic';
const Banner=dynamic(()=>import ('@/Components/Home/Banner'))
import React from 'react';
export const generateMetadata=async()=>{
  const response=await axios.get(process.env.BASE_URL+"/api/SiteMeta/home");
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
      <Banner/>
      <Stat/>
      <WorkList/>
      <FeatureProjects/>
      <Social/>
      <Contact/>
    </div>
  );
};

export default page;