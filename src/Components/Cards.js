import React from 'react';
import './Cards.css';

const Cards = (props) => {

    return ( 
        <div className='cards'>
            <h1>{props.titulo}</h1>
            <article>
                <a href={props.link}>
                    <img src={props.imagen} />
                </a>
            </article>
        </div>
     );
}
 
export default Cards;