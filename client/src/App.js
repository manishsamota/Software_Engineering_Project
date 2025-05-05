import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import MediaSearch from './components/MediaSearch';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Home />
      <Footer /> */}

      <BrowserRouter>

      <Routes>
        <Route path="/" element={<MediaSearch  />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/mediase' element={<MediaSearch />}></Route>
        
        </Routes  >
      </BrowserRouter>
    </div>
  );


  
}

export default App;
