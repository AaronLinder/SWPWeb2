import React from 'react'
import ZugFolge from '../components/ZugFolge';
import { useSearchParams, useNavigate } from 'react-router-dom';

const data = require('../data.json')
const openings = data.openings

export default function Moves() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const queryId = searchParams.get("id")
  const itemData = openings.find(op => op.id == queryId)
  if (!itemData) {
    return <p>Not found</p>
  }

  function changePage() {
    navigate("/")
  }

  return(
    <div>
      <h1>{itemData.name}</h1>
      <button onClick={changePage} class='buttons'>Zurück</button>
      <ZugFolge itemData={itemData}></ZugFolge>
    </div>
  );
}
