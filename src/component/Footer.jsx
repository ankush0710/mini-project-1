import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Footer = () => {
    return(
        <>
          <footer className='bg-[#4A70A9] text-white flex flex-col items-center gap-3 py-3'>
            <p className='text-md font-semibold'>&copy; 2025 KVA Limited, Inc. All rights reserved</p>
            <ul className='flex justify-center item-center gap-3'>
                <li><FontAwesomeIcon icon={faInstagram} className='text-lg'/></li>
                <li><FontAwesomeIcon icon={faFacebook} className='text-lg'/></li>
                <li><FontAwesomeIcon icon={faTwitter} className='text-lg'/></li>
                <li><FontAwesomeIcon icon={faGithub} className='text-lg'/></li>
            </ul>
          </footer>
        </>
    )
}

export default Footer;
