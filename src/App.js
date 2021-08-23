import React,{useState} from 'react'
import './App.css'
import {cartas} from './js/cartas'
import Card from './components/Card.jsx'
import Information from './components/Information.jsx'
import './css/buscador.css'
import inicio from './icons/hogar.svg'
import buscarImg from './icons/buscar.svg'
import imagenes from './js/imagenes'

function App() {
  const inputRef = React.createRef()
  const [buscar,setBuscar] = useState('')
  
  const aceptar = ()=> {
    setBuscar(inputRef.current.value)
    inputRef.current.value = ''
  }

  const inicioBoton = ()=> {
    setBuscar('')
    inputRef.current.value = ''
  }

  const arrCards = cartas.map((c,index)=>{
    return (<Card setBuscar={setBuscar} key={index} silaba={c.silaba} nombre={c.nombre}
      numero={c.numero} trad1={c.trad1} img1={imagenes[index]}></Card>)
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
      let index = parseInt(aux) - 1
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
          <button className='inicio' onClick={
            inicioBoton
          }><img className="icon" src={inicio} alt='inicio'></img></button>
          <input ref={inputRef}></input>
          <button className='buscar' onClick={aceptar}><img className="icon" alt='buscar' src={buscarImg}></img></button>
        </nav>
      </header>
      <main className="container">{
          mostrar(buscar)
        }</main>
    </div>
  );
}

export default App;