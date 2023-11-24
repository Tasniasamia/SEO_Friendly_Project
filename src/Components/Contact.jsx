"use client"
import axios from 'axios';
import React from 'react';

const Contact = () => {
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const fname=e.target.fname.value;
        const lname=e.target.lname.value;
        const email=e.target.email.value;
        const sms=e.target.sms.value;

        const data={
            fname:fname,
            lname:lname,
            email:email,
            msg:sms

        }
        console.log("after creating object",data);
        const rawResponse = await axios.post('/api/User',data);
          console.log(rawResponse.data);
        // let res  = axios.post("{{BASE}}/api/CreateContact", data)

        // fetch('/api/User', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json', // Specify the content type as JSON
        //     },
        //     body: JSON.stringify(
        //     data
        //     ), // Convert the data to JSON format
        //   })
        //     .then((res) => res.json())
        //     .then((data) => {
        //       console.log("contact page",data);
        //     });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex gap-3 mt-4'>
                <input type="text"name="fname"id="fname"placeholder='First Name'className='border border-2 border-black w-full'/>
                <input type="text"name="lname"id="lname"placeholder='Last  Name'className='border border-2 border-black w-full'/>
                </div>
                <div>
                <input type="text"name="email"id="email"placeholder='abc@gmail.com'className='border border-1 border-black w-full mt-4'/>
                </div>
                <textarea cols="20"rows="20" name="sms" id="sms" placeholder='message'className='border border-1 w-full border-black mt-4'></textarea>
            <button className='btn btn-success text-white'>Submit</button>
            </form>
        </div>
    );
};

export default Contact;