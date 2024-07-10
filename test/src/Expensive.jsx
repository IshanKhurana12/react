import React, { useMemo } from 'react'
import { useState } from 'react'
export default function Expensive() {
    const [ans,setans]=useState(0);


    const exp=(num)=>{ 
            for(let i =0;i<1000000000;i++){
                num+=1;
            }
            return  num;
    } 

   const calculation=useMemo(()=>exp(ans),[ans]) ; 
   

const increment=()=>{
    setans(ans+1);
}

  return (
    <div>
        expensive calculation value {calculation}
        <button onClick={increment}>increment counter</button>
        <h1>counter value {ans}</h1>
    </div>
  )
}



