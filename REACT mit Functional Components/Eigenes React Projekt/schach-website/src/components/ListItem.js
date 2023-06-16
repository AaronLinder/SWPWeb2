import React from 'react'
import style from '../style/ListItem.module.css'
import { useNavigate } from "react-router-dom";

export default function ListItem(props) {
  const navigate = useNavigate()
  function changePage(id) {
    navigate("/moves?id=" + id)
  }
  return (
    <div onClick={() => changePage(props.obj.id)}  className={style.item}>
      <img src={`images/general_${props.obj.id}.jpg`} className={style.img}></img>
      <span>{props.obj.name}</span>
      <span className={style.winRates}><span>W {props.obj.winRateW}</span><span>B {props.obj.winRateB}</span></span>
    </div>
  )
}
