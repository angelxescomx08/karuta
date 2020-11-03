import React from 'react';
import img1 from '../img/61.png'
import anterior from '../icons/anterior.svg'
import siguiente from '../icons/siguiente.svg'
import '../css/Information.css'
import {cartas} from '../js/cartas.js'
import { useState } from 'react';

function Information(props){
    const [ind,setInd] = useState(parseInt(props.numero)-1)
    console.log(ind)
    const romaji = cartas[ind].romaji.split('\n')
    const trad1 = cartas[ind].trad1.split('\n')
    const trad2 = cartas[ind].trad2.split('\n')

    return(
        <article className='information'>
            <button className='atras' onClick={ () =>{
                if(ind === 0)setInd(99)
                else setInd(ind => ind -1)}
            }><img alt='anterior' src={anterior}></img></button>
            <button className='siguiente' onClick={ () =>{
                if(ind === 99)setInd(0)
                else setInd(ind => ind + 1)}
            }><img alt='siguiente' src={siguiente}></img></button>
            <>
                <h2>{cartas[ind].nombre}</h2>
                <h3>{cartas[ind].numero}</h3>
                <img alt='' src={img1}></img>
                <h4>{cartas[ind].autor}</h4>
                <p>{romaji.map((linea,index)=>(<span key={index+"linea"}>{linea}<br/></span>))}</p>
                <p>{trad1.map((linea,index)=>(<span key={index+"linea"}>{linea}<br/></span>))}</p>
                <p>{trad2.map((linea,index)=>(<span key={index+"linea"}>{linea}<br/></span>))}</p>
            </>
        </article>
    )
}

export default Information;