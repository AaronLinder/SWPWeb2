import './App.css';
import OpeningList from './components/OpeningList';
import ZugFolge from './components/ZugFolge';
import { useState } from 'react';

const data = require('./data.json')
const openings = data.openings

const findOpeningByNameContains = (str) => {
  return openings.filter(opening => opening.name.toLocaleLowerCase().includes(str.toLocaleLowerCase()))
}

function App() {
  const [seitenData, setSeitenData] = useState(true);
  const [itemData, setItemData] = useState();
  const [searchString, setSearchString] = useState("");

  function changePage(){
    setSeitenData(true)
  }

  let listData = findOpeningByNameContains(searchString)

  if (seitenData){
    return (
      <div className="App">
          <h1>Schacheröffnungen</h1>
          <input type="text" onChange={(event) => setSearchString(event.target.value)} placeholder="Suchfeld"></input>
          <OpeningList listData={listData} setSeitenData={setSeitenData} setItemData={setItemData}></OpeningList>
      </div>
    );
  }
  else{
    return(
      <div>
        <h1>{itemData.name}</h1>
        <button onClick={changePage} class='buttons'>Zurück</button>
        <ZugFolge itemData={itemData}></ZugFolge>
      </div>
    );
  }

  
}

export default App;
