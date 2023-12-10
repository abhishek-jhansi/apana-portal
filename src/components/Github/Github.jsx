import React, { useEffect, useState } from 'react'

function Github() {
   const [data, setData] = useState([])
   useEffect(() => {
      fetch('https://api.github.com/users/93-abhishek-dangi')
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setData(data)
         })
   }, [])
   return (
      <>
         <div className='text-center m-4 bg-gray-600 text-white
    p-4 text-3xl'>Github Followers {data.followers}</div>
      
         <div class="flex  bg-slate-600">
            <div class="flex-none w-50 h-50 text-center p-1">
                 <img src={data.avatar_url} alt="Git picture" width={250} className='rounded-full' />
            </div>
          
            <div class="flex-1 bg-slate-600 text-white p-6 ">
               <h2 className='text-3xl m-3'>  Name: {data.name}</h2>
               
               <p className='m-2'>Bio: {data.bio}</p>
               <p className='m-2'>Follow me on Twitter: {data.twitter_username}</p>
               <p className='m-2'>Portfolio: {data.company}</p>
               <h2 className='text-xl m-3'>Location: {data.location} </h2>
            </div>
         </div>


      </>
   )
}

export default Github

// export const guthubInfoLoader = async () =>{
//     const responnse = await fetch('https://api.github.com/users/hiteshchoudhary')
//     return responnse.json()
// }