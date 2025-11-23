import { useState } from 'react';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
    }



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
