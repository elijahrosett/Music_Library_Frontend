import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddSong from './Components/DisplayMusic/AddSong/AddSong';
import SearchBar from './Components/DisplayMusic/SearchBar/SearchBar';


function App() {
const [music, setMusic] = useState([]);

async function addNewSong(song){
  let tempSong = [...music, song];
  setMusic(tempSong); 
  let response = await axios.post('http://127.0.0.1:8000/api/music/', song);
  if (response.status ===201){
    await getAllMusic()
  }
  
}

useEffect(() => {
  getAllMusic();
}, [])



async function getAllMusic(){
  try{
  let response = await axios.get('http://127.0.0.1:8000/api/music/');
  setMusic(response.data);
  console.log(response.data)
}
catch (ex) {
  console.log('there is an error', ex)
}
}



  return (
    <div>
      <DisplayMusic music={music} />
      <AddSong addNewSong={addNewSong}/>
      <SearchBar />
      <h1>search bar</h1>
      

    </div>
  );
}

export default App;


// pass up filter from search bar, then if filter contains anything,
//  filter those results on display music. if filter does not contain, show all
// 