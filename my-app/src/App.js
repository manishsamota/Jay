import logo from './logo.svg';
import './App.css';
import Media from './Media.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
    
       
        <Header/>
      <Media />
      <Footer />
    
   
    </div>
  );
}

export default App;
