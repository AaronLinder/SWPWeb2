import React from 'react'
import { useState } from 'react';
import OpeningList from '../components/OpeningList';

const data = require('../data.json')
const openings = data.openings

const findOpeningByNameContains = (str) => {
  return openings.filter(opening => opening.name.toLocaleLowerCase().includes(str.toLocaleLowerCase()))
}

export default function Startseite() {
  const [searchString, setSearchString] = useState("");

  let listData = findOpeningByNameContains(searchString)
  return (
      <div className="App">
          <h1>Schacheröffnungen</h1>
          <input type="text" onChange={(event) => setSearchString(event.target.value)} placeholder="Suchfeld"></input>
          <OpeningList listData={listData} ></OpeningList>
      </div>
    );
}
