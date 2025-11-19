import { useState, useEffect } from 'react'
import './App.css'




function App() {

    
//Connected backend
useEffect(() => {
    async function test() {
        const response = await fetch('http://localhost:8080/')
        const result = await response.json()
        console.log(result)
    }
    test()
}, [])



}

export default App
