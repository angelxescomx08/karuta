import React from 'react';
import '../css/carta.css';

function Card(props){
    const arr = props.trad1.split('\n')
    return(
        <article className='card' onClick={()=>{
            props.setBuscar('$'+props.numero)
        }}>
            <figure>
                <img className="card-img" src={props.img1} alt="img card"></img>
            </figure>
            <div className="text">
                <h3 className="tittle">{props.silaba}</h3>
                <p className='numero'>{props.numero}</p>
                <p className='poema'>
                    {arr.map((linea,index)=>(<span key={index+"linea"}>{linea}<br></br></span>))}
                </p>
            </div>
        </article>
    );
}

export default Card;