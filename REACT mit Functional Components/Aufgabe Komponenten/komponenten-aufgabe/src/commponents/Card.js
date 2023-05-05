import React from 'react'
import style from './Card.module.css'

export default function Card() {
  return (
    <div className={style.card}>
        <div id="image-parent">
            <img className={style.image} src={require("../img_avatar.png")}></img>
        </div>
        <div className={style.info}>
            <span>Günther</span>
            <span>Test</span>
        </div>
    </div>
  )
}
