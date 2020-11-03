import React from 'react';
import '../css/carta.css';

function Card(props){
    const arr = props.trad1.split('\n')
    return(
        <article className='Card' onClick={()=>{
            console.log('$'+props.numero)
            props.setBuscar('$'+props.numero)
        }}>
            <div>
                <figure>
                    <img src={props.img1} alt=""></img>
                </figure>
                <div className="text">
                    <h3>{props.nombre}</h3>
                    <p>{props.numero}<br></br><br></br>
                        {arr.map((linea,index)=>(<span key={index+"linea"}>{linea}<br></br></span>))}
                    </p>
                </div>
            </div>
        </article>
    );
}

export default Card;