// pages/api/User.js
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req, res) {

    const data = await req.json();
    console.log("localserver gets",data);
try{
    const rawResponse = await axios.post(process.env.BASE_URL+"/api/CreateContact",data);
    // const ourdata=await rawResponse.json();
    console.log(rawResponse)
   return NextResponse.json({message:"success"});
}
catch(e){
    return NextResponse.json(e.toString());
}


}
