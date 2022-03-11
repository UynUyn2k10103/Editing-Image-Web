import './App.css';
import React from 'react';
import './components/Body/Body.jsx' 
import Body from './components/Body/Body.jsx';
import Header from './components/Header/Header.jsx' 
import Footer from './components/Footer/Footer';

function App() {
  


  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
