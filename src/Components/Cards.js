import React from 'react';
import './Cards.css';

const Cards = (props) => {

    return ( 
        <div className='cards'>
            <h1>{props.titulo}</h1>
            <article>
                <img src={props.imagen} />
            </article>
        </div>
     );
}
 
export default Cards;