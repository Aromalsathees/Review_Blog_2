import React, {useState} from 'react'
import {Datas} from './Datas'
import { Articl } from './Articl'
import { FcNext } from "react-icons/fc";

export const Home = () => {
  const [current,update] = useState(Datas)
  return (
  
    <div>
     <Articl current={current}/>   
     <FcNext size={32} color="blue" />
    </div>
  )
}
