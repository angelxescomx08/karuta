import React from 'react';
import '../css/carta.css';

function Card(props){
    const arr = props.trad1.split('\n')
    return(
        <article className='Card' onClick={()=>{
            props.setBuscar('$'+props.numero)
        }}>
            <div>
                <figure>
                    <img src={props.img1} alt=""></img>
                </figure>
                <div className="text">
                    <h3>{props.silaba}</h3>
                    <p className='numero'>{props.numero}</p>
                    <p className='poema'>
                        {arr.map((linea,index)=>(<span key={index+"linea"}>{linea}<br></br></span>))}
                    </p>
                </div>
            </div>
        </article>
    );
}

export default Card;