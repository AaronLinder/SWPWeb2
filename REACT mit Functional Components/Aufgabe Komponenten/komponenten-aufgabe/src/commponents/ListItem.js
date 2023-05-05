import React, {useState} from 'react'
import style from './Liste.module.css'

export default function ListItem(props) {
    const [isOn, setIsOn] = useState();
    return (
        <li className={isOn?style.isOn:style.isOff} onMouseOver={()=>{
            setIsOn(!isOn)
        }}>
        {props.text}
        </li>
    );
}
