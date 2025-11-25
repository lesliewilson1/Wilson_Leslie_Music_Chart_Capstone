import { useState, useEffect } from 'react';

export const API_URL = import.meta.env.VITE_API_URL


function Chart({ limit = 10 }) {
    const [tracks, setTracks] = useState([]);
    

    useEffect(() => {
        async function getTracks() {
            const response = await fetch(`${API_URL}`)
        
            const data = await response.json();
            const topTracks = data.slice(0, limit).map((item, index) => ({
                number: index + 1,
                name: item.track_name,
                artist: item.artist_name,
                image: item.image_url,

        }));
        setTracks(topTracks);
        }
        getTracks();
    }, [limit])


return (
    
    <div className="chart">
        <h1>November 2025</h1>
            {tracks.map((track) => (
                <div key={track.number} className="chart-row">
                    <span className="number">#{track.number}</span>
                        <img src={track.image} alt={track.name}></img>   
                    <div>
                        <div className="name">{track.name}</div>
                         <div className="artist">{track.artist}</div>

                    </div>       
                </div>
            ))}
       
    </div>

)

}

export default Chart;