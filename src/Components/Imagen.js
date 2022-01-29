import React, { useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';


const Imagen = () => {

    const [imagen, setImagen] = useState([]);

    useEffect(() =>{
        obtenerImagenes();
    }, []);

    const obtenerImagenes = async () =>{
        const dataImagenesApi = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        const imagenesApi = await dataImagenesApi.json();
        setImagen(imagenesApi);
    };

    return ( 
        <>
            <Header />

            <section>
            <ul>
                {
                    imagen.map(item =>(
                        <img key={item.id} src={item.url} />
                    ))
                }
            </ul>
            </section>

            <Footer />
        </>
     );
}
 
export default Imagen;
