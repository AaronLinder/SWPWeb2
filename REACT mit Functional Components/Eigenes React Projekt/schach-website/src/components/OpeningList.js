import React from 'react'
import ListItem from './ListItem'

export default function OpeningList(props) {
    let listData = props.listData;
    return (
        <div>
            {listData.map(item => {
                return <ListItem obj={item} setSeitenData={props.setSeitenData} setItemData={props.setItemData}></ListItem>
            })}
        </div>
    )
}
