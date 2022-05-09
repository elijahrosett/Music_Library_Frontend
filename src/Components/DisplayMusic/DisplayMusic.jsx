

const DisplayMusic = (props) => {

      
    return ( 
        <div>
            <table>
                <thread>
                    <tr>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Song ID</th>
                    <th>Release Date</th>
                    <th>Title</th>
                    </tr>
                </thread>
                <tbody>
                    {props.music.map((song) => {
                        return (
                            <tr>
                                <td>{song.album}</td>
                                <td>{song.artist}</td>
                                <td>{song.genre}</td>
                                <td>{song.release_date}</td>
                                <td>{song.title}</td>
                                <button>delete</button>
                            </tr>
                        )
                    }
                    )}
             
                </tbody>
            </table>
        </div>

        
    );}
 
export default DisplayMusic;