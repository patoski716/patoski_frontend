import './App.css'
import Footer from './components/Footer';
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
