import React from 'react';
import img1 from '../img/61.png'
import '../css/Information.css'

function Information(props){

    return(
        <article className='information'>
            <h2>{props.nombre}</h2>
            <h3>{props.numero}</h3>
            <img alt='' src={img1}></img>
            <h4>{props.autor}</h4>
            <p>{props.romaji}</p>
            <p>{props.trad1}</p>
            <p>{props.trad2}</p>
        </article>
    )
}

export default Information;