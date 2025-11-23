import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
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
                {/* <Route path="*" element={<Navigate to='/' />}/> */}
            </Routes>
        </Router>
    )
    

}

export default App








