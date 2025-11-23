import { useState, useEffect } from 'react';

export const BASE_URL = import.meta.env.VITE_BASE_URL


function Form() {

    const [trackName, setTrackName] = useState("");
    const [artistName, setArtistName] = useState("");
    const [year, setYear] = useState("");
    const [tracks, setTracks] = useState([]);


 //Connected backend

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
        const response = await fetch (`${BASE_URL}`, {
            method: "POST",
            body: JSON.stringify({ trackName, artistName, year }),
            headers: {'Content-Type': 'application/json' },
        });
        const newTrack = await response.json();
        setTracks([...tracks, newTrack]);
        setTrackName(""); setArtistName(""); setYear("");

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

        const newTracks = tracks.filter((track) => track.id !== id)
        setTracks(newTracks)

    }catch(e) {
    console.log('Form Delete Error:', e)

}
};





    return (
        <>
        <div>
            <section className="contact">
                <form handleSubmit={handleSubmit}>
                    <h2>Track Request</h2>
                    <div className="input-box">
                        <label>Track Name</label>
                        <input type="text" className="field" placeholder='Enter track name' required />
                    </div>
                    <div className="input-box">
                        <label>Artist Name</label>
                        <input type="text" className="field" placeholder='Enter artist name' required />
                    </div>
                    <div className="input-box">
                        <label>Year</label>
                        <input type="text" className="field" placeholder='Enter year name' required />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </section>
          
        </div>
        </>
    )
}

export default Form;
