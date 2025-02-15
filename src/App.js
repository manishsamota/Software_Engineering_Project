import logo from './logo.svg';
import './App.css';
import { CardHeader } from '@mui/material';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Home />
      <Footer /> */}

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact/>}></Route>
        </Routes  >
      </BrowserRouter>
    </div>
  );


  
}

export default App;
