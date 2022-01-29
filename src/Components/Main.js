import React from 'react';
import Cards from './Cards';
import './Main.css'
import gif from '../Assets/gif3.png';
import imagen from '../Assets/imagen2.jpg';
import video from '../Assets/video8.png';

const Main = () => {
    return ( 
        <main>
            <Cards titulo="Gifs" imagen={gif} />
            <Cards titulo="Videos" imagen={video} />
            <Cards titulo="Imagenes" imagen={imagen} link="./imagenes"/>
        </main>
     );
}
 
export default Main;