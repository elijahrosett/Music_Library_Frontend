import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddSong from './Components/DisplayMusic/AddSong/AddSong';


function App() {
const [music, setMusic] = useState([]);

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
      <AddSong />
      <h1>nav bar</h1>
      <h1>search bar</h1>
      

    </div>
  );
}

export default App;
