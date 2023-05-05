import React, {useState} from 'react'
import style from './Liste.module.css'
import ListItem from './ListItem';

export default function Liste(props) {

    const listItems = props.items.map((item) =>
    <ListItem text={item.toString()}>{item}</ListItem>
  );
  return (
    <ul className={style.main}>
      {listItems}
    </ul>
  );
}
