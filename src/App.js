import React,{useState} from 'react'
import './App.css'
import {cartas} from './js/cartas'
import Card from './components/Card.jsx'
import Information from './components/Information.jsx'
import img1 from './img/61.png'
import './css/buscador.css'

function App() {
  const inputRef = React.createRef()
  const [buscar,setBuscar] = useState('')
  const aceptar = ()=> {
    setBuscar(inputRef.current.value);
  }
  const arrCards = cartas.map((c,index)=>{
    return (<Card setBuscar={setBuscar} key={index} nombre={c.silaba} numero={c.numero} trad1={c.trad1} img1={img1}></Card>)
  })
  const tiene_numeros = texto=>{
    const numeros = "0123456789"
    for(let i=0; i<texto.length; i++){
      if (numeros.indexOf(texto.charAt(i),0)!==-1){
        return true
      }
    }
    return false
  }
  const mostrar = (buscar)=>{
    if(buscar === ''){
      return arrCards.map((c)=>c)
    }
    else if(tiene_numeros(buscar) && Number.isInteger(parseInt(buscar))){
      return arrCards.filter(c=>c.props.numero === buscar)
    }
    else if(buscar.charAt(0) === '$'){
      let aux = ''
      for(let i=1;i<buscar.length;i++){
        aux += buscar.charAt(i)
      }
      let index = parseInt(aux)
      let carta = cartas[index]
      return <Information nombre={carta.silaba} numero={carta.numero} autor={carta.autor}
              romaji={carta.romaji} trad1={carta.trad1} trad2={carta.trad2}
      ></Information>
    }
    else{    
      return arrCards.filter(c=> c.props.nombre.toLowerCase() === buscar.toLowerCase())
    }
  } 
  
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <input ref={inputRef}></input>
          <button onClick={aceptar}>Aceptar</button>
        </nav>
        <main className="grid">{
          mostrar(buscar)
        }</main>
      </header>
    </div>
  );
}

export default App;
