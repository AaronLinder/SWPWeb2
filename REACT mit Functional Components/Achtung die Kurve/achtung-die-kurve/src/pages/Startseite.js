import React from 'react'
import { useState } from 'react'
import PlayerElement from '../components/PlayerElement'

export default function Startseite() {
    const keymap = {
        left: "Taste 1",
        right: "Taste 2"
    }

    return (
        <div>
            <h1>Achtung die Kurzve</h1>
            <PlayerElement name="afs" defaultKeymap={keymap}></PlayerElement>
        </div>
    )
}
