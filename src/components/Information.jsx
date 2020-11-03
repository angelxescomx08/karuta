import React from 'react';
import img1 from '../img/61.png'
import '../css/Information.css'

function Information(props){
    const romaji = props.romaji.split('\n')
    const trad1 = props.trad1.split('\n')
    const trad2 = props.trad2.split('\n')
    return(
        <article className='information'>
            <h2>{props.nombre}</h2>
            <h3>{props.numero}</h3>
            <img alt='' src={img1}></img>
            <h4>{props.autor}</h4>
            <p>{romaji.map((linea,index)=>(<span key={index+"linea"}>{linea}<br/></span>))}</p>
            <p>{trad1.map((linea,index)=>(<span key={index+"linea"}>{linea}<br/></span>))}</p>
            <p>{trad2.map((linea,index)=>(<span key={index+"linea"}>{linea}<br/></span>))}</p>
        </article>
    )
}

export default Information;