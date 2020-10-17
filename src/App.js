import React from 'react';
import './App.css';
import {cartas} from './js/cartas';
import Card from './components/Card.jsx';
import img1 from './img/61.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main className="grid">{cartas.map((c,index)=>{
          return(
          <Card nombre={c.nombre} numero={c.numero} trad1={c.trad1} img1={img1}></Card>
          )
        })}</main>
      </header>
    </div>
  );
}

export default App;
