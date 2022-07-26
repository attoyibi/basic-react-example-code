import React, {useState, useEffect} from 'react'
import style from './App.module.css' 
import Header from './header.jsx'
import './App.css' 

export default function App() {
  const [nama, setNama] = useState("muchson");
  const handleClick = () =>{
    setNama("hai")
  }
  // didmound di dalam
  useEffect(()=>{
    console.log("use Effect didMount")
  },[])

  // let nama = "muchson";
  let status = true;
  return (
    <>
    <Header data={nama} dataStatus={status}/>
    <div onClick={handleClick} style={status ? {border: '1px solid green '}: {border: '1px solid red '}} className={style.yellow}>{nama}</div>
    </>
  )
}