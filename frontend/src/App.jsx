import { useState, useEffect } from 'react'
import './App.css'


function App() {

const [tracks, setTracks] = useState([])
    
//Connected backend
useEffect(() => {
    async function getTracks() {
        const response = await fetch('http://localhost:8080/trackrequest')
        const data = await response.json()
        console.log(data)
        setTracks(data)
    }
    getTracks()
}, [])



}

export default App
