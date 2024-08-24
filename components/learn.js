"use client";
import React, { useState } from "react";

const Learn = () => {
    const[count,setCount]= useState(0);
    let Add = () =>{setCount(count+1)}
    let Minus = () =>{setCount(count-1)}
  return (
    <div>
      <h1 className="text-4xl capitalize text-center">10+17={count} {count !== 27? 'wrong':'correct'}</h1>
      <button onClick={Add} className="p-2 text-center bg-green-700 rounded-md m-2 text-sm">
        Add
      </button>
      <button onClick={Minus} className="p-2 text-center bg-red-700 rounded-md m-2 text-sm">
        Substract
      </button>
    </div>
  );
};

export default Learn;
