import { useState, useEffect } from 'react';

export const BASE_URL = import.meta.env.VITE_BASE_URL


function Form() {

    const [trackName, setTrackName] = useState("");
    const [artistName, setArtistName] = useState("");
    const [year, setYear] = useState("");
    const [tracks, setTracks] = useState([]);
    const [editingId, setEditingId] = useState(null);


 //Connected backend

 //Get track request
useEffect(() => {
    async function getTracks() {
        const response = await fetch(`${BASE_URL}`)
        const data = await response.json()
        console.log(data)
        setTracks(data)
    }
    getTracks()
}, [])

//Post track request
const handleSubmit = async (e) => {
e.preventDefault();

try {
        if (editingId) {
            const response = await fetch(`${BASE_URL}/${editingId}`, {
                method: 'PUT',
                body: JSON.stringify({ 
                track: trackName, 
                artist: artistName, 
                year: Number(year)
             }),
                headers: { 'Content-Type': 'application/json' }
            })
            const updatedTrack = await response.json();
            setTracks(tracks.map(track => track._id === editingId ? updatedTrack : track));
            setEditingId(null);
        } else {
                const response = await fetch (`${BASE_URL}`, {
                    method: "POST",
                    body: JSON.stringify({ 
                        track: trackName, 
                        artist: artistName, 
                        year: Number(year)
             }),
            headers: { 'Content-Type': 'application/json' },
        });
            const newTrack = await response.json();
            setTracks([...tracks, newTrack]);
        }
    
        //Clear form
        setTrackName("");
        setArtistName("");
        setYear("");
    
    
    // const response = await fetch (`${BASE_URL}`, {
    //         method: "POST",
    //         body: JSON.stringify({ 
    //             track: trackName, 
    //             artist: artistName, 
    //             year: Number(year)
    //          }),
    //         headers: { 'Content-Type': 'application/json' },
    //     });
    //     const newTrack = await response.json();
    //     setTracks([...tracks, newTrack]);
    //     setTrackName(""); setArtistName(""); setYear("");

    }catch(e){

    console.log('Form Error:', e)
}
};

//Delete track request
async function handleDelete(id) {
    
try{
        await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE'
     });

        const newTracks = tracks.filter((track) => track._id !== id)
        setTracks(newTracks)

    }catch(e) {
    console.log('Form Delete Error:', e)

}
};

// //Update track request
// async function handleUpdate(id) {
// try{


//     await fetch(`${BASE_URL}/${id}`, {
//         method: 'PUT'
//     });

//     const updatedTracks = tracks.map((track) => (track._id === id ? {...track, completed: !track.completed } : track))

//     setTracks(updatedTracks)
// } catch(e) {
//     console.log('Form Update Error:', e)
// }
// }



    return (
        <>
        <div>
            <section className="contact">
                <form onSubmit={handleSubmit}>
                    <h2>Track Request</h2>
                    <div className="input-box">
                        <label>Track Name</label>
                        <input type="text" className="field" placeholder='Enter track name' required
                         value={trackName} onChange={(e) => setTrackName(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <label>Artist Name</label>
                        <input type="text" className="field" placeholder='Enter artist name' required
                        value={artistName} onChange={(e) => setArtistName(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <label>Year</label>
                        <input type="text" className="field" placeholder='Enter year name' required
                        value={year} onChange={(e) => setYear(e.target.value)} />
                    </div>
                    <button type="submit">Send</button>
                {/* </form> */}
                <div className="tracks-list">
                    <h2>Submitted Tracks</h2>
                    <ul>
                        {tracks.map(track => (
                            <li key={track._id}>
                                {track.track} - {track.artist} ({track.year})
                                <button type="button" onClick={() => {
                                    setTrackName(track.track);
                                    setArtistName(track.artist);
                                    setYear(track.year);
                                    setEditingId(track._id);
                                }}>Edit</button>
                                <button type="button" onClick={() => handleDelete(track._id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
                </form>
            </section>
          
        </div>
        </>
    )
}

export default Form;
