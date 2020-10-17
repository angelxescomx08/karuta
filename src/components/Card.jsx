import React from 'react';
import '../css/carta.css';

function Card(props){
    const arr = props.trad1.split('\n')
    return(
        <article key={props.numero}>
            <div>
                <figure>
                    <img alt="Carta 61" src={props.img1}></img>
                </figure>
                <div className="text">
                    <h3>{props.nombre}</h3>
                    <p>{props.numero}<br></br>
                        {arr.map(linea=>(<>{linea}<br></br></>))}
                    </p>
                </div>
            </div>
        </article>
    );
}

export default Card;