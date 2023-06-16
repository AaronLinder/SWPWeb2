import React, { useState } from 'react'
import style from '../style/ZugFolge.module.css'

export default function ZugFolge(props) {
    let anzahlZuege =props.itemData.moves.length;
    let [counter, setCounter]= useState(0);
    const zugVor = () => {
        if(counter < anzahlZuege - 1) {
            counter++
            setCounter(counter)
        }
        console.log(counter, anzahlZuege - 1)
    }
    const zugZurueck = () =>{
        if(counter > 0){
            counter--
            setCounter(counter)
        }
    }
  return (
    <div className={style.item}>
        <img src={props.itemData.moves[counter].image} className={style.img}></img>
        <div className={style.winRateMoves}>
            <div className={style.winRates}>
                <div className={style.winRateItem}>
                    <span className={style.lightTitle}>Win-% White</span>
                    <span>{props.itemData.winRateW}</span>
                </div>
                <div className={style.winRateItem}>
                    <span className={style.lightTitle}>Win-% Blank</span>
                    <span>{props.itemData.winRateB}</span>
                </div>
            </div>
            <div className={style.controller}>
                <div>Aktueller Zug (Zug {counter + 1} von {anzahlZuege})</div>
                <div className={style.textzug}>{props.itemData.moves[counter].move}</div>
                <button onClick={zugZurueck} className={style.zurueck} >Zurück</button>
                <button onClick={zugVor} className={style.vor}>Vor</button>
            </div>
        </div>
    </div>
  )
}
