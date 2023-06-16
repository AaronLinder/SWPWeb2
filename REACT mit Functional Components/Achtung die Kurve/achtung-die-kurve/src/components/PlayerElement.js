import React from 'react'
import { useState, useEffect } from 'react'

export default function PlayerElement(props) {
    const [keymap, setKeymap] = useState(props.defaultKeymap);

    function editKey(mode) {
        keymap.select = mode;
        console.log(keymap);
        setKeymap(keymap);
    }

    document.addEventListener("keydown", (event) => {
        console.log('key clicked')
        if (keymap.select) {
            const selectMode = keymap.select
            delete keymap.select
            let keyPressed = event.key
            if (selectMode === "L") {
                keymap.left = keyPressed
            } else {
                keymap.right = keyPressed
            }
            setKeymap(keymap)
        }
    })

    return (
        <div>
            <div>{props.name} {keymap.select}</div>
            <div onClick={() => editKey("L")}>{keymap.left}</div>
        </div>
    )
}
