import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return ( 
        <footer>
            <div>
                <a>Alejandro Rios &copy;</a>
            </div>
            <div>
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faGithub} />
            </div>
        </footer>
     );
}
 
export default Footer;