import React, { useState } from 'react';

const AddSong = (props) => {
const [album, setAlbum] =useState("")
const [artist, setArtist] =useState("")
const [genre, setGenre] =useState("")
const [release_date, setRelease_date] =useState("date")
const [title, setTitle] =useState("")

function handleSubmit(event){
    event.preventDefault();
    let newSong = {
        album: album,
        artist: artist,
        genre: genre,
        release_date: release_date,
        title: title
    };
    console.log(newSong)
    props.addNewSong(newSong)
}

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Album</label>
            <input type={""} value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <label>Artist</label>
            <input type={""} value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <label>Genre</label>
            <input type={""} value={genre} onChange={(event) => setGenre(event.target.value)}/>
            <label>Release Date</label>
            <input type={"date"} value={release_date} onChange={(event) => setRelease_date(event.target.value)}/>
            <label>Title</label>
            <input type={""} value={title} onChange={(event) => setTitle(event.target.value)}/>
            <button type='submit'>Add Song</button>
        </form>
     );
}
 
export default AddSong;