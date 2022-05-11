import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddSong from './Components/DisplayMusic/AddSong/AddSong';
import SearchBar from './Components/DisplayMusic/SearchBar/SearchBar';



function App() {
const [music, setMusic] = useState([]);
const [song, setSong] =useState()

async function addNewSong(song){
  let tempSong = [...music, song];
  setMusic(tempSong); 
  let response = await axios.post('http://127.0.0.1:8000/api/music/', song);
  if (response.status ===201){
    await getAllMusic()
  }
  
}

async function deleteSong(song){
  let songToDelete = [song];
  setSong(songToDelete); 
  let response = await axios.delete('http://127.0.0.1:8000/api/music/', songToDelete);
  if (response.status ===201){
    await getAllMusic()
  }
  
}

useEffect(() => {
  getAllMusic();
}, [])

function filterMusic(filter){
  if (music.filter(element => element.album === filter).length > 0){
  let tempMusic = music.filter(element => element.album.includes(filter));
  setMusic(tempMusic);
  }
  else if (music.filter(element => element.artist === filter).length > 0){
  let tempMusic = music.filter(element => element.artist.includes(filter));
  setMusic(tempMusic);
  }
  else if (music.filter(element => element.genre === filter).length > 0){
  let tempMusic = music.filter(element => element.genre.includes(filter));
  setMusic(tempMusic);
  }
  else if (music.filter(element => element.release_date === filter).length > 0){
  let tempMusic = music.filter(element => element.release_date.includes(filter));
  setMusic(tempMusic);
  }
  else if (music.filter(element => element.title === filter).length > 0){
  let tempMusic = music.filter(element => element.title.includes(filter));
  setMusic(tempMusic);
  }
else{
  alert('That search does not match any music')
}
}

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
    <div className='container-fluid'>
      <div className='border_box'>
        <div className="d-flex justify-content-center">
      <SearchBar filterMusic={filterMusic} />
      </div>
      </div>
      <div className='border_box'>
      <DisplayMusic music={music} deleteSong={deleteSong} />
      </div>
      <div className='border_box'>
        <div className="d-flex justify-content-center">
      <h3>Add song</h3>
      </div>
      <AddSong addNewSong={addNewSong}/>
      </div>
      
      
      

    </div>
  );
}

export default App;


// pass up filter from search bar, then if filter contains anything,
//  filter those results on display music. if filter does not contain, show all
// 