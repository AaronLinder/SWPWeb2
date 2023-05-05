import React, { useState } from 'react'
import style from './Button.module.css'

export default function Button(props) {
  const [isOn, setIsOn] = useState();
  console.log(props)
  return (
    <div className={isOn ? style.isOn : style.isOff} onClick={() => {
      setIsOn(!isOn);
    }}>{props.text} {isOn ? "On" : "Off"}</div>
  )
}
