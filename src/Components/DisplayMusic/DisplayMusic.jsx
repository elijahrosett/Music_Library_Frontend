

const DisplayMusic = (props) => {

    function handleClick(song){
        alert(song)
    }
      
    return ( 
            <table className="table" >
                <thread>
                 <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Release Date</th>
                    <th scope="col">Album</th>
                 </tr>
                </thread>
                <tbody>
                        {props.music.map((song, index) => {
                            return (
                                
                              <tr key={index + 1}>
                                  <td>{song.title}</td>
                                  <td>{song.album}</td>
                                  <td>{song.artist}</td>
                                  <td>{song.genre}</td>
                                  <td>{song.release_date}</td>  
                                    <button>Delete</button>

                            </tr>
                            )
                    }
                    )}
             
                </tbody>
    </table>

        
    );}
 
export default DisplayMusic;