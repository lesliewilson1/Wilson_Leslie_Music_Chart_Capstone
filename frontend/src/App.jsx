import { Router, Routes, Route, Navigate } from 'react-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Form from './pages/Form'
import Tracks from './pages/Tracks'

import './App.css'


function App() {

    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/form" element={<Form />}/>
                <Route path="/tracks" element={<Tracks />}/>
                <Route path="*"element={<Navigate to='/' />} />
            </Routes>
        </Router>
    )
    

}

export default App






// const [tracks, setTracks] = useState([])
    
// //Connected backend
// useEffect(() => {
//     async function getTracks() {
//         const response = await fetch('http://localhost:8080/trackrequest')
//         const data = await response.json()
//         console.log(data)
//         setTracks(data)
//     }
//     getTracks()
// }, [])


