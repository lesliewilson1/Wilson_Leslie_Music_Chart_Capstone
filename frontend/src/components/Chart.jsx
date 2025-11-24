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
    <table className="chart">
        <thead>
        </thead>
        <tbody>
            {tracks.map((track) => (
                <tr key={track.number}>
                    <td>{track.number}</td>
                    <td>{track.name}</td>
                    <td>
                        <img src={track.image} alt={track.name} width="50"></img>          
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
)

}

export default Chart;