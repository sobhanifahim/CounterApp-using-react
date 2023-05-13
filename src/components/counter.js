import './counter.css'
import { useState } from 'react'

export default function Counter(){
const[number,setNumber]=useState(0)



function Plus(){
    return(
    setNumber(number+1)
    );
}
function Minus(){
    if(number===0){
        return setNumber(0)    
    }
    else{
    return setNumber(number-1)
    }
}
function Reset(){
    return(
        setNumber(0)
        );
}



    return(
        <>
        <br></br>
        <button onClick={Plus} className='btn1'>+</button>
        <b>{number}</b>
        <button onClick={Minus} className='btn2'>-</button><br></br>
        <button onClick={Reset} className='btn3'>Reset</button>
        </>  
        );
}