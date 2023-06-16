import React from 'react'
import style from '../style/ListItem.module.css'

export default function ListItem(props) {
  function changePage(){
    props.setItemData(props.obj)
    props.setSeitenData(false)
  }
  return (
    <div onClick={changePage} className={style.item}>
      <img src={`images/general_${props.obj.id}.jpg`} className={style.img}></img>
      <span>{props.obj.name}</span>
      <span className={style.winRates}><span>W {props.obj.winRateW}</span><span>B {props.obj.winRateB}</span></span>
    </div>
  )
}
