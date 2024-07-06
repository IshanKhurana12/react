import React from 'react'
import { useState } from 'react';
export default function Numbers() {
    const arr=[1,2,3,4,5,6,7,8,9,0];
    const operators=['+','-','*','/'];

    const [input,setinput]=useState('');

    function handlenumber(number){
      setinput(input+number);
    }

    function handleclear(){
        setinput('');
    }
    function submit(){
        try{
            const result=eval(input);
            setinput(result.toString());
        }catch(err){
            setinput('error');
        }
    }
  return (
    <div>
        <div>
            <input type="text" value={input}/>
        </div>
        <div>
        {
            arr.map((number)=>(
          
                <button onClick={()=>handlenumber(number)}>{number}</button>
                
            ))
        }
         </div>
        <div>
        {
              operators.map((op)=>(
                <button onClick={()=>handlenumber(op)}>{op}</button>
            ))
        }
        </div>
       <div>
        <button onClick={submit}>=</button>
        <button onClick={handleclear}>c</button>
       </div>
    </div>
  )
}
