import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData();
    // const [data,setData]=useState([])
    // useEffect(()=>{
    // fetch("https://api.github.com/users/vishaljadhav207")
    // .then(res=>res.json())
    // .then(data=>{
    //     console.log(data)
    //     setData(data)
    // })
    // },[])
  return (
    <div className='text-center bg-gray-600 text-white p-4 text-3xl'>Github follower: {data.followers}
    <img src={data.avatar_url} alt="avt" width={300} className='flex item-center'  /></div>
  )
}

export default Github

//optimization using use loader hook 
export async function githubInfo(){
   const res=await fetch('https://api.github.com/users/vishaljadhav207')
   return res.json();
}